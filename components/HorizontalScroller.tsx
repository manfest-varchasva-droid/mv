"use client";

import {
  Children,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type DragState = {
  pointerId: number | null;
  active: boolean;
  dragging: boolean;
  startX: number;
  startY: number;
  startScroll: number;
  lastX: number;
  lastTime: number;
  velocity: number;
  suppressClick: boolean;
};

const DRAG_THRESHOLD = 8;
const MOMENTUM_MS = 160;

function reducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Read actual child positions instead of assuming equal card widths. */
function snapPoints(el: HTMLDivElement): number[] {
  const max = Math.max(0, el.scrollWidth - el.clientWidth);
  const containerLeft = el.getBoundingClientRect().left;
  return Array.from(el.children, (child) => {
    const left = child.getBoundingClientRect().left - containerLeft + el.scrollLeft;
    return Math.max(0, Math.min(max, left));
  });
}

function nearestIndex(points: number[], left: number) {
  let nearest = 0;
  for (let i = 1; i < points.length; i += 1) {
    if (Math.abs(points[i] - left) <= Math.abs(points[nearest] - left)) nearest = i;
  }
  return nearest;
}

export function HorizontalScroller({
  className,
  children,
  ariaLabel = "Scrollable carousel",
}: {
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef<DragState>({
    pointerId: null,
    active: false,
    dragging: false,
    startX: 0,
    startY: 0,
    startScroll: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    suppressClick: false,
  });
  const positionFrame = useRef(0);
  const itemCount = Children.count(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(itemCount > 1);

  const markInteracted = useCallback(() => {
    ref.current?.closest("section")?.classList.add("mv-carousel-used");
  }, []);

  const updatePosition = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const nextProgress = maxScroll > 0
      ? Math.min(1, Math.max(0, el.scrollLeft / maxScroll))
      : 0;
    const points = snapPoints(el);
    const nextIndex = nearestIndex(points, el.scrollLeft);

    setProgress((current) => Math.abs(current - nextProgress) < 0.001 ? current : nextProgress);
    setCurrentIndex((current) => current === nextIndex ? current : nextIndex);
    setCanPrevious((current) => current === (el.scrollLeft > 3) ? current : el.scrollLeft > 3);
    setCanNext((current) => current === (el.scrollLeft < maxScroll - 3)
      ? current : el.scrollLeft < maxScroll - 3);
  }, []);

  const schedulePositionUpdate = useCallback(() => {
    if (positionFrame.current) return;
    positionFrame.current = requestAnimationFrame(() => {
      positionFrame.current = 0;
      updatePosition();
    });
  }, [updatePosition]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    updatePosition();
    const observer = new ResizeObserver(schedulePositionUpdate);
    observer.observe(el);
    Array.from(el.children).forEach((child) => observer.observe(child));
    return () => {
      observer.disconnect();
      if (positionFrame.current) cancelAnimationFrame(positionFrame.current);
    };
  }, [schedulePositionUpdate, updatePosition, children]);

  const scrollToClosest = useCallback((target: number) => {
    const el = ref.current;
    if (!el) return;
    const points = snapPoints(el);
    if (!points.length) return;
    el.scrollTo({
      left: points[nearestIndex(points, target)],
      behavior: reducedMotion() ? "auto" : "smooth",
    });
  }, []);

  function move(direction: -1 | 1) {
    const el = ref.current;
    if (!el) return;
    markInteracted();
    const points = snapPoints(el);
    // Skip repeated clamped snap positions at the end of a carousel.
    const origin = el.scrollLeft;
    const target = direction > 0
      ? points.find((point) => point > origin + 4)
      : [...points].reverse().find((point) => point < origin - 4);
    if (target !== undefined) scrollToClosest(target);
  }

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const el = ref.current;
    if (!el) return;
    drag.current = {
      pointerId: event.pointerId,
      active: true,
      dragging: false,
      startX: event.clientX,
      startY: event.clientY,
      startScroll: el.scrollLeft,
      lastX: event.clientX,
      lastTime: performance.now(),
      velocity: 0,
      suppressClick: false,
    };
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const el = ref.current;
    const state = drag.current;
    if (!el || !state.active || state.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - state.startX;
    const deltaY = event.clientY - state.startY;
    if (!state.dragging) {
      if (Math.abs(deltaX) < DRAG_THRESHOLD) return;
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        state.active = false;
        return;
      }
      state.dragging = true;
      el.classList.add("is-dragging");
      el.setPointerCapture(event.pointerId);
      markInteracted();
    }

    const now = performance.now();
    const elapsed = Math.max(1, now - state.lastTime);
    const instantaneous = (event.clientX - state.lastX) / elapsed;
    state.velocity = state.velocity * 0.55 + instantaneous * 0.45;
    state.lastX = event.clientX;
    state.lastTime = now;
    el.scrollLeft = state.startScroll - deltaX;
    schedulePositionUpdate();
  }

  function endDrag(event: ReactPointerEvent<HTMLDivElement>) {
    const el = ref.current;
    const state = drag.current;
    if (!el || !state.active || state.pointerId !== event.pointerId) return;
    state.active = false;
    if (!state.dragging) return;

    const projected = el.scrollLeft - state.velocity * MOMENTUM_MS;
    state.suppressClick = true;
    state.dragging = false;
    el.classList.remove("is-dragging");
    if (el.hasPointerCapture(event.pointerId)) el.releasePointerCapture(event.pointerId);
    // Let CSS snap re-enable before starting the smooth settle.
    requestAnimationFrame(() => scrollToClosest(projected));
  }

  function onClickCapture(event: ReactMouseEvent<HTMLDivElement>) {
    if (!drag.current.suppressClick) return;
    drag.current.suppressClick = false;
    event.preventDefault();
    event.stopPropagation();
  }

  function onKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      move(event.key === "ArrowLeft" ? -1 : 1);
    }
  }

  return (
    <div
      className={`horizontal-scroller-shell${canPrevious ? " can-previous" : ""}${canNext ? " can-next" : ""}`}
    >
      <div
        ref={ref}
        className={className}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        onKeyDown={onKeyDown}
        onScroll={schedulePositionUpdate}
      >
        {children}
      </div>

      {itemCount > 1 && (
        <>
          <button
            type="button"
            className="carousel-edge-button carousel-edge-button-left"
            aria-label="Previous item"
            onClick={() => move(-1)}
            disabled={!canPrevious}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 6.5 9 12l5.5 5.5" /></svg>
          </button>
          <button
            type="button"
            className="carousel-edge-button carousel-edge-button-right"
            aria-label="Next item"
            onClick={() => move(1)}
            disabled={!canNext}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 6.5 5.5 5.5-5.5 5.5" /></svg>
          </button>
          <div
            className="carousel-progress-line"
            role="progressbar"
            aria-label="Carousel progress"
            aria-valuemin={1}
            aria-valuemax={itemCount}
            aria-valuenow={Math.min(itemCount, currentIndex + 1)}
          >
            <span style={{ width: "100%", transform: `scaleX(${0.10 + progress * 0.90})` }} />
          </div>
        </>
      )}
    </div>
  );
}
