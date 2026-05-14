import { Fragment, type ReactNode } from 'react';
import Reveal from './Reveal';

type Feature = { name: string; desc: string; icon: keyof typeof ICONS; core?: boolean };

const FEATURES: Feature[] = [
  { name: 'Smart scheduling', desc: 'Buffers, breaks, rotas and split shifts. Built in.', icon: 'cal' },
  { name: 'Card payments', desc: 'Stripe Connect, paid at booking. No chase.', icon: 'card' },
  { name: 'Automated reminders', desc: 'SMS and email nudges that cut no-shows by 60%.', icon: 'bell' },
  { name: 'Your own website', desc: 'Custom domain supported, published in 15 minutes.', icon: 'globe' },
  { name: 'App icon on home screens', desc: 'Customers save you to their iOS home screen. One tap to rebook.', icon: 'phone' },
  { name: 'Flash sales', desc: 'Fill quiet slots with timed, limited-seat offers.', icon: 'bolt' },
  { name: 'AI distribution', desc: 'Discoverable by ChatGPT, Claude and Siri via MCP.', icon: 'spark', core: true },
  { name: 'White-label WhatsApp', desc: 'A booking bot registered under your business name. Customers text it like a friend.', icon: 'chat' },
  { name: 'AI business insights', desc: 'What to fix this week, in plain language.', icon: 'chart' },
  { name: 'Packages & credits', desc: 'Sell 10-packs, memberships, multi-session blocks.', icon: 'package' },
  { name: 'Reviews', desc: 'Requested after each visit. Verified from bookings only.', icon: 'star' },
  { name: 'Waitlist', desc: 'Auto-promotes people when a slot frees up.', icon: 'clock' },
];

const ICONS: Record<string, ReactNode> = {
  cal: (
    <Fragment>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </Fragment>
  ),
  card: (
    <Fragment>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 11h18" />
    </Fragment>
  ),
  bell: (
    <Fragment>
      <path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10 21a2 2 0 004 0" />
    </Fragment>
  ),
  globe: (
    <Fragment>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </Fragment>
  ),
  phone: (
    <Fragment>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </Fragment>
  ),
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />,
  chat: <path d="M21 12c0 4.4-4 8-9 8-1.5 0-2.9-.3-4.1-.9L3 21l1.2-4.3C3.4 15.4 3 13.7 3 12c0-4.4 4-8 9-8s9 3.6 9 8z" />,
  chart: <path d="M3 21h18M7 21V10M12 21V6M17 21v-8" />,
  package: <path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7" />,
  star: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />,
  clock: (
    <Fragment>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Fragment>
  ),
};

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div
          className="section-head center"
          style={{ textAlign: 'center', maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Reveal>
            <div className="section-eyebrow">Everything you need</div>
            <h2 className="section-title">To run bookings <span className="gold">properly.</span></h2>
          </Reveal>
        </div>
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.name} delay={(i % 3) * 80}>
              <div className={'feature' + (f.core ? ' core' : '')}>
                {f.core && <span className="feature-badge">Core</span>}
                <svg
                  className="feature-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {ICONS[f.icon]}
                </svg>
                <h4>{f.name}</h4>
                <p>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
