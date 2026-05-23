import {
  CONSUMER_APP_URL,
  CONTACT_MAILTO,
  OPENHOUSE_URL,
} from "./links";
import ui from "./ui.module.css";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={ui.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.wordmark}>OpenBook</div>
            <p className={styles.tagline}>
              Built in Ireland by OpenHouse AI Limited.
            </p>
            <p className={styles.copyright}>© 2026. All rights reserved.</p>
          </div>

          <nav className={styles.col} aria-label="Product">
            <h3 className={styles.colHead}>Product</h3>
            <a href="#pricing" className={styles.link}>
              Pricing
            </a>
            <a href="#ai" className={styles.link}>
              AI distribution
            </a>
            <a href={CONSUMER_APP_URL} className={styles.link}>
              Consumer app
            </a>
          </nav>

          <nav className={styles.col} aria-label="Company">
            <h3 className={styles.colHead}>Company</h3>
            <a href={OPENHOUSE_URL} className={styles.link}>
              About OpenHouse AI
            </a>
            <a href="/privacy" className={styles.link}>
              Privacy
            </a>
            <a href="/terms" className={styles.link}>
              Terms
            </a>
            <a href={CONTACT_MAILTO} className={styles.link}>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
