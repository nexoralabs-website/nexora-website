import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { ProcessSection } from "@/components/sections/process";
import { TechnologiesSection } from "@/components/sections/technologies";
import { PracticalEngineeringSection } from "@/components/sections/practical-engineering";
import { WhyUsSection } from "@/components/sections/why-us";
import { AboutSection } from "@/components/sections/about";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { PricingCTASection, NewsletterSection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TechnologiesSection />
      <PracticalEngineeringSection />
      <WhyUsSection />
      <AboutSection />
      <FAQSection />
      <PricingCTASection />
      <ContactSection />
      <NewsletterSection />
    </>
  );
}
