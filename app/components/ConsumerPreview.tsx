import Reveal from './Reveal';
import { shade } from './shade';

const apps = [
  { name: "Murphy's", color: '#D4AF37', letter: 'M' },
  { name: 'FitCork', color: '#ef4444', letter: 'F' },
  { name: 'Soleil', color: '#ec4899', letter: 'S' },
  { name: 'Wellspring', color: '#8b5cf6', letter: 'W' },
  { name: 'Evolv', color: '#0ea5e9', letter: 'E' },
  { name: 'DriveCo', color: '#10b981', letter: 'D' },
  { name: 'Saltwater', color: '#06b6d4', letter: 'S' },
  { name: 'The Nail', color: '#f59e0b', letter: 'N' },
  { name: 'Refresh', color: '#f97316', letter: 'R' },
  { name: 'Pilates', color: '#a855f7', letter: 'P' },
  { name: 'Yoga Lane', color: '#14b8a6', letter: 'Y' },
  { name: 'Ink Cork', color: '#64748b', letter: 'I' },
];

export default function ConsumerPreview() {
  return (
    <section className="section" id="consumer">
      <div className="container">
        <div className="consumer">
          <Reveal>
            <div>
              <div className="section-eyebrow">The consumer side</div>
              <h2 className="section-title">An app icon, <span className="gold">your brand.</span></h2>
              <p className="section-body" style={{ marginBottom: 24 }}>
                On Complete, customers save your business to their home screen as a glass icon in your brand colour. Two taps to rebook. No app store, no download, no friction. Your booking system doesn&apos;t give you this — we do.
              </p>
              <p className="section-body" style={{ fontSize: 15, color: 'var(--text-3)' }}>
                Rendered with iOS-native materials. Works on iOS 17+ and Android.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="phone">
              <div className="phone-screen">
                <div className="phone-status">
                  <span>9:41</span>
                  <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="#080808">
                      <path d="M1 7h2v2H1zM4 5h2v4H4zM7 3h2v6H7zM10 1h2v8h-2z" />
                    </svg>
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                      <rect x="0.5" y="1" width="15" height="7" rx="1.5" stroke="#080808" />
                      <rect x="2" y="2.5" width="10" height="4" fill="#080808" />
                    </svg>
                  </span>
                </div>
                <div className="phone-greet">Good evening, Julia</div>
                <div className="phone-loc">Cork, Ireland</div>
                <div className="phone-search">Sauna near me Saturday evening</div>
                <div className="phone-grid">
                  {apps.map((a, i) => (
                    <div key={i} className="phone-app">
                      <div
                        className="phone-app-icon"
                        style={{ background: `linear-gradient(140deg, ${a.color}, ${shade(a.color, -25)})` }}
                      >
                        {a.letter}
                      </div>
                      <div className="phone-app-label">{a.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
