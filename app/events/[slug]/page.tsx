import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/lib/content";
import styles from "./campus-ambassador.module.css";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

function CampusAmbassadorPage() {
  return (
    <>
      <section className="subhero event-detail-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">CAMPUS AMBASSADOR • 2025–26 EDITION</div>
          <h1>Campus Ambassador 9.0</h1>
          <p>
            Represent Manfest-Varchasva on your campus, drive participation and help the fest reach more students.
          </p>
        </div>
      </section>

      <section className={styles.caSection}>
        <div className="page-shell">
          <figure className={styles.posterFrame}>
            <img
              src="/events/campus_ambassador1920_x_560_px.jpg"
              alt="Campus Ambassador 9.0 poster"
              className={styles.poster}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className={styles.statGrid}>
            <article className={`${styles.statCard} ${styles.prizeCard}`}>
              <div className={styles.statIcon} aria-hidden="true">₹</div>
              <div>
                <span>Total cash prizes</span>
                <strong>₹15,000</strong>
                <small>Across the national ambassador rankings</small>
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
                <strong>1 person</strong>
                <small>Individual participation</small>
              </div>
            </article>
          </div>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>RECOGNITION</span>
              <h2>Titles and prizes for grabs</h2>
            </div>

            <div className={styles.certificateCard}>
              <div className={styles.certificateMark}>✓</div>
              <p>An official certificate from IIM Lucknow’s Manfest-Varchasva to all the ambassadors</p>
            </div>

            <div className={styles.rankGrid}>
              <article className={styles.rankCard}>
                <span>National Campus Ambassador</span>
                <strong>₹7K</strong>
                <small>Prizes worth</small>
              </article>
              <article className={styles.rankCard}>
                <span>National Campus Ambassador Runner Up</span>
                <strong>₹5K</strong>
                <small>Prizes worth</small>
              </article>
              <article className={styles.rankCard}>
                <span>National Campus Ambassador Second Runner Up</span>
                <strong>₹3K</strong>
                <small>Prizes worth</small>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>YOUR ROLE</span>
              <h2>Roles and Responsibilities</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>01</b>
                <p>Be the face of MV in your campus and drive participation for events</p>
              </article>
              <article className={styles.roleCard}>
                <b>02</b>
                <p>
                  Increase the fest outreach in your campus through various offline and online channels including websites, Facebook, Twitter, and other social media platforms
                </p>
              </article>
            </div>
          </section>

          <section className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <span className={styles.infoEyebrow}>TIMELINE</span>
              <div className={styles.timelineDate}>
                <strong>15</strong>
                <div>
                  <b>JAN</b>
                  <small>2026</small>
                </div>
              </div>
              <h3>Registration Deadline</h3>
              <p>Registration deadline for the 2025–26 edition: 15 January 2026.</p>
            </article>

            <article className={styles.infoCard}>
              <span className={styles.infoEyebrow}>CONTACTS</span>
              <div className={styles.contactList}>
                <a href="tel:+918423715546">
                  <span>SAKSHI RAI</span>
                  <strong>(+91) 8423715546</strong>
                </a>
                <a href="tel:+917989491054">
                  <span>DHANUSH</span>
                  <strong>(+91) 7989491054</strong>
                </a>
                <a href="mailto:manfest-varchasva@iiml.com">
                  <span>EMAIL</span>
                  <strong>manfest-varchasva@iiml.com</strong>
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

function VibesPage() {
  return (
    <>
      <section className="subhero event-detail-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">DANCE • 2025–26 EDITION</div>
          <h1>Vibes</h1>
          <p>
            The flagship solo freestyle dance competition where individual performers bring their own style, energy and stage presence to Manfest-Varchasva.
          </p>
        </div>
      </section>

      <section className={styles.caSection}>
        <div className="page-shell">
          <figure className={styles.posterFrame}>
            <img
              src="/events/vibes_banner.png"
              alt="Vibes solo freestyle dance competition poster"
              className={styles.poster}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className={styles.statGrid}>
            <article className={`${styles.statCard} ${styles.prizeCard}`}>
              <div className={styles.statIcon} aria-hidden="true">₹</div>
              <div>
                <span>Total prize pool</span>
                <strong>₹16,000</strong>
                <small>Cash prizes across the top two positions</small>
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
                <strong>1 person</strong>
                <small>Solo participation</small>
              </div>
            </article>
          </div>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>OWN THE SPOTLIGHT</span>
              <h2>Ready to own the spotlight?</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>YOUR MOVES</b>
                <p>
                  Dance crews light up stages, but there&apos;s always that one dancer who steals the show. Could that be you? Here&apos;s your chance to shine.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>YOUR VIBE. YOUR STAGE.</b>
                <p>
                  Manfest-Varchasva presents Vibes, the ultimate freestyle solo dance showdown. Whether it&apos;s hip-hop, contemporary, or something uniquely yours, bring your A-game and light up the stage like never before. Are you ready? Register and get ready to own the stage.
                </p>
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
                <p>This is a flagship solo dance competition.</p>
              </article>
              <article className={styles.roleCard}>
                <b>02</b>
                <p>Rounds: 2 — Online preliminary round + Offline final round.</p>
              </article>
              <article className={styles.roleCard}>
                <b>03</b>
                <p>Team size: 1 member.</p>
              </article>
              <article className={styles.roleCard}>
                <b>04</b>
                <p>Only registered participants will be allowed to participate.</p>
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
                  The preliminary round is conducted online. Each participant must submit a 2–3 minute video of their dance performance via email, either from a practice session or past performance, with no preference for costumes.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>SUBMISSION</b>
                <p>
                  Send the submission to dance@iiml-manfestvarchasva.com. For more details, refer to the Event Doc. Last date for submission: 25 January 2026. Naming convention: MV 2025-26_Vibes_ParticipantName.
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
                  The final round is conducted at IIM Lucknow&apos;s campus. Participants shortlisted from the online round are informed of their selection in due time.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>PERFORMANCE WINDOW</b>
                <p>Time limit: 3–4 minutes, with an additional 2 minutes for stage setup and clearance.</p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>RECOGNITION</span>
              <h2>Prizes &amp; certificates</h2>
            </div>

            <div className={styles.rankGrid}>
              <article className={styles.rankCard}>
                <span>Winner</span>
                <strong>₹10K</strong>
                <small>National Winner Certificate</small>
              </article>
              <article className={styles.rankCard}>
                <span>First Runner Up</span>
                <strong>₹6K</strong>
                <small>National Finalist Certificate</small>
              </article>
              <article className={styles.rankCard}>
                <span>Top 15</span>
                <strong>15</strong>
                <small>National Finalist Certificates</small>
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

function ImperioPage() {
  return (
    <>
      <section className="subhero event-detail-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">DANCE • 2025–26 EDITION</div>
          <h1>Imperio</h1>
          <p>
            The ultimate Western group dance arena where crews bring raw energy, synchronized precision and stage presence to Manfest-Varchasva.
          </p>
        </div>
      </section>

      <section className={styles.caSection}>
        <div className="page-shell">
          <figure className={styles.posterFrame}>
            <img
              src="/events/imperio_banner.png"
              alt="Imperio group Western dance competition poster"
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
                <strong>6–20</strong>
                <small>Group participation</small>
              </div>
            </article>
          </div>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>OWN THE FLOOR</span>
              <h2>The floor is yours for the taking.</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>BRING THE ENERGY</b>
                <p>
                  The bass is dropping, the lights are pulsing, and the floor is yours for the taking. Manfest-Varchasva brings you Imperio — the ultimate arena for Western group dance.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>MAKE A STATEMENT</b>
                <p>
                  Bring your crew&apos;s raw energy and synchronized precision to the spotlight. Don&apos;t just move; make a statement and show us what true synergy looks like. Register and get ready to dazzle the crowd with your magic.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>PRIZES</span>
              <h2>Bring the crew. Take the podium.</h2>
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
                <p>Team size: 6–20 members.</p>
              </article>
              <article className={styles.roleCard}>
                <b>02</b>
                <p>Rounds: 2 — Online preliminary round + Offline final round.</p>
              </article>
              <article className={styles.roleCard}>
                <b>03</b>
                <p>Only Western dance forms are permitted.</p>
              </article>
              <article className={styles.roleCard}>
                <b>04</b>
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
                  The preliminary round is conducted online. Each team must submit a 2–5 minute video of its dance performance via email, either from a practice session or a past performance, with no preference for costumes.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>SUBMISSION</b>
                <p>
                  Send the submission to dance@iiml-manfestvarchasva.com. For more details, refer to the Event Doc. Last date for submission: 20 January 2026. Naming convention: MV 2025-26_Imperio_&lt;Team Name&gt;.
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
                  The final round is conducted at IIM Lucknow&apos;s campus. Teams shortlisted from the online round are informed of their selection in due time.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>PERFORMANCE WINDOW</b>
                <p>Time limit: 3–5 minutes, with an additional 2 minutes for stage setup and clearance.</p>
              </article>
            </div>
          </section>

          <section className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <span className={styles.infoEyebrow}>TIMELINE</span>
              <div className={styles.contactList}>
                <div>
                  <span>SUBMISSION &amp; REGISTRATION DEADLINE</span>
                  <strong>20 January 2026</strong>
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

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) notFound();

  if (event.slug === "campus-ambassador") {
    return <CampusAmbassadorPage />;
  }

  if (event.slug === "vibes") {
    return <VibesPage />;
  }

  if (event.slug === "imperio") {
    return <ImperioPage />;
  }

  return (
    <>
      <section className="subhero event-detail-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">{event.category}</div>
          <h1>{event.name}</h1>
          <p>{event.blurb}</p>
        </div>
      </section>

      <section className="section section-ink">
        <div className="page-shell detail-layout">
          <div>
            <h2>Event overview</h2>
            <p className="detail-lead">{event.blurb}</p>
            {event.details ? (
              <ul className="detail-list">
                {event.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            ) : (
              <div className="notice-card">
                The new site structure is ready. The MV team can add the latest event brief,
                dates, rulebook and registration link in <code>lib/content.ts</code>.
              </div>
            )}

            {event.prize ? <div className="prize-card"><span>Prize pool</span><strong>{event.prize}</strong></div> : null}
          </div>

          <aside className="detail-aside">
            <Link className="btn btn-primary" href="/events">All events</Link>
            <Link className="text-link light-link" href="/terms-and-conditions">
              Terms &amp; Conditions →
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}