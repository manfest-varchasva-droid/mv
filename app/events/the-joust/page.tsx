import Link from "next/link";
import styles from "../[slug]/campus-ambassador.module.css";

export default function TheJoustPage() {
  return (
    <>
      <section className="subhero event-detail-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">LITERARY • 2025–26 EDITION</div>
          <h1>The Joust</h1>
          <p>
            The annual debate competition where teams test their arguments, challenge ideas and master the art of persuasive communication.
          </p>
        </div>
      </section>

      <section className={styles.caSection}>
        <div className="page-shell">
          <figure className={styles.posterFrame}>
            <img
              src="/events/joust_mobile (1).jpg"
              alt="The Joust debate competition poster"
              className={styles.poster}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className={styles.statGrid}>
            <article className={`${styles.statCard} ${styles.prizeCard}`}>
              <div className={styles.statIcon} aria-hidden="true">₹</div>
              <div>
                <span>Prize money</span>
                <strong>₹12K / ₹7K</strong>
                <small>First Place • Runners Up</small>
              </div>
            </article>

            <article className={styles.statCard}>
              <div className={styles.personIcon} aria-hidden="true">
                <svg viewBox="0 0 48 48">
                  <circle cx="16" cy="15" r="6" />
                  <circle cx="32" cy="15" r="6" />
                  <path d="M5 40c1.2-8 5-12 11-12s9.8 4 11 12" />
                  <path d="M21 40c1.2-8 5-12 11-12s9.8 4 11 12" />
                </svg>
              </div>
              <div>
                <span>Team size</span>
                <strong>2</strong>
                <small>Two participants per team</small>
              </div>
            </article>
          </div>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>MASTER THE ART OF PERSUASION</span>
              <h2>Make your voice heard</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>FREEDOM THROUGH DEBATE</b>
                <p>
                  “Freedom is hammered out on the anvil of discussion, dissent and debate.” — Hubert H. Humphrey
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>THE POWER OF PERSUASION</b>
                <p>
                  Ever wondered how Shashi Tharoor commands attention at public forums or how parliamentary leaders hold their ground in rooms full of opposition? It&apos;s all about mastering the art of effective communication and persuasive debating.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>THE JOUST</b>
                <p>
                  At Manfest-Varchasva, strong debating skills are a platform for tomorrow&apos;s leaders. Joust is the annual debate competition where participants showcase arguments, challenge ideas and influence the conversations that shape the future.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>YOUR STAGE</b>
                <p>
                  This is your stage to lead, inspire and make your voice heard. Step up, defend your ideas and take on the competition.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>PRIZES</span>
              <h2>Debate. Compete. Win.</h2>
            </div>

            <div className={styles.rankGrid} style={{ gridTemplateColumns: "repeat(2,minmax(0,1fr))" }}>
              <article className={styles.rankCard}>
                <span>First Place</span>
                <strong>₹12K</strong>
                <small>Prizes worth INR 12,000</small>
              </article>
              <article className={styles.rankCard}>
                <span>Runners Up</span>
                <strong>₹7K</strong>
                <small>Prizes worth INR 7,000</small>
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
                <b>01</b>
                <p>Teams of 2 must register online for the preliminary round, out of which 8 teams will proceed to the next round.</p>
              </article>
              <article className={styles.roleCard}>
                <b>02</b>
                <p>Only registered teams will be allowed to participate.</p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>ROUND 01</span>
              <h2>Preliminary Round</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>POSITION PAPER</b>
                <p>
                  Participants have to write and submit a 250–300 word position paper on one of the topics mentioned in the Event Doc.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>EVALUATION</b>
                <p>
                  Teams will be evaluated on their understanding and explanation of the topic, articulation of ideas, and the consistency and strength of the points supplementing their position. Top teams will proceed to the next round.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>SUBMISSION</b>
                <p>
                  Mail the position paper to literary@iiml-manfestvarchasva.com. File naming convention: MV2025-26_The_Joust_Name.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>ROUND 02</span>
              <h2>Quarter Finals</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>IIM LUCKNOW CAMPUS</b>
                <p>This round will be conducted at IIM Lucknow&apos;s campus.</p>
              </article>
              <article className={styles.roleCard}>
                <b>FORMAT</b>
                <p>
                  The shortlisted teams must speak both for and against the motion, with each member taking a different stance for 2.5 minutes each.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>QUALIFICATION</b>
                <p>Following this round, 4 teams will qualify for the semi-finals. Refer to the Event Doc for more details.</p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>ROUNDS 03 &amp; 04</span>
              <h2>Semi Finals and Finals</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>SEMI-FINALS</b>
                <p>
                  This round will be conducted at IIM Lucknow&apos;s campus. Each team gets 6 minutes, with 3 minutes per speaker, to speak on the motion given to them 10 minutes in advance. Teams must speak in alternate order with the first speaker of the proposition going first. Following each team&apos;s speech, the opposing team may present a rebuttal and/or their case. Two teams will qualify for the finals. Refer to the Event Doc for more details.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>FINALS</b>
                <p>
                  Teams will have one speaker who speaks twice and one speaker who speaks once. The motion and stance will be given 15 minutes in advance. Refer to the Event Doc for more details.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <span className={styles.infoEyebrow}>TIMELINE</span>
              <div className={styles.contactList}>
                <div>
                  <span>SUBMISSION &amp; PRELIMINARY ROUND REGISTRATION DEADLINE</span>
                  <strong>26 January 2026</strong>
                </div>
                <div>
                  <span>FINAL ROUND</span>
                  <strong>6–8 February 2026</strong>
                </div>
              </div>
            </article>

            <article className={styles.infoCard}>
              <span className={styles.infoEyebrow}>CONTACTS</span>
              <div className={styles.contactList}>
                <a href="tel:+919958225757">
                  <span>ARNAV GUPTA</span>
                  <strong>(+91) 99582 25757</strong>
                </a>
                <a href="mailto:literary@iiml-manfestvarchasva.com">
                  <span>EMAIL</span>
                  <strong>literary@iiml-manfestvarchasva.com</strong>
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
    </>
  );
}
