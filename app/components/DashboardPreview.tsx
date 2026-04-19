'use client';

import { useEffect, useRef } from 'react';
import Reveal from './Reveal';

const bookings = [
  { name: 'Aoife Ryan', svc: 'Deep tissue · 60 min', time: '10:00', status: 'paid', color: '#D4AF37', init: 'AR' },
  { name: 'Conor Walsh', svc: 'Skin fade', time: '10:45', status: 'paid', color: '#ef4444', init: 'CW' },
  { name: 'Síofra Byrne', svc: 'Gel manicure', time: '11:30', status: 'paid', color: '#ec4899', init: 'SB' },
  { name: 'Dan Murphy', svc: 'PT · 45 min', time: '12:15', status: 'pending', color: '#0ea5e9', init: 'DM' },
  { name: 'Niamh Kelly', svc: 'Blow-dry', time: '13:00', status: 'paid', color: '#8b5cf6', init: 'NK' },
];

export default function DashboardPreview() {
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = parallaxRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(-1, Math.min(1, (vh / 2 - rect.top - rect.height / 2) / vh));
      el.style.transform = `translateY(${progress * -20}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="section dash-section">
      <div className="dash-glow" />
      <div className="container">
        <div
          className="section-head center"
          style={{ textAlign: 'center', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Reveal>
            <div className="section-eyebrow">The dashboard</div>
            <h2 className="section-title">The operator view, on <span className="gold">rails.</span></h2>
            <p className="section-body" style={{ textAlign: 'center' }}>
              Today&apos;s schedule, today&apos;s revenue, today&apos;s no-show risk. Not a single unnecessary click.
            </p>
          </Reveal>
        </div>

        <div className="dash-wrap" ref={parallaxRef}>
          <div className="browser">
            <div className="browser-chrome">
              <div className="browser-dot" />
              <div className="browser-dot" />
              <div className="browser-dot" />
              <div className="browser-url">app.openbook.ie / murphys-barbers</div>
            </div>
            <div className="dash-inner">
              <div className="dash-side">
                <div className="side-brand"><span className="mk" /> Murphy&apos;s</div>
                <div className="side-item active">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                  Today
                </div>
                <div className="side-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 21h18M7 21V10M12 21V6M17 21v-8" />
                  </svg>
                  Analytics
                </div>
                <div className="side-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="6" width="18" height="13" rx="2" />
                  </svg>
                  Payments
                </div>
                <div className="side-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="9" cy="8" r="4" />
                    <path d="M2 21a7 7 0 0114 0" />
                  </svg>
                  Customers
                </div>
                <div className="side-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
                  </svg>
                  AI insights
                </div>
              </div>

              <div className="dash-main">
                <h3>Tuesday, 21 April</h3>
                <div className="kpi-row">
                  <div className="kpi">
                    <div className="kpi-label">Today&apos;s bookings</div>
                    <div className="kpi-val">18</div>
                    <div className="kpi-delta">+4 vs. last Tue</div>
                  </div>
                  <div className="kpi">
                    <div className="kpi-label">Revenue / week</div>
                    <div className="kpi-val">€4,280</div>
                    <div className="kpi-delta">+12.4%</div>
                  </div>
                  <div className="kpi">
                    <div className="kpi-label">No-show rate</div>
                    <div className="kpi-val">2.1%</div>
                    <div className="kpi-delta">−1.8 pts</div>
                  </div>
                </div>

                <div className="dash-list">
                  {bookings.map((b, i) => (
                    <div key={i} className="dash-row">
                      <div
                        className="dash-av"
                        style={{ background: `linear-gradient(135deg, ${b.color}, ${b.color}cc)` }}
                      >
                        {b.init}
                      </div>
                      <div>
                        <div className="dash-name">{b.name}</div>
                        <div className="dash-svc">{b.svc}</div>
                      </div>
                      <div className="dash-time">{b.time}</div>
                      <div className={`dash-badge ${b.status}`}>{b.status}</div>
                    </div>
                  ))}
                </div>

                <div className="dash-ai">
                  <div className="dash-ai-icon">O</div>
                  <div className="dash-ai-text">
                    <b>Insight.</b> You have 3 empty slots Friday after 5pm. Based on last month, a{' '}
                    <b>flash sale at €28</b> typically fills 2 of them within the hour.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
