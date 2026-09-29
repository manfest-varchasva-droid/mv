import Image from "next/image";
import Link from "next/link";
import {
  galleryImages,
  headliners,
  leaders,
  partnerLogos,
  site,
  stats,
} from "@/lib/content";
import { SectionTitle } from "@/components/SectionTitle";
import { Countdown } from "@/components/Countdown";
import { HorizontalScroller } from "@/components/HorizontalScroller";

export function Hero() {
  return (
    <section className="hero">
      <Image
        src={site.heroImage}
        alt=""
        fill
        sizes="100vw"
        quality={75}
        preload
        aria-hidden="true"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="hero-scrim" />
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="hero-content page-shell">
        <Image className="hero-logo" src="/mv-logo.svg" alt="Manfest Varchasva" width={92} height={92} priority />
        <div className="hero-kicker">
          <span className="hero-kicker-main">IIM LUCKNOW’S</span>
          <small>ANNUAL BUSINESS, CULTURAL AND SPORTS FEST</small>
        </div>
        <h1>
          MANFEST-<span>VARCHASVA</span>
        </h1>
        <div className="hero-year">{site.edition}</div>

        <div className="hero-info hero-info-date">
          <span>{site.dates}</span>
        </div>

        <Countdown />

        <p>{site.tagline}</p>

        <div className="hero-actions">
          <Link className="btn btn-primary" href="/events">
            Explore events <span>→</span>
          </Link>
          <Link className="btn btn-ghost" href="/gallery">
            View gallery
          </Link>
          <a className="scroll-cue scroll-cue-inline" href="#headliners" aria-label="Scroll to content">
            <span />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Headliners() {
  return (
    <section id="headliners" className="section section-dark">
      <div className="page-shell">
        <SectionTitle
          eyebrow="THE STAGE"
          title="Past"
          accent="Headliners"
          description="Artists who turned Manfest-Varchasva nights into memories."
        />

        <div className="headliner-scroll-meta" aria-hidden="true">
          <span>Explore the years</span>
          <b>→</b>
        </div>

        <HorizontalScroller className="headliner-grid">
          {headliners.map((artist, index) => (
            <article className="headliner-card" key={artist.name}>
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                sizes="(max-width: 700px) 78vw, 350px"
                quality={75}
                className={`headliner-photo${index < 3 || artist.name === "Javed Ali" || artist.name === "Vishal & Shekhar" || artist.name === "Jubin Nautiyal" ? " final-crop" : ""}`}
              />
              <div className="card-gradient" />
              <div className="headliner-copy">
                <span>{artist.edition}</span>
                <h3>{artist.name}</h3>
              </div>
            </article>
          ))}
        </HorizontalScroller>
      </div>
    </section>
  );
}

export function LeadersExpress() {
  return (
    <section className="section section-ink">
      <div className="page-shell">
        <SectionTitle
          eyebrow="IDEAS ON STAGE"
          title="Leaders"
          accent="Express"
          description="Conversations with leaders across public life, business and entrepreneurship."
        />

        <div className="leaders-scroll-meta" aria-hidden="true">
          <span>Drag to explore</span>
          <b>→</b>
        </div>

        <HorizontalScroller className="leaders-grid">
          {leaders.map((speaker) => (
            <article className="speaker-card" key={speaker.name}>
              <div className={`speaker-image${speaker.name === "Justice D.Y. Chandrachud" || speaker.name === "Kapil Dev" || speaker.name === "Ashish Vidyarthi" ? " speaker-image-final" : ""}${speaker.name === "Dr. A.P.J. Abdul Kalam" ? " speaker-image-apj" : ""}`}>
                {speaker.name === "Ashish Vidyarthi" ? (
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    sizes="(max-width: 800px) 42vw, 18vw"
                  />
                )}
              </div>
              <div className="speaker-copy">
                <h3>{speaker.name}</h3>
                <p>{speaker.role}</p>
              </div>
            </article>
          ))}
        </HorizontalScroller>
      </div>
    </section>
  );
}

export function OverTheYears() {
  return (
    <section className="section years-section">
      <div className="page-shell">
        <SectionTitle
          eyebrow="THE EXPERIENCE"
          title="Manfest-Varchasva"
          accent="Over the Years"
          description="A look back at the moments, memories and milestones that have defined Manfest-Varchasva."
        />

        <HorizontalScroller className="years-video-scroll">
          <VideoCard id="l6qw-fCkYRM" title="Manfest Varchasva 2025-26" />
          <VideoCard id="OspT5n1DuOo" title="Manfest Varchasva 2024-25" />
          <VideoCard id="fg6NTY-Ut5Q" title="Manfest Varchasva 2023-24" />
          <VideoCard id="lU2GkpkDXyk" title="Manfest Varchasva 2022-23" />
          <VideoCard id="U7qQTRWIDfY" title="Manfest Varchasva 2021-22" />
        </HorizontalScroller>

        <div className="years-scroll-meta" aria-hidden="true">
          <span className="years-scroll-dots">
            <i className="is-active" />
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>Drag to explore</span>
          <b>→</b>
        </div>
      </div>
    </section>
  );
}

function VideoCard({ id, title }: { id: string; title: string }) {
  const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  const thumbnail = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const srcDoc = `
    <style>
      *{padding:0;margin:0;overflow:hidden;box-sizing:border-box}
      html,body{height:100%;background:#080910}
      img{position:absolute;width:100%;height:100%;inset:0;object-fit:cover}
      a{position:absolute;inset:0;display:grid;place-items:center;text-decoration:none}
      span{width:64px;height:64px;border-radius:50%;display:grid;place-items:center;padding-left:4px;background:rgba(0,0,0,.72);color:#fff;font:700 28px Arial,sans-serif;box-shadow:0 10px 34px rgba(0,0,0,.35)}
    </style>
    <a href="${embedUrl}" aria-label="Play ${title}">
      <img src="${thumbnail}" alt="">
      <span>▶</span>
    </a>`;

  return (
    <article className="video-card">
      <div className="video-frame">
        <iframe
          src={embedUrl}
          srcDoc={srcDoc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="video-meta">
        <strong>{title}</strong>
      </div>
    </article>
  );
}

export function Highlights() {
  const accents = [
    { color: "#8f8cff", glow: "rgba(111, 94, 255, 0.22)" },
    { color: "#ff79c8", glow: "rgba(255, 78, 181, 0.22)" },
    { color: "#77b7ff", glow: "rgba(65, 136, 255, 0.22)" },
    { color: "#ef7dff", glow: "rgba(216, 84, 255, 0.22)" },
  ];

  return (
    <section
      className="section stats-section"
      style={{
        background:
          "radial-gradient(circle at 12% 18%, rgba(83,94,255,.14), transparent 26%), radial-gradient(circle at 84% 22%, rgba(244,82,186,.13), transparent 27%), linear-gradient(180deg, #0b0c18, #080911)",
      }}
    >
      <div className="page-shell">
        <SectionTitle
          eyebrow="BY THE NUMBERS"
          title="Manfest-Varchasva"
          accent="2025–26"
          align="center"
        />

        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
            marginTop: 10,
          }}
        >
          {stats.map((item, index) => {
            const accent = accents[index % accents.length];
            return (
              <div
                className="stat-card"
                key={item.label}
                style={{
                  position: "relative",
                  minHeight: 260,
                  padding: "28px 22px 26px",
                  borderRadius: 26,
                  border: `1px solid ${accent.color}66`,
                  background:
                    "linear-gradient(160deg, rgba(24,24,48,.94), rgba(10,11,25,.97))",
                  boxShadow: `inset 0 1px 0 rgba(255,255,255,.05), 0 18px 50px rgba(0,0,0,.30), 0 0 34px ${accent.glow}`,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    width: 190,
                    height: 190,
                    borderRadius: "50%",
                    background: accent.glow,
                    filter: "blur(42px)",
                    top: -78,
                    right: -58,
                  }}
                />

                <div
                  aria-hidden="true"
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    marginBottom: 21,
                    border: `1px solid ${accent.color}55`,
                    background: "rgba(255,255,255,.025)",
                    boxShadow: `0 0 22px ${accent.glow}, inset 0 1px 0 rgba(255,255,255,.05)`,
                    color: accent.color,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {index === 0 && (
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m3 9 9-5 9 5-9 5-9-5Z" />
                      <path d="M7 12v4l5 3 5-3v-4" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 4h8v3c0 4-1.8 7-4 7s-4-3-4-7V4Z" />
                      <path d="M8 7H5v2c0 2 1.3 3.5 3.2 3.8M16 7h3v2c0 2-1.3 3.5-3.2 3.8M12 14v4M9 20h6" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M8 3v4M16 3v4M3 10h18M7 14h2M11 14h2M15 14h2M7 18h2M11 18h2" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="8" r="3" />
                      <circle cx="17" cy="9" r="2.3" />
                      <path d="M3.5 19c.3-3.2 2.2-5 5.5-5s5.2 1.8 5.5 5M14 15c3.2-.8 5.8.5 6.5 3.5" />
                    </svg>
                  )}
                </div>

                <strong
                  style={{
                    display: "block",
                    fontSize: "clamp(42px, 4.4vw, 62px)",
                    lineHeight: 1,
                    letterSpacing: "-2px",
                    background: `linear-gradient(135deg, #fff 0%, ${accent.color} 78%)`,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    textShadow: `0 0 28px ${accent.glow}`,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {item.value}
                </strong>

                <span
                  style={{
                    marginTop: 14,
                    color: "rgba(244,241,255,.78)",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "2.6px",
                    textTransform: "uppercase",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PartnersPreview() {
  return (
    <section className="section section-dark">
      <div className="page-shell">
        <div className="title-row">
          <SectionTitle
            eyebrow="BACKED BY"
            title="Our"
            accent="Partners"
            description="Organisations that supported Manfest-Varchasva in the past edition."
          />
          <Link href="/partners" className="text-link light-link">
            View all partners →
          </Link>
        </div>

        <div className="logo-grid">
          {partnerLogos.slice(0, 10).map((partner) => (
            <div className="logo-card" key={partner.name}>
              <Image
                src={partner.image}
                alt={partner.name}
                width={180}
                height={90}
                sizes="180px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GalleryPreview() {
  return (
    <section className="section section-dark gallery-preview">
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

        <div className="gallery-strip">
          {galleryImages.slice(0, 6).map((item, index) => (
            <div className={`gallery-tile tile-${(index % 3) + 1}`} key={`${item.src}-${index}`}>
              <Image src={item.src} alt={item.alt} fill sizes="33vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
