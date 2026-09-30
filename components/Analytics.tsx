"use client";

import Script from "next/script";
import { useEffect } from "react";

export const GA_MEASUREMENT_ID = "G-P37DB2Q0K0";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  name: string,
  params: Record<string, string | number | boolean> = {}
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

export function Analytics() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const text = (link.textContent || "")
        .trim()
        .replace(/\s+/g, " ")
        .slice(0, 100);
      const lowerHref = href.toLowerCase();
      const lowerText = text.toLowerCase();

      if (
        lowerHref.includes("instagram.com") ||
        lowerHref.includes("youtube.com") ||
        lowerHref.includes("facebook.com")
      ) {
        trackEvent("social_click", { destination: href, link_text: text });
      }

      if (
        lowerHref.includes("unstop.com") ||
        lowerHref.includes("forms.google") ||
        lowerHref.includes("docs.google.com/forms") ||
        lowerText.includes("register")
      ) {
        trackEvent("registration_click", {
          destination: href,
          link_text: text,
        });
      }

      if (href.startsWith("/events")) {
        trackEvent("event_page_click", { destination: href });
      }
      if (href.startsWith("/gallery")) trackEvent("gallery_visit");
      if (href.startsWith("/city-run")) trackEvent("city_run_visit");
      if (href.startsWith("/partners")) trackEvent("partners_visit");
      if (lowerText.includes("explore events")) {
        trackEvent("explore_events_click");
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <Script
        id="google-analytics"
        src={"https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-config" strategy="afterInteractive">
        {"window.dataLayer = window.dataLayer || [];" +
          "function gtag(){window.dataLayer.push(arguments);}" +
          "window.gtag = gtag;" +
          "gtag('js', new Date());" +
          "gtag('config', '" +
          GA_MEASUREMENT_ID +
          "', {send_page_view: true, anonymize_ip: true});"}
      </Script>
    </>
  );
}
