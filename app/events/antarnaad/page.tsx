import Link from "next/link";
import styles from "../[slug]/campus-ambassador.module.css";

export default function AntarnaadPage() {
  return (
    <>
      <section className="subhero event-detail-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">THEATRE • 2025–26 EDITION</div>
          <h1>Antarnaad</h1>
          <p>
            A short film and vlog making competition where filmmakers and creators turn ideas and experiences into stories that resonate.
          </p>
        </div>
      </section>

      <section className={styles.caSection}>
        <div className="page-shell">
          <figure className={styles.posterFrame}>
            <img
              src="/events/antarnaad.png"
              alt="Antarnaad short film and vlog making competition poster"
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
                <strong>3 to 12 (+2)</strong>
                <small>Team participation</small>
              </div>
            </article>
          </div>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>LIGHTS, CAMERA, ACTION</span>
              <h2>Let your story be your legacy</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>THE POWER OF STORYTELLING</b>
                <p>
                  Storytelling is an indispensable skill for aspiring directors and cinema enthusiasts. The finest settings and resources mean little without the ability to craft a narrative that leaves a lasting impact on your audience.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>YOUR STORY, YOUR STAGE</b>
                <p>
                  If you&apos;re passionate about filmmaking or vlog making and eager to tell your own story, Manfest-Varchasva brings you Antarnaad, a short film and vlog making competition. Here&apos;s your chance to showcase your creativity, share your experiences, and create a narrative that resonates with your audience.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>PRIZES</span>
              <h2>Create. Compete. Win.</h2>
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
                <p>This is a Short Film/Vlog Making Competition.</p>
              </article>
              <article className={styles.roleCard}>
                <b>02</b>
                <p>Submission may be made in either of the two formats in either English/Hindi.</p>
              </article>
              <article className={styles.roleCard}>
                <b>03</b>
                <p>Only registered individuals will be allowed to participate.</p>
              </article>
              <article className={styles.roleCard}>
                <b>04</b>
                <p>Participants have the freedom to participate in any of the 2 formats — Short Film Making or Vlog Making.</p>
              </article>
              <article className={styles.roleCard}>
                <b>05</b>
                <p>Team size can be 3–12. In addition to this, the team can also have one director (student) and one writer (student).</p>
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
                  Send a performance video of maximum duration of 15 minutes of your past/new performance.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>SUBMISSION</b>
                <p>
                  Send the submission to theatre@iiml-manfestvarchasva.com. For more details, refer to the Event Doc. Last date for submission: 26 January 2026. Naming convention: MV 2025-26_Antarnaad_TeamName.
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
                  Teams shortlisted from the online round will be informed of their selection in due time. The final round will be conducted at IIM Lucknow campus between 6–8 February 2026.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>SCREENING &amp; INTERACTION</b>
                <p>
                  Each team will have a maximum of 15 minutes for screening, 15 minutes for Judge Interaction, and an additional 2 minutes to set up.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <span className={styles.infoEyebrow}>TIMELINE</span>
              <div className={styles.contactList}>
                <div>
                  <span>REGISTRATION &amp; ROUND 1 SUBMISSION DEADLINE</span>
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
