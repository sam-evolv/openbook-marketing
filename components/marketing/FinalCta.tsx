import { ONBOARD_URL, CONTACT_EMAIL, CONTACT_MAILTO } from "./links";
import ui from "./ui.module.css";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.section}>
      <div className={styles.orb} aria-hidden="true" />
      <div className={ui.container}>
        <div className={styles.inner}>
          <h2 className={styles.headline}>
            Your booking page,{" "}
            <span className={ui.goldText}>live in 15 minutes.</span>
          </h2>
          <p className={styles.sub}>
            Free for 30 days. No card needed. Built in Ireland.
          </p>
          <div className={styles.ctaRow}>
            <a
              href={ONBOARD_URL}
              className={`${ui.btn} ${ui.btnPrimary} ${ui.btnLg}`}
            >
              Start my free month
              <span className={ui.arrow} aria-hidden="true">
                →
              </span>
            </a>
          </div>
          <p className={styles.note}>
            Or email{" "}
            <a href={CONTACT_MAILTO} className={styles.noteLink}>
              {CONTACT_EMAIL}
            </a>{" "}
            · typical reply within 2 hours
          </p>
        </div>
      </div>
    </section>
  );
}
