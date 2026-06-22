import type { Metadata } from "next";
import { siteConfig } from "./constants";

export function createMetadata(overrides?: Partial<Metadata>): Metadata {
  const title = overrides?.title ?? siteConfig.name;
  const description = overrides?.description ?? siteConfig.description;

  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [
      "digital product engineering",
      "web development agency",
      "mobile app development",
      "SaaS development",
      "custom software",
      "Next.js development",
      "Nexora Labs",
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: siteConfig.url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: typeof title === "string" ? title : siteConfig.name,
      description: typeof description === "string" ? description : siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: typeof title === "string" ? title : siteConfig.name,
      description: typeof description === "string" ? description : siteConfig.description,
      images: [siteConfig.ogImage],
      creator: "@nexoralabs",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/brand/icon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/brand/icon-16.png", sizes: "16x16", type: "image/png" },
        { url: "/brand/icon-48.png", sizes: "48x48", type: "image/png" },
      ],
      apple: [{ url: "/brand/icon-180.png", sizes: "180x180", type: "image/png" }],
      shortcut: [{ url: "/brand/logo-mark.png" }],
    },
    ...overrides,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo-mark.png`,
    description: siteConfig.description,
    email: siteConfig.links.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    priceRange: "$$",
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "API Development",
      "Custom Software Development",
      "Backend Engineering",
    ],
  };
}
