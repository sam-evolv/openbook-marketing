import ScarcityBar from './components/ScarcityBar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import WhatYouGet from './components/WhatYouGet';
import TheShift from './components/TheShift';
import LossTriptych from './components/LossTriptych';
import AIDistribution from './components/AIDistribution';
import MidCTA from './components/MidCTA';
import ThreeSteps from './components/ThreeSteps';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import ConsumerPreview from './components/ConsumerPreview';
import StackReplace from './components/StackReplace';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

// Shipped defaults (from the prototype's Tweaks defaults — the Tweaks panel
// itself is a design tool and is intentionally not shipped):
//   headline "bundle", heroVisual "ai", pricingMode "single",
//   price 79, remaining 28, scarcity bar on, sticky CTA on.
const REMAINING = 28;
const PRICE = 79;

export default function Page() {
  return (
    <>
      <ScarcityBar remaining={REMAINING} />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <WhatYouGet />
        <TheShift />
        <LossTriptych />
        <AIDistribution />
        <MidCTA remaining={REMAINING} />
        <ThreeSteps />
        <Features />
        <DashboardPreview />
        <ConsumerPreview />
        <StackReplace />
        <Pricing price={PRICE} remaining={REMAINING} />
        <FAQ />
        <FinalCTA remaining={REMAINING} />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
