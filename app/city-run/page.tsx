import { SectionTitle } from "@/components/SectionTitle";
import styles from "./city-run.module.css";

export const metadata = { title: "Lucknow City Run 2026 Archive" };

const partners = [
  ["Presented by", "Axis Bank"],
  ["Presented by", "Samaj Kalyan Vibhag"],
  ["Co-presented by", "Flipkart Minutes"],
  ["NGO partner", "Kiran Foundation"],
  ["City Run partner", "LIC"],
];

export default function CityRunPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`page-shell ${styles.heroInner}`}>
          <p className={styles.kicker}>2026 ARCHIVE • MANFEST-VARCHASVA</p>
          <h1>Lucknow City Run</h1>
          <p className={styles.heroLead}>
            On 1 February 2026, Lucknow came together for a morning of running,
            community and shared energy across the city.
          </p>
          <div className={styles.heroMeta}>
            <span>1 February 2026</span>
            <span>Lohia Park &amp; Gomti Riverfront</span>
            <span>5K &amp; 10K</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="page-shell">
          <div className={styles.introCopy}>
            <SectionTitle
              eyebrow="2026 CITY RUN"
              title="Lucknow"
              accent="ran together."
            />
            <div className={styles.copy}>
              <p>
                The 2026 Lucknow City Run brought runners, families and communities
                from across the city together for an energetic start to the day.
                Returning after a year-long break, the edition featured competitive
                <strong> 5K and 10K races</strong> and celebrated sport, participation
                and the spirit of togetherness.
              </p>
              <p>
                Hosted by Team Manfest-Varchasva, IIM Lucknow, the run gave participants
                the opportunity to compete for prizes while taking home medals,
                certificates and event goodies.
              </p>
              <div className={styles.archiveNote}>
                2026 archive • Lucknow City Run • 1 February 2026
              </div>
            </div>
          </div>

          <div className={styles.archiveGrid}>
            <figure className={styles.posterFrame}>
              <div className={styles.posterLabel}>OFFICIAL POSTER • 2026 ARCHIVE</div>
              <img
                src="/api/city-run-poster"
                alt="Lucknow City Run 2026 official poster"
                className={styles.posterImage}
                loading="lazy"
              />
            </figure>

            <div className={styles.detailsBlock}>
              <div className={styles.detailsEyebrow}>EVENT DETAILS</div>
              <div className={styles.factStack}>
                <div className={styles.fact}>
                  <span>Date</span>
                  <strong>1 February 2026</strong>
                </div>
                <div className={styles.fact}>
                  <span>Flag off</span>
                  <strong>6:00 AM</strong>
                </div>
                <div className={styles.fact}>
                  <span>Venue</span>
                  <strong>Lohia Park, Gate No. 3 / Gomti Riverfront</strong>
                </div>
                <div className={styles.fact}>
                  <span>Race formats</span>
                  <strong>Competitive 5K &amp; 10K</strong>
                </div>
                <div className={styles.fact}>
                  <span>Theme</span>
                  <strong>Run for Inclusion</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.highlights} aria-label="2026 City Run highlights">
        <div className={`page-shell ${styles.highlightGrid}`}>
          <div className={styles.highlight}>
            <strong>5K</strong>
            <span>Race distance</span>
          </div>
          <div className={styles.highlight}>
            <strong>10K</strong>
            <span>Race distance</span>
          </div>
          <div className={styles.highlight}>
            <strong>₹1L</strong>
            <span>Prize pool</span>
          </div>
          <div className={styles.highlight}>
            <strong>6 AM</strong>
            <span>Flag off</span>
          </div>
        </div>
      </section>

      <section className={styles.partnersSection}>
        <div className="page-shell">
          <div className={styles.partnerIntro}>
            <h2>Partners behind the 2026 Lucknow City Run.</h2>
            <p>
              The 2026 edition was supported by organisations across banking,
              public welfare, quick commerce and social impact.
            </p>
          </div>

          <div className={styles.partnerLine}>
            {partners.map(([role, name]) => (
              <div className={styles.partnerItem} key={`${role}-${name}`}>
                <span>{role}</span>
                <strong>{name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
