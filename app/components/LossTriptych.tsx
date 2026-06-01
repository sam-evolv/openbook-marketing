import Reveal from './Reveal';

// The hidden tax on an Irish SMB in 2026 — three real, cited stats.
export default function LossTriptych() {
  return (
    <section className="loss section">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <div className="section-eyebrow">The cost of staying</div>
            <h2 className="section-title">
              The hidden tax on an Irish SMB <span className="gold">in 2026.</span>
            </h2>
            <p className="section-body" style={{ textAlign: 'center' }}>
              Three numbers that don&apos;t appear on your P&amp;L. They appear on your weekends.
            </p>
          </Reveal>
        </div>

        <div className="loss-grid">
          <Reveal>
            <div className="loss-card">
              <div className="loss-num">
                21<span className="unit">×</span>
              </div>
              <div className="loss-unit-label">More likely to convert</div>
              <div className="loss-title">Speed is everything.</div>
              <div className="loss-desc">
                A lead you reply to within 5 minutes is 21× more likely to convert than one you get to in 30. Most
                bookings are won by whoever answers first — not whoever&apos;s best.
              </div>
              <div className="loss-source">Harvard Business Review · study of 2,241 companies</div>
            </div>
          </Reveal>

          <Reveal>
            <div className="loss-card">
              <div className="loss-num">
                78<span className="unit">%</span>
              </div>
              <div className="loss-unit-label">Book with whoever&apos;s first</div>
              <div className="loss-title">Not the best. The first.</div>
              <div className="loss-desc">
                78% of customers buy from the first business that responds to them — not the best-reviewed, not the
                cheapest. Miss the message at 9pm and the booking is gone by 9:05.
              </div>
              <div className="loss-source">InsideSales.com · 100,000+ calls tracked</div>
            </div>
          </Reveal>

          <Reveal>
            <div className="loss-card">
              <div className="loss-num">
                800<span className="unit">M+</span>
              </div>
              <div className="loss-unit-label">Weekly ChatGPT users</div>
              <div className="loss-title">And now, AI.</div>
              <div className="loss-desc">
                ChatGPT passed 800 million weekly users in 2025. Almost no Irish business is bookable inside it. When
                someone asks AI to book near them, you don&apos;t exist yet.
              </div>
              <div className="loss-source">OpenAI · October 2025</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
