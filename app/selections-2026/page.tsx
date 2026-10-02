import styles from "./selections.module.css";

export const metadata = {
  title: "Selections 2026",
  description: "Round 2 task guidelines and task list for Manfest-Varchasva selections 2026.",
};

type TaskRow = {
  label: string;
  note?: string;
  folder: string;
  filePrefix: string;
  extension?: "pdf" | "jpg";
};

const timelines = ["T-100", "T-50", "T-10", "T-0"] as const;

const taskRows: TaskRow[] = [
  { label: "Creatives", folder: "creatives", filePrefix: "Creatives" },
  { label: "Media&PR", folder: "mpr", filePrefix: "MPR" },
  { label: "Dance", note: "*", folder: "dance", filePrefix: "Dance" },
  { label: "Literary", note: "*#", folder: "literary", filePrefix: "Literary" },
  { label: "Music", note: "*#", folder: "music", filePrefix: "Music" },
  { label: "Fashion Parade", note: "*#", folder: "fashion", filePrefix: "Fashion" },
  { label: "Theatre", note: "*#", folder: "theatre", filePrefix: "Theatre" },
  { label: "Entertainment", folder: "ent", filePrefix: "Ent" },
  { label: "LeadEx", folder: "leadex", filePrefix: "LeadEx" },
  { label: "Management Events", folder: "manev", filePrefix: "ManEv" },
  { label: "Operations", folder: "ops", filePrefix: "Ops" },
  { label: "P&H", folder: "pnh", filePrefix: "PnH", extension: "jpg" },
];

function taskHref(row: TaskRow, timeline: (typeof timelines)[number]) {
  const extension = row.extension ?? "pdf";
  return `/selections-2026/${row.folder}/${row.filePrefix}_${timeline}.${extension}`;
}

export default function Selections2026Page() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <img
          className={styles.bodyHeader}
          src="/selections-2026/header.png"
          alt="Manfest-Varchasva 2026-27"
        />

        <article className={styles.contentCard}>
          <section className={styles.intro}>
            <p>Greetings from <strong>Team Manfest-Varchasva!</strong></p>
            <p>
              Further to your vertical selections, we invite you to a small task round (Round 2).
              <strong> Deadline: 19:00 PM</strong>
            </p>
          </section>

          <section className={styles.section}>
            <h1>Task Guidelines</h1>
            <p>
              There are 10 verticals and horizontals and 4 timelines (T-100, T-50, T-10, T-0). The timelines mean the
              number of days to the fest from which you need to plan for the event. For e.g. a Management_Event_T100 task
              means that you are planning for a management event task from 100 days before the fest.
            </p>

            <ol className={styles.guidelines}>
              <li>You need to select two verticals/horizontals that you are interested in.</li>
              <li>
                From each vertical, you must complete at least one task, at most 2 tasks (so minimum 2 tasks and maximum
                4 tasks in total).
              </li>
              <li>
                The timelines of the mandatory tasks cannot overlap between the two verticals.
                <span className={styles.example}>
                  Example: If you choose Creatives and MPR, and you do the T-100 task for Creatives, then you cannot do
                  the T-100 task for MPR.
                </span>
              </li>
            </ol>

            <div className={styles.noteBox}>
              <p><strong>*</strong> You can choose a maximum of 2 verticals from the 3 - Fashp &amp; Theatre, Lit &amp; Music and Dance verticals.</p>
              <p><strong>#</strong> You can not choose both Fashp and Theatre verticals or both Lit and Music verticals.</p>
            </div>

            <p>Your evaluation will be based on both the quality and quantity of tasks you submit.</p>
            <p>
              Go through the task pdfs listed below carefully, and formulate the deliverable write-ups/designs in
              <strong> .doc/.docx/.pdf/.ppt/.pptx/.xls/.xlsx</strong> format.
            </p>
            <p>
              If you have multiple files for a single task, upload them in <strong>.zip/.rar</strong> format.
            </p>
            <p>
              Each task write-up is deliverable in .doc/.docx/.pdf/.ppt/.pptx format named as
              <strong> &lt;taskname&gt;_&lt;yourname&gt;.doc/.docx/.pdf/.ppt/.pptx</strong>. For example, John Doe would rename
              the deliverable for LeadEx_T10 as LeadEx_T10_John Doe.doc/.docx/.pdf/.ppt/.pptx.
            </p>
            <p>
              If you have multiple attachments for a single task, compress them in a folder named using the same naming
              convention as above and convert it into a .zip package.
            </p>
            <p>
              The submissions have to be made in the google classroom in the respective vertical tasks. For example: For
              submission of any Operations vertical tasks, you will make a submission in the Google Classroom assignment
              “Round2_Operations”.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Task List</h2>
            <div className={styles.tableScroll}>
              <table className={styles.taskTable}>
                <thead>
                  <tr className={styles.topHeader}>
                    <th>Vertical</th>
                    <th colSpan={4}>Tasks</th>
                  </tr>
                  <tr className={styles.timelineHeader}>
                    <th>Timeline</th>
                    {timelines.map((timeline) => <th key={timeline}>{timeline}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {taskRows.map((row) => (
                    <tr key={row.label}>
                      <td className={styles.verticalName}>
                        {row.label}{row.note ? <sup>{row.note}</sup> : null}
                      </td>
                      {timelines.map((timeline) => (
                        <td key={timeline}>
                          <a href={taskHref(row, timeline)} target="_blank" rel="noreferrer">
                            {row.filePrefix}_{timeline}
                          </a>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.closing}>
            <p>
              This round is designed to be analytical, informative and indicative of the kind of work we do while
              conceptualizing and planning every aspect of Manfest-Varchasva before moving on to managing the execution.
              We trust you will find it interesting and the tasks will give you a flavor of the kind of work we have
              through the year. Please do not hesitate to contact us in case of any issues or clarifications.
            </p>
          </section>
        </article>

        <img
          className={styles.bodyFooter}
          src="/selections-2026/footer.png"
          alt="Manfest-Varchasva footer"
        />
      </div>
    </main>
  );
}
