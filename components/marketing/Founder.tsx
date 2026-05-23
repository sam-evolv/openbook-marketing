import ui from "./ui.module.css";
import styles from "./Founder.module.css";

export default function Founder() {
  return (
    <section className={`${ui.section} ${styles.section}`}>
      <div className={ui.container}>
        <div className={styles.grid}>
          <div className={styles.portraitCol}>
            <div className={styles.portrait}>
              <span className={styles.monogram} aria-hidden="true">
                SD
              </span>
            </div>
          </div>

          <div className={styles.copy}>
            <p className={ui.sectionEyebrow}>From the founder</p>
            <h2 className={`${ui.sectionTitle} ${styles.title}`}>
              Built by a Cork gym owner, for Irish service businesses.
            </h2>

            <div className={styles.body}>
              <p>
                I run Evolv Performance, a gym in Cork. I watched my customers
                struggle to book with three different apps while I paid €180 a
                month for software I barely used.
              </p>
              <p>
                OpenBook is what I wished existed. Beautifully designed,
                ruthlessly priced, built around the AI assistants your customers
                already use every day.
              </p>
              <p>
                If it doesn&rsquo;t transform how you take bookings in your first
                month, just cancel. You&rsquo;ll have lost nothing.
              </p>
            </div>

            <p className={styles.signature}>— Sam Donworth</p>
            <p className={styles.role}>Founder, OpenHouse AI Limited</p>
          </div>
        </div>
      </div>
    </section>
  );
}
