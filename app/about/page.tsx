import { CoreTeamDirectory } from "@/components/CoreTeamDirectory";
import { SectionTitle } from "@/components/SectionTitle";
import { stats } from "@/lib/content";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import styles from "./about.module.css";
import { preload } from "react-dom";

export const metadata = { title: "About us" };

const history = [
  {
    year: "1988",
    title: "Manfest begins",
    copy: "Manfest started as IIM Lucknow's management festival, bringing together leadership competitions, paper presentations, debates and industry-student interactions.",
  },
  {
    year: "2007–2009",
    title: "Scale and recognition",
    copy: "Manfest received ISO 9001:2000 certification for event management in 2007. By 2009, it had grown into one of Asia's largest B-school festivals by prize money and participation.",
  },
  {
    year: "2009",
    title: "Varchasva is born",
    copy: "Varchasva began as IIM Lucknow's cultural and sports festival, spanning dance, fashion, theatre, music, literature and sport.",
  },
  {
    year: "2014",
    title: "Two festivals become one",
    copy: "Manfest and Varchasva merged to create Manfest-Varchasva, combining the intensity of business competition with culture, sport and entertainment in one campus-wide festival.",
  },
  {
    year: "Today",
    title: "Built bigger every year",
    copy: "Successive student teams continue to build on that legacy, growing the scale, energy and reach of Manfest-Varchasva with every edition.",
  },
];

export default function AboutPage() {
  preload("/events/about us hero.jpg", { as: "image" });

  return (
    <>
      <section
        className="subhero subhero-about"
        style={{
          minHeight: "100svh",
          backgroundImage:
            'linear-gradient(90deg, rgba(6, 7, 15, 0.88) 0%, rgba(6, 7, 15, 0.62) 48%, rgba(6, 7, 15, 0.34) 100%), url("/events/about us hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="page-shell subhero-content">
          <div className="eyebrow">ABOUT US</div>
          <h1>Where business, culture and sport meet.</h1>
          <p>
            Manfest-Varchasva is IIM Lucknow&apos;s official annual business, cultural and sports festival.
          </p>
        </div>
      </section>

      <section className="section section-ink">
        <div className="page-shell split-copy">
          <SectionTitle
            eyebrow="WHO WE ARE"
            title="One festival."
            accent="Three worlds."
          />
          <div className="prose-block">
            <p>
              Manfest-Varchasva is the official annual Business, Cultural and Sports Festival of IIM Lucknow. The three-day event brings together Manfest, the Business Conclave, and Varchasva, the Cultural and Sports Festival.
            </p>
            <p>
              The festival has welcomed more than 30,000 participants in a single edition and has hosted leaders from public life, business and academia alongside some of India&apos;s most recognised performers.
            </p>
            <p>
              Across the three days, the campus comes alive with sports, speaker sessions, management competitions, cultural showcases, pro-shows and community initiatives such as the Lucknow City Run.
            </p>
          </div>
        </div>

        <div className={`page-shell ${styles.aboutStats}`}>
          {stats.map((item) => (
            <div className={styles.aboutStat} key={item.label}>
              <strong
                style={
                  item.label === "Participants"
                    ? { fontSize: "clamp(34px, 3.55vw, 50px)", letterSpacing: "-2.8px" }
                    : undefined
                }
              >
                <AnimatedNumber value={item.value} />
              </strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`section section-dark ${styles.historySection}`}>
        <div className="page-shell">
          <SectionTitle
            eyebrow="HOW IT ALL STARTED"
            title="From Manfest to"
            accent="Manfest-Varchasva."
          />

          <div className={styles.historyGrid}>
            {history.map((item) => (
              <article className={styles.historyItem} key={`${item.year}-${item.title}`}>
                <div className={styles.historyMarker} aria-hidden="true" />
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section section-ink ${styles.teamSection}`}>
        <div className="page-shell">
          <SectionTitle
            eyebrow="THE TEAM"
            title="Meet the"
            accent="Manfest-Varchasva Core Team"
          />

          <div className={styles.teamPhoto}>
            <img
              src="/events/core team photo.JPG?v=core-team-fast-2026-10-02"
              alt="Manfest-Varchasva Core Team at IIM Lucknow"
              width={800}
              height={533}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </div>

          <CoreTeamDirectory />
        </div>
      </section>
    </>
  );
}
