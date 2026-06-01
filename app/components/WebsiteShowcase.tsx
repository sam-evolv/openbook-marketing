import Reveal from './Reveal';

// A real customer site, built by OpenBook — the bespoke website that comes
// with the subscription. (simplygolf365.ie is hosted on Vercel via OpenBook.)
const SITE = {
  url: 'https://www.simplygolf365.ie',
  label: 'simplygolf365.ie',
  name: 'SimplyGolf365',
  blurb: 'Golf simulator hire across Munster',
  desktop: '/images/simplygolf365-desktop.jpg',
  mobile: '/images/simplygolf365-mobile.jpg',
};

const POINTS = [
  'Custom design, your brand',
  'Booking built in',
  'Hosted & maintained by us',
  'Yours with the subscription',
];

export default function WebsiteShowcase() {
  return (
    <section className="showcase-section" id="website">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <div className="section-eyebrow">The bespoke website</div>
            <h2 className="section-title">
              Not a template. <span className="gold">A real site we built.</span>
            </h2>
            <p className="section-body" style={{ textAlign: 'center' }}>
              Every one of the first 30 businesses gets a website designed around their brand — not stamped from a
              theme. Here&apos;s one we built for {SITE.name}, live and taking bookings today.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="showcase-wrap">
            <a
              className="showcase-browser"
              href={SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${SITE.label} (opens in a new tab)`}
            >
              <div className="showcase-chrome">
                <span className="showcase-dot" />
                <span className="showcase-dot" />
                <span className="showcase-dot" />
                <span className="showcase-url">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="11" width="16" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 018 0v4" />
                  </svg>
                  {SITE.label}
                </span>
                <span className="showcase-live">
                  <span className="showcase-live-dot" /> Live
                </span>
              </div>
              <img
                className="showcase-shot"
                src={SITE.desktop}
                alt={`${SITE.name} — a bespoke website built by OpenBook`}
                loading="lazy"
              />
            </a>

            <div className="showcase-phone" aria-hidden="true">
              <img src={SITE.mobile} alt="" loading="lazy" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="showcase-cap">
            <span className="name">{SITE.name}</span>
            <span className="sep" />
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Visit the live site <span>↗</span>
            </a>
          </div>
        </Reveal>

        <div className="showcase-points">
          {POINTS.map((p) => (
            <div key={p} className="showcase-point">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
