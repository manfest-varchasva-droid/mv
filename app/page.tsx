import type { Metadata } from "next";
import {
  Headliners,
  Hero,
  Highlights,
  LeadersExpress,
  OverTheYears,
} from "@/components/HomeSections";
import { HomeGalleryMarquee } from "@/components/HomeGalleryMarquee";
import { PartnerCarousel } from "@/components/PartnerCarousel";
import styles from "./home-lovelo.module.css";
import titleFix from "./home-title-fix.module.css";
import cinematic from "./home-cinematic.module.css";
import { CinematicHero } from "@/components/CinematicHero";
import { ScrollStory } from "@/components/ScrollStory";
import { FestivalDiscover } from "@/components/FestivalDiscover";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": "https://iiml-manfestvarchasva.com/#festival-2027",
  name: "Manfest-Varchasva 2027",
  description: "IIM Lucknow's annual business, cultural and sports festival featuring management competitions, leadership sessions, concerts and cultural events.",
  url: "https://iiml-manfestvarchasva.com/",
  image: "https://iiml-manfestvarchasva.com/opengraph-image.png",
  startDate: "2027-02-05",
  endDate: "2027-02-07",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Indian Institute of Management Lucknow",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Prabandh Nagar",
      addressLocality: "Lucknow",
      postalCode: "226013",
      addressCountry: "IN",
    },
  },
  organizer: { "@id": "https://iiml-manfestvarchasva.com/#organization" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <CinematicHero className={`${styles.loveloHero} ${titleFix.titlePaintFix} ${cinematic.cinematicHero}`}>
        <Hero />
      </CinematicHero>
      <Headliners />
      <LeadersExpress />
      <OverTheYears />
      <ScrollStory />
      <Highlights />
      <FestivalDiscover />
      <HomeGalleryMarquee />
      <PartnerCarousel />
    </>
  );
}
