export const siteConfig = {
  name: "Nexora Labs",
  tagline: "Building Scalable Digital Products & AI Solutions.",
  description:
    "We solve business problems using technology, automation, marketing, and artificial intelligence. From SaaS platforms to AI-powered workflows — we build, automate, and grow your business.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nexoralabs.com",
  ogImage: "/brand/og-image.png",
  phone: "+917339559072",
  phoneDisplay: "+91 73395 59072",
  links: {
    email: "aravindansingaram56@gmail.com",
    whatsapp:
      "https://wa.me/917339559072?text=Hello%20Nexora%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project.",
    whatsappBase: "https://wa.me/917339559072",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  address: {
    street: "",
    city: "Dindigul",
    state: "Tamil Nadu",
    country: "India",
    postalCode: "624001",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
] as const;

export const footerLinks = {
  services: [
    { label: "AI Automation", href: "#services" },
    { label: "Software Development", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
    { label: "SEO", href: "#services" },
    { label: "ASO", href: "#services" },
    { label: "Brand Strategy", href: "#services" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Technologies", href: "#tech-stack" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#portfolio" },
    { label: "Careers", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;
