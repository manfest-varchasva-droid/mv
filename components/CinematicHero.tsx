"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type CinematicHeroProps = {
  children: ReactNode;
  className: string;
};

/**
 * B1 V2: One deliberately choreographed, ~2.6s home-hero reveal.
 * Scoped and automatically reverted by useGSAP when the route unmounts.
 * Server-rendered HTML stays fully readable without JavaScript.
 */
export function CinematicHero({ children, className }: CinematicHeroProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const element = scope.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const hero = element.querySelector<HTMLElement>(".hero");
    if (!hero) return;

    const mobile = window.matchMedia("(max-width: 700px)").matches;
    const timeline = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // Act I: darkness lifts, creating a camera-like approach to the stage.
    timeline
      .fromTo(".hero > img", {
        scale: mobile ? 1.07 : 1.12,
        transformOrigin: "50% 45%",
      }, {
        scale: 1,
        duration: 2.5,
        ease: "power2.out",
      }, 0)
      .fromTo(".hero-cinematic-wash", {
        opacity: 0.96,
      }, {
        opacity: 0,
        duration: 2.2,
        ease: "power2.inOut",
      }, 0)
      // Act II: identity appears; headline is revealed word by word from its mask.
      .fromTo(".hero-logo", {
        autoAlpha: 0,
        y: 45,
        scale: 0.74,
        rotation: -5,
      }, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.78,
        ease: "back.out(1.35)",
      }, 0.16)
      .fromTo(".hero-kicker", {
        autoAlpha: 0,
        y: 25,
      }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.56,
      }, 0.39)
      .fromTo(".hero-word-first", {
        autoAlpha: 0,
        yPercent: 125,
      }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.82,
        ease: "power4.out",
      }, 0.68)
      .fromTo(".hero-word-second", {
        autoAlpha: 0,
        yPercent: 140,
      }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.88,
        ease: "power4.out",
      }, 0.91)
      // Act III: the edition takes centre stage.
      .fromTo(".hero-year", {
        autoAlpha: 0,
        y: mobile ? 44 : 74,
        scale: 1.18,
      }, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.91,
        ease: "power4.out",
      }, 1.22)
      .fromTo(".hero-info-date", {
        autoAlpha: 0,
        y: 27,
      }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.61,
      }, 1.54)
      .fromTo(".countdown-wrap", {
        autoAlpha: 0,
        y: 29,
      }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.65,
      }, 1.69)
      .fromTo(".hero-content > p", {
        autoAlpha: 0,
        y: 23,
      }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.55,
      }, 1.85)
      .fromTo(".hero-actions", {
        autoAlpha: 0,
        y: 39,
        scale: 0.96,
      }, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.61,
        ease: "power3.out",
      }, 2.03);

    // Shorter mobile introduction; each beat keeps the same visual hierarchy.
    if (mobile) timeline.timeScale(1.28);
  }, { scope });

  return <div ref={scope} className={className}>{children}</div>;
}
