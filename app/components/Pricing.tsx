import Reveal from './Reveal';

type Plan = {
  tier: string;
  tierSlug: string;
  price: string;
  sub: string;
  featured?: boolean;
  features: string[];
  cta: string;
};

const PLANS: Plan[] = [
  {
    tier: 'Free',
    tierSlug: 'free',
    price: '€0',
    sub: 'forever',
    features: [
      'Booking page on openbook.ie/[slug]',
      '2 services',
      'Manual booking management',
      'No card payments',
    ],
    cta: 'Start free',
  },
  {
    tier: 'Pro',
    tierSlug: 'pro',
    price: '€39',
    sub: 'per month',
    features: [
      'Everything in Free',
      'Unlimited services',
      'Stripe card payments (no transaction fees from us)',
      'Automated reminders',
      'AI dashboard insights',
      'Discoverable through ChatGPT, Claude, Siri (MCP distribution)',
    ],
    cta: 'Go Pro',
  },
  {
    tier: 'Complete',
    tierSlug: 'complete',
    price: '€79',
    sub: 'per month · first month free',
    featured: true,
    features: [
      'Everything in Pro',
      'Your own website (custom domain supported, published in 15 minutes)',
      'App icon on customer home screens (iOS PWA)',
      'White-label WhatsApp booking bot (registered under your business name)',
      'Flash sales + waitlist tools',
      'First month free',
    ],
    cta: 'Start Complete — first month free',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div
          className="section-head center"
          style={{ textAlign: 'center', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Reveal>
            <div className="section-eyebrow">Pricing</div>
            <h2 className="section-title">One flat fee. <span className="gold">Never a cut.</span></h2>
          </Reveal>
        </div>

        <div className="pricing-grid">
          {PLANS.map((p, i) => (
            <Reveal key={p.tier} delay={i * 80}>
              <div className={'price-card' + (p.featured ? ' featured' : '')}>
                {p.featured && <div className="price-ribbon">Most popular</div>}
                <div className="price-tier">{p.tier}</div>
                <div className="price-amount">{p.price}<span className="price-period">/month</span></div>
                <div className="price-sub">{p.sub}</div>
                <div className="price-features">
                  {p.features.map((f, j) => (
                    <div key={j} className="price-feat">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <a href={`https://app.openbook.ie/onboard?tier=${p.tierSlug}`} className={'btn ' + (p.featured ? 'btn-primary' : 'btn-ghost')}>{p.cta}</a>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="price-headline">No booking commission. Ever. Whatever your customers spend, you keep. We&apos;re never taking a cut of your revenue.</div>
        <div className="price-note">No credit card required to start · Cancel anytime · Built in Ireland</div>
      </div>
    </section>
  );
}
