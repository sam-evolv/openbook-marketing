'use client';

import { useEffect, useRef, useState } from 'react';

// You get three things — app icon / bespoke website / AI bookings, assembling
// in on scroll, summing to €79/mo.
export default function WhatYouGet() {
  const [step, setStep] = useState(0);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setStep(4);
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.disconnect();
          timers.push(setTimeout(() => setStep(1), 200));
          timers.push(setTimeout(() => setStep(2), 700));
          timers.push(setTimeout(() => setStep(3), 1200));
          timers.push(setTimeout(() => setStep(4), 1900));
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="wyg-section" ref={ref}>
      <div className="container">
        <div className="wyg-grid">
          <div className="wyg-copy">
            <div className="section-eyebrow">One subscription</div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              You get three <span className="gold">things.</span>
            </h2>
            <p className="section-body">
              An app icon on your customers&apos; phones. A bespoke website you&apos;d otherwise pay €5,000+ for. And
              direct discoverability on ChatGPT and Claude.
            </p>
            <p className="section-body" style={{ marginTop: 14, fontSize: 14.5, color: 'var(--text-3)' }}>
              All three live on day one. €79/month, no add-ons, no commission.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://app.openbook.ie/onboard" className="btn btn-primary">
                Claim my spot <span>→</span>
              </a>
              <a href="#how" className="btn btn-ghost">
                See it work
              </a>
            </div>
          </div>
          <div className="wyg-visual">
            <div className="hero-assemble">
              <div className={'assemble-block' + (step >= 1 ? ' in' : '')}>
                <div className="num">01</div>
                <div className="visual app">
                  <img src="/openbook-mark-transparent.png" alt="" />
                </div>
                <div className="label">
                  <div className="title">Your app icon</div>
                  <div className="desc">A glass tile on every customer&apos;s home screen.</div>
                  <div className="price-tag">2-tap rebooking</div>
                </div>
              </div>
              <div className={'assemble-block' + (step >= 2 ? ' in' : '')}>
                <div className="num">02</div>
                <div className="visual web" />
                <div className="label">
                  <div className="title">A bespoke website</div>
                  <div className="desc">Built for you. Yours forever. No €5k design quote.</div>
                  <div className="price-tag">Live in 1 hour</div>
                </div>
              </div>
              <div className={'assemble-block' + (step >= 3 ? ' in' : '')}>
                <div className="num">03</div>
                <div className="visual ai">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
                  </svg>
                </div>
                <div className="label">
                  <div className="title">AI bookings</div>
                  <div className="desc">ChatGPT and Claude book you directly.</div>
                  <div className="price-tag">First in Ireland</div>
                </div>
              </div>
              <div className={'assemble-total' + (step >= 4 ? ' in' : '')}>
                <div className="equals">All-in</div>
                <div className="price">
                  €79<span className="per">/month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
