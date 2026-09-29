"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const PartnerCarousel = dynamic(
  () => import("@/components/PartnerCarousel").then((mod) => mod.PartnerCarousel),
  { ssr: false }
);

export function SitePartnerCarousel() {
  const pathname = usePathname();
  const triggerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const shouldSkip = pathname === "/" || pathname === "/partners";

  useEffect(() => {
    if (shouldSkip) return;

    const target = triggerRef.current;
    if (!target) return;

    const load = () => setReady(true);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          load();
          observer.disconnect();
        }
      },
      { rootMargin: "1000px 0px" }
    );

    observer.observe(target);
    const fallback = window.setTimeout(load, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [shouldSkip]);

  if (shouldSkip) return null;

  return (
    <div ref={triggerRef} className="global-partners-lazy-shell">
      {ready ? <PartnerCarousel /> : null}
    </div>
  );
}
