'use client';

import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import { darken } from './shade';

// ChatGPT + Claude only — no Gemini (intentionally removed).
type AiResult = { name: string; meta: string; color: string; letter: string; slot: string; price: string };
type AiTab = {
  id: string;
  name: string;
  color: string;
  bg: string;
  letter: string;
  query: string;
  reply: string;
  results: AiResult[];
};

const AI_TABS: AiTab[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    color: '#10a37f',
    bg: 'linear-gradient(135deg,#10a37f,#0d8866)',
    letter: 'G',
    query: 'book me a personal trainer in Dublin tomorrow morning',
    reply: 'Three OpenBook trainers in Dublin have availability tomorrow morning. Want me to book the first?',
    results: [
      { name: 'A Ballsbridge PT studio', meta: '4.9 ★ · 1.2 km', color: '#E89A17', letter: 'A', slot: 'Tue 07:00', price: '€55' },
      { name: 'Strength Lab Dublin', meta: '4.8 ★ · 2.4 km', color: '#ef4444', letter: 'S', slot: 'Tue 08:30', price: '€60' },
      { name: 'Kinetic Coach', meta: '4.9 ★ · 3.1 km', color: '#8b5cf6', letter: 'K', slot: 'Tue 09:15', price: '€50' },
    ],
  },
  {
    id: 'claude',
    name: 'Claude',
    color: '#d97757',
    bg: 'linear-gradient(135deg,#d97757,#b85a3d)',
    letter: 'C',
    query: 'find me a sauna in Cork with a Saturday evening slot',
    reply: 'Two OpenBook saunas in Cork have Saturday evening availability:',
    results: [
      { name: 'A Blackrock sauna', meta: '4.9 ★ · 6 km', color: '#0ea5e9', letter: 'S', slot: 'Sat 19:00', price: '€22' },
      { name: 'A Douglas wellness spa', meta: '4.8 ★ · 4 km', color: '#8b5cf6', letter: 'W', slot: 'Sat 20:30', price: '€30' },
    ],
  },
];

export default function AIDistribution() {
  const [tab, setTab] = useState(0);
  const [typed, setTyped] = useState('');
  const [showReply, setShowReply] = useState(false);
  const [showCards, setShowCards] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const current = AI_TABS[tab];
    setTyped('');
    setShowReply(false);
    setShowCards(0);
    let i = 0;
    const cardTimers: ReturnType<typeof setTimeout>[] = [];
    let replyTimer: ReturnType<typeof setTimeout> | undefined;
    const typeInterval = setInterval(() => {
      i++;
      setTyped(current.query.slice(0, i));
      if (i >= current.query.length) {
        clearInterval(typeInterval);
        replyTimer = setTimeout(() => setShowReply(true), 400);
        current.results.forEach((_, idx) => {
          cardTimers.push(setTimeout(() => setShowCards((c) => c + 1), 900 + idx * 250));
        });
      }
    }, 38);

    const cycle = setTimeout(() => setTab((t) => (t + 1) % AI_TABS.length), 7400);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(cycle);
      if (replyTimer) clearTimeout(replyTimer);
      cardTimers.forEach(clearTimeout);
    };
  }, [tab, paused]);

  const current = AI_TABS[tab];

  return (
    <section id="ai" className="section ai-section">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <div className="section-eyebrow">The OpenBook wedge</div>
            <h2 className="section-title">
              When someone asks AI to book near them, <span className="gold">is your business the answer?</span>
            </h2>
            <p className="section-body" style={{ textAlign: 'center' }}>
              OpenBook businesses are discoverable via an MCP server at{' '}
              <code style={{ color: 'var(--gold-light)', fontFamily: 'var(--mono)', fontSize: '14px' }}>
                mcp.openbook.ie
              </code>{' '}
              that ChatGPT and Claude query directly. No other Irish booking platform does this.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="ai-chat" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div className="ai-tabs">
              {AI_TABS.map((t, i) => (
                <button
                  key={t.id}
                  className={`ai-tab ai-tab-${t.id} ${i === tab ? 'active' : ''}`}
                  onClick={() => setTab(i)}
                >
                  <span className="dot" />
                  {t.name}
                </button>
              ))}
              <div className="ai-mcp">mcp.openbook.ie</div>
            </div>
            <div className="ai-body">
              <div className="ai-query">
                <div className="ai-avatar">You</div>
                <div className={`content ${!showReply ? 'caret' : ''}`}>{typed}</div>
              </div>
              {showReply && (
                <div className="ai-reply">
                  <div className="ai-reply-avatar" style={{ background: current.bg }}>
                    {current.letter}
                  </div>
                  <div className="ai-reply-body">
                    <div className="ai-reply-text">{current.reply}</div>
                    <div className="ai-cards">
                      {current.results.slice(0, showCards).map((r, i) => (
                        <div key={i} className="ai-biz-card" style={{ animationDelay: `${i * 80}ms` }}>
                          <div
                            className="ai-biz-icon"
                            style={{ background: `linear-gradient(135deg, ${r.color}, ${darken(r.color, 30)})` }}
                          >
                            {r.letter}
                          </div>
                          <div className="ai-biz-info">
                            <div className="ai-biz-name">{r.name}</div>
                            <div className="ai-biz-meta">
                              <span>{r.meta}</span>
                              <span className="price">{r.price}</span>
                            </div>
                          </div>
                          <div className="ai-biz-slot">{r.slot}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <div className="ai-supports">
          <Reveal delay={80}>
            <div className="ai-support">
              <div className="n">01</div>
              <div className="t">
                One MCP server,
                <br />
                both assistants.
              </div>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="ai-support">
              <div className="n">02</div>
              <div className="t">
                No extra work
                <br />
                for the business.
              </div>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="ai-support">
              <div className="n">03</div>
              <div className="t">
                Updated in real time
                <br />
                from your calendar.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
