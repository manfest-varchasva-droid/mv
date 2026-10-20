"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * A20 reveal observer, extended for B3 masked homepage headings.
 *
 * B3 and A20 share one observer. A masked heading never also receives the
 * old whole-section fade; content stays fully visible before JS loads.
 */
export function SectionEntrance() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        element.classList.add("is-visible");
        observer.unobserve(element);
      }
    }, { threshold: 0.06, rootMargin: "0px 0px -6% 0px" });

    const targets = document.querySelectorAll<HTMLElement>(
      ".section-title, .subhero-content > h1, .title-row",
    );

    targets.forEach((element) => {
      // Gallery titles are nested in a .title-row. Avoid double animation.
      if (element.classList.contains("title-row") &&
          element.querySelector(".b3-section-title")) return;

      // Titles already on screen should stay visible, never flash or jump.
      if (element.getBoundingClientRect().top > window.innerHeight * 0.90) {
        element.classList.add(
          element.classList.contains("b3-section-title")
            ? "b3-armed"
            : "mv-reveal",
        );
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      targets.forEach((element) => {
        element.classList.remove("mv-reveal", "b3-armed", "is-visible");
      });
    };
  }, [pathname]);

  return null;
}
