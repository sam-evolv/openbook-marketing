'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import Reveal from './Reveal';

type SideItem = { name: string; active?: boolean; icon: ReactNode };
type Kpi = { label: string; value: string; note: string; tone: 'gold' | 'green' };

// The operator view — light/cream dashboard mock of the real product.
export default function DashboardPreview() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(-1, Math.min(1, (vh / 2 - rect.top - rect.height / 2) / vh));
      el.style.transform = `translateY(${progress * -16}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const sideItems: SideItem[] = [
    { name: 'Overview', active: true, icon: [<rect key="r" x="3" y="3" width="7" height="7" rx="1.5" />, <rect key="r2" x="14" y="3" width="7" height="7" rx="1.5" />, <rect key="r3" x="3" y="14" width="7" height="7" rx="1.5" />, <rect key="r4" x="14" y="14" width="7" height="7" rx="1.5" />] },
    { name: 'My App', icon: [<rect key="r" x="7" y="2" width="10" height="20" rx="2.5" />, <line key="l" x1="11" y1="18" x2="13" y2="18" />] },
    { name: 'Calendar', icon: [<rect key="r" x="3" y="5" width="18" height="16" rx="2" />, <path key="p" d="M3 10h18M8 3v4M16 3v4" />] },
    { name: 'Bookings', icon: [<path key="p" d="M9 11l3 3 8-8" />, <path key="p2" d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />] },
    { name: 'Customers', icon: [<circle key="c" cx="9" cy="8" r="4" />, <path key="p" d="M2 21a7 7 0 0114 0M17 11a3 3 0 100-6M22 21a5 5 0 00-3-4.6" />] },
    { name: 'Catalog', icon: [<path key="p" d="M21 16V8l-9-5-9 5v8l9 5 9-5z" />, <path key="p2" d="M3.27 6.96L12 12l8.73-5.04M12 22V12" />] },
    { name: 'Messages', icon: <path d="M21 12c0 4.4-4 8-9 8-1.5 0-2.9-.3-4.1-.9L3 21l1.2-4.3C3.4 15.4 3 13.7 3 12c0-4.4 4-8 9-8s9 3.6 9 8z" /> },
    { name: 'Flash Sales', icon: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /> },
    { name: 'Intelligence', icon: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /> },
    { name: 'Finance', icon: [<line key="l" x1="12" y1="1" x2="12" y2="23" />, <path key="p" d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />] },
    { name: 'Hours', icon: [<circle key="c" cx="12" cy="12" r="9" />, <path key="p" d="M12 7v5l3 2" />] },
    { name: 'Website', icon: [<circle key="c" cx="12" cy="12" r="9" />, <path key="p" d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />] },
  ];

  const kpis: Kpi[] = [
    { label: 'Revenue today', value: '€420', note: '+€85 vs avg Tuesday', tone: 'gold' },
    { label: 'Bookings today', value: '18', note: '+4 vs last Tuesday', tone: 'green' },
    { label: 'This week', value: '€4,280', note: '+12.4% week-on-week', tone: 'green' },
    { label: 'Active customers', value: '128', note: '+6 in the last 7 days', tone: 'green' },
  ];

  return (
    <section className="section dash-section">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <div className="section-eyebrow">The operator view</div>
            <h2 className="section-title">
              Built for people who actually <span className="gold">run the place.</span>
            </h2>
            <p className="section-body" style={{ textAlign: 'center' }}>
              Today&apos;s revenue, today&apos;s bookings, today&apos;s no-show risk. Not one unnecessary click.
            </p>
          </Reveal>
        </div>

        <div className="dash-wrap" ref={ref}>
          <div className="browser">
            <div className="browser-chrome">
              <div className="browser-dot" />
              <div className="browser-dot" />
              <div className="browser-dot" />
              <div className="browser-url">app.openbook.ie / dublin-iron-gym</div>
            </div>

            <div className="dash-inner">
              <aside className="dash-side">
                <div className="side-biz">
                  <div className="side-biz-mark">D</div>
                  <div className="side-biz-name">Dublin Iron Gym</div>
                </div>
                <nav className="side-nav">
                  {sideItems.map((it, i) => (
                    <div key={i} className={'side-item' + (it.active ? ' active' : '')}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        {it.icon}
                      </svg>
                      {it.name}
                    </div>
                  ))}
                </nav>
                <div className="side-foot">
                  <div className="side-user">
                    <div className="side-user-av">AW</div>
                    <div>
                      <div className="side-user-name">Aoife Walsh</div>
                      <div className="side-user-plan">Free plan</div>
                    </div>
                  </div>
                  <button className="side-upgrade">UPGRADE</button>
                </div>
              </aside>

              <div className="dash-main">
                <header className="dash-head">
                  <div>
                    <h3>Good afternoon, Aoife</h3>
                    <p>Here&apos;s what&apos;s happening at Dublin Iron Gym today.</p>
                  </div>
                  <div className="dash-head-cta">
                    <button className="dash-btn">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                      Copy link
                    </button>
                    <button className="dash-btn dash-btn-gold">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      View booking page
                    </button>
                  </div>
                </header>

                <div className="dash-goal">
                  <div className="dash-goal-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="dash-goal-copy">
                    <div className="dash-goal-title">Set a monthly revenue goal</div>
                    <div className="dash-goal-sub">
                      May is under way. A goal gives you a pace target and shows whether you&apos;re on track each day.
                    </div>
                  </div>
                  <button className="dash-btn dash-btn-gold">Set goal</button>
                </div>

                <div className="kpi-row">
                  {kpis.map((k, i) => (
                    <div key={i} className="kpi">
                      <div className="kpi-label">{k.label}</div>
                      <div className="kpi-val">{k.value}</div>
                      <div className="kpi-note">{k.note}</div>
                      <div className={'kpi-bar ' + k.tone} />
                    </div>
                  ))}
                </div>

                <div className="dash-flash">
                  <div className="dash-flash-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
                    </svg>
                  </div>
                  <div className="dash-flash-copy">
                    <div className="dash-flash-title">Flash sales</div>
                    <div className="dash-flash-sub">
                      Run a time-boxed offer to fill quiet slots — your favourites get notified first.
                    </div>
                  </div>
                  <div className="dash-flash-open">Open →</div>
                </div>

                <div className="dash-section-head">
                  <div className="dash-section-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8" />
                    </svg>
                  </div>
                  Intelligence
                </div>

                <div className="dash-intel">
                  <img className="dash-intel-icon" src="/brand/openbook-mark.png" alt="" />
                  <div className="dash-intel-copy">
                    <div className="dash-intel-title">3 quiet slots Friday after 5pm.</div>
                    <div className="dash-intel-sub">
                      A <b>flash sale at €28</b> typically fills 2 of them within the hour. Want me to run it?
                    </div>
                  </div>
                  <button className="dash-btn dash-btn-gold">Run it</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
