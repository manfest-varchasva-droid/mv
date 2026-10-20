"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";
import styles from "./SmoothScrollExperiment.module.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * B5: deliberately opt-in desktop wheel scrolling.
 *
 * Native scrolling is the default so visitors and performance tests are not
 * silently opted into an animation library. Lenis is code-split and loaded
 * only if the visitor selects Smooth. Toggling back destroys the instance.
 *
 * The GSAP ticker drives Lenis and its scroll event updates ScrollTrigger,
 * keeping B2's pinned, scrubbed chapters synchronized.
 */
export function SmoothScrollExperiment() {
  const pathname = usePathname();
  const [supported, setSupported] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const active = supported && enabled;

  useEffect(() => {
    // No touch takeover, low-width scroll hijack, or reduced-motion override.
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
    if (!active) return;

    let disposed = false;
    let lenis: Lenis | null = null;
    let refreshFrame = 0;
    const ticker = (seconds: number) => lenis?.raf(seconds * 1000);
    const syncScrollTrigger = () => ScrollTrigger.update();

    // Keep native scrolling entirely dependency-free until opt-in.
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
        // Horizontal card navigation and nested overlays remain native.
        prevent: (node) =>
          Boolean(node.closest(
            ".horizontal-scroller-shell, [data-lenis-prevent], [role='dialog']",
          )),
      });

      lenis.on("scroll", syncScrollTrigger);
      gsap.ticker.add(ticker);
      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    }).catch(() => {
      // Loading failures must never interfere with normal scrolling.
      if (!disposed) setEnabled(false);
    });

    return () => {
      disposed = true;
      if (refreshFrame) cancelAnimationFrame(refreshFrame);
      gsap.ticker.remove(ticker);
      if (lenis) {
        lenis.off("scroll", syncScrollTrigger);
        lenis.destroy();
      }
      // Restore GSAP's scroll offsets after returning to native scrolling.
      ScrollTrigger.refresh();
    };
  }, [active, pathname]);

  if (!supported) return null;

  return (
    <div className={styles.comparator} role="group" aria-label="Compare native and smooth scrolling">
      <span className={styles.label}>Scroll feel</span>
      <button
        className={styles.choice}
        type="button"
        aria-pressed={!active}
        data-selected={!active}
        onClick={() => setEnabled(false)}
      >
        Native
      </button>
      <button
        className={styles.choice}
        type="button"
        aria-pressed={active}
        data-selected={active}
        onClick={() => setEnabled(true)}
      >
        Smooth
      </button>
    </div>
  );
}
