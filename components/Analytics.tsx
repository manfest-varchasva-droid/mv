"use client";

import { useEffect } from "react";

export const GA_MEASUREMENT_ID = "G-P37DB2Q0K0";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: Record<string, string | number | boolean> = {}) {
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
      const text = (link.textContent || "").trim().replace(/\\s+/g, " ").slice(0, 100);

      if (/instagram\\.com|youtube\\.com|facebook\\.com/i.test(href)) {
        trackEvent("social_click", { destination: href, link_text: text });
      }
      if (/unstop\\.com|forms\\.google|docs\\.google\\.com\\/forms|register/i.test(href)) {
        trackEvent("registration_click", { destination: href, link_text: text });
      }
      if (/^\\/events(?:\\/|$)/.test(href)) trackEvent("event_page_click", { destination: href });
      if (/^\\/gallery(?:\\/|$)/.test(href)) trackEvent("gallery_visit");
      if (/^\\/city-run(?:\\/|$)/.test(href)) trackEvent("city_run_visit");
      if (/^\\/partners(?:\\/|$)/.test(href)) trackEvent("partners_visit");
      if (text.toLowerCase().includes("explore events")) trackEvent("explore_events_click");
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{anonymize_ip:true});`,
        }}
      />
    </>
  );
}
