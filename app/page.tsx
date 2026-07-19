import { HeroSection } from "@/components/sections/hero";
import { SocialProofSection } from "@/components/sections/social-proof";
import { MetricsSection } from "@/components/sections/metrics";
import { ServicesSection } from "@/components/sections/services";
import { IndustriesSection } from "@/components/sections/industries";
import { WhyUsSection } from "@/components/sections/why-us";
import { ProcessSection } from "@/components/sections/process";
import { TechStackSection } from "@/components/sections/tech-stack";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { FAQSection } from "@/components/sections/faq";
import { PricingCTASection } from "@/components/sections/cta";
import { ContactSection } from "@/components/sections/contact";
import { DiscoveryCallSection } from "@/components/sections/discovery-call";
import { ResourcesSection } from "@/components/sections/resources";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <MetricsSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyUsSection />
      <ProjectsSection />
      <ProcessSection />
      <TechStackSection />
      <DiscoveryCallSection />
      <AboutSection />
      <ResourcesSection />
      <FAQSection />
      <PricingCTASection />
      <ContactSection />
    </>
  );
}
