import ui from "./ui.module.css";
import styles from "./LossFrame.module.css";

const cards = [
  {
    numeral: "1h+",
    title: "Lost every evening",
    body: "To manual back-and-forth on WhatsApp, Instagram, and SMS.",
  },
  {
    numeral: "32%",
    title: "Of messages go cold",
    body: "Customers who don't get a reply within an hour book elsewhere.",
  },
  {
    numeral: "€2.4k",
    title: "Average annual loss",
    body: "From missed evening bookings alone. OpenBook pays for itself in week one.",
  },
];

export default function LossFrame() {
  return (
    <section className={`${ui.section} ${styles.section}`}>
      <div className={ui.container}>
        <div className={styles.head}>
          <p className={ui.sectionEyebrow}>What it costs you now</p>
          <h2 className={`${ui.sectionTitle} ${styles.title}`}>
            Every evening you don&rsquo;t have OpenBook, you&rsquo;re losing
            money.
          </h2>
          <p className={`${ui.lead} ${styles.sub}`}>
            Manual WhatsApp back-and-forth doesn&rsquo;t scale. While you&rsquo;re
            with a client, customers wait. While you sleep, they go elsewhere.
          </p>
        </div>

        <div className={styles.cards}>
          {cards.map((c) => (
            <div key={c.title} className={styles.card}>
              <div className={styles.numeral}>{c.numeral}</div>
              <div className={styles.cardTitle}>{c.title}</div>
              <p className={styles.cardBody}>{c.body}</p>
            </div>
          ))}
        </div>

        <p className={styles.footnote}>
          Estimates based on typical Irish service business pricing and observed
          booking patterns. Your numbers may differ.
        </p>
      </div>
    </section>
  );
}
