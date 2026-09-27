"use client";

import { useState } from "react";
import styles from "@/app/about/about.module.css";

const members = [
  { name: "Archit Bakshi", roll: "PGP41413", phone: "9910085443" },
  { name: "Arnav Gupta", roll: "PGP41356", phone: "9958225757" },
  { name: "Kritika Singh", roll: "PGP41199", phone: "6386531781" },
  { name: "Mehul Gupta", roll: "PGP41427", phone: "9910039109" },
  { name: "Nikita Jose", roll: "PGP41267", phone: "9789069386" },
  { name: "Paritala Laxmi Durga Bhavani", roll: "PGP41027", phone: "7416926438" },
  { name: "Prateek R", roll: "PGP41212", phone: "9481294454" },
  { name: "Priyanshu Fuloria", roll: "PGP41322", phone: "8218010898" },
  { name: "Rishi Shrivastava", roll: "PGP41095", phone: "7999628016" },
  { name: "Sai Dhanush Sayam", roll: "PGP41218", phone: "7989491054" },
  { name: "Sakshi Rai", roll: "PGP41501", phone: "9717814360" },
  { name: "Satvika Satish", roll: "PGP41101", phone: "9604029564" },
  { name: "Snehajit Dey", roll: "PGP41170", phone: "9064998064" },
  { name: "Susanth Lavudya", roll: "PGP41510", phone: "9966033437" },
  { name: "Sweta Yadav", roll: "PGP41282", phone: "8684893574" },
].map((member) => ({
  ...member,
  email: `${member.roll.toLowerCase()}@iiml.ac.in`,
}));

export function CoreTeamDirectory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = members[activeIndex];

  return (
    <div className={styles.directoryWrap}>
      <div className={styles.directoryIntro}>
        <div>
          <span className={styles.directoryEyebrow}>CORE TEAM DIRECTORY</span>
          <h3>Senior Coordinators</h3>
        </div>
        <p>Hover over a name, or tap on mobile, to view contact details.</p>
      </div>

      <div className={styles.directoryLayout}>
        <div className={styles.memberGrid}>
          {members.map((member, index) => (
            <button
              type="button"
              key={member.roll}
              className={`${styles.memberButton} ${index === activeIndex ? styles.memberButtonActive : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              aria-pressed={index === activeIndex}
            >
              <span>{member.name}</span>
            </button>
          ))}
        </div>

        <aside className={styles.contactPanel} aria-live="polite">
          <div className={styles.contactAccent} aria-hidden="true" />
          <span className={styles.contactKicker}>CONTACT</span>
          <h4>{active.name}</h4>

          <div className={styles.contactLinks}>
            <a href={`tel:+91${active.phone}`}>
              <span>PHONE</span>
              <strong>+91 {active.phone}</strong>
            </a>
            <a href={`mailto:${active.email}`}>
              <span>EMAIL</span>
              <strong>{active.email}</strong>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
