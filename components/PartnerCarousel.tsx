"use client";

import Image from "next/image";
import Link from "next/link";
import { partnerLogos } from "@/lib/content";

export function PartnerCarousel() {
  const duration = Math.max(28, partnerLogos.length * 2.4);

  const renderLogos = (duplicate = false) =>
    partnerLogos.map((partner) => (
      <div className="global-partner-logo partner-marquee-item" key={`${duplicate ? "dup-" : ""}${partner.name}`}>
        <Image
          src={partner.image}
          alt={duplicate ? "" : partner.name}
          width={180}
          height={90}
          sizes="(max-width: 560px) 145px, (max-width: 900px) 165px, 190px"
          draggable={false}
        />
      </div>
    ));

  return (
    <section className="global-partners section-identity-partners" aria-label="Our partners">
      <div className="page-shell">
        <div className="global-partners-heading">
          <div className="global-partners-copy">
            <div className="eyebrow">BACKED BY</div>
            <h2>Our <span>Partners</span></h2>
            <p>Organisations that supported Manfest-Varchasva in the past edition.</p>
          </div>
          <Link href="/partners" className="global-partners-link">
            View all partners →
          </Link>
        </div>

        <div
          className="global-partners-viewport partner-marquee-viewport"
          tabIndex={0}
          aria-label="Partner logos. Focus or hover to pause the animation."
        >
          <div
            className="global-partners-track partner-marquee-track"
            style={{ animationDuration: `${duration}s` }}
          >
            <div className="partner-marquee-strip">
              {renderLogos()}
            </div>
            <div className="partner-marquee-strip" aria-hidden="true">
              {renderLogos(true)}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .partner-marquee-viewport {
          overflow: hidden;
          scroll-snap-type: none;
          cursor: default;
          -webkit-mask-image: linear-gradient(to right, transparent 0, #000 3%, #000 97%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0, #000 3%, #000 97%, transparent 100%);
        }

        .partner-marquee-track {
          display: flex;
          width: max-content;
          max-width: none;
          transform: translate3d(0, 0, 0);
          animation-name: partner-marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        .partner-marquee-strip {
          display: flex;
          flex: 0 0 auto;
          align-items: stretch;
          gap: 18px;
          padding-right: 18px;
        }

        :global(.partner-marquee-item) {
          flex: 0 0 clamp(160px, 17vw, 205px);
          width: clamp(160px, 17vw, 205px);
          min-width: 0;
        }

        :global(.partner-marquee-item img) {
          width: 100%;
          height: 90px;
          object-fit: contain;
        }

        @keyframes partner-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .partner-marquee-viewport:hover .partner-marquee-track,
        .partner-marquee-viewport:focus .partner-marquee-track,
        .partner-marquee-viewport:focus-within .partner-marquee-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .partner-marquee-viewport {
            overflow-x: auto;
            -webkit-mask-image: none;
            mask-image: none;
          }

          .partner-marquee-track {
            animation: none;
            will-change: auto;
          }

          .partner-marquee-strip[aria-hidden="true"] {
            display: none;
          }
        }

        @media (max-width: 900px) {
          .partner-marquee-strip {
            gap: 14px;
            padding-right: 14px;
          }

          :global(.partner-marquee-item) {
            flex-basis: 165px;
            width: 165px;
          }
        }

        @media (max-width: 560px) {
          .partner-marquee-strip {
            gap: 12px;
            padding-right: 12px;
          }

          :global(.partner-marquee-item) {
            flex-basis: 145px;
            width: 145px;
          }
        }
      `}</style>
    </section>
  );
}
