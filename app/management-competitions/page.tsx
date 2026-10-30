import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import styles from "../festival-topics.module.css";

const previousEditionOnUnstop =
  "https://unstop.com/college-fests/manfest-varchasva-2025-26-indian-institute-of-management-iim-lucknow-430632";

export const metadata: Metadata = {
  title: "Management Competitions at IIM Lucknow",
  description: "Explore the history of Manfest management events at IIM Lucknow: business case competitions, quizzes, simulations and leadership challenges at Manfest-Varchasva.",
  alternates: { canonical: "/management-competitions/" },
  openGraph: {
    title: "Management Competitions at IIM Lucknow | Manfest-Varchasva",
    description: "Case studies, management challenges and business competitions at IIM Lucknow's annual Manfest-Varchasva fest.",
    url: "/management-competitions/",
    images: ["/events/events hero.png"],
  },
};

export default function ManagementCompetitionsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Management Competitions", href: "/management-competitions/" }]} />
      <section className={styles.topicHero} data-b1-page-hero>
        <Image className={styles.topicHeroPhoto} src="/events/events hero.png" alt="" fill sizes="100vw" priority aria-hidden="true" />
        <div className={styles.shell} data-b1-page-content>
          <div className={styles.heroCopy}>
            <div className={styles.kicker} data-b1-eyebrow>Management · Business fest · IIM Lucknow</div>
            <h1>Management competitions at Manfest-Varchasva</h1>
            <p>Built on IIM Lucknow&apos;s Manfest legacy, the fest brings together students interested in business strategy, analytical thinking, case solving and leadership.</p>
            <div className={styles.linkRow} data-b1-actions>
              <Link className={styles.primaryLink} href="/events/">See all fest events</Link>
              <Link className={styles.secondaryLink} href="/about/">The Manfest story</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.shell}>
          <div className={styles.contentHeader}>
            <span className={styles.smallCaps}>The business side of the fest</span>
            <h2>From business cases to competitive thinking</h2>
            <p>Manfest began as IIM Lucknow&apos;s management fest in 1988. It later came together with Varchasva, the cultural and sports fest, to form Manfest-Varchasva. The management programme has historically connected students across institutions through competitions and business discussions.</p>
            <p>Past editions have included case competitions, management quizzes and simulations that test analysis, creativity, strategic reasoning and presentation skills. The descriptions below explain the types of activities associated with the fest&apos;s history; they are <strong>not a confirmed 2027 event list</strong>.</p>
          </div>
          <div className={styles.featureGrid}>
            <article className={styles.feature}>
              <h3>Business case competitions</h3>
              <p>Student teams analyse a business problem, compare possible strategies and present recommendations. Past Manfest editions have featured company-led case challenges.</p>
            </article>
            <article className={styles.feature}>
              <h3>Quizzes and business knowledge</h3>
              <p>Management quiz formats combine knowledge of markets, companies, industries and business affairs with quick thinking and teamwork.</p>
            </article>
            <article className={styles.feature}>
              <h3>Simulations and decision-making</h3>
              <p>Business simulations create environments where participants make choices, manage trade-offs and evaluate competing outcomes.</p>
            </article>
            <article className={styles.feature}>
              <h3>Leadership and industry interaction</h3>
              <p>The fest also connects business learning with guest sessions, real-world perspectives and student leadership experiences.</p>
              <Link href="/leadership/">Discover Leaders Express →</Link>
            </article>
          </div>
          <p className={styles.note}>The next Manfest-Varchasva edition is scheduled for <strong>5–7 February 2027 at IIM Lucknow</strong>. Specific management-event names, eligibility, deadlines and registration links should be checked against the official 2027 announcement when released.</p>
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.contentSectionAlt}`}>
        <div className={styles.shell}>
          <div className={styles.contentHeader}>
            <span className={styles.smallCaps}>Explore previous editions</span>
            <h2>Past management events and fest context</h2>
            <p>To understand the competitions and participation formats from earlier editions, use the historical event listing. The linked 2025–26 Unstop page is preserved for reference and must not be treated as an open 2027 registration page.</p>
          </div>
          <div className={styles.linkRow}>
            <a href={previousEditionOnUnstop} className={styles.secondaryLink} target="_blank" rel="noopener noreferrer">View 2025–26 Unstop archive</a>
            <Link className={styles.primaryLink} href="/events/">Browse event categories</Link>
          </div>
          <nav className={styles.nextNav} aria-label="Discover more fest experiences">
            <Link href="/leadership/">Leadership talks and speakers →</Link>
            <Link href="/concerts/">Concerts at IIM Lucknow →</Link>
            <Link href="/city-run/">Lucknow City Run →</Link>
          </nav>
        </div>
      </section>
    </>
  );
}
