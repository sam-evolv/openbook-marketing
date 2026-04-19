import Reveal from './Reveal';

export default function ThreeSteps() {
  return (
    <section className="section" id="how">
      <div className="container">
        <div
          className="section-head center"
          style={{ textAlign: 'center', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Reveal>
            <div className="section-eyebrow">How it works</div>
            <h2 className="section-title">Live in three <span className="gold">steps.</span></h2>
            <p className="section-body" style={{ textAlign: 'center' }}>
              No design, no developer, no demo call. Built for busy operators.
            </p>
          </Reveal>
        </div>
        <div className="steps">
          <Reveal>
            <div className="step">
              <div className="step-num">01</div>
              <h3>Your booking page</h3>
              <p>Pick your services, hours and prices. Your page goes live at openbook.ie/your-business.</p>
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
              <h3>Your app icon</h3>
              <p>Customers save your page to their home screen. A glass icon, your brand colour, two-tap rebooking.</p>
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
              <h3>Paid bookings</h3>
              <p>Stripe takes the payment up front. Reminders and receipts go out on autopilot.</p>
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
