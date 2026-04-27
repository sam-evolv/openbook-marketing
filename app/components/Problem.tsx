import Reveal from './Reveal';

export default function Problem() {
  const tags = [
    'Phone calls to book',
    'Instagram DMs',
    'Paper appointment books',
    'No-shows with no reminder',
    'Marketplaces taking 20%',
    'Facebook Messenger bookings',
    'No app of your own',
    'Chasing payment after the session',
  ];
  return (
    <section className="section problem">
      <div className="container">
        <Reveal>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>The old way</div>
          <h2 className="section-title" style={{ maxWidth: 760, margin: '0 auto 12px' }}>
            What you are <span className="gold">replacing.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="problem-tags">
            {tags.map((t, i) => <span key={i}>{t}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
