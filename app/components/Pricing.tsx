import Reveal from './Reveal';

type Plan = {
  tier: string;
  price: string;
  sub: string;
  featured?: boolean;
  features: string[];
  cta: string;
};

const PLANS: Plan[] = [
  {
    tier: 'Free',
    price: '€0',
    sub: 'per month',
    features: ['Your booking page', 'Up to 2 services', 'Email confirmations', 'Basic dashboard', 'Calendar sync'],
    cta: 'Start free',
  },
  {
    tier: 'Growth',
    price: '€0',
    sub: '+ 2% on card payments',
    featured: true,
    features: [
      'Unlimited services',
      'Stripe card payments',
      'Consumer app icon',
      'Automated reminders',
      'Waitlist',
      'Packages & credits',
    ],
    cta: 'Start on Growth',
  },
  {
    tier: 'Pro',
    price: '€39',
    sub: 'flat per month',
    features: [
      'Everything in Growth',
      'Zero transaction fees',
      'WhatsApp bookings',
      'AI business insights',
      'Flash sales',
      'AI distribution (MCP)',
      'Priority support',
    ],
    cta: 'Go Pro',
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
            <h2 className="section-title">Start free. Scale when the <span className="gold">bookings do.</span></h2>
          </Reveal>
        </div>

        <div className="pricing-grid">
          {PLANS.map((p, i) => (
            <Reveal key={p.tier} delay={i * 80}>
              <div className={'price-card' + (p.featured ? ' featured' : '')}>
                {p.featured && <div className="price-ribbon">Most popular</div>}
                <div className="price-tier">{p.tier}</div>
                <div className="price-amount">{p.price}</div>
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
                <a href="#" className={'btn ' + (p.featured ? 'btn-primary' : 'btn-ghost')}>{p.cta}</a>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="price-note">First month free on Pro · Zero charges to end customers — ever.</div>
      </div>
    </section>
  );
}
