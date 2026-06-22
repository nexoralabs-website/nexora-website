import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { ProcessSection } from "@/components/sections/process";
import { TechnologiesSection } from "@/components/sections/technologies";
import { ProjectsSection } from "@/components/sections/projects";
import { WhyUsSection } from "@/components/sections/why-us";
import { AboutSection } from "@/components/sections/about";
import { TestimonialsSection } from "@/components/sections/testimonials";
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
      <ProjectsSection />
      <WhyUsSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <PricingCTASection />
      <ContactSection />
      <NewsletterSection />
    </>
  );
}
