"use client";

import { ArrowUpRight } from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="portfolio" className="section-padding bg-background" aria-label="Featured Case Studies">
      <div className="container-narrow">
        <SectionHeader
          label="Our Work"
          title="Featured Case Studies"
          description="A selection of digital products, scalable architectures, and automation systems we've engineered."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <article className="card-premium h-full flex flex-col group overflow-hidden border-border/80">
                <div className="p-8 sm:p-10 flex-1 flex flex-col bg-white">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="rounded-full bg-surface border border-border px-3 py-1 text-xs font-semibold text-primary">
                      {project.category}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm ${
                      project.status === 'Production' ? 'bg-accent/10 text-accent-dark' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-8">
                    {project.overview}
                  </p>

                  {/* Deep Dive Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 flex-1">
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted mb-2">The Problem</h4>
                      <p className="text-sm text-primary leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted mb-2">Our Solution</h4>
                      <p className="text-sm text-primary leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="mb-8 p-4 bg-surface border border-border/50 rounded-lg">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted mb-1">Business Impact</h4>
                    <p className="text-sm font-medium text-primary">{project.impact}</p>
                  </div>

                  {/* Footer / Tech */}
                  <div className="mt-auto pt-6 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-[11px] font-semibold text-muted bg-surface border border-border px-2 py-0.5 rounded-md">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[11px] font-semibold text-muted bg-surface border border-border px-2 py-0.5 rounded-md">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    
                    <button className="flex items-center justify-center h-8 w-8 rounded-full bg-surface border border-border text-primary group-hover:bg-primary group-hover:text-white transition-colors" aria-label="Read full case study (Coming Soon)">
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
