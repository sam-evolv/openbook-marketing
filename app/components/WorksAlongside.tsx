import Reveal from './Reveal';

const COMPATIBLE = ['Fresha', 'Booksy', 'Phorest', 'LegitFit', 'Square Appointments'];

export default function WorksAlongside() {
  return (
    <section className="section alongside" id="alongside">
      <div className="container">
        <div
          className="section-head center"
          style={{ textAlign: 'center', maxWidth: 820, marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Reveal>
            <div className="section-eyebrow">A distribution layer</div>
            <h2 className="section-title">
              Keep your current booking system. <span className="gold">We work alongside it.</span>
            </h2>
            <p className="section-body" style={{ textAlign: 'center', margin: '0 auto' }}>
              OpenBook isn&apos;t here to replace Fresha, Booksy, Phorest, or whatever you&apos;re using today. We&apos;re the website, the app, the WhatsApp bot, and the AI distribution that those systems don&apos;t give you. Run us in parallel. See which one brings you better customers in six months.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="alongside-row" aria-label="Compatible with">
            <div className="alongside-label">Compatible with</div>
            <div className="alongside-logos">
              {COMPATIBLE.map((name) => (
                <span key={name} className="alongside-logo">{name}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
