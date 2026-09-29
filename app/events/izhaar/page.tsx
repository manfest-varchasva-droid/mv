import Link from "next/link";
import styles from "../[slug]/campus-ambassador.module.css";

export default function IzhaarPage() {
  return (
    <>
      <section className="subhero event-detail-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">THEATRE • 2025–26 EDITION</div>
          <h1>Izhaar</h1>
          <p>
            A mono-act competition where individual performers step into the spotlight and own the stage through narration or method acting.
          </p>
        </div>
      </section>

      <section className={styles.caSection}>
        <div className="page-shell">
          <figure className={styles.posterFrame}>
            <img
              src="/events/izhaar_mobile_banner.png"
              alt="Izhaar mono-act competition poster"
              className={styles.poster}
            />
          </figure>

          <div className={styles.statGrid}>
            <article className={`${styles.statCard} ${styles.prizeCard}`}>
              <div className={styles.statIcon} aria-hidden="true">₹</div>
              <div>
                <span>Prize money</span>
                <strong>₹10K / ₹6K</strong>
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
                <strong>1 + 1</strong>
                <small>1 participant + 1 helper</small>
              </div>
            </article>
          </div>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>THE STAGE AWAITS ITS NEXT STAR</span>
              <h2>Step into the spotlight</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>ALL THE WORLD&apos;S A STAGE</b>
                <p>
                  “All the world&apos;s a stage, and all the men and women, merely players.” — William Shakespeare
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>WHERE LEGENDS ARE BORN</b>
                <p>
                  It&apos;s on the biggest stage where true legends are born. The power to captivate an audience, make them laugh, cry, or cheer, comes only to those who dare to shine.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>CREATE A MASTERPIECE</b>
                <p>
                  From Kartik Aaryan&apos;s iconic monologue to Joaquin Phoenix&apos;s unforgettable performance as Joker, these performances have left the world in awe. Now, it&apos;s your turn to create a masterpiece.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>IZHAAR</b>
                <p>
                  Step into the spotlight with Izhaar, the mono-act competition by Manfest-Varchasva. This is where individual stars rise, owning the stage and stealing hearts. Don&apos;t miss your chance to shine and show the world what you&apos;re made of.
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
                <strong>₹10K</strong>
                <small>Prizes worth INR 10,000</small>
              </article>
              <article className={styles.rankCard}>
                <span>Runners Up</span>
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
                <p>This is a solo event; however, an additional helper is allowed.</p>
              </article>
              <article className={styles.roleCard}>
                <b>02</b>
                <p>Submission/performance may be in English/Hindi.</p>
              </article>
              <article className={styles.roleCard}>
                <b>03</b>
                <p>Only registered individuals will be allowed to participate.</p>
              </article>
              <article className={styles.roleCard}>
                <b>04</b>
                <p>Participants have the freedom to choose their act from either of the two forms — Narration or Method Acting.</p>
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
                  Participants need to send a recording of their past/present performance. The video can have a maximum duration of 1 minute.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>SUBMISSION GUIDELINES</b>
                <p>
                  Send the submission to theatre@iiml-manfestvarchasva.com. For more details, refer to the Event Doc. Last date for submission: 26 January 2026. Naming convention: MV 2025-26_Izhaar_ParticipantName.
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
                  Shortlisted participants will perform at the IIM Lucknow campus during Manfest-Varchasva between 6–8 February 2026.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>PERFORMANCE &amp; Q/A</b>
                <p>
                  Each participant will have 5 minutes to perform, followed by 2 minutes for Q/A.
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
