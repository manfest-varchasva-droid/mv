"use client";

import {
  Children,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  type WheelEvent as ReactWheelEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export function HorizontalScroller({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const itemCount = Children.count(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(itemCount > 1);

  const updatePosition = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const nextProgress = maxScroll > 0 ? Math.min(1, Math.max(0, el.scrollLeft / maxScroll)) : 0;
    const nextIndex = itemCount > 1 ? Math.round(nextProgress * (itemCount - 1)) : 0;

    setProgress(nextProgress);
    setCurrentIndex(Math.min(itemCount - 1, Math.max(0, nextIndex)));
    setCanPrevious(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < maxScroll - 4);
  }, [itemCount]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    updatePosition();
    const observer = new ResizeObserver(updatePosition);
    observer.observe(el);

    return () => observer.disconnect();
  }, [updatePosition]);

  function scrollToIndex(index: number) {
    const el = ref.current;
    if (!el || itemCount < 2) return;

    const targetIndex = Math.min(itemCount - 1, Math.max(0, index));
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const left = (targetIndex / (itemCount - 1)) * maxScroll;

    el.scrollTo({ left, behavior: "smooth" });
  }

  function move(direction: -1 | 1) {
    scrollToIndex(currentIndex + direction);
  }

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    const el = ref.current;
    if (!el) return;

    drag.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: el.scrollLeft,
    };
    el.setPointerCapture(event.pointerId);
    el.classList.add("is-dragging");
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || !drag.current.active) return;
    el.scrollLeft = drag.current.scrollLeft - (event.clientX - drag.current.startX);
  }

  function endDrag(event: ReactPointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || !drag.current.active) return;

    drag.current.active = false;
    el.classList.remove("is-dragging");

    if (el.hasPointerCapture(event.pointerId)) {
      el.releasePointerCapture(event.pointerId);
    }
  }

  function onWheel(event: ReactWheelEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;

    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    if (Math.abs(event.deltaY) < 1) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const movingRight = event.deltaY > 0;
    const movingLeft = event.deltaY < 0;
    const canMove =
      (movingRight && el.scrollLeft < maxScroll - 1) ||
      (movingLeft && el.scrollLeft > 1);

    if (!canMove) return;

    event.preventDefault();
    el.scrollLeft += event.deltaY;
  }

  function onKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }
  }

  const fillWidth = `${10 + progress * 90}%`;

  return (
    <div
      className={`horizontal-scroller-shell${canPrevious ? " can-previous" : ""}${canNext ? " can-next" : ""}`}
    >
      <div
        ref={ref}
        className={className}
        role="region"
        aria-roledescription="carousel"
        aria-label="Scrollable carousel"
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onWheel={onWheel}
        onKeyDown={onKeyDown}
        onScroll={updatePosition}
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
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.5 6.5 9 12l5.5 5.5" />
            </svg>
          </button>

          <button
            type="button"
            className="carousel-edge-button carousel-edge-button-right"
            aria-label="Next item"
            onClick={() => move(1)}
            disabled={!canNext}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9.5 6.5 5.5 5.5-5.5 5.5" />
            </svg>
          </button>

          <div
            className="carousel-progress-line"
            role="progressbar"
            aria-label="Carousel progress"
            aria-valuemin={1}
            aria-valuemax={itemCount}
            aria-valuenow={currentIndex + 1}
          >
            <span style={{ width: fillWidth }} />
          </div>
        </>
      )}
    </div>
  );
}
