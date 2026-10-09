"use client";

import { usePathname } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";
import { trackEvent } from "@/components/Analytics";

function rating(name: string, value: number) {
  const thresholds: Record<string, [number, number]> = {
    LCP: [2500, 4000],
    INP: [200, 500],
    CLS: [0.1, 0.25],
    FCP: [1800, 3000],
    TTFB: [800, 1800],
  };

  const range = thresholds[name];
  if (!range) return "unknown";
  if (value <= range[0]) return "good";
  if (value <= range[1]) return "needs_improvement";
  return "poor";
}

export function WebVitals() {
  const pathname = usePathname();

  useReportWebVitals((metric) => {
    trackEvent("web_vital", {
      metric_name: metric.name,
      metric_value: metric.value,
      metric_id: metric.id,
      metric_rating: rating(metric.name, metric.value),
      page_path: pathname,
    });
  });

  return null;
}
