"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      if (frame) return;

      frame = requestAnimationFrame(() => {
        frame = 0;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          scrollable > 0
            ? Math.min(Math.max(window.scrollY / scrollable, 0), 1)
            : 0;

        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${progress})`;
        }
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="mv-scroll-progress"
      aria-hidden="true"
      style={{ transform: "scaleX(0)" }}
    />
  );
}
