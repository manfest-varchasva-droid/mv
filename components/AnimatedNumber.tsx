"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";

type AnimatedNumberProps = {
  value: string;
  className?: string;
  style?: CSSProperties;
};

function splitValue(value: string) {
  const match = value.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };

  return {
    prefix: match[1],
    number: Number(match[2].replace(/,/g, "")),
    suffix: match[3],
  };
}

export function AnimatedNumber({ value, className, style }: AnimatedNumberProps) {
  const parsed = useMemo(() => splitValue(value), [value]);
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated.current) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animate = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      if (reduceMotion) {
        setDisplay(parsed.number);
        return;
      }

      const duration = 1500;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(parsed.number * eased);

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setDisplay(parsed.number);
        }
      };

      requestAnimationFrame(tick);
    };

    // Start as soon as the number enters the viewport. A very small threshold
    // makes this reliable on both desktop and mobile.
    if (!("IntersectionObserver" in window)) {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(element);

    // Fallback for browsers/webviews where intersection callbacks are delayed.
    const fallback = window.setTimeout(() => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        animate();
        observer.disconnect();
      }
    }, 700);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [parsed.number]);

  const formatted = Number.isInteger(parsed.number)
    ? Math.round(display).toLocaleString("en-IN")
    : display.toFixed(1);

  return (
    <span ref={elementRef} className={`animated-number${className ? ` ${className}` : ""}`} style={style} aria-label={value}>
      {parsed.prefix}
      {formatted}
      {parsed.suffix}
    </span>
  );
}
