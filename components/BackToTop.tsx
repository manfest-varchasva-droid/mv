"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        const next =
          scrollable > 0
            ? Math.min(Math.max(window.scrollY / scrollable, 0), 1)
            : 0;

        setProgress(next);
        setVisible(window.scrollY > 520);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`mv-back-to-top${visible ? " is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      style={{ "--mv-top-progress": progress } as CSSProperties}
    >
      <span className="mv-back-to-top-ring" aria-hidden="true" />
      <span className="mv-back-to-top-arrow" aria-hidden="true">↑</span>
      <span className="mv-back-to-top-label">TOP</span>
    </button>
  );
}
