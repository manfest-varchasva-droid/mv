import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { headliners } from "@/lib/content";
import styles from "../festival-topics.module.css";

export const metadata: Metadata = {
  title: "Concerts & Pro-Nights at IIM Lucknow | Manfest-Varchasva",
  description: "Explore past Manfest-Varchasva concerts, pro-nights and music performances at IIM Lucknow, including Seedhe Maut, Papon, Amit Trivedi and more. Discover the 2027 festival.",
  alternates: { canonical: "/concerts/" },
  openGraph: {
    title: "IIM Lucknow Concerts & Pro-Nights | Manfest-Varchasva",
    description: "Past concert lineups, pro-shows and live music at IIM Lucknow's Manfest-Varchasva festival.",
    url: "/concerts/",
    images: ["/headliners/seedhe-maut-final.jpg"],
  },
};

export default function ConcertsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Concerts and Pro-Nights", href: "/concerts/" }]} />
      <section className={styles.topicHero} data-b1-page-hero>
        <Image className={styles.topicHeroPhoto} src="/headliners/seedhe-maut-final.jpg" alt="" fill sizes="100vw" priority aria-hidden="true" />
        <div className={styles.shell} data-b1-page-content>
          <div className={styles.heroCopy}>
            <div className={styles.kicker} data-b1-eyebrow>Music · Concerts · IIM Lucknow</div>
            <h1>Concerts and pro-nights at Manfest-Varchasva</h1>
            <p>From live bands and solo voices to headlining performances, music has long been part of IIM Lucknow&apos;s annual business, cultural and sports festival.</p>
            <div className={styles.linkRow} data-b1-actions>
              <Link className={styles.primaryLink} href="/events/">Explore festival events</Link>
              <Link className={styles.secondaryLink} href="/gallery/">See festival moments</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.shell}>
          <div className={styles.contentHeader}>
            <span className={styles.smallCaps}>Live music across editions</span>
            <h2>Artists who have shaped the festival nights</h2>
            <p>Manfest-Varchasva brings together competition, campus life and performance. These artists are featured in our <strong>past-edition headliner archive</strong>; the names and years below are not announcements for February 2027.</p>
          </div>
          <div className={styles.grid}>
            {headliners.slice(0, 6).map((artist) => (
              <article className={styles.photoCard} key={artist.name}>
                <div className={styles.photoFrame}>
                  <Image src={artist.image} alt={`Past Manfest-Varchasva headliner ${artist.name}`} fill sizes="(max-width: 620px) 90vw, (max-width: 850px) 45vw, 30vw" />
                </div>
                <div className={styles.photoCardCopy}>
                  <span className={styles.era}>{artist.edition} · Previous edition</span>
                  <h3>{artist.name}</h3>
                  <p>Featured in the festival&apos;s historical headliner line-up.</p>
                </div>
              </article>
            ))}
          </div>
          <p className={styles.note}>Looking for the <strong>Manfest-Varchasva 2027 concert lineup</strong>? The festival runs from <strong>5–7 February 2027 at IIM Lucknow</strong>. Individual concert artists, timings and tickets will be shared through official festival announcements when confirmed.</p>
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.contentSectionAlt}`}>
        <div className={styles.shell}>
          <div className={styles.contentHeader}>
            <span className={styles.smallCaps}>More than a concert</span>
            <h2>Music and cultural competitions</h2>
            <p>Music at Manfest-Varchasva is not limited to pro-nights. The festival has also featured student competitions such as <strong>Sur</strong>, a solo singing format, and <strong>Stairway to Hell</strong>, a battle-of-the-bands format. Their event pages preserve previous-edition details.</p>
          </div>
          <div className={styles.featureGrid}>
            <article className={styles.feature}>
              <h3>Sur — solo singing</h3>
              <p>A stage for individual vocalists. View the competition description and previous-edition material before planning participation.</p>
              <Link href="/events/sur/">Explore Sur →</Link>
            </article>
            <article className={styles.feature}>
              <h3>Stairway to Hell — bands</h3>
              <p>Student bands compete through live performance, energy and musicianship as part of the cultural programme.</p>
              <Link href="/events/stairway-to-hell/">Explore the band competition →</Link>
            </article>
          </div>
          <nav className={styles.nextNav} aria-label="Discover more festival experiences">
            <Link href="/leadership/">Leadership talks at IIM Lucknow →</Link>
            <Link href="/management-competitions/">Management competitions →</Link>
            <Link href="/about/">About Manfest-Varchasva →</Link>
          </nav>
        </div>
      </section>
    </>
  );
}
