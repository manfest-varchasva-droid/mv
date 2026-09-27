"use client";

import Image from "next/image";
import Link from "next/link";
import type { PointerEvent as ReactPointerEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { partnerLogos } from "@/lib/content";

function getPerPage() {
  if (typeof window === "undefined") return 5;
  if (window.innerWidth <= 560) return 2;
  if (window.innerWidth <= 900) return 3;
  return 5;
}

export function PartnerCarousel() {
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const activePointer = useRef<number | null>(null);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const draggingRef = useRef(false);

  useEffect(() => {
    const update = () => setPerPage(getPerPage());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pages = useMemo(() => {
    const result = [];
    for (let i = 0; i < partnerLogos.length; i += perPage) {
      result.push(partnerLogos.slice(i, i + perPage));
    }
    return result;
  }, [perPage]);

  const scrollToPage = (nextPage: number, behavior: ScrollBehavior = "smooth") => {
    const viewport = viewportRef.current;
    if (!viewport || pages.length === 0) return;

    const normalized = (nextPage + pages.length) % pages.length;
    setPage(normalized);
    viewport.scrollTo({
      left: normalized * viewport.clientWidth,
      behavior,
    });
  };

  useEffect(() => {
    setPage(0);
    requestAnimationFrame(() => {
      viewportRef.current?.scrollTo({ left: 0, behavior: "auto" });
    });
  }, [perPage]);

  useEffect(() => {
    if (hovered || dragging || pages.length <= 1) return;

    const timer = window.setInterval(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      setPage((current) => {
        const next = (current + 1) % pages.length;
        viewport.scrollTo({
          left: next * viewport.clientWidth,
          behavior: "smooth",
        });
        return next;
      });
    }, 5000);

    return () => window.clearInterval(timer);
  }, [hovered, dragging, pages.length]);

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (activePointer.current !== event.pointerId) return;

    const viewport = viewportRef.current;
    draggingRef.current = false;
    activePointer.current = null;
    setDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (!viewport || pages.length <= 1) return;

    const nearest = Math.round(viewport.scrollLeft / Math.max(viewport.clientWidth, 1));
    scrollToPage(Math.min(Math.max(nearest, 0), pages.length - 1));
  };

  return (
    <section className="global-partners" aria-label="Our partners">
      <div className="page-shell">
        <div className="global-partners-heading">
          <div>
            <div className="eyebrow">BACKED BY</div>
            <h2>Our <span>Partners</span></h2>
          </div>
          <div className="global-partners-meta">
            <p>Organisations that supported Manfest-Varchasva in the past edition.</p>
            <Link href="/partners" className="global-partners-link">
              View all partners →
            </Link>
          </div>
        </div>

        <div
          ref={viewportRef}
          className={`global-partners-viewport${dragging ? " is-dragging" : ""}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onScroll={(event) => {
            if (draggingRef.current || pages.length <= 1) return;
            const viewport = event.currentTarget;
            const nearest = Math.round(viewport.scrollLeft / Math.max(viewport.clientWidth, 1));
            if (nearest !== page && nearest >= 0 && nearest < pages.length) {
              setPage(nearest);
            }
          }}
          onPointerDown={(event) => {
            if (pages.length <= 1 || event.button !== 0) return;

            const viewport = viewportRef.current;
            if (!viewport) return;

            event.preventDefault();
            activePointer.current = event.pointerId;
            dragStartX.current = event.clientX;
            dragStartScrollLeft.current = viewport.scrollLeft;
            draggingRef.current = true;
            setDragging(true);
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (!draggingRef.current || activePointer.current !== event.pointerId) return;

            const viewport = viewportRef.current;
            if (!viewport) return;

            event.preventDefault();
            const delta = event.clientX - dragStartX.current;
            viewport.scrollLeft = dragStartScrollLeft.current - delta;
          }}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onLostPointerCapture={() => {
            draggingRef.current = false;
            activePointer.current = null;
            setDragging(false);
          }}
        >
          <div className="global-partners-track">
            {pages.map((group, groupIndex) => (
              <div
                className="global-partners-page"
                key={groupIndex}
                style={{ gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))` }}
              >
                {group.map((partner) => (
                  <div className="global-partner-logo" key={partner.name}>
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={180}
                      height={90}
                      sizes="(max-width: 560px) 45vw, (max-width: 900px) 30vw, 18vw"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {pages.length > 1 && (
          <div className="global-partners-dots" aria-label="Partner carousel pages">
            {pages.map((_, index) => (
              <button
                type="button"
                key={index}
                className={index === page ? "is-active" : ""}
                onClick={() => scrollToPage(index)}
                aria-label={`Show partner logos ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
