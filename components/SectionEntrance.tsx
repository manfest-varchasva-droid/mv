"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Shared A20/B3 reveal observer across every public page.
 *
 * - SectionTitle uses the two-beat masked-word B3 reveal.
 * - Other standalone h2 headings get one restrained upward clip reveal.
 * - Hero h1 titles have a CSS-only entrance; the B1 hero is unchanged.
 * - B2's pinned stage is excluded to avoid fighting ScrollTrigger.
 *
 * No JS, reduced-motion or initially visible below-the-fold content remains
 * readable; no DOM rewriting or changes to heading semantics.
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

    // A fully clipped heading does not reliably intersect. Observe its
    // unclipped parent, but reveal the heading itself when that parent enters.
    const revealTargets = new Map<Element, HTMLElement[]>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        revealTargets.get(entry.target)?.forEach((element) => {
          element.classList.add("is-visible");
        });
        observer.unobserve(entry.target);
        revealTargets.delete(entry.target);
      }
    }, { threshold: 0.06, rootMargin: "0px 0px -6% 0px" });

    const targets = document.querySelectorAll<HTMLElement>(
      ".section-title, .title-row, main h2",
    );

    targets.forEach((element) => {
      // SectionTitle animates as a unit. Never animate its h2 a second time.
      if (element.matches("h2") &&
          element.closest(".section-title, [data-story-stage]")) return;

      // The lazy partner marquee can skip intersection updates; keep its h2
      // permanently visible instead of arming a potentially stuck clip reveal.
      if (element.matches("h2") && element.closest(".global-partners-heading")) return;

      // Gallery has a title-row wrapping a SectionTitle: animate only the latter.
      if (element.classList.contains("title-row") &&
          element.querySelector(".b3-section-title")) return;

      // Do not touch content already onscreen when React hydrates.
      if (element.getBoundingClientRect().top <= window.innerHeight * 0.90) return;

      if (element.classList.contains("b3-section-title")) {
        element.classList.add("b3-armed");
      } else if (element.matches("h2")) {
        element.classList.add("b3-plain-heading", "b3-armed");
      } else {
        // Retain A20 for unmasked headings/rows elsewhere in the site.
        element.classList.add("mv-reveal");
      }
      const observationTarget = element.matches("h2")
        ? element.parentElement ?? element
        : element;
      const headingGroup = revealTargets.get(observationTarget) ?? [];
      headingGroup.push(element);
      revealTargets.set(observationTarget, headingGroup);
      observer.observe(observationTarget);
    });

    return () => {
      observer.disconnect();
      targets.forEach((element) => {
        element.classList.remove(
          "mv-reveal", "b3-plain-heading", "b3-armed", "is-visible",
        );
      });
    };
  }, [pathname]);

  return null;
}
