import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { partnerLogos } from "@/lib/content";
import styles from "./partners.module.css";

export const metadata = { title: "Our Partners" };

const partnerTypes = [
  "Title Partner",
  "Co-Title Partner",
  "Powered By Partner",
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
      <section className="subhero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">OUR PARTNERS</div>
          <h1>Partnerships that make Manfest-Varchasva possible.</h1>
          <p>
            Manfest-Varchasva works with companies, governments, nonprofits and other organizations to bring to fruition Asia&apos;s largest B-School fest.
          </p>
        </div>
      </section>

      <section className={`section section-dark ${styles.partnerTypesSection}`}>
        <div className="page-shell">
          <SectionTitle
            eyebrow="OUR PARTNERS - 2025-26"
            title="An ecosystem built"
            accent="across categories."
            description="The partnership categories from the 2025-26 Manfest-Varchasva partner page."
          />

          <div className={styles.partnerTypeGrid}>
            {partnerTypes.map((type, index) => (
              <div className={styles.partnerTypeCard} key={type}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{type}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section section-light ${styles.logoSection}`}>
        <div className="page-shell">
          <SectionTitle
            eyebrow="PARTNER WALL"
            title="Our"
            accent="Partners"
            description="Partner logos currently available on the Manfest-Varchasva website."
          />
          <div className={`logo-grid logo-grid-large ${styles.logoGrid}`}>
            {partnerLogos.map((partner) => (
              <div className={`logo-card ${styles.logoCard}`} key={partner.name}>
                <Image src={partner.image} alt={partner.name} width={210} height={110} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
