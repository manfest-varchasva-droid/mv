import { SectionTitle } from "@/components/SectionTitle";
import styles from "./city-run.module.css";

export const metadata = { title: "Lucknow City Run" };

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
          <p className={styles.kicker}>MANFEST-VARCHASVA • IIM LUCKNOW</p>
          <h1>Lucknow City Run</h1>
          <p className={styles.heroLead}>
            A morning when Lucknow comes together to run for health, community and the
            energy of the city.
          </p>
          <div className={styles.heroMeta}>
            <span>2026 edition</span>
            <span>Lohia Park &amp; Gomti Riverfront</span>
            <span>5K &amp; 10K</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`page-shell ${styles.introGrid}`}>
          <div>
            <SectionTitle
              eyebrow="THE RUN"
              title="Lucknow,"
              accent="it’s time to run."
            />
            <div className={styles.copy}>
              <p>
                The Lucknow City Run brings runners, families and communities across the
                city together for an energetic start to the day. The 2026 edition returned
                after a year-long break with competitive <strong>5K and 10K races</strong>,
                combining sport with the spirit of togetherness.
              </p>
              <p>
                Hosted by Team Manfest-Varchasva, IIM Lucknow, the run celebrated movement,
                participation and community while giving runners the chance to compete for
                prizes, medals, certificates and goodies.
              </p>
              <div className={styles.archiveNote}>
                2026 edition archive • next edition details will be announced here
              </div>
            </div>
          </div>

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
              <span>Races</span>
              <strong>Competitive 5K &amp; 10K</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.highlights} aria-label="City Run highlights">
        <div className={`page-shell ${styles.highlightGrid}`}>
          <div className={styles.highlight}>
            <strong>5K</strong>
            <span>Competitive race</span>
          </div>
          <div className={styles.highlight}>
            <strong>10K</strong>
            <span>Competitive race</span>
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
            <h2>Supported by partners who helped bring the city together.</h2>
            <p>
              The 2026 Lucknow City Run was supported by organisations across banking,
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
