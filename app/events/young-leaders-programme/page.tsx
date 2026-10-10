import Link from "next/link";
import { LeadersExpress } from "@/components/HomeSections";
import styles from "../[slug]/campus-ambassador.module.css";

export default function YoungLeadersProgrammePage() {
  return (
    <>
      <section className="subhero event-detail-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">LEADERS EXPRESS • 2025–26 EDITION</div>
          <h1>Young Leaders Program(YLP)</h1>
          <p>
            A three-day leadership programme to learn directly from remarkable leaders and visionary stalwarts across diverse walks of life.
          </p>
        </div>
      </section>

      <section className={styles.caSection}>
        <div className="page-shell">
          <figure className={styles.posterFrame}>
            <img
              src="/events/ylp-banner.png"
              alt="Young Leaders Program YLP poster"
              className={styles.poster}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className={styles.statGrid}>
            <article className={`${styles.statCard} ${styles.prizeCard}`}>
              <div className={styles.statIcon} aria-hidden="true">!</div>
              <div>
                <span>Availability</span>
                <strong>Limited Seats</strong>
                <small>Registrations are subject to availability</small>
              </div>
            </article>

            <article className={styles.statCard}>
              <div className={styles.personIcon} aria-hidden="true">
                <svg viewBox="0 0 48 48">
                  <rect x="9" y="10" width="30" height="29" rx="4" />
                  <path d="M16 6v8M32 6v8M9 19h30M17 27h5M26 27h5M17 33h5" />
                </svg>
              </div>
              <div>
                <span>Format</span>
                <strong>3 Days</strong>
                <small>Leadership workshop and summit</small>
              </div>
            </article>
          </div>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>LEADERSHIP</span>
              <h2>Learn from those who lead</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>A LEADER SHOWS THE WAY</b>
                <p>
                  “A leader is one who knows the way, goes the way, and shows the way.” — John Maxwell
                </p>
              </article>

              <article className={styles.roleCard}>
                <b>THE ESSENCE OF LEADERSHIP</b>
                <p>
                  Leaders inspire and blaze a new trail when things get rough. They give hope through uncertainty, motivate others to dream more, do more and become more, serve by putting people&apos;s needs first, and listen, ideate, innovate and inspire others with their vision.
                </p>
              </article>

              <article className={styles.roleCard}>
                <b>YOUNG LEADERS PROGRAM</b>
                <p>
                  IIM Lucknow&apos;s Manfest-Varchasva brings you the Young Leaders Program, a platform to learn from remarkable leaders and visionary stalwarts of current times. Across three days, participants get the chance to see the world through the lens of influential leaders from different walks of life and interact directly with masters who have helped organisations navigate uncertainty.
                </p>
              </article>

              <article className={styles.roleCard}>
                <b>BEYOND THE WORKSHOP</b>
                <p>
                  Participants receive an e-certificate and become part of an exclusive group of like-minded leaders for continued learning and networking. The platform can also support career guidance and mentorship from graduates and current students of top B-Schools. Participants also receive free access to the pro-shows and cultural events across the three days of Manfest-Varchasva.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>WORKSHOP BRIEF</span>
              <h2>Three days of leadership conversations</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>THE SUMMIT</b>
                <p>
                  A 3-day leadership summit featuring keynote addresses by stalwarts from various fields.
                </p>
              </article>

              <article className={styles.roleCard}>
                <b>ICONS SERIES</b>
                <p>
                  The conclave for this year is the ICONS series: a concatenation of talks through which leaders share their journeys. In the past, audiences have witnessed distinguished personalities including Late Dr. A.P.J. Abdul Kalam and Dr. D. Subbarao narrating their experiences.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>KEY TAKEAWAYS</span>
              <h2>What participants receive</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>01</b>
                <p>Young Leaders e-Certificates will be awarded on completion of the workshop.</p>
              </article>
              <article className={styles.roleCard}>
                <b>02</b>
                <p>Opportunity to interact with visionary leaders from diverse walks of life.</p>
              </article>
              <article className={styles.roleCard}>
                <b>03</b>
                <p>A dedicated social media platform for aspiring leaders to network and share ideas and opportunities.</p>
              </article>
              <article className={styles.roleCard}>
                <b>04</b>
                <p>Free access to experience all pro-shows and cultural events at Manfest-Varchasva.</p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>PARTICIPATION</span>
              <h2>Participation Guidelines</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>ELIGIBILITY</b>
                <p>
                  Students from schools, undergraduate, postgraduate and doctoral institutes, as well as working professionals across India, are eligible to participate.
                </p>
              </article>

              <article className={styles.roleCard}>
                <b>REGISTRATION</b>
                <p>
                  Kindly fill the Google Form for registration — <strong>Register Here</strong>.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <span className={styles.infoEyebrow}>PROGRAMME</span>
              <div className={styles.contactList}>
                <div>
                  <span>DURATION</span>
                  <strong>3-day leadership workshop</strong>
                </div>
                <div>
                  <span>SEATS</span>
                  <strong>Limited Seats</strong>
                </div>
              </div>
            </article>

            <article className={styles.infoCard}>
              <span className={styles.infoEyebrow}>CONTACTS</span>
              <div className={styles.contactList}>
                <a href="tel:+919064998064">
                  <span>SNEHAJIT DEY</span>
                  <strong>(+91) 90649 98064</strong>
                </a>
                <a href="mailto:leadex@iiml-manfestvarchasva.com">
                  <span>EMAIL</span>
                  <strong>leadex@iiml-manfestvarchasva.com</strong>
                </a>
              </div>
            </article>
          </section>

          <div className={styles.bottomLinks}>
            <Link className="btn btn-primary" href="/events">All events</Link>
            <Link className={styles.termsLink} href="/terms-and-conditions">
              Terms &amp; Conditions →
            </Link>
          </div>
        </div>
      </section>

      <LeadersExpress />
    </>
  );
}
