import { GalleryLightbox } from "./GalleryLightbox";
import styles from "./gallery.module.css";

export const metadata = { title: "Gallery" };

const galleryPhotos = [
  "B1.jpg",
  "B2.jpg",
  "B3.jpg",
  "B6.jpg",
  "B7.jpg",
  "B8.jpg",
  "B9.jpg",
  "B10.jpg",
  "B11.jpg",
  "B12.jpg",
  "B13.jpg",
  "B14.jpg",
  "B15.jpg",
  "B16.jpg",
  "B17.jpg",
  "B18.jpg",
  "B19.jpg",
  "B20.jpg",
  "B21.jpg",
  "B22.jpg",
  "B23.jpg",
  "B24.jpg",
  "B25.jpg",
  "B26.jpg",
  "B27.jpg",
  "B28.jpg",
  "B29.jpg",
  "B30.jpg",
  "B31.jpg",
  "B32.jpg",
  "B33.jpg",
  "B34.jpg",
  "B35.jpg",
  "B36.jpg",
  "bismil.jpeg",
];

export default function GalleryPage() {
  return (
    <>
      <section className="subhero gallery-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">MV IN PICTURES</div>
          <h1>Moments that stayed.</h1>
          <p>Performances, speakers and memories across editions.</p>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <GalleryLightbox photos={galleryPhotos} />
      </section>
    </>
  );
}
