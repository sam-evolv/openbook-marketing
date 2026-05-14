'use client';

import { useEffect, useState } from 'react';

function HeroPhone() {
  const [phase, setPhase] = useState(0);
  const [slot, setSlot] = useState<number | null>(null);
  const [notif, setNotif] = useState(false);
  const [ticker, setTicker] = useState(false);
  const [revenue, setRevenue] = useState(4280);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setPhase(0);
      setSlot(null);
      setNotif(false);
      setTicker(true);
      timers.push(setTimeout(() => setSlot(4), 1400));
      timers.push(setTimeout(() => setPhase(2), 2600));
      timers.push(setTimeout(() => setPhase(3), 4200));
      timers.push(setTimeout(() => {
        setNotif(true);
        setRevenue((r) => r + 55);
      }, 4700));
      timers.push(setTimeout(() => setNotif(false), 8500));
      timers.push(setTimeout(run, 9200));
    };
    const initial = setTimeout(run, 600);
    timers.push(initial);
    return () => timers.forEach(clearTimeout);
  }, []);

  const slots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '13:00', '13:30'];

  return (
    <div className="hero-stage">
      <div className="hero-phone">
        <div className="hero-phone-screen">
          <div className="hp-status">
            <span>9:41</span>
            <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="#080808"><path d="M1 7h2v2H1zM4 5h2v4H4zM7 3h2v6H7zM10 1h2v8h-2z" /></svg>
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none"><rect x="0.5" y="1" width="15" height="7" rx="1.5" stroke="#080808" /><rect x="2" y="2.5" width="10" height="4" fill="#080808" /></svg>
            </span>
          </div>

          <div className="hp-header">
            <div className="hp-back">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
            </div>
            <div className="hp-title">Book a session</div>
          </div>

          <div className="hp-biz">
            <div className="hp-biz-icon">E</div>
            <div>
              <div className="hp-biz-name">Evolv Performance</div>
              <div className="hp-biz-svc">PT · 45 min · €55</div>
            </div>
          </div>

          <div className="hp-section-title">Tomorrow · Wed 22</div>
          <div className="hp-slots">
            {slots.map((t, i) => (
              <div
                key={i}
                className={
                  'hp-slot' +
                  (slot === i ? ' selected' : '') +
                  (slot === i && phase < 2 ? ' highlight-pulse' : '')
                }
              >
                {t}
              </div>
            ))}
          </div>

          <div className="hp-summary">
            <div className="hp-sum-row"><span className="k">Session</span><span>PT · 45 min</span></div>
            <div className="hp-sum-row"><span className="k">When</span><span>{slot !== null ? `Wed · ${slots[slot]}` : '—'}</span></div>
            <div className="hp-sum-row total"><span>Total</span><span>€55.00</span></div>
          </div>

          <button className={'hp-cta' + (phase === 2 ? ' processing' : '')}>
            {phase === 2 ? (
              <><span className="spinner" /> Processing payment</>
            ) : (
              <>Confirm & pay €55 <span>→</span></>
            )}
          </button>

          <div className={'hp-confirm' + (phase === 3 ? ' show' : '')}>
            <div className="hp-check-ring">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#080808" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="hp-confirm-label">Booked</div>
            <div className="hp-confirm-title">You&apos;re in for<br />Wed at {slot !== null ? slots[slot] : '11:00'}.</div>
            <div className="hp-confirm-card">
              <div className="when">Evolv Performance · Ballsbridge</div>
              <div className="where">PT · 45 min</div>
              <div className="ref">REF · OB-24A7F · added to wallet</div>
            </div>
          </div>
        </div>
      </div>

      <div className={'hero-notif' + (notif ? ' show' : '')} aria-hidden="true">
        <div className="hero-notif-head">
          <div className="hero-notif-mark">O</div>
          <div className="hero-notif-app">OpenBook — Evolv Performance</div>
          <div className="hero-notif-time">now</div>
        </div>
        <div className="hero-notif-title">New booking · €55 paid</div>
        <div className="hero-notif-body">
          Dan M. booked <b>PT · 45 min</b> for Wed at 11:00. Payment captured.
        </div>
      </div>

      <div className={'hero-ticker' + (ticker ? ' show' : '')} aria-hidden="true">
        <div className="hero-ticker-dot" />
        <div>
          <div className="hero-ticker-label">This week</div>
          <div className="hero-ticker-val">€<span className="gold">{revenue.toLocaleString()}</span></div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="eyebrow-dot" /> A distribution layer · Built in Ireland
          </div>
          <h1>
            <span className="reveal-word"><span style={{ animationDelay: '0ms' }}>Your</span></span>{' '}
            <span className="reveal-word"><span style={{ animationDelay: '70ms' }}>business,</span></span>{' '}
            <span className="reveal-word"><span style={{ animationDelay: '140ms' }}>on</span></span>{' '}
            <span className="reveal-word"><span className="gold" style={{ animationDelay: '210ms' }}>every</span></span>{' '}
            <span className="reveal-word"><span style={{ animationDelay: '280ms' }}>channel</span></span>{' '}
            <span className="reveal-word"><span style={{ animationDelay: '350ms' }}>customers</span></span>{' '}
            <span className="reveal-word"><span style={{ animationDelay: '420ms' }}>use.</span></span>
          </h1>
          <p className="hero-sub fade-up" style={{ animationDelay: '0.95s' }}>
            A beautiful website, an app icon on your customers&apos; phones, white-label WhatsApp bookings, and your services discoverable through ChatGPT, Claude, and Siri. <b className="hero-sub-strong">€79/month. No commission. Ever.</b>
          </p>
          <div className="hero-ctas fade-up" style={{ animationDelay: '1.1s' }}>
            <a href="https://app.openbook.ie/onboard" className="btn btn-primary">Get started — first month free <span>→</span></a>
            <a href="https://openbook.ie/evolv-performance" className="btn btn-ghost">See it live</a>
          </div>
          <div className="hero-meta fade-up" style={{ animationDelay: '1.25s' }}>
            <span>No commission, ever</span>
            <span>Works with your booking system</span>
            <span>Cancel anytime</span>
          </div>
        </div>

        <div className="fade-up" style={{ animationDelay: '0.5s' }}>
          <HeroPhone />
        </div>
      </div>
    </section>
  );
}
