import Image from "next/image";
import styles from "./partners.module.css";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Our Partners",
  description:
    "Explore the organisations that have partnered with Manfest-Varchasva, IIM Lucknow's annual business, cultural and sports festival.",
  alternates: {
    canonical: "/partners/",
  },
  openGraph: {
    url: "/partners/",
    images: ["/events/partners hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/events/partners hero.png"],
  },
};

type Sponsor = {
  name: string;
  logo: string;
};

type PartnerGroup = {
  title: string;
  sponsors: Sponsor[];
};

const titlePartner: PartnerGroup = {
  title: "Title Partner",
  sponsors: [{ name: "Axis Bank", logo: "/partners/axis-bank.svg" }],
};

const secondaryPartners: PartnerGroup[] = [
  {
    title: "Co-Title Partner",
    sponsors: [{ name: "Flipkart Minutes", logo: "/partners/Flipkart minutes.jpg" }],
  },
  {
    title: "Powered By Partner",
    sponsors: [{ name: "ODOP", logo: "/partners/ODOP.jpg" }],
  },
];

const featuredPartners: PartnerGroup[] = [
  {
    title: "Lucknow City Run Title Partner",
    sponsors: [{ name: "Social Welfare", logo: "/partners/Social Welfare (1).png" }],
  },
  {
    title: "Ticketing Partner",
    sponsors: [{ name: "District", logo: "/partners/district.png" }],
  },
  {
    title: "Concerts Partner",
    sponsors: [{ name: "Coke Studio", logo: "/partners/coke_studio.png" }],
  },
  {
    title: "Social Impact Partner",
    sponsors: [{ name: "Pranyas", logo: "/partners/Pranyas.PNG" }],
  },
  {
    title: "Investment Partner",
    sponsors: [{ name: "Invest UP", logo: "/partners/invest up.png" }],
  },
  {
    title: "Development Partner",
    sponsors: [{ name: "LDA", logo: "/partners/lda.png" }],
  },
  {
    title: "Tourism Partner",
    sponsors: [{ name: "UP Tourism", logo: "/partners/up_tourism.png" }],
  },
  {
    title: "Jewellery Partner",
    sponsors: [{ name: "Sahu Jewellers", logo: "/partners/sahu jewellers.png" }],
  },
  {
    title: "Vegan Beauty Partner",
    sponsors: [{ name: "Plum", logo: "/partners/plum.png" }],
  },
  {
    title: "Associate Partners",
    sponsors: [
      { name: "LIC", logo: "/partners/LIC-Logo (1).jpg" },
      { name: "SBI", logo: "/partners/sbi.png" },
      { name: "CBI", logo: "/partners/cbi.png" },
    ],
  },
];

const supportingPartners: PartnerGroup[] = [
  {
    title: "Desi Snacks Partner",
    sponsors: [{ name: "Go Desi", logo: "/partners/go desi.png" }],
  },
  {
    title: "Creator Tech Partner",
    sponsors: [{ name: "Digitek", logo: "/partners/digitek_logo.jpeg" }],
  },
  {
    title: "Logistics Partner",
    sponsors: [{ name: "Safexpress", logo: "/partners/Safe-Express.png" }],
  },
  {
    title: "Herbal Care Partner",
    sponsors: [{ name: "Jovees", logo: "/partners/Jovees (1).jpg" }],
  },
  {
    title: "Poker Partner",
    sponsors: [{ name: "Tilt", logo: "/partners/tilt.png" }],
  },
  {
    title: "NGO Partner",
    sponsors: [{ name: "Kiran Foundation", logo: "/partners/Kiran-Foundation.png" }],
  },
  {
    title: "Management Events Partner",
    sponsors: [{ name: "LSG", logo: "/partners/LSG.png" }],
  },
  {
    title: "Radio Partner",
    sponsors: [{ name: "Mirchi", logo: "/partners/mirchi_logo.jpg" }],
  },
  {
    title: "Banking Partner",
    sponsors: [{ name: "UBI", logo: "/partners/ubi.png" }],
  },
  {
    title: "Books Partner",
    sponsors: [{ name: "Crossword", logo: "/partners/crossword-bookstores-seeklogo (1).png" }],
  },
  {
    title: "Entertainment Partner",
    sponsors: [{ name: "Funtura", logo: "/partners/Funtura logo (1).png" }],
  },
  {
    title: "Music Streaming Partner",
    sponsors: [{ name: "JioSaavn", logo: "/partners/Jio Saavn Logo (3) (1).png" }],
  },
  {
    title: "Memories Partner",
    sponsors: [{ name: "Instax", logo: "/partners/Instax logo.jpeg" }],
  },
  {
    title: "Nutrition Partner",
    sponsors: [{ name: "Phab", logo: "/partners/phab blue logo 1.png" }],
  },
  {
    title: "Urban Outreach and Engagement Partner",
    sponsors: [{ name: "SUDA", logo: "/partners/suda.png" }],
  },
  {
    title: "Travel Partner",
    sponsors: [{ name: "Ixigo", logo: "/partners/ixigo.png" }],
  },
  {
    title: "Social Media Partner",
    sponsors: [{ name: "Eye Media", logo: "/partners/eye media solutions.png" }],
  },
  {
    title: "Gourmet Partner",
    sponsors: [{ name: "Roastery", logo: "/partners/roastery.png" }],
  },
  {
    title: "Media Partners",
    sponsors: [
      { name: "Amar Ujala", logo: "/partners/Amar Ujala black (1).jpg" },
      { name: "ABP", logo: "/partners/abp.png" },
      { name: "Business Standard", logo: "/partners/bs.png" },
    ],
  },
  {
    title: "General Partners",
    sponsors: [
      { name: "EIC", logo: "/partners/eic.png" },
      { name: "KitKat", logo: "/partners/KITKAT LOGO.png" },
      { name: "UPSDM", logo: "/partners/upsdm.png" },
      { name: "UPSRTC", logo: "/partners/upsrtc.jpg" },
    ],
  },
];

function LogoCard({ sponsor }: { sponsor: Sponsor }) {
  const isAxisBank = sponsor.name === "Axis Bank";

  return (
    <div className={styles.logoStage}>
      <div className={styles.logoTile}>
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={600}
          height={300}
          sizes="(max-width: 520px) 92vw, (max-width: 720px) 88vw, (max-width: 1040px) 44vw, 30vw"
          quality={75}
          preload={isAxisBank}
          unoptimized={isAxisBank}
        />
      </div>
    </div>
  );
}

function PartnerCard({ partner, className }: { partner: PartnerGroup; className: string }) {
  const isMulti = partner.sponsors.length > 1;

  if (isMulti) {
    return (
      <article className={`${className} ${styles.multiPartnerGroup}`}>
        <span className={styles.partnerLabel}>{partner.title}</span>
        <div
          className={`${styles.multiLogoGrid} ${
            partner.sponsors.length === 4 ? styles.multiLogoGridFour : styles.multiLogoGridThree
          }`}
        >
          {partner.sponsors.map((sponsor) => (
            <LogoCard sponsor={sponsor} key={sponsor.name} />
          ))}
        </div>
      </article>
    );
  }

  return (
    <article className={className}>
      <span className={styles.partnerLabel}>{partner.title}</span>
      <LogoCard sponsor={partner.sponsors[0]} />
    </article>
  );
}

export default function PartnersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Our Partners", href: "/partners/" }]} />
      <section
        className={`subhero ${styles.partnersHero}`}
        style={{
          minHeight: "100svh",
          backgroundImage:
            'linear-gradient(90deg, rgba(6, 7, 15, 0.60) 0%, rgba(6, 7, 15, 0.30) 46%, rgba(6, 7, 15, 0.10) 100%), linear-gradient(180deg, rgba(6, 7, 15, 0.02) 0%, rgba(6, 7, 15, 0.24) 100%), url("/events/partners hero.png")',
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
            <PartnerCard partner={titlePartner} className={styles.titlePartnerSlot} />
          </div>

          <div className={styles.secondaryTier}>
            {secondaryPartners.map((partner) => (
              <PartnerCard partner={partner} className={styles.secondaryPartnerSlot} key={partner.title} />
            ))}
          </div>

          <div className={styles.featuredTier}>
            {featuredPartners.map((partner) => (
              <PartnerCard partner={partner} className={styles.featuredPartnerSlot} key={partner.title} />
            ))}
          </div>

          <div className={styles.supportingTier}>
            {supportingPartners.map((partner) => (
              <PartnerCard partner={partner} className={styles.supportingPartnerSlot} key={partner.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
