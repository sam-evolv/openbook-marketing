import { DEMO_URL } from "./links";
import ui from "./ui.module.css";
import styles from "./ProofOfCraft.module.css";

const services = [
  { name: "Personal training", meta: "45 min", price: "€55" },
  { name: "Small-group strength", meta: "60 min", price: "€22" },
  { name: "Free intro session", meta: "30 min", price: "Free" },
];

export default function ProofOfCraft() {
  return (
    <section className={`${ui.section} ${styles.section}`}>
      <div className={ui.container}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={ui.sectionEyebrow}>What you get</p>
            <h2 className={`${ui.sectionTitle} ${styles.title}`}>
              A booking page so good you&rsquo;ll send it to friends.
            </h2>
            <p className={`${ui.lead} ${styles.body}`}>
              Your services, your prices, your brand colour, your photos. Live
              at openbook.ie/yourname in 15 minutes. No web developer. No
              migration.
            </p>
            <a href={DEMO_URL} className={`${ui.btnText} ${styles.cta}`}>
              See a live booking page
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className={styles.shotWrap}>
            <div className={styles.browser} aria-hidden="true">
              <div className={styles.chrome}>
                <span className={styles.chromeDot} />
                <span className={styles.chromeDot} />
                <span className={styles.chromeDot} />
                <div className={styles.url}>openbook.ie/evolv-performance</div>
              </div>
              <div className={styles.page}>
                <div className={styles.bizHead}>
                  <div className={styles.bizIcon}>E</div>
                  <div>
                    <div className={styles.bizName}>Evolv Performance</div>
                    <div className={styles.bizMeta}>
                      Strength &amp; conditioning · Cork
                    </div>
                  </div>
                  <div className={styles.bizRating}>★ 4.9</div>
                </div>

                <div className={styles.sectionLabel}>Book a session</div>
                <div className={styles.svcList}>
                  {services.map((s) => (
                    <div key={s.name} className={styles.svc}>
                      <div>
                        <div className={styles.svcName}>{s.name}</div>
                        <div className={styles.svcMeta}>{s.meta}</div>
                      </div>
                      <div className={styles.svcRight}>
                        <span className={styles.svcPrice}>{s.price}</span>
                        <span className={styles.svcBook}>Book</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.pageFoot}>Powered by OpenBook</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
