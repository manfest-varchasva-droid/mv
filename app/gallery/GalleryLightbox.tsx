"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./gallery.module.css";

type GalleryLightboxProps = {
  photos: string[];
};

function getAlt(file: string, index: number) {
  return file === "bismil.jpeg"
    ? "Bismil at Manfest-Varchasva"
    : `Manfest-Varchasva gallery moment ${index + 1}`;
}

export function GalleryLightbox({ photos }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const pointerStartX = useRef<number | null>(null);

  const isOpen = activeIndex !== null;

  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current - 1 + photos.length) % photos.length;
    });
  };

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + 1) % photos.length;
    });
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return;

    const delta = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(delta) < 55) return;
    if (delta > 0) showPrevious();
    else showNext();
  };

  return (
    <>
      <div className={`page-shell ${styles.galleryGrid}`}>
        {photos.map((file, index) => (
          <figure className={styles.galleryItem} key={file}>
            <button
              type="button"
              className={styles.galleryButton}
              aria-label={`Open image ${index + 1} of ${photos.length}`}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={`/gallery/${file}`}
                alt={getAlt(file, index)}
                loading={index < 3 ? "eager" : "lazy"}
                fetchPriority={index < 3 ? "high" : "auto"}
                decoding="async"
              />
              <span className={styles.zoomHint} aria-hidden="true">View</span>
            </button>
          </figure>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image ${activeIndex + 1} of ${photos.length}`}
          onClick={() => setActiveIndex(null)}
        >
          <div
            className={styles.lightboxStage}
            onClick={(event) => event.stopPropagation()}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
          >
            <button
              type="button"
              className={styles.lightboxClose}
              aria-label="Close gallery image"
              onClick={() => setActiveIndex(null)}
            >
              ×
            </button>

            <button
              type="button"
              className={`${styles.lightboxArrow} ${styles.lightboxPrevious}`}
              aria-label="Previous image"
              onClick={showPrevious}
            >
              ‹
            </button>

            <img
              className={styles.lightboxImage}
              src={`/gallery/${photos[activeIndex]}`}
              alt={getAlt(photos[activeIndex], activeIndex)}
              draggable={false}
            />

            <button
              type="button"
              className={`${styles.lightboxArrow} ${styles.lightboxNext}`}
              aria-label="Next image"
              onClick={showNext}
            >
              ›
            </button>

            <div className={styles.lightboxFooter}>
              <span>{activeIndex + 1} / {photos.length}</span>
              <span className={styles.lightboxSwipeHint}>Swipe or use arrow keys</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
