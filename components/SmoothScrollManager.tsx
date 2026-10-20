"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/**
 * B5 permanent: automatically enable the proven smooth-scroll experience
 * on all routes for desktop wheel/trackpad input.
 *
 * Native touch scrolling and prefers-reduced-motion are preserved, with
 * graceful native fallback if loading Lenis fails. No visitor-facing toggle.
 *
 * The GSAP ticker drives Lenis and its scroll event updates ScrollTrigger,
 * keeping B2's pinned, scrubbed chapters synchronized.
 */
export function SmoothScrollManager() {
  const pathname = usePathname();
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    // Enable automatically on desktop with precise pointer input.
    // Phones, touch-only tablets and reduced-motion users remain native.
    const device = window.matchMedia(
      "(min-width: 960px) and (hover: hover) and (pointer: fine)",
    );
    const motion = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    );
    const update = () => setSupported(device.matches && motion.matches);
    const firstFrame = window.requestAnimationFrame(update);

    device.addEventListener("change", update);
    motion.addEventListener("change", update);
    return () => {
      window.cancelAnimationFrame(firstFrame);
      device.removeEventListener("change", update);
      motion.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!supported) return;

    let disposed = false;
    let lenis: Lenis | null = null;
    let refreshFrame = 0;
    const ticker = (seconds: number) => lenis?.raf(seconds * 1000);
    const syncScrollTrigger = () => ScrollTrigger.update();

    // Load only where it improves scroll feel, without adding Lenis to the
    // initial bundle for mobile/touch/reduced-motion visitors.
    void import("lenis").then(({ default: LenisConstructor }) => {
      if (disposed) return;

      lenis = new LenisConstructor({
        autoRaf: false,
        lerp: 0.11,
        wheelMultiplier: 1,
        smoothWheel: true,
        syncTouch: false,
        anchors: { offset: -114 },
        stopInertiaOnNavigate: true,
        respectReducedMotion: true,
        // Preserve native controls for carousels and any nested overlays.
        prevent: (node) =>
          Boolean(node.closest(
            ".horizontal-scroller-shell, [data-lenis-prevent], [role='dialog']",
          )),
      });

      lenis.on("scroll", syncScrollTrigger);
      gsap.ticker.add(ticker);
      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    }).catch(() => {
      // A failed optional enhancement must not block normal page scrolling.
    });

    return () => {
      disposed = true;
      if (refreshFrame) cancelAnimationFrame(refreshFrame);
      gsap.ticker.remove(ticker);
      if (lenis) {
        lenis.off("scroll", syncScrollTrigger);
        lenis.destroy();
      }
      ScrollTrigger.refresh();
    };
  }, [supported, pathname]);

  return null;
}
