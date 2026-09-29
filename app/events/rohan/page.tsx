import Link from "next/link";
import styles from "../[slug]/campus-ambassador.module.css";

export default function RohanPage() {
  return (
    <>
      <section className="subhero event-detail-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">LITERARY • 2025–26 EDITION</div>
          <h1>Rohan</h1>
          <p>
            The flagship spoken poetry competition where individual performers turn thoughts, emotions and untold truths into powerful verse.
          </p>
        </div>
      </section>

      <section className={styles.caSection}>
        <div className="page-shell">
          <figure className={styles.posterFrame}>
            <img
              src="/events/rohan (1).jpeg"
              alt="Rohan spoken poetry competition poster"
              className={styles.poster}
            />
          </figure>

          <div className={styles.statGrid}>
            <article className={`${styles.statCard} ${styles.prizeCard}`}>
              <div className={styles.statIcon} aria-hidden="true">₹</div>
              <div>
                <span>Prize money</span>
                <strong>₹10K / ₹6K</strong>
                <small>First Place • Runner Up</small>
              </div>
            </article>

            <article className={styles.statCard}>
              <div className={styles.personIcon} aria-hidden="true">
                <svg viewBox="0 0 48 48">
                  <circle cx="24" cy="15" r="8" />
                  <path d="M10 40c1.4-10 6.3-15 14-15s12.6 5 14 15" />
                </svg>
              </div>
              <div>
                <span>Team size</span>
                <strong>1</strong>
                <small>Individual participation</small>
              </div>
            </article>
          </div>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>LET YOUR WORDS SPEAK</span>
              <h2>One verse at a time</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>POETRY WITH IMPACT</b>
                <p>
                  Dive into a world where poetry becomes a force that stirs hearts and ignites minds. Rohan, the spoken poetry competition by Manfest-Varchasva, invites you to step forward and share your story, one verse at a time.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>YOUR WORDS, YOUR STORY</b>
                <p>
                  Let your words weave magic, your emotions shape narratives, and your voice carry the weight of untold truths. This is your chance to transform thoughts into art and make an everlasting impact.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>OWN THE MIC</b>
                <p>
                  The mic is yours. Embrace the spotlight and let your passion shine. Register now to be part of this poetic revolution.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>PRIZES</span>
              <h2>Write. Perform. Win.</h2>
            </div>

            <div className={styles.rankGrid} style={{ gridTemplateColumns: "repeat(2,minmax(0,1fr))" }}>
              <article className={styles.rankCard}>
                <span>First Place</span>
                <strong>₹10K</strong>
                <small>Prizes worth INR 10,000</small>
              </article>
              <article className={styles.rankCard}>
                <span>Runner Up</span>
                <strong>₹6K</strong>
                <small>Prizes worth INR 6,000</small>
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
                <p>This is a Flagship Spoken Poetry competition where the poetry must be in Hindi or English only.</p>
              </article>
              <article className={styles.roleCard}>
                <b>02</b>
                <p>Only registered individuals will be allowed to participate.</p>
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
                  Participants have to mail a video of an original poem of their choice to literary@iiml-manfestvarchasva.com.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>TIME &amp; LANGUAGE</b>
                <p>
                  The time limit for the video is 3 minutes. The poem should be in English or Hindi.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>SHORTLISTING</b>
                <p>
                  Shortlisted participants will be invited to perform live at IIM Lucknow for the subsequent rounds.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>FINAL ROUND</span>
              <h2>Final Round</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>TOPIC SELECTION</b>
                <p>
                  Three topics will be shared with the finalists.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>WRITING TIME</b>
                <p>
                  Finalists will be given 30 minutes to write a 5 to 10 line poem on any one of the topics.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>PRESENTATION</b>
                <p>
                  This will be followed by the presentation of the poem to the panelists.
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
