import Image from "next/image";
import Link from "next/link";
import styles from "@/app/festival-topics.module.css";

const journeys = [
  {
    href: "/concerts/",
    kicker: "LIVE MUSIC & CULTURE",
    title: "Concerts & Pro-Nights",
    description: "Meet past headliners and explore the live music heritage of the IIM Lucknow fest.",
    image: "/headliners/papon-final.jpg",
    alt: "Papon, featured in a past Manfest-Varchasva headliner lineup",
  },
  {
    href: "/leadership/",
    kicker: "IDEAS & CONVERSATIONS",
    title: "Leaders Express",
    description: "Discover past speakers and the festival's leadership conversations.",
    image: "/leaders/kapil-dev-final.jpg",
    alt: "Kapil Dev, a featured speaker in Manfest-Varchasva's Leaders Express history",
  },
  {
    href: "/management-competitions/",
    kicker: "BUSINESS & STRATEGY",
    title: "Management Competitions",
    description: "Learn about the case challenges, quizzes and simulations behind Manfest.",
    image: "/events/events hero.png",
    alt: "Manfest-Varchasva festival scene at IIM Lucknow",
  },
];

export function FestivalDiscover() {
  return (
    <section className={styles.discover} aria-labelledby="discover-festival">
      <div className={styles.shell}>
        <span className={styles.smallCaps}>Inside the IIM Lucknow festival</span>
        <h2 id="discover-festival">Discover Manfest-Varchasva: business, culture and live performance</h2>
        <p className={styles.discoverIntro}>
          Manfest-Varchasva is the annual business, cultural and sports festival of
          the <strong> Indian Institute of Management Lucknow (IIM Lucknow)</strong>.
          Scheduled for 5–7 February 2027, the festival brings together management
          competitions, leadership conversations, sports, campus culture and
          concert experiences. Explore its history and previous editions below.
        </p>
        <div className={styles.grid}>
          {journeys.map((item) => (
            <Link className={styles.topicCard} href={item.href} key={item.href}>
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 620px) 100vw, (max-width: 850px) 50vw, 33vw" />
              <span className={styles.smallCaps}>{item.kicker}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong>Explore this part of the fest →</strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
