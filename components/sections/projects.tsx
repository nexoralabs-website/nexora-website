"use client";

import { ArrowUpRight } from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding" aria-label="Featured Projects">
      <div className="container-narrow">
        <SectionHeader
          label="Featured Projects"
          title="Case Studies That Speak Results"
          description="Real projects, real impact. See how we've helped businesses transform their digital presence."
        />

        <StaggerContainer className="space-y-8">
          {projects.map((project, index) => (
            <StaggerItem key={project.id}>
              <article className="group rounded-2xl border border-border bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-accent/20">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {project.category}
                      </span>
                      <span className="text-xs text-muted">Case Study {String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <div className="mt-6 space-y-4">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                          Problem
                        </h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                          Solution
                        </h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center bg-primary p-8 lg:p-10 text-white">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
                      Result
                    </h4>
                    <p className="text-lg font-medium leading-relaxed text-white/90">
                      {project.result}
                    </p>

                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {project.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="text-2xl font-bold text-accent">{metric.value}</p>
                          <p className="text-xs text-white/50 mt-1">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      View case study
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
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
