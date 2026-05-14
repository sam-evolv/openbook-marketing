import Reveal from './Reveal';

const FAQ_ITEMS = [
  {
    q: 'Do I need to switch off my current booking system?',
    a: 'No. OpenBook is a distribution layer that runs alongside Fresha, Booksy, Phorest, LegitFit, Square Appointments — whatever you already use. Keep your existing setup. We add the website, the app icon, the WhatsApp bot and the AI distribution that those systems don’t give you. Run both for six months and see which one brings you better customers.',
  },
  {
    q: 'How fast can I really be live?',
    a: 'Most operators have a website live in 12–18 minutes. Enter your services, your hours, your brand colour and (if you’re on Pro or Complete) your Stripe details. Your page is at openbook.ie/your-name the moment you hit publish. No review, no waitlist, no demo call.',
  },
  {
    q: 'Do you take a cut of my bookings?',
    a: 'Never. There is no marketplace fee, no booking commission and no per-transaction skim from us — ever. You pay €79/month flat on Complete (€39/month on Pro), and that’s it. Card payments use Stripe’s standard fee, paid directly to Stripe. Whatever your customers spend, you keep.',
  },
  {
    q: 'What does "AI distribution" actually mean?',
    a: 'We run an MCP server at mcp.openbook.ie. When someone asks ChatGPT, Claude or Siri to "book me a barber in Cork this Saturday", those assistants can query our server and surface your business, your services, your live availability and your prices. You don’t do anything — it happens automatically from your calendar.',
  },
  {
    q: 'Can my customers book without creating an account?',
    a: 'Yes. Guest checkout is the default. Customers enter a name, a phone number and a card. They get a text confirmation and a receipt. Accounts are optional — they unlock rebooking in two taps and the home-screen icon.',
  },
  {
    q: 'What if I already have a website?',
    a: 'Keep it. Embed the booking widget on your existing site with one line, or link out to openbook.ie/your-name. OpenBook adds the WhatsApp bot, the app icon and the AI distribution — your site stays yours. If you don’t have a website yet, Complete builds you one in 15 minutes, custom domain supported.',
  },
  {
    q: 'How does the WhatsApp booking bot work?',
    a: 'Complete businesses get a white-label WhatsApp number registered under their own business name. Customers text it like they’d text a friend ("Can I get in for a fade Saturday morning?"). The bot reads your calendar, offers real slots, takes the card and books. You see every conversation in the dashboard.',
  },
  {
    q: 'Is my data safe? Where is it stored?',
    a: 'All data sits in Supabase, EU region (Frankfurt). Row-level security on every table, encrypted at rest. Payments are tokenised by Stripe — we never see card numbers. GDPR compliant out of the box.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Cancel from the dashboard. No phone call, no retention team. Your page stays live for 30 days so your customers aren’t left stranded, then archives cleanly. You can export every booking, every customer, every receipt as CSV at any time.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <div
          className="section-head center"
          style={{ textAlign: 'center', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Reveal>
            <div className="section-eyebrow">Questions</div>
            <h2 className="section-title">Answered <span className="gold">straight.</span></h2>
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
