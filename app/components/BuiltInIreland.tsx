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
              It was built because booking a session at a local gym or salon in 2026 should not require Instagram DMs, phone calls, or a marketplace taking a cut of every transaction.
            </p>
            <p className="small">
              Every feature exists because a real Irish business asked for it. Cork-based. Operator-grade.
            </p>
            <a href="#" className="ireland-link">See it running on openbook.ie →</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
