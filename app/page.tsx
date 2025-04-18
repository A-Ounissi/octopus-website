import React from "react";
import HeroSection from "@/components/LandingHero";
import TrustedBy from "@/components/MarqueeBrandLogos";
import ServicesSection from "@/components/PainVsSolutionComparison";
import Solutions from "@/components/ClientPainPoints";
import CommunityCTA from "@/components/AISolutionTypesExplained";
import Footer from "@/components/Footer";
import ExplainSectionCloser from "@/components/FAQAccordionSection";
import Reinforce from "@/components/FinalCallToAction";
import SectionGlow from "@/components/ui/SectionGlow";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <SectionGlow />
      <TrustedBy />
      <ServicesSection />
      <SectionGlow />
      <Solutions />
      <CommunityCTA />
      <ExplainSectionCloser />
      <SectionGlow />
      <Reinforce />
      <Footer />
    </main>
  );
}