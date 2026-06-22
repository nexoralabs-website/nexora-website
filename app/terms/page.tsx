import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}. Read our terms and conditions for using our website and services.`,
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
});

export default function TermsPage() {
  return (
    <article className="section-padding pt-32">
      <div className="container-narrow max-w-3xl">
        <Link
          href="/"
          className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>
        <h1 className="font-display text-4xl font-bold text-foreground">Terms of Service</h1>
        <p className="mt-4 text-muted">Last updated: June 22, 2026</p>

        <div className="mt-12 space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Agreement to Terms</h2>
            <p>
              By accessing or using the {siteConfig.name} website and services, you agree to be bound
              by these Terms of Service. If you disagree with any part of these terms, you may not
              access our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Services</h2>
            <p>
              {siteConfig.name} provides digital product engineering services including web development,
              mobile app development, API development, and related consulting services. Specific
              project terms will be outlined in individual service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, all intellectual property created during a project
              will be transferred to the client upon full payment. {siteConfig.name} retains the right
              to showcase completed work in our portfolio unless otherwise specified.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
            <p>
              {siteConfig.name} shall not be liable for any indirect, incidental, special, or
              consequential damages arising from the use of our services or website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <a href={`mailto:${siteConfig.links.email}`} className="text-accent hover:underline">
                {siteConfig.links.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
