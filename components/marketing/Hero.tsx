import { ONBOARD_URL, DEMO_URL } from "./links";
import ui from "./ui.module.css";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.orbTR} aria-hidden="true" />
      <div className={styles.orbBL} aria-hidden="true" />

      <div className={ui.container}>
        <div className={styles.fold}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            Built in Ireland · Live in 15 minutes
          </p>

          <h1 className={styles.headline}>
            <span className={styles.line1}>Your booking page,</span>
            <span className={styles.line2}>your website, your</span>
            <span className={styles.line3}>
              <span className={styles.gold}>WhatsApp bot.</span>
            </span>
          </h1>

          <p className={styles.price}>
            Everything a real business needs, for{" "}
            <span className={styles.priceNum}>€79</span> a month. No commission.
            Ever.
          </p>

          <div className={styles.ctas}>
            <a
              href={ONBOARD_URL}
              className={`${ui.btn} ${ui.btnPrimary}`}
            >
              Start my free month
              <span className={ui.arrow} aria-hidden="true">
                →
              </span>
            </a>
            <a href={DEMO_URL} className={`${ui.btn} ${ui.btnGhost}`}>
              See a live booking page
            </a>
          </div>

          <p className={styles.risk}>
            Free for 30 days. No card needed. Cancel from your dashboard,
            anytime.
          </p>

          <p className={styles.trust}>
            <span className={styles.trustDot} aria-hidden="true" />
            Built by an Irish gym owner. Pilot launching in Cork, May 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
