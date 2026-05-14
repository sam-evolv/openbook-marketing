import Reveal from './Reveal';

export default function CommissionCompare() {
  return (
    <section className="section compare" id="commission">
      <div className="container">
        <div
          className="section-head center"
          style={{ textAlign: 'center', maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Reveal>
            <div className="section-eyebrow">What it actually costs</div>
            <h2 className="section-title">
              The maths, with <span className="gold">nothing hidden.</span>
            </h2>
            <p className="section-body" style={{ textAlign: 'center', margin: '0 auto' }}>
              Here&apos;s what&apos;s happening behind the scenes when a customer walks through the door.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="compare-grid">
            <div className="compare-card compare-them">
              <div className="compare-tier">Fresha</div>
              <div className="compare-price">
                <span className="compare-num">20%</span>
                <span className="compare-unit">commission on every new client booking</span>
              </div>
              <ul className="compare-list">
                <li>20% commission on every new client booking</li>
                <li>2.49% + 25c per card payment</li>
                <li>Marketplace listing controls customer relationship</li>
              </ul>
              <div className="compare-foot">
                On a salon doing <b>30 new clients/month</b> at €60 average ticket, that&apos;s <b>€360+/month</b> going to Fresha.
              </div>
            </div>

            <div className="compare-card compare-us">
              <div className="compare-ribbon">OpenBook</div>
              <div className="compare-tier">OpenBook</div>
              <div className="compare-price">
                <span className="compare-num">0%</span>
                <span className="compare-unit">commission. Forever.</span>
              </div>
              <ul className="compare-list">
                <li>€79/month flat</li>
                <li>Stripe&apos;s standard card fee — we add nothing on top</li>
                <li>Every customer is yours, on every channel</li>
              </ul>
              <div className="compare-foot strong">
                Keep <b>100%</b> of every booking, every customer, every euro.
              </div>
            </div>
          </div>
        </Reveal>

        <div className="compare-note">
          Numbers based on Fresha&apos;s public pricing as of 2026. We&apos;re not knocking them — they&apos;re a fine booking system. We just do something different, and the economics are different too.
        </div>
      </div>
    </section>
  );
}
