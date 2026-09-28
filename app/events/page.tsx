import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { events } from "@/lib/content";
import styles from "./events.module.css";

export const metadata = { title: "Events" };

function categoryId(category: string) {
  return `category-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

export default function EventsPage() {
  const categories = [...new Set(events.map((event) => event.category))];

  return (
    <>
      <section className="subhero events-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">THE LINE-UP</div>
          <h1>Find your stage.</h1>
          <p>Cultural, literary, management and leadership formats under one roof.</p>

          <nav className={styles.categoryNav} aria-label="Event categories">
            {categories.map((category) => (
              <a className={styles.categoryButton} href={`#${categoryId(category)}`} key={category}>
                {category}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section section-dark">
        <div className="page-shell">
          <SectionTitle eyebrow="EXPLORE" title="All" accent="Events" />
          {categories.map((category) => (
            <div
              className={`event-category ${styles.categorySection}`}
              id={categoryId(category)}
              key={category}
            >
              <h2>{category}</h2>
              <div className="event-grid">
                {events
                  .filter((event) => event.category === category)
                  .map((event) => (
                    <Link className="event-card" href={`/events/${event.slug}`} key={event.slug}>
                      <span>{event.category}</span>
                      <h3>{event.name}</h3>
                      <p>{event.blurb}</p>
                      <b>View event →</b>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
