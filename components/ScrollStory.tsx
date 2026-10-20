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
        // More distance for each story beat, especially the second chapter.
        end: () => "+=" + Math.round(window.innerHeight * 3.7),
        scrub: 0.85,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        pinSpacing: true,
      },
    });

    // Three deliberate holds and two soft crossfades. The middle chapter
    // remains fully visible for ~1.45 timeline units instead of flashing past.
    // Keep the progress indicator in sync with the final animation time (5.65).
    timeline
      .fromTo(progress, { scaleX: 0 }, { scaleX: 1, duration: 5.65, ease: "none" }, 0)
      .to(pictures[0], { scale: 1.06, duration: 2, ease: "none" }, 0)
      .to(panels[0], { autoAlpha: 0, duration: 0.65, ease: "sine.inOut" }, 1.35)
      .fromTo(panels[1], { autoAlpha: 0 }, {
        autoAlpha: 1, duration: 0.65, ease: "sine.inOut",
      }, 1.35)
      .fromTo(pictures[1], { scale: 1.07 }, {
        scale: 1, duration: 2.65, ease: "none",
      }, 1.35)
      .to(panels[1], { autoAlpha: 0, duration: 0.65, ease: "sine.inOut" }, 3.45)
      .fromTo(panels[2], { autoAlpha: 0 }, {
        autoAlpha: 1, duration: 0.65, ease: "sine.inOut",
      }, 3.45)
      .fromTo(pictures[2], { scale: 1.07 }, {
        scale: 1, duration: 2.2, ease: "none",
      }, 3.45);

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
              <h2>THE NIGHTS<br /><span className={styles.titleAccent}>WE REMEMBER.</span></h2>
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
              <h2>IDEAS THAT<br /><span className={styles.titleAccent}>MOVE US.</span></h2>
              <p>A stage for conversations spanning leadership, public life and business.</p>
              <span className={styles.source}>Featuring {leaders[0].name}</span>
            </div>
          </article>

          <article className={[styles.panel, styles.momentsChapter].join(" ")} data-story-panel>
            <div className={styles.picture} data-story-picture>
              <Image
                src="/events/events hero.png"
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
              <h2>BEYOND THE<br /><span className={styles.titleAccent}>SPOTLIGHT.</span></h2>
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
        </div>
      </div>
    </section>
  );
}
