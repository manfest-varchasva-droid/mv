"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type AnimatedNumberProps = {
  value: string;
  className?: string;
  style?: React.CSSProperties;
};

function splitValue(value: string) {
  const match = value.match(/^(\\D*)([\\d,]+(?:\\.\\d+)?)(.*)$/);
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
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(parsed.number);
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStarted(true);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [parsed.number]);

  useEffect(() => {
    if (!started) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(parsed.number);
      return;
    }

    const duration = 1100;
    const startTime = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(parsed.number * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, parsed.number]);

  const formatted = Number.isInteger(parsed.number)
    ? Math.round(display).toLocaleString("en-IN")
    : display.toFixed(1);

  return (
    <span ref={ref} className={className} style={style} aria-label={value}>
      {parsed.prefix}{formatted}{parsed.suffix}
    </span>
  );
}
