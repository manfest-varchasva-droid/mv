import Link from "next/link";
import styles from "./terms.module.css";

export const metadata = { title: "Terms & Conditions" };

const generalGuidelines = [
  "As all events will be conducted in a hybrid manner, some events will take place online and some will happen offline. Please check the specific event listing for complete details.",
  "Participants are expected to maintain decorum at all times",
  "Video of participants shall be kept on only at the discretion of event organizers",
  "Use of foul language or any inappropriate gestures will be dealt with seriously",
  "Participants need to be respectful of other participants on the call",
  "There shall be no refunds for any event under any circumstances",
  "The organizing committee will not be responsible for network issues on participant’s end, no refunds will be provided for the same",
  "Time of reward for event winners will be solely decided by the fest committee",
  "All participants are expected to maintain discipline and good conduct during the entire participation duration of the fest",
  "Event rules and rounds are subjected to change as per discretion of the judges",
  "Prize money is subject to fulfilment of sponsor commitments",
  "In case of any disputes, the decision taken by team Manfest-Varchasva would be final and binding",
];

const eventGuidelines = [
  "Event rules and rounds are subjected to change as per discretion of the judges",
  "Prize money is subject to fulfilment of sponsor commitments",
  "Any prizes - cash or kind will be disbursed within 6 months of the date of conclusion of event",
  "Participants are expected to maintain decorum while any interaction with other participants or dignitaries",
  "If any participant does not report at the mentioned time, his/her participation is subject to cancellation",
  "In case of any dispute, organizer’s decision shall be final",
  "Organizers hold the right to disqualify any participant in case of misconduct during the events",
];

const proshowGuidelines = [
  "Each pro-show e-pass admits one person only",
  "Passes are non-transferrable",
  "Artist line-up is subjected to change",
  "Use of foul language or inappropriate gesture will lead to immediate expulsion from the event",
];

function GuidelineSection({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: string[];
}) {
  return (
    <section className={styles.guidelineSection}>
      <div className={styles.sectionLabel}>{number}</div>
      <div>
        <h2>{title}</h2>
        <ul className={styles.guidelineList}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <>
      <section className="subhero event-detail-hero">
        <div className="page-shell subhero-content">
          <div className="eyebrow">PARTICIPATION POLICY</div>
          <h1>Terms &amp; Conditions</h1>
          <p>Guidelines for Manfest-Varchasva events, competitions and pro-shows.</p>
        </div>
      </section>

      <main className={styles.page}>
        <div className="page-shell">
          <div className={styles.introBar}>
            <span>MANFEST-VARCHASVA</span>
            <p>Please read the applicable guidelines before participating in any event.</p>
          </div>

          <GuidelineSection number="01" title="General Guidelines" items={generalGuidelines} />
          <GuidelineSection number="02" title="Event Guidelines" items={eventGuidelines} />
          <GuidelineSection number="03" title="Proshows Guidelines" items={proshowGuidelines} />

          <div className={styles.backRow}>
            <Link className="btn btn-primary" href="/events">Back to events</Link>
            <Link className={styles.cityRunLink} href="/city-run">City Run archive →</Link>
          </div>
        </div>
      </main>
    </>
  );
}
