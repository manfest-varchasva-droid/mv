import Link from "next/link";
import styles from "../[slug]/campus-ambassador.module.css";

export default function JashNPage() {
  return (
    <>
      <section className="subhero event-detail-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">FASHION PARADE • 2025–26 EDITION</div>
          <h1>JashN</h1>
          <p>
            The iconic fashion parade by Manfest-Varchasva where confidence, storytelling and style come together on the runway.
          </p>
        </div>
      </section>

      <section className={styles.caSection}>
        <div className="page-shell">
          <figure className={styles.posterFrame}>
            <img
              src="/events/mobile_banner_new_JASHN.png"
              alt="JashN fashion parade poster"
              className={styles.poster}
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
                <strong>5–15 (+3)</strong>
                <small>Team participation</small>
              </div>
            </article>
          </div>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>OWN THE RUNWAY</span>
              <h2>Own the spotlight</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>THE FASHION STORY</b>
                <p>
                  Own the runway, own the spotlight! JashN, the iconic fashion parade by Manfest-Varchasva, is back and calling all trendsetters to showcase their unique style.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>YOUR STAGE</b>
                <p>
                  This isn&apos;t just a walk, it&apos;s your stage to craft a fashion story that leaves everyone in awe. Step into the spotlight with confidence, charm, and style that leaves a lasting impression. Ready to become the next style sensation? The runway is waiting for you.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>PRIZES</span>
              <h2>Style your way to the podium</h2>
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
                <p>This is a flagship Fashion Parade Competition.</p>
              </article>
              <article className={styles.roleCard}>
                <b>02</b>
                <p>Only registered teams will be allowed to participate.</p>
              </article>
              <article className={styles.roleCard}>
                <b>03</b>
                <p>
                  Team size can be 5–15 members. In addition to this, the team can also have 3 extra members inclusive of a makeup artist, costume designer and a choreographer.
                </p>
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
                  Send a performance video of maximum duration of 2 minutes of your past or new performance.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>SUBMISSION</b>
                <p>
                  Send the submission to fashp@iiml-manfestvarchasva.com. For more details, refer to the Event Doc. Last date for submission: 26 January 2026. Naming convention: MV 2025-26_JashN_TeamName.
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
                  Teams shortlisted from the online round will be informed of their selection in due time.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>IIM LUCKNOW</b>
                <p>
                  The final round will be conducted at IIM Lucknow campus between 6–8 February 2026. Each team will have a maximum of 15 minutes to perform followed by 2 minutes for Q&amp;A.
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
                <a href="mailto:fashp@iiml-manfestvarchasva.com">
                  <span>EMAIL</span>
                  <strong>fashp@iiml-manfestvarchasva.com</strong>
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
