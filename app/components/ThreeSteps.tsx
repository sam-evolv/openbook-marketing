'use client';

import Reveal from './Reveal';

// Live in 3 steps. 15 minutes.
export default function ThreeSteps() {
  return (
    <section id="how" className="section">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <div className="section-eyebrow">How it works</div>
            <h2 className="section-title">
              Live in <span className="num">3</span> steps. <span className="gold">15 minutes.</span>
            </h2>
            <p className="section-body" style={{ textAlign: 'center' }}>
              No design call. No developer. No demo. Built for busy operators who already work 60-hour weeks.
            </p>
          </Reveal>
        </div>
        <div className="steps">
          <Reveal>
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-time">~6 minutes</div>
              <h3>Set up your booking page</h3>
              <p>
                Add services, hours and prices. Your page goes live at{' '}
                <b style={{ color: 'var(--text-1)' }}>openbook.ie/your-name</b>.
              </p>
              <div className="step-visual">
                <div className="sk-head" />
                <div className="sk-line wide" />
                <div className="sk-line med" />
                <div className="sk-line sm" />
                <div style={{ marginTop: 12 }}>
                  <div className="sk-line tag" style={{ display: 'inline-block' }} />
                  <div className="sk-line tag" style={{ display: 'inline-block' }} />
                  <div className="sk-line tag" style={{ display: 'inline-block' }} />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-time">~3 minutes</div>
              <h3>Get your app icon</h3>
              <p>Customers save your business to the home screen. A glass icon in your brand colour. One tap to rebook.</p>
              <div className="step-visual" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="phone-mini">
                  <div className="phone-icon" />
                  <div className="phone-icon" />
                  <div className="phone-icon" />
                  <div className="phone-icon" />
                  <div className="phone-icon pop" />
                  <div className="phone-icon" />
                  <div className="phone-icon" />
                  <div className="phone-icon" />
                  <div className="phone-icon" />
                  <div className="phone-icon" />
                  <div className="phone-icon" />
                  <div className="phone-icon" />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-time">~6 minutes</div>
              <h3>Take paid bookings</h3>
              <p>Connect Stripe. Cards captured up front. Reminders and receipts sent on autopilot.</p>
              <div className="step-visual">
                <div className="pay-line">
                  <div className="pay-row">
                    <div className="pay-dot" />
                    <span className="pay-label">VISA ···· 4242</span>
                  </div>
                  <span className="pay-amount">€55.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 14 }}>
                  <div className="pay-check">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#080808"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ strokeDasharray: 20 }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
