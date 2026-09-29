"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import styles from "./home-gallery-marquee.module.css";

const galleryPhotos = [
  "B1.jpg",
  "B2.jpg",
  "B3.jpg",
  "B6.jpg",
  "B7.jpg",
  "B8.jpg",
  "B9.jpg",
  "B10.jpg",
  "B11.jpg",
  "B12.jpg",
  "B13.jpg",
  "B14.jpg",
  "B15.jpg",
  "B16.jpg",
  "B17.jpg",
  "B18.jpg",
  "B19.jpg",
  "bismil.jpeg",
];

const movingPhotos = [...galleryPhotos, ...galleryPhotos];

export function HomeGalleryMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "500px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section section-dark gallery-preview">
      <div className="page-shell">
        <div className="title-row">
          <SectionTitle
            eyebrow="IN PICTURES"
            title="The"
            accent="MV Energy"
            description="Stage lights, conversations, competitions and crowds."
          />
          <Link href="/gallery" className="text-link light-link">
            Open gallery →
          </Link>
        </div>
      </div>

      <div className={styles.viewport} aria-label="Manfest-Varchasva gallery highlights">
        <div className={`${styles.track} ${active ? styles.active : ""}`}>
          {movingPhotos.map((file, index) => (
            <div className={styles.item} key={`${file}-${index}`} aria-hidden={index >= galleryPhotos.length}>
              <Image
                src={`/gallery/${file}`}
                alt={index < galleryPhotos.length ? "Manfest-Varchasva gallery moment" : ""}
                fill
                sizes="(max-width: 700px) 72vw, 360px"
                quality={68}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
