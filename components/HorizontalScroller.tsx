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
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(itemCount > 1);

  const updatePosition = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const progress = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
    const nextIndex = itemCount > 1 ? Math.round(progress * (itemCount - 1)) : 0;

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

  return (
    <div className="horizontal-scroller-shell">
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
        <div className="carousel-controls" aria-label="Carousel controls">
          <div
            className="carousel-progress"
            role="status"
            aria-live="polite"
            aria-label={`Item ${currentIndex + 1} of ${itemCount}`}
          >
            {Array.from({ length: itemCount }).map((_, index) => (
              <button
                type="button"
                className={`carousel-dot${index === currentIndex ? " is-active" : ""}`}
                aria-label={`Go to item ${index + 1}`}
                aria-current={index === currentIndex ? "true" : undefined}
                onClick={() => scrollToIndex(index)}
                key={index}
              />
            ))}
          </div>

          <div className="carousel-arrows">
            <button
              type="button"
              className="carousel-arrow"
              aria-label="Previous item"
              onClick={() => move(-1)}
              disabled={!canPrevious}
            >
              ←
            </button>
            <span className="carousel-counter" aria-hidden="true">
              {currentIndex + 1} / {itemCount}
            </span>
            <button
              type="button"
              className="carousel-arrow"
              aria-label="Next item"
              onClick={() => move(1)}
              disabled={!canNext}
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
