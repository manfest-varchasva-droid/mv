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

export default function HomePage() {
  return (
    <>
      <div className={`${styles.loveloHero} ${titleFix.titlePaintFix}`}>
        <Hero />
      </div>
      <Headliners />
      <LeadersExpress />
      <OverTheYears />
      <Highlights />
      <HomeGalleryMarquee />
      <PartnerCarousel />
    </>
  );
}
