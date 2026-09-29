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
  // LOVELO TOGGLE: Lovelo is OFF now. To restore it, simply uncomment `true ||` below.
  const loveloEnabled =
    /* true || */
    false;

  return (
    <>
      <div className={loveloEnabled ? `${styles.loveloHero} ${titleFix.titlePaintFix}` : ""}>
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
