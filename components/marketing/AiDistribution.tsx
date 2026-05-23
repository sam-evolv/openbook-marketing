import ui from "./ui.module.css";
import styles from "./AiDistribution.module.css";

export default function AiDistribution() {
  return (
    <section id="ai" className={`${ui.section} ${styles.section}`}>
      <div className={ui.container}>
        <div className={styles.head}>
          <p className={`${ui.sectionEyebrow} ${ui.sectionEyebrowCenter}`}>
            AI distribution · Our moat
          </p>
          <h2 className={`${ui.sectionTitle} ${styles.title}`}>
            When customers ask AI to book a{" "}
            <span className={ui.goldText}>salon in Cork tonight,</span> are you
            the answer?
          </h2>
          <p className={`${ui.lead} ${styles.sub}`}>
            OpenBook is the only Irish booking platform integrated with ChatGPT,
            Claude, and Gemini. Your business appears inside the AI assistants
            your customers already use — not a marketplace they have to
            download.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardLabel}>ChatGPT · via OpenBook MCP</div>
          <p className={styles.userMsg}>
            book me a deep tissue massage in Cork on Saturday afternoon
          </p>
          <p className={styles.botReply}>
            Cork Physio &amp; Sports has 2:30pm and 4:00pm available with Aoife
            on Saturday. The 60-minute deep tissue is €65. Shall I book the
            2:30pm for you?
          </p>
          <div className={styles.replyBtn}>Yes, book the 2:30pm</div>
        </div>

        <p className={styles.footer}>
          Same query works in Claude and Gemini. One integration. Every AI
          assistant.
        </p>
      </div>
    </section>
  );
}
