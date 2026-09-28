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
              src="https://www.iiml-manfestvarchasva.com/images/events/2026/campus_ambassador1920_x_560_px.jpg"
              alt="Campus Ambassador 9.0 poster"
              className={styles.poster}
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
              src="/api/vibes-poster"
              alt="Vibes solo freestyle dance competition poster"
              className={styles.poster}
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

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>COMPETITION FORMAT</span>
              <h2>Two stages. One spotlight.</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>01 • ONLINE PRELIMINARY</b>
                <p>
                  Participants submit a 2–3 minute solo dance video from a practice session or past performance. Fifteen dancers advance to the campus final.
                </p>
              </article>
              <article className={styles.roleCard}>
                <b>02 • OFFLINE FINAL</b>
                <p>
                  Shortlisted dancers perform at IIM Lucknow. The final performance window is 3–4 minutes, with up to 2 additional minutes for stage setup and clearance.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>EVENT GUIDELINES</span>
              <h2>Freestyle, with a few clear boundaries.</h2>
            </div>

            <div className={styles.roleGrid}>
              <article className={styles.roleCard}>
                <b>01</b>
                <p>There is no restriction on dance form or style — hip-hop, contemporary and other freestyle formats are welcome.</p>
              </article>
              <article className={styles.roleCard}>
                <b>02</b>
                <p>Use of fire and colours is prohibited, and vulgarity in songs, costumes or choreography is not permitted.</p>
              </article>
              <article className={styles.roleCard}>
                <b>03</b>
                <p>Only registered participants can compete. On-spot registrations are not permitted.</p>
              </article>
              <article className={styles.roleCard}>
                <b>04</b>
                <p>Direct copying of previously performed dance sequences may attract a deduction of marks. Judges’ decisions are final and binding.</p>
              </article>
            </div>
          </section>

          <section className={styles.contentBlock}>
            <div className={styles.sectionHeading}>
              <span>JUDGING</span>
              <h2>What the performance is judged on</h2>
            </div>

            <div className={styles.certificateCard}>
              <div className={styles.certificateMark}>✦</div>
              <p>
                Choreography • Energy • Creativity • Synchronization • Expressions • Track selection • Costumes in the final round • Overall impact
              </p>
            </div>
          </section>

          <section className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <span className={styles.infoEyebrow}>2026 EDITION</span>
              <div className={styles.timelineDate}>
                <strong>06</strong>
                <div>
                  <b>FEB</b>
                  <small>2026</small>
                </div>
              </div>
              <h3>Finals during Manfest-Varchasva</h3>
              <p>Festival dates: 6–8 February 2026 at IIM Lucknow.</p>
            </article>

            <article className={styles.infoCard}>
              <span className={styles.infoEyebrow}>EVENT CONTACT</span>
              <div className={styles.contactList}>
                <a href="mailto:dance@iiml-manfestvarchasva.com">
                  <span>EMAIL</span>
                  <strong>dance@iiml-manfestvarchasva.com</strong>
                </a>
              </div>
              <h3>Dance vertical</h3>
              <p>Queries and preliminary-round submissions for Vibes are handled through the dance events email.</p>
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
