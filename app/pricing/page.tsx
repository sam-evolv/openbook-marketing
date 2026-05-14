import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import CommissionCompare from '../components/CommissionCompare';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export const metadata: Metadata = {
  title: 'Pricing — OpenBook',
  description:
    'Three tiers, one principle: no booking commission, ever. Free, Pro at €39/month, Complete at €79/month with first month free.',
};

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pricing-hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />
          <div className="container">
            <div className="pricing-hero-inner">
              <div className="eyebrow">
                <span className="eyebrow-dot" /> Pricing · No commission, ever
              </div>
              <h1 className="pricing-hero-title">
                Flat fee. <span className="gold">Never a cut.</span>
              </h1>
              <p className="pricing-hero-sub">
                Three tiers. One principle: whatever your customers spend, you keep. We&apos;re a distribution layer — not a marketplace skimming your bookings.
              </p>
            </div>
          </div>
        </section>

        <Pricing />
        <CommissionCompare />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
