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

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <CinematicHero className={`${styles.loveloHero} ${titleFix.titlePaintFix} ${cinematic.cinematicHero}`}>
        <Hero />
      </CinematicHero>
      <Headliners />
      <LeadersExpress />
      <OverTheYears />
      <ScrollStory />
      <Highlights />
      <HomeGalleryMarquee />
      <PartnerCarousel />
    </>
  );
}
