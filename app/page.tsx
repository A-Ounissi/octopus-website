import React from "react";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import ServicesSection from "@/components/ServicesSection";
import TechStack from "@/components/FancyTechStack";
import Solutions from "@/components/Solutions";
import CommunityCTA from "@/components/CommunityCTA";
import Footer from "@/components/Footer";
import ExplainSectionCloser from "@/components/ExplainSectionCloser";
import Reinforce from "@/components/Reinforce";
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