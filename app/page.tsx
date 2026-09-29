import {
  GalleryPreview,
  Headliners,
  Hero,
  Highlights,
  LeadersExpress,
  OverTheYears,
  PartnersPreview,
} from "@/components/HomeSections";

// LOVELO RESTORE: uncomment these two imports and replace <Hero /> below with the commented wrapper.
// import styles from "./home-lovelo.module.css";
// import titleFix from "./home-title-fix.module.css";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* LOVELO RESTORE:
      <div className={`${styles.loveloHero} ${titleFix.titlePaintFix}`}>
        <Hero />
      </div>
      */}

      <Headliners />
      <LeadersExpress />
      <OverTheYears />
      <Highlights />
      <GalleryPreview />
      <PartnersPreview />
    </>
  );
}
