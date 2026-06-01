'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

// Ten blue links became one answer — the AI-first "why now".
export default function TheShift() {
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
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="shift-section" id="shift" ref={ref}>
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <div className="section-eyebrow">The shift</div>
            <h2 className="section-title">
              Ten blue links became <span className="gold">one answer.</span>
            </h2>
            <p className="section-body" style={{ textAlign: 'center' }}>
              For twenty years, being found meant clawing onto Google&apos;s first page. That era is closing. 800
              million people a week now ask an AI to decide for them — and it returns one name, not a list.
            </p>
          </Reveal>
        </div>

        <div className={'shift-stage' + (seen ? ' in' : '')}>
          {/* THEN — 10 */}
          <div className="shift-side then">
            <div className="shift-side-num">
              <span className="shift-bignum ghost">10</span>
            </div>
            <div className="shift-side-label">blue links</div>
            <div className="shift-side-sub">
              Page one, or you may as well not exist. Twenty years of fighting for a ranking.
            </div>
          </div>

          {/* ARROW */}
          <div className="shift-mid" aria-hidden="true">
            <span className="shift-mid-label">the shift</span>
            <svg
              className="shift-mid-arrow"
              viewBox="0 0 80 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="2" y1="12" x2="72" y2="12" />
              <polyline points="64 5 73 12 64 19" />
            </svg>
          </div>

          {/* NOW — 1 */}
          <div className="shift-side now">
            <div className="shift-side-num">
              <span className="shift-bignum gold">1</span>
              <span className="shift-num-glow" aria-hidden="true" />
            </div>
            <div className="shift-side-label gold">answer</div>
            <div className="shift-side-sub">
              Ask an AI to book a barber and it names <b>one</b> business. You&apos;re it — or you&apos;re not in the
              conversation at all.
            </div>
          </div>
        </div>

        <div className="shift-beats">
          <Reveal delay={80}>
            <div className="shift-beat">
              <div className="shift-beat-num">01</div>
              <div className="shift-beat-title">A website is the floor.</div>
              <div className="shift-beat-desc">
                No site, no presence. It&apos;s the minimum a customer — and an AI — needs to take you seriously.
              </div>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="shift-beat">
              <div className="shift-beat-num">02</div>
              <div className="shift-beat-title">AI is the new front door.</div>
              <div className="shift-beat-desc">
                ChatGPT and Claude are where people now ask &ldquo;who near me can do this?&rdquo; — and they only
                surface what they can read.
              </div>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="shift-beat">
              <div className="shift-beat-num">03</div>
              <div className="shift-beat-title">Adapt now, or vanish quietly.</div>
              <div className="shift-beat-desc">
                The businesses that get listed first will own their category in AI search. The rest won&apos;t even know
                they&apos;re being skipped.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
