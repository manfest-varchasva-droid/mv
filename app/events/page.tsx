import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { events } from "@/lib/content";
import styles from "./events.module.css";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore cultural, literary, management and leadership events at Manfest-Varchasva 2027, IIM Lucknow.",
  alternates: {
    canonical: "/events/",
  },
  openGraph: {
    url: "/events/",
    title: "Events | Manfest-Varchasva 2027",
    description:
      "Explore cultural, literary, management and leadership events at Manfest-Varchasva 2027, IIM Lucknow.",
  },
};

const managementUnstopUrl =
  "https://unstop.com/college-fests/manfest-varchasva-2025-26-indian-institute-of-management-iim-lucknow-430632";

const cardDescriptions: Record<string, string> = {
  "campus-ambassador":
    "Represent Manfest-Varchasva on your campus, drive participation and expand the fest’s reach through your student network.",
  vibes:
    "The flagship solo freestyle dance competition where individual performers bring their own style, energy and stage presence.",
  imperio:
    "A Western group dance showdown built around synchronized choreography, raw energy and commanding stage presence.",
  "duex-danza":
    "A freestyle duet dance competition where two performers combine chemistry, creativity and rhythm to own the stage.",
  taal:
    "Indian Classical and Folk group dance where technical precision, tradition and expressive storytelling come together.",
  jashn:
    "The iconic fashion parade where teams turn confidence, styling and storytelling into a complete runway performance.",
  antarnaad:
    "A short-film and vlog-making competition for creators who can turn ideas, experiences and narratives into memorable stories.",
  "halla-bol":
    "The flagship street-play competition where teams use nukkad natak, emotion and performance to deliver a powerful message.",
  izhaar:
    "A solo acting competition where performers bring stories and characters alive through narration or method acting.",
  "stairway-to-hell":
    "A live band competition where teams bring musicianship, energy and stage presence to the Manfest-Varchasva music arena.",
  sur:
    "A solo singing competition where vocalists take the spotlight with their voice, musicality and individual performance style.",
  "the-joust":
    "The annual debate competition that tests argumentation, rebuttal, persuasion and the ability to think on your feet.",
  rohan:
    "A flagship spoken-poetry competition where original Hindi or English verse becomes a platform for voice, emotion and expression.",
  "iim-lucknow-mun":
    "Step into global diplomacy across Lok Sabha, UNGA and UNHRC while testing public speaking, negotiation and leadership.",
  "young-leaders-programme":
    "A three-day leadership programme to learn from distinguished leaders, exchange ideas and build a network of aspiring changemakers.",
};

function categoryId(category: string) {
  return `category-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

export default function EventsPage() {
  const categories = [...new Set([...events.map((event) => event.category), "Management"])].sort((a, b) =>
    a.localeCompare(b, "en", { sensitivity: "base" })
  );

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

          <Link className={styles.termsLink} href="/terms-and-conditions">
            Terms &amp; Conditions →
          </Link>
        </div>
      </section>

      <section className={`section section-dark ${styles.listingSection}`}>
        <div className="page-shell">
          <SectionTitle eyebrow="EXPLORE" title="All" accent="Events" />

          <div className={styles.eventDirectory}>
            {categories.flatMap((category) => {
              if (category === "Management") {
                return [
                  <a
                    className={styles.eventCard}
                    href={managementUnstopUrl}
                    target="_blank"
                    rel="noreferrer"
                    id={categoryId(category)}
                    key="management-events"
                  >
                    <span>Management</span>
                    <h3>Management Events</h3>
                    <p>Explore the complete management competition line-up, details and registrations on Unstop.</p>
                    <b>Unstop Link &gt;&gt;</b>
                  </a>,
                ];
              }

              return events
                .filter((event) => event.category === category)
                .map((event, index) => (
                  <Link
                    className={styles.eventCard}
                    href={`/events/${event.slug}`}
                    id={index === 0 ? categoryId(category) : undefined}
                    key={event.slug}
                  >
                    <span>{event.category}</span>
                    <h3>{event.name}</h3>
                    <p>{cardDescriptions[event.slug] ?? event.blurb}</p>
                    <b>View event →</b>
                  </Link>
                ));
            })}
          </div>
        </div>
      </section>
    </>
  );
}
