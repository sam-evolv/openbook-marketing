import Nav from './components/Nav';
import Hero from './components/Hero';
import WorksAlongside from './components/WorksAlongside';
import Marquee from './components/Marquee';
import Problem from './components/Problem';
import AIDistribution from './components/AIDistribution';
import ThreeSteps from './components/ThreeSteps';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import ConsumerPreview from './components/ConsumerPreview';
import CommissionCompare from './components/CommissionCompare';
import BuiltInIreland from './components/BuiltInIreland';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorksAlongside />
        <Marquee />
        <Problem />
        <AIDistribution />
        <ThreeSteps />
        <Features />
        <DashboardPreview />
        <ConsumerPreview />
        <CommissionCompare />
        <BuiltInIreland />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
