import styles from "./partners.module.css";

export const metadata = { title: "Our Partners" };

const secondaryPartners = ["Co-Title Partner", "Powered By Partner"];

const featuredPartners = [
  "Lucknow City Run Title Partner",
  "Ticketing Partner",
  "Concerts Partner",
  "Social Impact Partner",
  "Investment Partner",
  "Development Partner",
  "Tourism Partner",
  "Jewellery Partner",
  "Vegan Beauty Partner",
  "Associate Partners",
];

const supportingPartners = [
  "Desi Snacks Partner",
  "Creator Tech Partner",
  "Logistics Partner",
  "Herbal Care Partner",
  "Official Poker Partner",
  "NGO Partner",
  "Management Events Partner",
  "Radio Partner",
  "Banking Partner",
  "Books Partner",
  "Entertainment Partner",
  "Music Streaming Partner",
  "Memories Partner",
  "Official Nutrition Partner",
  "Urban Outreach and Engagement Partner",
  "Travel Partner",
  "Social Media Partner",
  "Gourmet Partner",
  "Media Partners",
  "General Partners",
];

export default function PartnersPage() {
  return (
    <>
      <section
        className={`subhero ${styles.partnersHero}`}
        style={{
          minHeight: "100svh",
          backgroundImage:
            'linear-gradient(90deg, rgba(6, 7, 15, 0.60) 0%, rgba(6, 7, 15, 0.30) 46%, rgba(6, 7, 15, 0.10) 100%), linear-gradient(180deg, rgba(6, 7, 15, 0.02) 0%, rgba(6, 7, 15, 0.24) 100%), url("/api/partners-hero?v=7")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="page-shell subhero-content">
          <div className="eyebrow">OUR PARTNERS</div>
          <h1>Partners who power Manfest-Varchasva.</h1>
          <p>
            Manfest-Varchasva works with companies, governments, nonprofits and other organizations to bring to fruition Asia&apos;s largest B-School fest.
          </p>
        </div>
      </section>

      <section className={`section section-dark ${styles.hierarchySection}`}>
        <div className="page-shell">
          <div className={styles.hierarchyIntro}>
            <span>OUR PARTNERS - 2025-26</span>
            <h2>Our partner ecosystem</h2>
          </div>

          <div className={styles.titleTier}>
            <span className={styles.tierLabel}>TITLE PARTNER</span>
            <div className={styles.titlePartnerSlot}>
              <strong>Title Partner</strong>
            </div>
          </div>

          <div className={styles.secondaryTier}>
            {secondaryPartners.map((partner) => (
              <div className={styles.secondaryPartnerSlot} key={partner}>
                <span>{partner}</span>
              </div>
            ))}
          </div>

          <div className={styles.featuredTier}>
            {featuredPartners.map((partner) => (
              <div className={styles.featuredPartnerSlot} key={partner}>
                <span>{partner}</span>
              </div>
            ))}
          </div>

          <div className={styles.supportingTier}>
            {supportingPartners.map((partner) => (
              <div className={styles.supportingPartnerSlot} key={partner}>
                <span>{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
