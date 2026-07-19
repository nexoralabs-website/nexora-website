import { CheckCircle } from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

export function ProblemsSection() {
  const problems = [
    "Still managing leads manually?",
    "Need a website that actually generates business?",
    "Too much repetitive work?",
    "Need a custom internal software?",
    "Launching a mobile app?",
    "Need better Google Ads performance?",
    "Want more qualified leads?",
    "Need to automate your business?",
  ];

  return (
    <section id="problems" className="section-padding bg-background" aria-label="Problems We Solve">
      <div className="container-narrow">
        <SectionHeader
          label="Problems"
          title="We Solve Real Business Problems"
          description="You’re focused on growth. We remove the obstacles."
        />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {problems.map((p) => (
            <StaggerItem key={p}>
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <span className="text-lg font-medium">{p}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <p className="mt-8 text-center text-lg font-semibold text-primary">You're in the right place.</p>
      </div>
    </section>
  );
}
