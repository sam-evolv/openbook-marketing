import Reveal from './Reveal';

export default function BuiltInIreland() {
  return (
    <section className="ireland">
      <div className="container">
        <Reveal>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Built in Ireland</div>
          <div className="ireland-body">
            <p>OpenBook was not designed in a startup lab.</p>
            <p>
              It was built because in 2026 a local gym, salon or barber should be reachable on every channel a customer uses — a website, an app icon, WhatsApp, an AI assistant — not just on the booking system they happened to sign up to.
            </p>
            <p className="small">
              Every feature exists because a real Irish business asked for it.
            </p>
            <a href="https://openbook.ie/evolv-performance" className="ireland-link">See it running on openbook.ie/evolv-performance →</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
