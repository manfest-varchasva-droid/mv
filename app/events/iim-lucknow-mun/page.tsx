import Link from "next/link";
import styles from "../[slug]/campus-ambassador.module.css";

export default function IIMLucknowMUNPage() {
  return (
    <>
      <section className="subhero event-detail-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">MODEL UNITED NATIONS • 2025–26 EDITION</div>
          <h1>IIM Lucknow MUN</h1>
          <p>
            Step into the arena of global diplomacy at IIM Lucknow&apos;s Model United Nations, hosted by Manfest-Varchasva.
          </p>
        </div>
      </section>

      <section className={styles.caSection}>
        <div className="page-shell">
          <figure className={styles.posterFrame}>
            <img
              src="/events/MUN poster.jpg"
              alt="IIM Lucknow Model United Nations poster"
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
                <strong>₹15K / ₹10K</strong>
                <small>Separate prizes for Lok Sabha, UNGA and UNHRC delegates</small>
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
                <strong>1 delegate / country</strong>
                <small>Might change in case of high participation</small>
              </div>
            </article>
          </div>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>GLOBAL DIPLOMACY</span>
              <h2>Be the voice that shapes tomorrow</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>THE PLATFORM</b>
                <p>
                  Step into the arena of global diplomacy at IIM Lucknow&apos;s Model United Nations, hosted by Manfest-Varchasva. Sharpen your public speaking, negotiation and leadership skills as you tackle pressing international issues.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>YOUR STAGE</b>
                <p>
                  This isn&apos;t just a conference; it&apos;s your platform to become the leader the world needs. Register now and be the voice that shapes tomorrow&apos;s global dialogue.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>PRIZES</span>
              <h2>Recognition across all three committees</h2>
            </div>

            <div className={styles.rankGrid} style={{ gridTemplateColumns: "repeat(2,minmax(0,1fr))" }}>
              <article className={styles.rankCard}>
                <span>1st Prize</span>
                <strong>₹15K</strong>
                <small>₹10,000 cash + ₹5,000 in kind</small>
              </article>
              <article className={styles.rankCard}>
                <span>2nd Prize</span>
                <strong>₹10K</strong>
                <small>₹6,000 cash + ₹4,000 in kind</small>
              </article>
            </div>
            <p style={{ marginTop: "18px" }}>
              Prize money is separate for Lok Sabha, UNGA and UNHRC delegates.
            </p>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>EVENT BRIEF</span>
              <h2>Committees and agendas</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>LOK SABHA</b>
                <p>
                  Agenda — Addressing India&apos;s unemployment crisis amidst upcoming automation &amp; AI.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>UNITED NATIONS GENERAL ASSEMBLY (UNGA)</b>
                <p>
                  Agenda — Addressing the weaponization of food and energy supply chains.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>UNITED NATIONS HUMAN RIGHTS COUNCIL (UNHRC)</b>
                <p>
                  Agenda — Examining the human rights implications of migration and displacement.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>REGISTRATION</span>
              <h2>Fee structure</h2>
            </div>

            <div className={styles.rankGrid} style={{ gridTemplateColumns: "repeat(2,minmax(0,1fr))" }}>
              <article className={styles.rankCard}>
                <span>INR 2099</span>
                <strong>Participation Package</strong>
                <small>MUN participation + Pro-show passes for all three days</small>
              </article>
              <article className={styles.rankCard}>
                <span>INR 2399</span>
                <strong>Fest Package</strong>
                <small>MUN participation + food + accommodation + Pro-show passes for all three days</small>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>FEST PACKAGE</span>
              <h2>Offerings from Manfest-Varchasva</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>CERTIFICATE &amp; ACCESS</b>
                <p>Certificate from Manfest-Varchasva IIM Lucknow.</p>
                <p>Access to all four pro-nights, including Bollywood night, Band, Comedy night and DJ night.</p>
              </article>
              <article className={styles.roleCard}>
                <b>STAY &amp; MEALS</b>
                <p>On-campus accommodation for all three days.</p>
                <p>Two meals a day for all three days of the fest.</p>
              </article>
              <article className={styles.roleCard}>
                <b>MUN SUPPORT</b>
                <p>Training sessions to prepare students for MUN.</p>
                <p>MUN registration included.</p>
              </article>
              <article className={styles.roleCard}>
                <b>IMPORTANT</b>
                <p>Mention the payment transaction details in the registration form.</p>
              </article>
            </div>
          </section>

          <section className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <span className={styles.infoEyebrow}>TIMELINE</span>
              <div className={styles.contactList}>
                <div>
                  <span>LAST DATE TO REGISTER</span>
                  <strong>26 January 2026</strong>
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
                <a href="mailto:iimlmun@iiml-manfestvarchasva.com">
                  <span>EMAIL</span>
                  <strong>iimlmun@iiml-manfestvarchasva.com</strong>
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
