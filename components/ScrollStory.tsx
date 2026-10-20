"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { headliners, leaders, stats } from "@/lib/content";
import styles from "./ScrollStory.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * B2 — an immersive three-chapter history of MV.
 *
 * Desktop: one pinned stage, 3 photographic chapters scrubbed by natural page
 * scrolling. Mobile, reduced motion, or no JS: three normal readable cards.
 * This section is deliberately independent of the B1 hero animation.
 */
export function ScrollStory() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => {
    const root = scope.current;
    if (!root) return;
    const media = window.matchMedia(
      "(min-width: 900px) and (min-height: 600px) and (prefers-reduced-motion: no-preference)",
    );
    if (!media.matches) return;

    const stage = root.querySelector<HTMLElement>("[data-story-stage]");
    const panels = Array.from(root.querySelectorAll<HTMLElement>("[data-story-panel]"));
    const pictures = Array.from(root.querySelectorAll<HTMLElement>("[data-story-picture]"));
    const progress = root.querySelector<HTMLElement>("[data-story-progress]");
    if (!stage || panels.length !== 3 || pictures.length !== 3 || !progress) return;

    // If enhancement is unavailable, all chapters remain readable in the
    // server-rendered document. Enter pinned mode only after GSAP initializes.
    root.classList.add(styles.enhanced);
    gsap.set(panels.slice(1), { autoAlpha: 0 });
    gsap.set(pictures, { scale: 1 });

    const timeline = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      scrollTrigger: {
        trigger: root,
        pin: stage,
        start: "top top",
        end: () => "+=" + Math.round(window.innerHeight * 2.2),
        scrub: 0.65,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        pinSpacing: true,
      },
    });

    timeline
      .fromTo(progress, { scaleX: 0 }, { scaleX: 1, duration: 3, ease: "none" }, 0)
      .to(pictures[0], { scale: 1.085, duration: 1.05, ease: "none" }, 0)
      .to(panels[0], { autoAlpha: 0, scale: 0.975, duration: 0.24 }, 0.84)
      .fromTo(panels[1], { autoAlpha: 0, scale: 1.04 }, {
        autoAlpha: 1, scale: 1, duration: 0.32,
      }, 0.93)
      .to(pictures[1], { scale: 1.08, duration: 1.1, ease: "none" }, 0.98)
      .to(panels[1], { autoAlpha: 0, scale: 0.975, duration: 0.24 }, 1.82)
      .fromTo(panels[2], { autoAlpha: 0, scale: 1.04 }, {
        autoAlpha: 1, scale: 1, duration: 0.32,
      }, 1.91)
      .to(pictures[2], { scale: 1.07, duration: 1.06, ease: "none" }, 1.94);

    // The useGSAP context automatically reverts the GSAP timeline & pin.
    return () => root.classList.remove(styles.enhanced);
  }, { scope });

  const participants = stats.find((entry) => entry.label === "Participants")?.value ?? "30,000+";
  const events = stats.find((entry) => entry.label === "Events")?.value ?? "70+";

  return (
    <section ref={scope} className={styles.story} aria-label="The Manfest-Varchasva story in three chapters">
      <div className={styles.stage} data-story-stage>
        <div className={styles.stageTop} aria-hidden="true">
          <span>MANFEST — VARCHASVA</span>
          <span>ONE FEST. MANY WORLDS.</span>
        </div>

        <div className={styles.panels}>
          <article className={[styles.panel, styles.stageChapter].join(" ")} data-story-panel>
            <div className={styles.picture} data-story-picture>
              <Image
                src={headliners[0].image}
                alt=""
                fill
                sizes="100vw"
                quality={73}
                loading="lazy"
                className={styles.pictureImage}
              />
            </div>
            <div className={styles.shade} />
            <div className={styles.copy}>
              <span className={styles.chapter}>01 / THE STAGE</span>
              <h2>THE NIGHTS<br />WE REMEMBER.</h2>
              <p>Music, momentum and unforgettable performances across editions.</p>
              <span className={styles.source}>Featuring {headliners[0].name} · {headliners[0].edition}</span>
            </div>
          </article>

          <article className={[styles.panel, styles.ideasChapter].join(" ")} data-story-panel>
            <div className={styles.picture} data-story-picture>
              <Image
                src={leaders[0].image}
                alt=""
                fill
                sizes="100vw"
                quality={73}
                loading="lazy"
                className={styles.pictureImage}
              />
            </div>
            <div className={styles.shade} />
            <div className={styles.copy}>
              <span className={styles.chapter}>02 / LEADERS EXPRESS</span>
              <h2>IDEAS THAT<br />MOVE US.</h2>
              <p>A stage for conversations spanning leadership, public life and business.</p>
              <span className={styles.source}>Featuring {leaders[0].name}</span>
            </div>
          </article>

          <article className={[styles.panel, styles.momentsChapter].join(" ")} data-story-panel>
            <div className={styles.picture} data-story-picture>
              <Image
                src="/gallery/B1.jpg"
                alt=""
                fill
                sizes="100vw"
                quality={73}
                loading="lazy"
                className={styles.pictureImage}
              />
            </div>
            <div className={styles.shade} />
            <div className={styles.copy}>
              <span className={styles.chapter}>03 / THE EXPERIENCE</span>
              <h2>BEYOND THE<br />SPOTLIGHT.</h2>
              <p>{participants} participants. {events} events. An experience that reaches far beyond the stage.</p>
              <span className={styles.source}>Manfest-Varchasva 2025–26 · Historical highlights</span>
              <Link className={styles.galleryLink} href="/gallery">
                Relive the moments <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        </div>

        <div className={styles.stageBottom} aria-hidden="true">
          <span>SCROLL TO EXPERIENCE</span>
          <div className={styles.track}>
            <span className={styles.trackFill} data-story-progress />
          </div>
          <span>01 — 03</span>
        </div>
      </div>
    </section>
  );
}
