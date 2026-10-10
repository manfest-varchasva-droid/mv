import Link from "next/link";
import styles from "../[slug]/campus-ambassador.module.css";

export default function SurPage() {
  return (
    <>
      <section className="subhero event-detail-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">MUSIC • 2025–26 EDITION</div>
          <h1>Sur</h1>
          <p>
            The solo singing competition where every note, lyric and emotion gets its moment in the spotlight.
          </p>
        </div>
      </section>

      <section className={styles.caSection}>
        <div className="page-shell">
          <figure className={styles.posterFrame}>
            <img
              src="/events/SUR_MOBILE.jpg"
              alt="Sur solo singing competition poster"
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
                <strong>₹10K / ₹6K</strong>
                <small>First Place • Runner Up</small>
              </div>
            </article>

            <article className={styles.statCard}>
              <div className={styles.personIcon} aria-hidden="true">
                <svg viewBox="0 0 48 48">
                  <circle cx="24" cy="15" r="7" />
                  <path d="M10 41c1.5-9 6-13 14-13s12.5 4 14 13" />
                </svg>
              </div>
              <div>
                <span>Team size</span>
                <strong>1</strong>
                <small>Solo participation</small>
              </div>
            </article>
          </div>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>OWN THE STAGE</span>
              <h2>Let your voice take the spotlight</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>MUSIC AS EXPRESSION</b>
                <p>
                  Step into a realm where melodies speak louder than words, and music becomes the true language of expression.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>SUR</b>
                <p>
                  Let your voice take the spotlight in Sur, the ultimate solo singing competition by Manfest-Varchasva. Whether you&apos;re here to serenade, inspire or ignite emotions, this is your stage to create magic.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>MAKE IT UNFORGETTABLE</b>
                <p>
                  Show the world the power of your voice and leave a lasting impression. The stage is calling, and this is your chance to be part of an unforgettable musical adventure.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>PRIZES</span>
              <h2>Sing. Compete. Win.</h2>
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
                <p>This is a solo singing competition.</p>
              </article>
              <article className={styles.roleCard}>
                <b>02</b>
                <p>Participants need to use their own instruments.</p>
              </article>
              <article className={styles.roleCard}>
                <b>03</b>
                <p>Participants can use either karaoke or one musical instrument.</p>
              </article>
              <article className={styles.roleCard}>
                <b>04</b>
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
                <b>ONLINE PERFORMANCE</b>
                <p>
                  The preliminary round will be conducted online. Participants have to send a 2–3 minute video of their performance. It may be a video of any past performance of the participant.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>SUBMISSION GUIDELINES</b>
                <p>
                  Mail the video to music@iiml-manfestvarchasva.com. Submissions must be in video mode; suggested format: .mp4. File naming convention: MV2025-26_Sur_Name.
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
                <b>SHORTLISTED PARTICIPANTS</b>
                <p>
                  The final round will be conducted at IIM Lucknow&apos;s campus. Participants shortlisted from the online round will be informed of their selection in due time.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>PERFORMANCE FORMAT</b>
                <p>
                  Each participant will be allowed 10 minutes: 3 minutes for sound check followed by 7 minutes for performance.
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
