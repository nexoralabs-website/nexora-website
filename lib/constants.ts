export const siteConfig = {
  name: "Nexora Labs",
  tagline: "Building Scalable Digital Products",
  description:
    "We build scalable digital products with a focus on clean engineering, practical execution, and long-term maintainability.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nexoralabs.com",
  ogImage: "/brand/og-image.png",
  phone: "+917339559072",
  phoneDisplay: "+91 73395 59072",
  links: {
    email: "aravindansingaram56@gmail.com",
    whatsapp: "https://wa.me/917339559072?text=Hello%20Nexora%20Labs%2C%20I%20would%20like%20to%20discuss%20a%20project.",
    whatsappBase: "https://wa.me/917339559072",
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
  { label: "Process", href: "#process" },
  { label: "Technologies", href: "#technologies" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Web Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "API Development", href: "#services" },
    { label: "Backend Engineering", href: "#services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;
