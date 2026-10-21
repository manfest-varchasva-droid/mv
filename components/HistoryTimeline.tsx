"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HistoryTimeline.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export type HistoryMilestone = {
  year: string;
  title: string;
  copy: string;
};

/**
 * B7: scroll-linked, editorial festival history.
 *
 * The milestone text is passed unchanged from the existing About page.
 * Desktop: a sticky date rail and reversible GSAP-driven reading progress.
 * Mobile / reduced motion / no JS: a simple accessible linear timeline.
 *
 * No pinning or scroll-jacking: this coexists with B5 Lenis and B2's pin.
 */
export function HistoryTimeline({ milestones }: { milestones: HistoryMilestone[] }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const root = scope.current;
    if (!root) return;

    const media = gsap.matchMedia();
    media.add(
      "(min-width: 900px) and (min-height: 600px) and (prefers-reduced-motion: no-preference)",
      () => {
        const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-history-card]"));
        const years = Array.from(root.querySelectorAll<HTMLElement>("[data-history-year]"));
        const fill = root.querySelector<HTMLElement>("[data-history-fill]");
        if (!fill || !cards.length || cards.length !== years.length) return;

        root.classList.add(styles.enhanced);

        const activate = (index: number) => {
          cards.forEach((card, i) => card.classList.toggle(styles.active, i === index));
          years.forEach((year, i) => {
            year.classList.toggle(styles.active, i === index);
            if (i === index) year.setAttribute("aria-current", "step");
            else year.removeAttribute("aria-current");
          });
        };

        activate(0);

        cards.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 62%",
            end: "bottom 42%",
            onEnter: () => activate(index),
            onEnterBack: () => activate(index),
          });
        });

        gsap.fromTo(
          fill,
          { scaleY: 0, transformOrigin: "center top" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top 64%",
              end: "bottom 60%",
              scrub: 0.55,
              invalidateOnRefresh: true,
            },
          },
        );

        return () => {
          root.classList.remove(styles.enhanced);
          cards.forEach((card) => card.classList.remove(styles.active));
          years.forEach((year) => {
            year.classList.remove(styles.active);
            year.removeAttribute("aria-current");
          });
        };
      },
    );

    return () => media.revert();
  }, { scope });

  return (
    <div ref={scope} className={styles.timeline} aria-label="Milestones in the history of Manfest-Varchasva">
      <aside className={styles.rail} aria-hidden="true">
        <div className={styles.railInner}>
          <span className={styles.railKicker}>A LEGACY IN MOTION</span>
          <span className={styles.railHeadline}>THE STORY<br /><em>SO FAR.</em></span>
          <div className={styles.railList}>
            <div className={styles.railTrack}>
              <span className={styles.railFill} data-history-fill />
            </div>
            {milestones.map((milestone, i) => (
              <div className={styles.railYear} data-history-year key={`${milestone.year}-${i}`}>
                <span className={styles.railDot} />
                <span>{milestone.year}</span>
              </div>
            ))}
          </div>
          <span className={styles.railCaption}>Scroll through our evolution</span>
        </div>
      </aside>

      <div className={styles.chapters}>
        {milestones.map((milestone, i) => (
          <article
            className={styles.card}
            data-history-card
            key={`${milestone.year}-${milestone.title}`}
          >
            <div className={styles.cardGlow} aria-hidden="true" />
            <span className={styles.watermark} aria-hidden="true">{milestone.year}</span>
            <div className={styles.cardContent}>
              <div className={styles.yearRow}>
                <span className={styles.yearChip}>{milestone.year}</span>
                <span className={styles.dividerLine} aria-hidden="true" />
                <span className={styles.festivalLabel}>MANFEST — VARCHASVA</span>
              </div>
              <h3>{milestone.title}</h3>
              <p>{milestone.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
