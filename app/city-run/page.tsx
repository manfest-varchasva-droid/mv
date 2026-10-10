import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import styles from "./city-run.module.css";
import { preload } from "react-dom";

export const metadata = { title: "Lucknow City Run 2026 Archive" };

const partners = [
  {
    role: "Presented by",
    name: "Axis Bank",
    logo: "/partners/axis-bank.svg",
    alt: "Axis Bank logo",
  },
  {
    role: "Presented by",
    name: "Samaj Kalyan Vibhag",
    logo: "/partners/Social Welfare (1).png",
    alt: "Samaj Kalyan Vibhag logo",
  },
  {
    role: "Co-presented by",
    name: "Flipkart Minutes",
    logo: "/partners/Flipkart minutes.jpg",
    alt: "Flipkart Minutes logo",
  },
  {
    role: "NGO partner",
    name: "Kiran Foundation",
    logo: "/partners/Kiran-Foundation.png",
    alt: "Kiran Foundation logo",
  },
  {
    role: "City Run partner",
    name: "LIC",
    logo: "/partners/LIC-Logo (1).jpg",
    alt: "LIC logo",
  },
];

export default function CityRunPage() {
  preload("/events/city run hero.png", { as: "image" });

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
          <Link className="text-link light-link" href="/terms-and-conditions">
            Terms &amp; Conditions →
          </Link>
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
              <div
                className={styles.posterArtwork}
                role="img"
                aria-label="Lucknow City Run 2026 poster"
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
            <strong><AnimatedNumber value="5K" /></strong>
            <span>Race distance</span>
          </div>
          <div className={styles.highlight}>
            <strong><AnimatedNumber value="10K" /></strong>
            <span>Race distance</span>
          </div>
          <div className={styles.highlight}>
            <strong><AnimatedNumber value="₹1L" /></strong>
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
            {partners.map((partner) => (
              <div className={styles.partnerItem} key={`${partner.role}-${partner.name}`}>
                <span>{partner.role}</span>
                <div className={styles.partnerLogoWrap}>
                  <Image
                    className={styles.partnerLogo}
                    src={partner.logo}
                    alt={partner.alt}
                    width={190}
                    height={82}
                    sizes="(max-width: 620px) 160px, 190px"
                  />
                </div>
                <strong>{partner.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
