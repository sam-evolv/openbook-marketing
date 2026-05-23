import ui from "./ui.module.css";
import styles from "./Comparison.module.css";

const without = [
  { name: "Phorest booking software", price: "€99/mo" },
  { name: "Squarespace + maintenance", price: "€45/mo" },
  { name: "WhatsApp Business setup", price: "€35/mo" },
  { name: "AI assistant integration", price: "not possible" },
  { name: "SMS reminders", price: "€25/mo" },
  { name: "Per-staff fees (3 staff)", price: "€45/mo" },
];

const withOpenbook = [
  "Booking page + smart calendar",
  "Custom website — we build it",
  "Dedicated WhatsApp bot",
  "ChatGPT, Claude, Gemini distribution",
  "SMS + email reminders",
  "Unlimited staff & services",
];

function Check() {
  return (
    <svg
      className={styles.check}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10.5l4 4 8-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Comparison() {
  return (
    <section className={`${ui.section} ${styles.section}`}>
      <div className={ui.container}>
        <div className={styles.head}>
          <p className={ui.sectionEyebrow}>What you&rsquo;d otherwise pay</p>
          <h2 className={ui.sectionTitle}>
            Four bills. One bundle.{" "}
            <span className={ui.goldText}>Save €170 a month.</span>
          </h2>
        </div>

        <div className={styles.cards}>
          <div className={`${styles.card} ${styles.cardWithout}`}>
            <div className={styles.cardLabel}>Without OpenBook</div>
            <ul className={styles.rows}>
              {without.map((r) => (
                <li key={r.name} className={styles.rowStrike}>
                  <span className={styles.strikeName}>{r.name}</span>
                  <span className={styles.leader} aria-hidden="true" />
                  <span className={styles.strikePrice}>{r.price}</span>
                </li>
              ))}
            </ul>
            <div className={styles.divider} />
            <div className={styles.totalWithout}>
              <span>Monthly total</span>
              <span className={styles.leaderTotal} aria-hidden="true" />
              <span className={styles.totalWithoutNum}>€249/mo</span>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardWith}`}>
            <div className={`${styles.cardLabel} ${styles.cardLabelGold}`}>
              With OpenBook Complete
            </div>
            <ul className={styles.rows}>
              {withOpenbook.map((f) => (
                <li key={f} className={styles.rowFeature}>
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className={`${styles.divider} ${styles.dividerGold}`} />
            <div className={styles.totalWith}>
              <span>Monthly total</span>
              <span
                className={`${styles.leaderTotal} ${styles.leaderTotalGold}`}
                aria-hidden="true"
              />
              <span className={styles.totalWithNum}>€79</span>
            </div>
          </div>
        </div>

        <p className={styles.kicker}>You keep the difference. Forever.</p>
      </div>
    </section>
  );
}
