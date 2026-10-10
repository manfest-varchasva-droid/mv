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
    </section>
  );
}
