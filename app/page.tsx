import {
  GalleryPreview,
  Headliners,
  Hero,
  Highlights,
  LeadersExpress,
  OverTheYears,
  PartnersPreview,
} from "@/components/HomeSections";
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
      <GalleryPreview />
      <PartnersPreview />
    </>
  );
}
