import { HeroSection } from "@/components/sections/hero";
import { ProblemsSection } from "@/components/sections/problems";
import { WhatWeDoSection } from "@/components/sections/what-we-do";
import { HowWeHelpSection } from "@/components/sections/how-we-help";
import { WhoWeWorkWithSection } from "@/components/sections/who-we-work-with";
import { MetricsSection } from "@/components/sections/metrics";
import { SolutionsSection } from "@/components/sections/services";
import { IndustriesSection } from "@/components/sections/industries";
import { WhyChooseSection } from "@/components/sections/why-choose";
import { ProjectsSection } from "@/components/sections/projects";
import { NexoraOSSection } from "@/components/sections/nexora-os";
import { GrowthMarketingSection } from "@/components/sections/growth-marketing";
import { TechStackSection } from "@/components/sections/tech-stack";
import { ProcessSection } from "@/components/sections/process";
import { FAQSection } from "@/components/sections/faq";
import { PricingCTASection } from "@/components/sections/cta";
import { ContactSection } from "@/components/sections/contact";
import { DiscoveryCallSection } from "@/components/sections/discovery-call";
import { ResourcesSection } from "@/components/sections/resources";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <WhatWeDoSection />
      <HowWeHelpSection />
      <WhoWeWorkWithSection />
      <MetricsSection />
      <SolutionsSection />
      <IndustriesSection />
      <WhyChooseSection />
      <ProjectsSection />
      <NexoraOSSection />
      <GrowthMarketingSection />
      <TechStackSection />
      <ProcessSection />
      <FAQSection />
      <PricingCTASection />
      <ContactSection />
    </>
  );
}
