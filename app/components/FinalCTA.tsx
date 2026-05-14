import Reveal from './Reveal';

export default function FinalCTA() {
  return (
    <section className="final">
      <div className="container">
        <Reveal>
          <h2>Be on every <span className="gold">channel.</span></h2>
          <p>A website, an app icon, WhatsApp, AI distribution. €79/month. No commission. First month free.</p>
          <div className="final-ctas">
            <a href="https://app.openbook.ie/onboard" className="btn btn-primary">Get started — first month free <span>→</span></a>
            <a href="mailto:sam@openhouseai.ie?subject=OpenBook%20demo%20request" className="btn btn-ghost">Book a 10-minute demo</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
