import ui from "./ui.module.css";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    num: "01",
    title: "Set up in 15 minutes",
    body: "Add your services, hours and prices. We generate your booking page, your WhatsApp bot, and connect your AI knowledge. No coding.",
    label: "Avg. setup time: 12 minutes",
  },
  {
    num: "02",
    title: "Your customers book directly",
    body: "They get a beautiful page, an icon on their phone home screen, and a WhatsApp number that books in seconds — branded as you, never as OpenBook.",
    label: "Zero training required",
  },
  {
    num: "03",
    title: "AI brings you new customers",
    body: "When someone asks ChatGPT, Claude, or Gemini for a salon in Cork tonight, you're the answer. The only Irish platform integrated with every major AI assistant.",
    label: "Industry first · Ireland",
  },
];

export default function HowItWorks() {
  return (
    <section className={`${ui.section} ${styles.section}`}>
      <div className={ui.container}>
        <div className={styles.head}>
          <p className={ui.sectionEyebrow}>How it works</p>
          <h2 className={ui.sectionTitle}>From signed up to fully booked.</h2>
        </div>

        <ol className={styles.cards}>
          {steps.map((s) => (
            <li key={s.num} className={styles.card}>
              <span className={styles.numeral} aria-hidden="true">
                {s.num}
              </span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardBody}>{s.body}</p>
              <span className={styles.label}>{s.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
