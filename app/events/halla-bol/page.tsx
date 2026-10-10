import Link from "next/link";
import styles from "../[slug]/campus-ambassador.module.css";

export default function HallaBolPage() {
  return (
    <>
      <section className="subhero event-detail-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">THEATRE • 2025–26 EDITION</div>
          <h1>Halla Bol</h1>
          <p>
            The flagship street play competition where teams turn everyday spaces into powerful stages through performance, emotion and a resonating message.
          </p>
        </div>
      </section>

      <section className={styles.caSection}>
        <div className="page-shell">
          <figure className={styles.posterFrame}>
            <img
              src="/events/halla_bol.png"
              alt="Halla Bol street play competition poster"
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
                <strong>₹24K / ₹15K</strong>
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
                <strong>12 to 17 (+2)</strong>
                <small>Performing members + director/writer</small>
              </div>
            </article>
          </div>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>THE STREET IS YOUR STAGE</span>
              <h2>Bring your stories to life</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>ALL THE WORLD&apos;S A STAGE</b>
                <p>
                  “All the world&apos;s a stage, and all the men and women, merely players.” — William Shakespeare
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>THE POWER OF STREET THEATRE</b>
                <p>
                  The greatest artists often make their mark through the raw power of street theatre. Drawing the crowd in, making them feel your emotions, and leaving them with a resonating message are the hallmarks of a truly gifted street performer.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>NUKKAD NATAK</b>
                <p>
                  Only the best can harness the narrative and deliver unforgettable nukkad nataks. Born in the midst of daily life, they can transform ordinary streets into vibrant stages filled with joy, laughter, and thought-provoking messages.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>HALLA BOL</b>
                <p>
                  Join Halla Bol, the nukkad natak competition by Manfest-Varchasva, and bring your stories to life. It&apos;s your moment to inspire, entertain, and captivate the crowd.
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
                <strong>₹24K</strong>
                <small>Prizes worth INR 24,000</small>
              </article>
              <article className={styles.rankCard}>
                <span>Runners Up</span>
                <strong>₹15K</strong>
                <small>Prizes worth INR 15,000</small>
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
                <p>This is a Flagship Street Play (Nukkad Natak) competition.</p>
              </article>
              <article className={styles.roleCard}>
                <b>02</b>
                <p>Only registered teams will be allowed to participate.</p>
              </article>
              <article className={styles.roleCard}>
                <b>03</b>
                <p>Team size can be 12–17 performing members. In addition to this, the team can also have 2 members as director/writer.</p>
              </article>
              <article className={styles.roleCard}>
                <b>04</b>
                <p>Submission/performance must be in Hindi only.</p>
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
                  Teams are required to send a performance video of maximum duration of 5 minutes of their past/new performance.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>SUBMISSION GUIDELINES</b>
                <p>
                  Send the submission to theatre@iiml-manfestvarchasva.com. For more details, refer to the Event Doc. Last date for submission: 26 January 2026. Naming convention: MV 2025-26_Halla Bol_TeamName.
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
                <b>SHORTLISTED TEAMS</b>
                <p>
                  Teams shortlisted from the Online Round will be informed of their selection in due time. The final round will be conducted at IIM Lucknow campus between 6–8 February 2026.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>PERFORMANCE &amp; Q/A</b>
                <p>
                  Each team will have a maximum of 20 minutes to perform, followed by 2 minutes for Q/A.
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
                <a href="tel:+919278305227">
                  <span>SWETA YADAV</span>
                  <strong>(+91) 92783 05227</strong>
                </a>
                <a href="mailto:theatre@iiml-manfestvarchasva.com">
                  <span>EMAIL</span>
                  <strong>theatre@iiml-manfestvarchasva.com</strong>
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
