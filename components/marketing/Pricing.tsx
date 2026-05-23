import { ONBOARD_URL, COMPLETE_MAILTO } from "./links";
import ui from "./ui.module.css";
import styles from "./Pricing.module.css";

function Check() {
  return (
    <svg className={styles.check} viewBox="0 0 20 20" fill="none" aria-hidden="true">
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

const tiers = [
  {
    name: "Free",
    tone: "free" as const,
    tagline: "Start with a booking page",
    price: "€0",
    features: [
      "Booking page at openbook.ie/yourname",
      "2 services",
      "Customer accounts",
      "Manual confirmations",
      "OpenBook branding",
    ],
    cta: "Start free",
    href: ONBOARD_URL,
    primary: false,
    popular: false,
  },
  {
    name: "Pro",
    tone: "pro" as const,
    tagline: "Everything for a real business",
    price: "€39",
    features: [
      "Unlimited services & staff",
      "Dedicated WhatsApp bot (your branding)",
      "In-app AI assistant booking",
      "Automated SMS + email reminders",
      "Stripe Connect (deposits, packages)",
      "AI insights dashboard",
      "Flash sales + waitlists",
      "Consumer app home screen icon",
    ],
    cta: "Start my free month",
    href: ONBOARD_URL,
    primary: true,
    popular: true,
  },
  {
    name: "Complete",
    tone: "complete" as const,
    tagline: "We build your website too",
    price: "€79",
    features: [
      "Everything in Pro",
      "Custom website built by us",
      "Premium domain support",
      "Priority onboarding (24h white-glove)",
      "Dedicated WhatsApp Business number",
      "First month free, then €79/mo",
    ],
    cta: "Talk to us",
    href: COMPLETE_MAILTO,
    primary: false,
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className={`${ui.section} ${styles.section}`}>
      <div className={ui.container}>
        <div className={styles.head}>
          <p className={`${ui.sectionEyebrow} ${ui.sectionEyebrowCenter}`}>
            Pricing
          </p>
          <h2 className={ui.sectionTitle}>Three tiers. No commission. Ever.</h2>
        </div>

        <div className={styles.grid}>
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`${styles.card} ${t.popular ? styles.cardPopular : ""}`}
            >
              {t.popular && <span className={styles.popularPill}>Most popular</span>}
              <div className={`${styles.tier} ${styles[t.tone]}`}>{t.name}</div>
              <div className={styles.tagline}>{t.tagline}</div>

              <div className={styles.priceBlock}>
                <span className={styles.price}>{t.price}</span>
                <span className={styles.per}>/ month</span>
              </div>

              <div className={styles.divider} />

              <ul className={styles.features}>
                {t.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={t.href}
                className={`${ui.btn} ${ui.btnFull} ${
                  t.primary ? ui.btnPrimary : ui.btnGhost
                } ${styles.cardCta}`}
              >
                {t.cta}
                {t.primary && (
                  <span className={ui.arrow} aria-hidden="true">
                    →
                  </span>
                )}
              </a>
            </div>
          ))}
        </div>

        <p className={styles.footnote}>
          No commission on bookings. No fees to your customers. You own your
          data. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
