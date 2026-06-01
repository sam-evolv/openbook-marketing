import Reveal from './Reveal';

// Be where the bookings are.
export default function FinalCTA({ remaining = 28 }: { remaining?: number }) {
  return (
    <section className="final">
      <div className="container">
        <Reveal>
          <h2>
            Be where the <span className="gold">bookings are.</span>
          </h2>
          <p>Your page live today. Your first paid bookings by the weekend. Your business in ChatGPT next week.</p>
          <div className="final-ctas">
            <a href="https://app.openbook.ie/onboard" className="btn btn-primary btn-lg">
              Claim my spot <span>→</span>
            </a>
            <a href="https://app.openbook.ie/onboard" className="btn btn-ghost btn-lg">
              Talk to the team — 10 min
            </a>
          </div>
          <div className="final-spots">{remaining}/30 free-website spots remaining</div>
        </Reveal>
      </div>
    </section>
  );
}
