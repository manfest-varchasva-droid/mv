import Link from "next/link";
import styles from "../[slug]/campus-ambassador.module.css";

export default function StairwayToHellPage() {
  return (
    <>
      <section className="subhero event-detail-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">MUSIC • 2025–26 EDITION</div>
          <h1>Stairway to Hell</h1>
          <p>
            The flagship band competition where live music, stage energy and unforgettable performances come together at Manfest-Varchasva.
          </p>
        </div>
      </section>

      <section className={styles.caSection}>
        <div className="page-shell">
          <figure className={styles.posterFrame}>
            <img
              src="/events/stairway_to_hell_700400.jpg"
              alt="Stairway to Hell band competition poster"
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
                <strong>₹20K / ₹13K</strong>
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
                <strong>3 to 7 + 1</strong>
                <small>Band members + 1 helper</small>
              </div>
            </article>
          </div>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>FEEL THE RHYTHM, OWN THE NIGHT</span>
              <h2>Let your music ignite the stage</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>LIVE ENERGY</b>
                <p>
                  Nothing electrifies a crowd like a rock band in full swing, drums pounding, guitars wailing, piano keys soaring, and vocals hitting every note just right. It&apos;s these unforgettable performances that leave a mark and create magic that lingers forever.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>STAIRWAY TO HELL</b>
                <p>
                  Now, it&apos;s your turn to take the stage at Stairway to Hell, the epic band competition by Manfest-Varchasva. Let your music ignite the night and echo as the sound of tomorrow.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>PRIZES</span>
              <h2>Perform. Compete. Win.</h2>
            </div>

            <div className={styles.rankGrid} style={{ gridTemplateColumns: "repeat(2,minmax(0,1fr))" }}>
              <article className={styles.rankCard}>
                <span>First Place</span>
                <strong>₹20K</strong>
                <small>Prizes worth INR 20,000</small>
              </article>
              <article className={styles.rankCard}>
                <span>Runners Up</span>
                <strong>₹13K</strong>
                <small>Prizes worth INR 13,000</small>
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
                <p>This is a flagship band competition where songs must be performed in Hindi or English.</p>
              </article>
              <article className={styles.roleCard}>
                <b>02</b>
                <p>Only registered teams will be allowed to participate.</p>
              </article>
              <article className={styles.roleCard}>
                <b>03</b>
                <p>Team size can be 3–7 members + 1 helper.</p>
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
                <b>VIDEO SUBMISSION</b>
                <p>
                  Teams will have to submit a video of any recent past performance or video recording of performing live. The time limit for the video is 5 minutes.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>SUBMISSION GUIDELINES</b>
                <p>
                  The video should be mailed to music@iiml-manfestvarchasva.com. Submissions must be in video mode, with suggested format .mp4. File naming convention: MV2025-26_STH_Name.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>ROUND 02</span>
              <h2>Final Round</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>ON-CAMPUS FINAL</b>
                <p>
                  The final round will be conducted at IIM Lucknow&apos;s campus. Participants shortlisted from the online round will be informed of their selection in due time.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>PERFORMANCE FORMAT</b>
                <p>
                  The bands will be allowed 22 minutes: a maximum of 7 minutes for setup and soundcheck, followed by 15 minutes of performance.
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
                <a href="mailto:music@iiml-manfestvarchasva.com">
                  <span>EMAIL</span>
                  <strong>music@iiml-manfestvarchasva.com</strong>
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
