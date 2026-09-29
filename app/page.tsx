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

export default function HomePage() {
  return (
    <>
      <div className={styles.loveloHero}>
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
