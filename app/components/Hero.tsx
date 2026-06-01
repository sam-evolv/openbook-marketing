'use client';

import { useEffect, useState } from 'react';
import { darken } from './shade';

// ---------- AI scenarios (the iPhone/ChatGPT booking demo cycles these) ----------
type AiOption = {
  name: string;
  meta: string;
  color: string;
  letter: string;
  slot: string;
  price: string;
};
type AiScenario = {
  query: string;
  intro: string;
  options: AiOption[];
  selectedIdx: number;
  toolService: string;
  toolWhen: string;
  bookedWhere: string;
  bookedWhen: string;
  bookedTitle: string;
};

const AI_SCENARIOS: AiScenario[] = [
  {
    query: 'I need to get a haircut tomorrow',
    intro: 'Three barbers near you have tomorrow slots:',
    options: [
      { name: "Mick's Barbershop", meta: '4.8 ★ · 0.4 km', color: '#1f2937', letter: 'M', slot: 'Tomorrow, 10:30', price: '€18' },
      { name: 'Sharp Cuts', meta: '4.9 ★ · 1.1 km', color: '#0ea5e9', letter: 'S', slot: 'Tomorrow, 14:00', price: '€25' },
      { name: 'Apex Grooming', meta: '4.7 ★ · 0.8 km', color: '#7c3aed', letter: 'A', slot: 'Tomorrow, 16:15', price: '€32' },
    ],
    selectedIdx: 0,
    toolService: 'Skin fade · 30 min',
    toolWhen: 'Tomorrow, 10:30',
    bookedWhere: "Mick's Barbershop",
    bookedWhen: 'Tomorrow at half ten.',
    bookedTitle: 'Skin fade booked.',
  },
  {
    query: 'Pilates class for Saturday morning',
    intro: 'Three pilates studios have Saturday morning:',
    options: [
      { name: 'FlowLab', meta: '4.7 ★ · 1.2 km', color: '#10b981', letter: 'F', slot: 'Sat, 09:00', price: '€16' },
      { name: 'Core Pilates', meta: '4.9 ★ · 2.3 km', color: '#ec4899', letter: 'C', slot: 'Sat, 09:30', price: '€22' },
      { name: 'Reformer Studio', meta: '4.8 ★ · 0.7 km', color: '#f59e0b', letter: 'R', slot: 'Sat, 11:00', price: '€30' },
    ],
    selectedIdx: 1,
    toolService: 'Reformer Pilates · 50 min',
    toolWhen: 'Sat, 09:30',
    bookedWhere: 'Reformer at Core Pilates',
    bookedWhen: 'Saturday at half nine.',
    bookedTitle: 'Class booked.',
  },
  {
    query: 'Find me a sports massage this evening',
    intro: 'Three physios have evening slots tonight:',
    options: [
      { name: 'Recover Cork', meta: '4.9 ★ · 1.5 km', color: '#0ea5e9', letter: 'R', slot: 'Tonight, 18:30', price: '€55' },
      { name: 'Movement Clinic', meta: '4.8 ★ · 2.1 km', color: '#8b5cf6', letter: 'M', slot: 'Tonight, 19:15', price: '€70' },
      { name: 'Premium Physio', meta: '4.9 ★ · 3.0 km', color: '#ef4444', letter: 'P', slot: 'Tonight, 20:00', price: '€85' },
    ],
    selectedIdx: 2,
    toolService: 'Sports massage · 60 min',
    toolWhen: 'Tonight, 20:00',
    bookedWhere: 'Sports massage at Premium Physio',
    bookedWhen: 'Tonight at eight.',
    bookedTitle: 'Massage booked.',
  },
];

type Timer = ReturnType<typeof setTimeout> | (() => void);

// ---------- iPhone running a ChatGPT booking flow (default hero visual) ----------
function HeroAI() {
  // Phases per scenario:
  // 0 idle, 1 typing, 2 thinking, 3 reply, 4 selected-highlight pulse,
  // 5 tool card, 6 confirm pressed, 7 booked overlay
  const [scenIdx, setScenIdx] = useState(0);
  const [phase, setPhase] = useState(0);
  const [typed, setTyped] = useState('');
  const [optCount, setOptCount] = useState(0);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const timers: Timer[] = [];
    const push = (t: Timer) => {
      timers.push(t);
      return t;
    };

    const runScenario = (idx: number) => {
      setScenIdx(idx);
      setPhase(0);
      setTyped('');
      setOptCount(0);
      setPressed(false);
      const q = AI_SCENARIOS[idx].query;

      push(setTimeout(() => setPhase(1), 350));

      push(
        setTimeout(() => {
          let i = 0;
          const iv = setInterval(() => {
            i++;
            setTyped(q.slice(0, i));
            if (i >= q.length) {
              clearInterval(iv);
              push(setTimeout(() => setPhase(2), 250)); // thinking
              push(setTimeout(() => setPhase(3), 700)); // reply text + options begin
              push(setTimeout(() => setOptCount(1), 1050));
              push(setTimeout(() => setOptCount(2), 1320));
              push(setTimeout(() => setOptCount(3), 1590));
              push(setTimeout(() => setPhase(4), 2150)); // pulse highlight on selected
              push(setTimeout(() => setPhase(5), 3050)); // tool card
              push(
                setTimeout(() => {
                  setPressed(true);
                  setPhase(6);
                }, 4700)
              ); // press
              push(setTimeout(() => setPhase(7), 5250)); // booked overlay
              push(setTimeout(() => runScenario((idx + 1) % AI_SCENARIOS.length), 7800));
            }
          }, 24);
          push(() => clearInterval(iv));
        }, 550)
      );
    };

    push(setTimeout(() => runScenario(0), 250));
    return () =>
      timers.forEach((t) => {
        if (typeof t === 'function') t();
        else clearTimeout(t);
      });
  }, []);

  const scen = AI_SCENARIOS[scenIdx];
  const showUser = phase >= 1;
  const showThinking = phase === 2;
  const showReply = phase >= 3 && phase < 5;
  const showOptionsBlock = phase >= 3 && phase < 5;
  const showTool = phase >= 5 && phase < 7;
  const showBooked = phase === 7;
  const selectedIdx = scen.selectedIdx;
  const selected = scen.options[selectedIdx];

  return (
    <div className="hero-stage">
      <div className="hero-phone ai">
        <div className="hero-phone-screen">
          <div className="cg-status">
            <span className="cg-status-time">11:14</span>
            <span className="cg-status-right">
              <svg viewBox="0 0 18 11" fill="#fff" width="17" height="11">
                <rect x="0" y="7" width="3" height="4" rx="0.6" />
                <rect x="4.5" y="5" width="3" height="6" rx="0.6" />
                <rect x="9" y="2.5" width="3" height="8.5" rx="0.6" />
                <rect x="13.5" y="0" width="3" height="11" rx="0.6" />
              </svg>
              <svg viewBox="0 0 16 12" fill="#fff" width="16" height="12">
                <path d="M8 1.2c2.6 0 5 .9 6.9 2.5l-1.4 1.8C12 4.2 10.1 3.5 8 3.5S4 4.2 2.5 5.5L1.1 3.7C3 2.1 5.4 1.2 8 1.2zm0 3.5c1.7 0 3.3.5 4.6 1.5L11.3 8C10.3 7.4 9.2 7 8 7s-2.3.4-3.3 1L3.4 6.2c1.3-1 2.9-1.5 4.6-1.5zm0 3.5c.9 0 1.7.3 2.4.8L8 11.4 5.6 8.6c.7-.5 1.5-.8 2.4-.8z" />
              </svg>
              <svg viewBox="0 0 26 12" width="25" height="11" fill="none">
                <rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="#fff" strokeOpacity="0.5" />
                <rect x="23" y="4" width="2" height="4" rx="0.6" fill="#fff" fillOpacity="0.5" />
                <rect x="2" y="2" width="17" height="8" rx="1.5" fill="#fff" />
              </svg>
            </span>
          </div>

          <div className="cg-nav">
            <div className="cg-nav-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h10" />
              </svg>
            </div>
            <div className="cg-nav-title">
              <span className="cg-nav-pill">ChatGPT</span>
            </div>
            <div className="cg-nav-actions">
              <div className="cg-nav-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 19h3l11-11-3-3-11 11v3z" />
                  <path d="M15 4l3 3" />
                </svg>
              </div>
              <div className="cg-nav-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="6" cy="12" r="1.6" />
                  <circle cx="12" cy="12" r="1.6" />
                  <circle cx="18" cy="12" r="1.6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="cg-feed">
            <div className={'cg-msg-user' + (showUser ? ' in' : '')}>
              {typed}
              {phase === 1 && <span className="cg-caret" />}
            </div>

            <div className="cg-msg-ai">
              <div className={'line' + (showReply || phase >= 5 ? ' in' : '')}>
                {phase < 5 ? scen.intro : `Booking ${selected.name} for ${scen.toolWhen.toLowerCase()}.`}
              </div>
              {showThinking && (
                <div className="line in">
                  <span className="muted">
                    Thinking
                    <span className="dots">
                      <i />
                      <i />
                      <i />
                    </span>
                  </span>
                </div>
              )}
            </div>

            {showOptionsBlock && (
              <div className="cg-opt-list">
                {scen.options.slice(0, optCount).map((o, i) => {
                  const isSel = i === selectedIdx;
                  const pulse = phase >= 4 && isSel;
                  return (
                    <div
                      key={i}
                      className={'cg-opt-card in' + (isSel && phase >= 4 ? ' selected' : '') + (pulse ? ' pulse' : '')}
                    >
                      <div
                        className="cg-opt-icon"
                        style={{ background: `linear-gradient(140deg, ${o.color}, ${darken(o.color, 28)})` }}
                      >
                        {o.letter}
                      </div>
                      <div className="cg-opt-info">
                        <div className="cg-opt-name">{o.name}</div>
                        <div className="cg-opt-meta">{o.meta}</div>
                        <div className="cg-opt-slot">{o.slot}</div>
                      </div>
                      <div className="cg-opt-price">{o.price}</div>
                    </div>
                  );
                })}
              </div>
            )}

            {showTool && (
              <div className="cg-tool in">
                <div className="cg-tool-head">
                  <img src="/openbook-mark-transparent.png" alt="" />
                  OpenBook
                </div>
                <div className="cg-tool-title">
                  Book {selected.name} for {selected.price}?
                </div>
                <div className="cg-tool-rows">
                  <div className="cg-tool-row">
                    <span className="k">Service</span>
                    <span className="v">{scen.toolService}</span>
                  </div>
                  <div className="cg-tool-row">
                    <span className="k">When</span>
                    <span className="v">{scen.toolWhen}</span>
                  </div>
                  <div className="cg-tool-row">
                    <span className="k">Total</span>
                    <span className="v" style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
                      {selected.price}
                    </span>
                  </div>
                </div>
                <div className="cg-tool-actions">
                  <button className={'cg-tool-btn confirm' + (pressed ? ' pressed' : '')}>Confirm</button>
                  <button className="cg-tool-btn deny">Deny</button>
                </div>
              </div>
            )}
          </div>

          <div className="cg-input">
            <div className="cg-input-chip">
              <img src="/openbook-mark-transparent.png" alt="" />
              OpenBook <span className="x">×</span>
            </div>
            <div className="cg-input-row">
              <div className="cg-input-add">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <div className="cg-input-field">Ask ChatGPT</div>
              <div className="cg-input-mic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="3" width="6" height="11" rx="3" />
                  <path d="M5 11a7 7 0 0014 0M12 18v3" />
                </svg>
              </div>
              <div className="cg-input-send">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
              </div>
            </div>
          </div>

          <div className={'cg-booked' + (showBooked ? ' in' : '')}>
            <div className="cg-booked-bar">
              <div className="cg-booked-x">×</div>
              <div className="cg-booked-url">app.openbook.ie</div>
              <div className="cg-booked-screen">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <rect x="3" y="4" width="18" height="12" rx="2" />
                  <path d="M9 20h6M12 16v4" />
                </svg>
              </div>
            </div>
            <div className="cg-booked-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="cg-booked-title">{scen.bookedTitle}</div>
            <div className="cg-booked-sub">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z" />
                </svg>
              </span>
              The slot is yours.
            </div>
            <div className="cg-booked-where">{scen.bookedWhere}</div>
            <div className="cg-booked-when">{scen.bookedWhen}</div>
            <div className="cg-booked-actions">
              <div className="cg-booked-action">Add to Calendar</div>
              <div className="cg-booked-action">Get Directions</div>
            </div>
            <div className="cg-booked-footer">
              Powered by <span className="brand">OpenBook</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Headline content (shipped default: the "bundle" headline) ----------
const HERO = {
  eyebrow: 'R&D launch · Ireland',
  line: [
    { txt: 'An app,', delay: 0 },
    { txt: 'a website,', delay: 80 },
    { txt: 'AI bookings.', delay: 160 },
    { txt: '€79', delay: 240, num: true },
    { txt: '/month.', delay: 280, gold: true },
  ] as { txt: string; delay: number; num?: boolean; gold?: boolean }[],
  sub: 'OpenBook gives your business a full online presence in one subscription. Live in 15 minutes.',
  bullets: [
    'A booking page and a customer app icon',
    'A bespoke website (free with annual)',
    'Listed on ChatGPT and Claude',
  ],
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="eyebrow-dot" /> {HERO.eyebrow}
          </div>
          <h1>
            {HERO.line.map((w, i) => (
              <span key={i}>
                <span className="reveal-word">
                  <span
                    className={(w.gold ? 'gold' : '') + (w.num ? ' num' : '')}
                    style={{ animationDelay: `${w.delay}ms` }}
                  >
                    {w.txt}
                  </span>
                </span>
                {i < HERO.line.length - 1 ? ' ' : null}
              </span>
            ))}
          </h1>

          <p className="hero-sub fade-up" style={{ animationDelay: '0.8s' }}>
            {HERO.sub}
          </p>

          <div className="hero-bullets fade-up" style={{ animationDelay: '0.9s' }}>
            {HERO.bullets.map((b, i) => (
              <div key={i} className="hero-bullet">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {b}
              </div>
            ))}
          </div>

          <div className="hero-ctas fade-up" style={{ animationDelay: '1.0s' }}>
            <a href="https://app.openbook.ie/onboard" className="btn btn-primary btn-lg">
              Claim my spot <span>→</span>
            </a>
            <a href="#how" className="btn btn-ghost btn-lg">
              See it work
            </a>
          </div>

          <div className="hero-meta fade-up" style={{ animationDelay: '1.1s' }}>
            <span>Live in 15 minutes</span>
            <span>Bespoke website included</span>
            <span>Cancel anytime</span>
          </div>
        </div>

        <div className="fade-up" style={{ animationDelay: '0.5s' }}>
          <HeroAI />
        </div>
      </div>
    </section>
  );
}
