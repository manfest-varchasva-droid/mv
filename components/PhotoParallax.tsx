"use client";

import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * B6: restrained, transform-only parallax on deliberately selected photos.
 *
 * The B1 hero animation and B2 pinned photography are not selected, avoiding
 * competing transforms. Lenis B5 already notifies ScrollTrigger on scroll.
 * Mobile/touch-sized and reduced-motion viewports retain unchanged imagery.
 */
export function PhotoParallax() {
  const pathname = usePathname();

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add(
      "(min-width: 960px) and (min-height: 600px) and (prefers-reduced-motion: no-preference)",
      () => {
        const photos = gsap.utils.toArray<HTMLElement>("[data-b6-parallax]");

        for (const photo of photos) {
          const mode = photo.dataset.b6Parallax;
          if (mode !== "hero" && mode !== "card" && mode !== "gallery" && mode !== "team") {
            continue;
          }

          const trigger = photo.closest<HTMLElement>("[data-b6-trigger]") ??
            photo.closest<HTMLElement>("section, figure, article") ??
            photo.parentElement;

          if (!trigger) continue;

          const travel = mode === "hero" ? 29 : mode === "team" ? 12 : 9;
          const scale = mode === "hero" ? 1 : mode === "team" ? 1.08 : 1.07;

          gsap.fromTo(
            photo,
            { y: travel, scale, force3D: true },
            {
              y: -travel,
              scale,
              ease: "none",
              overwrite: "auto",
              scrollTrigger: {
                trigger,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.75,
                invalidateOnRefresh: true,
              },
            },
          );
        }

        // B2 adds a pin spacer on the homepage. Refresh after page hydration
        // so the downstream photo triggers are positioned correctly.
        const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => cancelAnimationFrame(frame);
      },
    );

    return () => media.revert();
  }, { dependencies: [pathname], revertOnUpdate: true });

  return null;
}
