import Reveal from './Reveal';

export default function FinalCTA() {
  return (
    <section className="final">
      <div className="container">
        <Reveal>
          <h2>Be where the <span className="gold">bookings are.</span></h2>
          <p>Your page live today. Your first bookings by the weekend.</p>
          <div className="final-ctas">
            <a href="#" className="btn btn-primary">Get your page live <span>→</span></a>
            <a href="#" className="btn btn-ghost">Book a 10-minute demo</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
