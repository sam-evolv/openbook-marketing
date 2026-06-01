export default function MidCTA({ remaining }: { remaining: number }) {
  return (
    <section className="mid-cta">
      <div className="container">
        <div className="mid-cta-eyebrow">First 30 only</div>
        <h3>
          The first 30 businesses get a bespoke website <span className="gold">free.</span>
        </h3>
        <div className="mid-cta-actions">
          <a href="https://app.openbook.ie/onboard" className="btn btn-primary btn-lg">
            Claim spot {31 - remaining} of 30 <span>→</span>
          </a>
          <a href="#how" className="btn btn-ghost btn-lg">
            How it works
          </a>
        </div>
      </div>
    </section>
  );
}
