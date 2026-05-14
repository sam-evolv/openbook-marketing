import Reveal from './Reveal';

export default function Problem() {
  const tags = [
    'Customers DM-ing on Instagram',
    'No app icon on their phone',
    'No website beyond a Linktree',
    'No WhatsApp option',
    'AI assistants pointing elsewhere',
    'Phone tag during sessions',
    'No-shows without reminders',
    'Chasing payment after the fact',
  ];
  return (
    <section className="section problem">
      <div className="container">
        <Reveal>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>The gap we close</div>
          <h2 className="section-title" style={{ maxWidth: 760, margin: '0 auto 12px' }}>
            Where customers <span className="gold">slip through.</span>
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
