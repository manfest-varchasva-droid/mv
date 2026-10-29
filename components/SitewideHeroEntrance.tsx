"use client";

import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/**
 * B1 sitewide: choreograph every public inner-page hero with a shared timeline.
 *
 * Homepage retains its separate B1 V2/CinematicHero effect.
 * Targets only existing hero elements, without changing server-rendered content.
 * No-JS/reduced-motion users see the original static hero immediately.
 */
export function SitewideHeroEntrance() {
  const pathname = usePathname();

  useGSAP(() => {
    if (pathname === "/" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const hero = document.querySelector<HTMLElement>(
      "#main-content > .subhero, #main-content > [data-b1-page-hero]",
    );
    if (!hero) return;

    const content = hero.querySelector<HTMLElement>(
      ".subhero-content, [data-b1-page-content]",
    );
    if (!content) return;

    const title = content.querySelector<HTMLElement>("h1");
    if (!title) return;

    const eyebrow = content.querySelector<HTMLElement>(".eyebrow, [data-b1-eyebrow]");
    const description = content.querySelector<HTMLElement>(
      "p:not([data-b1-eyebrow]):not([aria-hidden='true'])",
    );
    const details = content.querySelectorAll<HTMLElement>(
      "nav, [data-b1-details], [data-b1-actions]",
    );
    const mobile = window.matchMedia("(max-width: 700px)").matches;

    // This class creates a temporary atmosphere wash without moving the
    // section or relying on any server-side JavaScript.
    hero.classList.add("b1-page-hero");

    const intro = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    if (eyebrow) {
      intro.fromTo(eyebrow,
        { autoAlpha: 0, y: mobile ? 17 : 32 },
        { autoAlpha: 1, y: 0, duration: .36, ease: "power3.out" }, .04);
    }

    // A distinct central moment: title rises through a clipping mask while
    // the background washes from deep purple/black to the existing photograph.
    intro.fromTo(title,
      { autoAlpha: 0, y: mobile ? 45 : 72, clipPath: "inset(100% 0% 0% 0%)", scale: 1.035 },
      {
        autoAlpha: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        duration: mobile ? .50 : .56,
        ease: "expo.out",
      }, .18);

    if (description) {
      intro.fromTo(description,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: .42 }, .51);
    }

    if (details.length) {
      intro.fromTo(details,
        { autoAlpha: 0, y: 27 },
        {
          autoAlpha: 1,
          y: 0,
          duration: .42,
          stagger: .06,
          ease: "power3.out",
        }, .67);
    }

    // Let visitors see the page title and actions promptly on every viewport.
    if (mobile) intro.timeScale(1.27);

    // useGSAP automatically reverts all inline animation styles and timelines.
    return () => hero.classList.remove("b1-page-hero");
  }, { dependencies: [pathname], revertOnUpdate: true });

  return null;
}
