'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const BUILD_ITEMS: { name: string; detail: string; price: number | null; build?: boolean }[] = [
  { name: 'Bespoke website', detail: 'Design + build, agency rate', price: 3500, build: true },
  { name: 'iOS + Android app', detail: 'Native build, both stores', price: 15000, build: true },
  { name: 'Booking system', detail: 'Setup + first year of licence', price: 1700, build: true },
  { name: 'Hosting, domain, SSL & upkeep', detail: 'First year', price: 700, build: true },
  { name: 'Listed & bookable in ChatGPT and Claude', detail: 'Not sold by anyone, at any price', price: null },
];

// Build it yourself? Here's the quote.
export default function StackReplace() {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        }),
      { threshold: 0.01, rootMargin: '0px 0px -12% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const buildTotal = BUILD_ITEMS.reduce((s, t) => s + (t.price || 0), 0); // 20,900

  return (
    <section className="stack-section" id="value" ref={ref}>
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <div className="section-eyebrow">The real cost</div>
            <h2 className="section-title">
              Build it yourself? <span className="gold">Here&apos;s the quote.</span>
            </h2>
            <p className="section-body" style={{ textAlign: 'center' }}>
              A website, an app, a booking system and the hosting to run them — commissioned separately — is a
              five-figure project before you take a single booking. And none of it makes you bookable by AI.
            </p>
          </Reveal>
        </div>

        <div className={'quote' + (seen ? ' in' : '')}>
          <div className="quote-ledger">
            <div className="quote-ledger-head">
              <span>To build it yourself</span>
              <span>Typical market cost</span>
            </div>
            {BUILD_ITEMS.map((it, i) => (
              <div
                key={i}
                className={'quote-line' + (it.price === null ? ' na' : '')}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="quote-line-info">
                  <div className="quote-line-name">{it.name}</div>
                  <div className="quote-line-detail">{it.detail}</div>
                </div>
                <div className="quote-line-price">
                  {it.price === null ? <span className="quote-na">Priceless</span> : <>€{it.price.toLocaleString()}</>}
                </div>
              </div>
            ))}
            <div className="quote-total">
              <div className="quote-total-label">Upfront to launch</div>
              <div className="quote-total-val">≈ €{buildTotal.toLocaleString()}</div>
            </div>
            <div className="quote-total-note">
              …then roughly €60–130/month in licences and hosting to keep it all running.
            </div>
          </div>

          <div className="quote-divider">
            <span>or</span>
          </div>

          <div className="quote-ob">
            <img src="/openbook-mark.png" alt="" className="quote-ob-mark" />
            <div className="quote-ob-tag">OpenBook · all of it</div>
            <div className="quote-ob-price">
              €79<span>/mo</span>
            </div>
            <div className="quote-ob-build">€0 to build · live in 15 minutes</div>
            <div className="quote-ob-feats">
              <div className="quote-feat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Website, app &amp; booking system
              </div>
              <div className="quote-feat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Hosting, payments &amp; reminders included
              </div>
              <div className="quote-feat feat-hero">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <b>Bookable by ChatGPT &amp; Claude</b>
              </div>
            </div>
            <a
              href="https://app.openbook.ie/onboard"
              className="btn btn-primary btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Claim my spot <span>&rarr;</span>
            </a>
            <div className="quote-ob-note">First 30 businesses get the bespoke website free.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
