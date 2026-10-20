"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function SectionEntrance() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        element.classList.add("is-visible");
        observer.unobserve(element);
      }
    }, { threshold: 0.06, rootMargin: "0px 0px -6% 0px" });
    const targets = document.querySelectorAll<HTMLElement>(".section-title, .subhero-content > h1, .title-row");
    targets.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight * 0.92) {
        element.classList.add("mv-reveal");
        observer.observe(element);
      }
    });
    return () => {
      observer.disconnect();
      targets.forEach((element) => element.classList.remove("mv-reveal", "is-visible"));
    };
  }, [pathname]);
  return null;
}
