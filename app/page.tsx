import { HeroSection } from "@/components/sections/hero";
import { ProblemsSection } from "@/components/sections/problems";
import { WhatWeDoSection } from "@/components/sections/what-we-do";
import { EngineeringEcosystemSection } from "@/components/sections/engineering-ecosystem";
import { HowWeWorkSection } from "@/components/sections/how-we-work";
import { AboutSection } from "@/components/sections/about";
import { GrowthMarketingSection } from "@/components/sections/growth-marketing";
import { PricingCTASection } from "@/components/sections/cta";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <WhatWeDoSection />
      <EngineeringEcosystemSection />
      <HowWeWorkSection />
      <AboutSection />
      <GrowthMarketingSection />
      <PricingCTASection />
      <ContactSection />
    </>
  );
}
