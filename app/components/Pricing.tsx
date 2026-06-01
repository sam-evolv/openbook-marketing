import type { ReactNode } from 'react';
import Reveal from './Reveal';

const CHECK: ReactNode = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

type PricingProps = { price?: number; remaining?: number };

// Single founder-rate card (the shipped default). €79 for life for the first 30.
export default function Pricing({ price = 79, remaining = 28 }: PricingProps) {
  const after = 99;
  const claimed = 30 - remaining;

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <div className="section-eyebrow">Pricing</div>
            <h2 className="section-title">
              Lock the founder rate. <span className="gold">€79 for life.</span>
            </h2>
            <p className="section-body" style={{ textAlign: 'center' }}>
              The first 30 businesses pay €79/month — and keep that price for as long as they stay. Everyone after pays
              €99. No tiers, no add-ons, no commission.
            </p>
          </Reveal>
        </div>

        <div className="pricing-wrap">
          <Reveal>
            <div className="pricing-single">
              <div className="pricing-ribbon">Founder rate · {remaining} of 30 left</div>
              <div className="pricing-tier">OpenBook · everything</div>
              <div className="pricing-price-row">
                <span className="pricing-was">€{after}</span>
                <span className="pricing-price">€{price}</span>
                <span className="pricing-per">/month</span>
              </div>
              <div className="pricing-lock">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="11" width="16" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 018 0v4" />
                </svg>
                <span>
                  Locked at <b>€{price}/mo for life</b> for the first 30. It&apos;s <b>€{after}/mo</b> after that.
                </span>
              </div>
              <div className="pricing-features">
                <div className="pricing-feat">
                  {CHECK}
                  <span>
                    <b>AI distribution</b> — ChatGPT and Claude
                  </span>
                </div>
                <div className="pricing-feat">
                  {CHECK}
                  <span>Booking page at openbook.ie/you</span>
                </div>
                <div className="pricing-feat">
                  {CHECK}
                  <span>Customer app icon (glass tile)</span>
                </div>
                <div className="pricing-feat">
                  {CHECK}
                  <span>
                    <b>Bespoke website</b> — free for first 30
                  </span>
                </div>
                <div className="pricing-feat">
                  {CHECK}
                  <span>Smart scheduling &amp; waitlist</span>
                </div>
                <div className="pricing-feat">
                  {CHECK}
                  <span>Stripe card payments, no chase</span>
                </div>
                <div className="pricing-feat">
                  {CHECK}
                  <span>Reminders, packages, flash sales</span>
                </div>
                <div className="pricing-feat">
                  {CHECK}
                  <span>AI business insights</span>
                </div>
                <div className="pricing-feat">
                  {CHECK}
                  <span>Unlimited services &amp; staff</span>
                </div>
                <div className="pricing-feat">
                  {CHECK}
                  <span>
                    <b>Zero commission</b> on every booking
                  </span>
                </div>
              </div>
              <a href="https://app.openbook.ie/onboard" className="btn btn-primary btn-lg pricing-cta">
                Lock in €{price}/mo for life <span>→</span>
              </a>
              <div className="pricing-note">
                <b>{claimed} of 30</b> founder spots claimed. Your rate never goes up.
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="pricing-promise">
            <div className="pricing-promise-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              14 days to first paid booking, on average
            </div>
            <div className="pricing-promise-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Cancel from the dashboard
            </div>
            <div className="pricing-promise-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Export everything as CSV
            </div>
            <div className="pricing-promise-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              EU-hosted, GDPR by default
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
