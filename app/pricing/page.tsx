import type { Metadata } from 'next';
import ScarcityBar from '../components/ScarcityBar';
import Nav from '../components/Nav';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import StickyMobileCTA from '../components/StickyMobileCTA';

const REMAINING = 28;
const PRICE = 79;

export const metadata: Metadata = {
  title: 'Pricing — OpenBook',
  description:
    'One price, all-in: €79/month. The first 30 businesses lock the founder rate for life — €99/month after. No tiers, no add-ons, no commission.',
  openGraph: {
    title: 'Pricing — OpenBook',
    description:
      'One price, all-in: €79/month. The first 30 businesses lock the founder rate for life — €99/month after. No tiers, no add-ons, no commission.',
  },
};

export default function PricingPage() {
  return (
    <>
      <ScarcityBar remaining={REMAINING} />
      <Nav />
      <main>
        <Pricing price={PRICE} remaining={REMAINING} />
        <FAQ />
        <FinalCTA remaining={REMAINING} />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
