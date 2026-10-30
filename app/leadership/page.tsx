import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { leaders } from "@/lib/content";
import styles from "../festival-topics.module.css";

export const metadata: Metadata = {
  title: "Leadership Talks & Leaders Express at IIM Lucknow",
  description: "Discover Leaders Express, the Young Leaders Programme and past speakers at IIM Lucknow's Manfest-Varchasva fest, from Dr. A.P.J. Abdul Kalam to business leaders.",
  alternates: { canonical: "/leadership/" },
  openGraph: {
    title: "IIM Lucknow Leadership Talks | Manfest-Varchasva",
    description: "Leaders Express, ideas, business conversations and distinguished past speakers at IIM Lucknow.",
    url: "/leadership/",
    images: ["/leaders/dy-chandrachud-final.jpg"],
  },
};

export default function LeadershipPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Leadership Talks", href: "/leadership/" }]} />
      <section className={styles.topicHero} data-b1-page-hero>
        <Image className={styles.topicHeroPhoto} src="/leaders/dy-chandrachud-final.jpg" alt="" fill sizes="100vw" priority aria-hidden="true" />
        <div className={styles.shell} data-b1-page-content>
          <div className={styles.heroCopy}>
            <div className={styles.kicker} data-b1-eyebrow>Leaders Express · Business · IIM Lucknow</div>
            <h1>Leadership talks and conversations at IIM Lucknow</h1>
            <p>Manfest-Varchasva connects students with voices from public life, business, entrepreneurship and culture. Discover the people and ideas behind its leadership tradition.</p>
            <div className={styles.linkRow} data-b1-actions>
              <Link className={styles.primaryLink} href="/events/young-leaders-programme/">Young Leaders Programme archive</Link>
              <Link className={styles.secondaryLink} href="/about/">About the fest</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.shell}>
          <div className={styles.contentHeader}>
            <span className={styles.smallCaps}>Leaders Express</span>
            <h2>Conversations beyond the classroom</h2>
            <p>IIM Lucknow&apos;s annual business, cultural and sports fest has welcomed speakers whose work spans leadership, policy, entrepreneurship, science and the arts. Leaders Express gives students a way to encounter different perspectives and connect management education with the world beyond campus.</p>
          </div>
          <div className={styles.grid}>
            {leaders.slice(0, 6).map((person) => (
              <article className={styles.photoCard} key={person.name}>
                <div className={styles.photoFrame}>
                  <Image src={person.image} alt={person.name} fill sizes="(max-width: 620px) 90vw, (max-width: 850px) 45vw, 30vw" />
                </div>
                <div className={styles.photoCardCopy}>
                  <span className={styles.era}>Past featured speaker</span>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
              </article>
            ))}
          </div>
          <p className={styles.note}>These are <strong>past featured speakers</strong>, not a confirmed speaker list for the 5–7 February 2027 edition. Future leadership-session details and timings will be announced through official Manfest-Varchasva channels.</p>
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.contentSectionAlt}`}>
        <div className={styles.shell}>
          <div className={styles.contentHeader}>
            <span className={styles.smallCaps}>Student leadership experience</span>
            <h2>Young Leaders Programme and management conversations</h2>
            <p>Alongside guest talks, the fest&apos;s historical event archive includes the Young Leaders Programme, a format focused on ideas, learning and interaction among aspiring changemakers. Management case competitions, business debates and simulations form another part of the fest&apos;s legacy.</p>
          </div>
          <div className={styles.featureGrid}>
            <article className={styles.feature}>
              <h3>Young Leaders Programme</h3>
              <p>Read about the previous-edition programme format. It is not presented here as an open registration for 2027.</p>
              <Link href="/events/young-leaders-programme/">Read previous-edition details →</Link>
            </article>
            <article className={styles.feature}>
              <h3>Management competitions</h3>
              <p>Explore how case-based problem solving, business knowledge and presentation skills feature in the IIM Lucknow fest experience.</p>
              <Link href="/management-competitions/">Explore management events →</Link>
            </article>
          </div>
          <nav className={styles.nextNav} aria-label="Discover more fest experiences">
            <Link href="/concerts/">Concerts and pro-nights →</Link>
            <Link href="/events/">Browse the event directory →</Link>
            <Link href="/gallery/">Fest photographs →</Link>
          </nav>
        </div>
      </section>
    </>
  );
}
