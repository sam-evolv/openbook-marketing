import Nav from "@/components/marketing/Nav";
import Hero from "@/components/marketing/Hero";
import ProofOfCraft from "@/components/marketing/ProofOfCraft";
import LossFrame from "@/components/marketing/LossFrame";
import MidCta from "@/components/marketing/MidCta";
import HowItWorks from "@/components/marketing/HowItWorks";
import AiDistribution from "@/components/marketing/AiDistribution";
import Comparison from "@/components/marketing/Comparison";
import Pricing from "@/components/marketing/Pricing";
import Founder from "@/components/marketing/Founder";
import Faq from "@/components/marketing/Faq";
import FinalCta from "@/components/marketing/FinalCta";
import Footer from "@/components/marketing/Footer";
import ui from "@/components/marketing/ui.module.css";

export const dynamic = "force-static";

export default function Page() {
  return (
    <div className="obRoot">
      <a href="#main" className={ui.skipLink}>
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <ProofOfCraft />
        <LossFrame />
        <MidCta />
        <HowItWorks />
        <AiDistribution />
        <Comparison />
        <Pricing />
        <Founder />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
