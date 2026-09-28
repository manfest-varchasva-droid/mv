import Link from "next/link";
import styles from "../[slug]/campus-ambassador.module.css";

export default function TaalPage() {
  return (
    <>
      <section className="subhero event-detail-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">DANCE • 2025–26 EDITION</div>
          <h1>Taal</h1>
          <p>
            The premier platform for Indian Classical &amp; Folk group dance, where technical precision meets soul-stirring expression.
          </p>
        </div>
      </section>

      <section className={styles.caSection}>
        <div className="page-shell">
          <figure className={styles.posterFrame}>
            <img
              src="/events/taal_banner.png"
              alt="Taal Indian Classical and Folk group dance competition poster"
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
                <strong>2–15</strong>
                <small>Group participation</small>
              </div>
            </article>
          </div>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>EXPRESSION IN MOTION</span>
              <h2>Every mudra tells a story</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>THE PREMIER PLATFORM</b>
                <p>
                  Every mudra tells a story; every pose defines perfection. Manfest-Varchasva is thrilled to present Taal, the premier platform for Indian Classical &amp; Folk group dance.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>CLAIM THE CROWN</b>
                <p>
                  We&apos;re looking for the team that transcends the ordinary to balance technical precision with the soul-stirring power of expression. Will your team be the one to claim the crown? Join the legacy. Register now!
                </p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>PRIZES</span>
              <h2>Bring your art to the stage</h2>
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
                <p>This is a group Indian dance competition.</p>
              </article>
              <article className={styles.roleCard}>
                <b>02</b>
                <p>Team size: 3–12 members.</p>
              </article>
              <article className={styles.roleCard}>
                <b>03</b>
                <p>Rounds: 2 — Online preliminary round + Offline final round.</p>
              </article>
              <article className={styles.roleCard}>
                <b>04</b>
                <p>
                  The dance styles should strictly be Indian classical or Indian folk. A medley of Indian classical and folk styles is also allowed.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>05</b>
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
                <b>ONLINE ROUND</b>
                <p>
                  The preliminary round will be conducted online. Each team must submit a 2–5 minute video of their dance performance via email, either from a practice session or past performance, with no preference for costumes.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>SUBMISSION</b>
                <p>
                  Send the submission to dance@iiml-manfestvarchasva.com. For more details, refer to the Event Doc. Last date for submission: 25 January 2026. Naming convention: MV 2025-26_Taal_TeamName.
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
                <b>IIM LUCKNOW</b>
                <p>
                  The final round will be conducted at IIM Lucknow&apos;s campus. Teams shortlisted from the online round will be informed of their selection in due time.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>PERFORMANCE WINDOW</b>
                <p>Time limit: 5–7 minutes, with an additional 2 minutes for stage setup and clearance.</p>
              </article>
            </div>
          </section>

          <section className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <span className={styles.infoEyebrow}>TIMELINE</span>
              <div className={styles.contactList}>
                <div>
                  <span>SUBMISSION &amp; REGISTRATION DEADLINE</span>
                  <strong>25 January 2026</strong>
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
                <a href="tel:+919219097857">
                  <span>SATVIKA</span>
                  <strong>(+91) 92190 97857</strong>
                </a>
                <a href="mailto:dance@iiml-manfestvarchasva.com">
                  <span>EMAIL</span>
                  <strong>dance@iiml-manfestvarchasva.com</strong>
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
