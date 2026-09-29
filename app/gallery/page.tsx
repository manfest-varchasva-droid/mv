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
        <div className={`page-shell ${styles.galleryGrid}`}>
          {galleryPhotos.map((file, index) => (
            <figure className={styles.galleryItem} key={file}>
              <img
                src={`/gallery/${file}`}
                alt={file === "bismil.jpeg" ? "Bismil at Manfest-Varchasva" : `Manfest-Varchasva gallery moment ${index + 1}`}
                loading={index < 3 ? "eager" : "lazy"}
                fetchPriority={index < 3 ? "high" : "auto"}
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
