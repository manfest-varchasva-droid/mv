import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { stats } from "@/lib/content";
import styles from "./about.module.css";

export const metadata = { title: "About us" };

export default function AboutPage() {
  return (
    <>
      <section className="subhero subhero-about">
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

        <div className="page-shell stats-grid compact-stats">
          {stats.map((item) => (
            <div className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="page-shell split-copy">
          <SectionTitle
            eyebrow="HOW IT ALL STARTED"
            title="From Manfest to"
            accent="Manfest-Varchasva."
          />

          <div className="info-stack">
            <div className="info-card">
              <span>1988</span>
              <strong>Manfest begins</strong>
              <p>
                Manfest started as IIM Lucknow&apos;s management festival, bringing together leadership competitions, paper presentations, debates and industry-student interactions.
              </p>
            </div>

            <div className="info-card">
              <span>2007–2009</span>
              <strong>Scale and recognition</strong>
              <p>
                Manfest received ISO 9001:2000 certification for event management in 2007. By 2009, it had grown into one of Asia&apos;s largest B-school festivals by prize money and participation.
              </p>
            </div>

            <div className="info-card">
              <span>2009</span>
              <strong>Varchasva is born</strong>
              <p>
                Varchasva began as IIM Lucknow&apos;s cultural and sports festival, spanning dance, fashion, theatre, music, literature and sport.
              </p>
            </div>

            <div className="info-card">
              <span>2014</span>
              <strong>Two festivals become one</strong>
              <p>
                Manfest and Varchasva merged to create Manfest-Varchasva, combining the intensity of business competition with culture, sport and entertainment in one campus-wide festival.
              </p>
            </div>

            <div className="info-card">
              <span>Today</span>
              <strong>Built bigger every year</strong>
              <p>
                Successive student teams continue to build on that legacy, growing the scale, energy and reach of Manfest-Varchasva with every edition.
              </p>
            </div>
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
            <Image
              src="/about/mv-core-team-2026.webp"
              alt="Manfest-Varchasva Core Team at IIM Lucknow"
              width={1400}
              height={933}
              sizes="(max-width: 820px) calc(100vw - 28px), 1180px"
              unoptimized
            />
          </div>
        </div>
      </section>
    </>
  );
}
