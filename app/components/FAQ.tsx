import Reveal from './Reveal';

const FAQ_ITEMS = [
  {
    q: 'How fast can I really be live?',
    a: 'Most operators are live in 12–18 minutes. Enter your services, your hours, and your Stripe details. Your page is at openbook.ie/your-name the moment you publish. No review, no waitlist, no demo call.',
  },
  {
    q: 'Do you take a cut of my bookings?',
    a: "No marketplace fee, ever. Zero transaction fees on every booking. The €79/month is everything. Stripe charges their standard processing rate directly — we don't mark it up.",
  },
  {
    q: 'What does "AI distribution" actually mean?',
    a: "We run an MCP server at mcp.openbook.ie. When someone asks ChatGPT or Claude to \"book me a barber in Cork this Saturday\", those assistants query our server and surface your business, your live availability and your prices. You don't do anything — it happens automatically from your calendar. We're the first booking platform in Ireland set up this way.",
  },
  {
    q: 'What\'s the "first 30 free website" offer?',
    a: "Honest version: I'm building the first 30 customer websites myself — by hand, to a high standard. After that I automate the process. The first 30 customers get their bespoke website free, forever, as part of their €79/month subscription. After 30, it becomes a €1,200 one-off. The math is selfish: 30 polished sites in the wild is the best marketing I can do.",
  },
  {
    q: 'Can my customers book without creating an account?',
    a: 'Yes. Guest checkout is the default. They enter a name, a phone number and a card. They get a text confirmation. Accounts are optional and unlock the home-screen icon and two-tap rebooking.',
  },
  {
    q: 'What if I already have a website?',
    a: "Embed the booking widget on your existing site with one line, or link out to openbook.ie/your-name. Both work. We don't replace your site — we replace the booking part of it. If you're in the first 30, you can choose to keep your current site or take ours.",
  },
  {
    q: 'Is my data safe? Where is it stored?',
    a: 'All data is stored in Supabase, EU region (Frankfurt). Row-level security on every table, encrypted at rest. Payments are tokenised by Stripe — we never see card numbers. GDPR-compliant out of the box.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Cancel from the dashboard. No phone call, no retention team. Your page stays live for 30 days so your customers aren\'t left stranded, then archives cleanly. You can export every booking, every customer and every receipt as CSV at any time.',
  },
];

// Native <details> accordion. (The WhatsApp question was intentionally removed.)
export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <div className="section-eyebrow">The honest answers</div>
            <h2 className="section-title">
              Questions, answered <span className="gold">straight.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="faq">
            {FAQ_ITEMS.map((item, i) => (
              <details key={i}>
                <summary>
                  <span>{item.q}</span>
                  <span className="faq-plus">+</span>
                </summary>
                <div className="faq-answer">{item.a}</div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
