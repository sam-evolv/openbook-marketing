import { ONBOARD_URL } from "./links";
import ui from "./ui.module.css";
import styles from "./MidCta.module.css";

export default function MidCta() {
  return (
    <section className={styles.section}>
      <div className={ui.container}>
        <div className={styles.inner}>
          <a href={ONBOARD_URL} className={`${ui.btn} ${ui.btnPrimary} ${styles.cta}`}>
            See your own booking page in the next 15 minutes
            <span className={ui.arrow} aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
