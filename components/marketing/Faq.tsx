import ui from "./ui.module.css";
import styles from "./Faq.module.css";

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your dashboard in two clicks. No phone calls, no retention specialists, no minimum commitment.",
  },
  {
    q: "What happens to my existing bookings?",
    a: "We import them in onboarding from any existing system or spreadsheet. Setup takes about 15 minutes, and we'll handle any edge cases over WhatsApp.",
  },
  {
    q: "How does the AI distribution actually work?",
    a: "We've built an MCP server at mcp.openbook.ie. When ChatGPT, Claude, or Gemini receives a booking-related query, they query our directory. Your business appears in their answers automatically — no work from you.",
  },
  {
    q: "Do I need to take card payments?",
    a: "No. The Free tier lets you take bookings without card payments. The Pro tier connects to Stripe if you want deposits or pre-paid packages. You set the rules.",
  },
  {
    q: "Is OpenBook a marketplace? Will I appear next to my competitors?",
    a: "No. OpenBook is your booking software, not a marketplace. Each business has its own page. Customers only see you when they search for you, or when an AI assistant matches them to your services.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className={`${ui.section} ${styles.section}`}>
      <div className={ui.container}>
        <div className={styles.head}>
          <p className={`${ui.sectionEyebrow} ${ui.sectionEyebrowCenter}`}>
            Answers
          </p>
          <h2 className={ui.sectionTitle}>Everything you&rsquo;re about to ask.</h2>
        </div>

        <div className={styles.list}>
          {faqs.map((f) => (
            <details key={f.q} className={styles.item}>
              <summary className={styles.summary}>
                <span>{f.q}</span>
                <span className={styles.plus} aria-hidden="true">
                  +
                </span>
              </summary>
              <p className={styles.answer}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
