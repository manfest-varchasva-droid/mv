export const GA_MEASUREMENT_ID = "G-P37DB2Q0K0";

export function trackEvent(name: string, params: Record<string, string | number | boolean> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}
