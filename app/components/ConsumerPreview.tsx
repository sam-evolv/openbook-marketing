'use client';

import Reveal from './Reveal';
import { darken } from './shade';

const SYSTEM_TILES = [
  { name: 'Discover', kind: 'gold', icon: 'compass' },
  { name: 'Wallet', kind: 'dark', icon: 'wallet' },
  { name: 'Me', kind: 'dark', icon: 'person' },
  { name: 'Ask AI', kind: 'gold', icon: 'ob' },
];

const CONSUMER_APPS: { name: string; color: string; letter: string; darkText?: boolean }[] = [
  { name: 'Yoga', color: '#e8732e', letter: 'Y' },
  { name: 'Nails', color: '#ec4faa', letter: 'N' },
  { name: 'Barber', color: '#15b67e', letter: 'B' },
  { name: 'Sauna', color: '#7c4dff', letter: 'S' },
  { name: 'Gym', color: '#c9c6bd', letter: 'G', darkText: true },
  { name: 'Physio', color: '#3b9bf0', letter: 'P' },
  { name: 'Pilates', color: '#f5a623', letter: 'P', darkText: true },
  { name: 'Spa', color: '#ef5066', letter: 'S' },
];

// It lives on their phone — dark iOS home screen mock.
export default function ConsumerPreview() {
  return (
    <section id="consumer" className="section">
      <div className="container">
        <div className="consumer">
          <Reveal>
            <div>
              <div className="section-eyebrow">The consumer side</div>
              <h2 className="section-title">
                It lives on <span className="gold">their phone.</span>
              </h2>
              <p className="section-body" style={{ marginBottom: 22 }}>
                Customers save your business to their home screen as a glass icon in your brand colour. Two taps to
                rebook. No app store, no download, no friction.
              </p>
              <p className="section-body" style={{ fontSize: 14.5, color: 'var(--text-3)' }}>
                The OpenBook app itself becomes their booking hub — every business they love, one tap away. Rendered
                with iOS-native materials.
              </p>
              <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="https://app.openbook.ie/onboard" className="btn btn-primary">
                  Get your icon live <span>&rarr;</span>
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="phone phone-ob">
              <div className="phone-screen">
                <div className="phone-status">
                  <span className="phone-time">10:39</span>
                  <span className="phone-status-right">
                    <svg width="17" height="11" viewBox="0 0 18 11" fill="#fff">
                      <rect x="0" y="7" width="3" height="4" rx="0.6" />
                      <rect x="4.5" y="5" width="3" height="6" rx="0.6" />
                      <rect x="9" y="2.5" width="3" height="8.5" rx="0.6" />
                      <rect x="13.5" y="0" width="3" height="11" rx="0.6" />
                    </svg>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="#fff">
                      <path d="M8 1.2c2.6 0 5 .9 6.9 2.5l-1.4 1.8C12 4.2 10.1 3.5 8 3.5S4 4.2 2.5 5.5L1.1 3.7C3 2.1 5.4 1.2 8 1.2zm0 3.5c1.7 0 3.3.5 4.6 1.5L11.3 8C10.3 7.4 9.2 7 8 7s-2.3.4-3.3 1L3.4 6.2c1.3-1 2.9-1.5 4.6-1.5zm0 3.5c.9 0 1.7.3 2.4.8L8 11.4 5.6 8.6c.7-.5 1.5-.8 2.4-.8z" />
                    </svg>
                    <svg width="25" height="11" viewBox="0 0 26 12" fill="none">
                      <rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="#fff" strokeOpacity="0.5" />
                      <rect x="23" y="4" width="2" height="4" rx="0.6" fill="#fff" fillOpacity="0.5" />
                      <rect x="2" y="2" width="18" height="8" rx="1.5" fill="#fff" />
                    </svg>
                  </span>
                </div>

                <div className="phone-greet">Good morning, Aoife</div>

                <div className="phone-grid">
                  {SYSTEM_TILES.map((t, i) => (
                    <div key={'sys' + i} className="phone-app">
                      <div className={'phone-app-icon sys ' + t.kind}>
                        {t.icon === 'compass' && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="#1a1205" strokeWidth="1.6">
                            <circle cx="12" cy="12" r="9" />
                            <polygon points="15.5 8.5 10.5 10.5 8.5 15.5 13.5 13.5" fill="#1a1205" stroke="none" />
                          </svg>
                        )}
                        {t.icon === 'wallet' && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
                            <rect x="3" y="6" width="18" height="13" rx="3" />
                            <path d="M3 10h18" />
                            <circle cx="17" cy="14" r="1.2" fill="#fff" stroke="none" />
                          </svg>
                        )}
                        {t.icon === 'person' && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M5 21a7 7 0 0114 0" />
                          </svg>
                        )}
                        {t.icon === 'ob' && (
                          <img src="/openbook-mark-transparent.png" alt="" style={{ width: '64%', height: '64%', objectFit: 'contain' }} />
                        )}
                      </div>
                      <div className="phone-app-label">{t.name}</div>
                    </div>
                  ))}
                  {CONSUMER_APPS.map((a, i) => (
                    <div key={'biz' + i} className="phone-app">
                      <div
                        className="phone-app-icon"
                        style={{
                          background: `linear-gradient(150deg, ${a.color}, ${darken(a.color, 28)})`,
                          color: a.darkText ? '#1a1a1a' : '#fff',
                        }}
                      >
                        {a.letter}
                      </div>
                      <div className="phone-app-label">{a.name}</div>
                    </div>
                  ))}
                </div>

                <div className="phone-tabbar">
                  <div className="phone-tab active">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 11l9-8 9 8M5 10v10h14V10" />
                    </svg>
                    <span>Home</span>
                  </div>
                  <div className="phone-tab">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7" />
                      <path d="M21 21l-4-4" />
                    </svg>
                    <span>Explore</span>
                  </div>
                  <div className="phone-tab">
                    <img src="/openbook-mark-transparent.png" alt="" />
                    <span>AI</span>
                  </div>
                  <div className="phone-tab">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M3 10h18M8 3v4M16 3v4" />
                    </svg>
                    <span>Bookings</span>
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
