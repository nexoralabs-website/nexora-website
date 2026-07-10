import type { Service, ProcessStep, Project, Testimonial, FAQ, WhyUsItem, CoreValue } from "@/types";

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "High-performance web applications built with modern frameworks and best practices.",
    icon: "Globe",
    features: ["Responsive design", "SSR & SSG", "Performance optimized", "SEO ready"],
  },
  {
    id: "custom-software",
    title: "Custom Business Software",
    description: "Tailored software solutions that streamline operations and drive business growth.",
    icon: "Building2",
    features: ["Workflow automation", "CRM & ERP systems", "Internal tools", "Legacy modernization"],
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications with seamless user experiences.",
    icon: "Smartphone",
    features: ["iOS & Android", "Cross-platform", "Offline support", "Push notifications"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "Scalable online stores with secure payments and inventory management.",
    icon: "ShoppingCart",
    features: ["Payment integration", "Inventory sync", "Analytics dashboard", "Multi-vendor support"],
  },
  {
    id: "api-development",
    title: "API Development",
    description: "Robust REST and GraphQL APIs designed for scalability and developer experience.",
    icon: "Plug",
    features: ["REST & GraphQL", "API documentation", "Rate limiting", "Versioning"],
  },
  {
    id: "backend-engineering",
    title: "Backend Engineering",
    description: "Secure, scalable backend systems that power your digital products.",
    icon: "Server",
    features: ["Microservices", "Database design", "Cloud deployment", "Real-time systems"],
  },
  {
    id: "maintenance",
    title: "Maintenance & Scaling",
    description: "Ongoing support to keep your products running smoothly and growing with demand.",
    icon: "TrendingUp",
    features: ["Performance monitoring", "Security updates", "Feature enhancements", "24/7 support"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "discovery-call",
    step: 1,
    title: "Discovery Call",
    description: "We begin by understanding your business, goals, audience, existing challenges, and project expectations.",
    icon: "MessageSquare",
    accordionDetails: [
      "Requirement Gathering",
      "Business Analysis",
      "Feature Planning",
      "Technical Consultation",
      "Timeline Discussion",
      "Budget Discussion"
    ]
  },
  {
    id: "project-proposal",
    step: 2,
    title: "Project Proposal",
    description: "After understanding your requirements, we prepare a detailed proposal tailored specifically for your business.",
    icon: "FileText",
    previewType: "proposal",
    accordionDetails: [
      "Client Information",
      "Project Overview",
      "Problem Statement",
      "Proposed Solution",
      "Features",
      "Recommended Technology Stack",
      "Estimated Timeline",
      "Project Cost",
      "Next Steps"
    ]
  },
  {
    id: "quotation",
    step: 3,
    title: "Quotation",
    description: "Once the proposal is approved, we generate a professional quotation.",
    icon: "Receipt",
    previewType: "quotation",
    accordionDetails: [
      "Agency Details",
      "Client Details",
      "Scope of Work",
      "Deliverables",
      "Timeline",
      "Pricing Breakdown",
      "Payment Terms",
      "Terms & Conditions",
      "Approval Section"
    ]
  },
  {
    id: "project-agreement",
    step: 4,
    title: "Project Agreement",
    description: "Before development begins, both parties sign a project agreement to ensure complete transparency.",
    icon: "FileCheck",
    previewType: "contract",
    accordionDetails: [
      "Scope",
      "Deliverables",
      "Timeline",
      "Payment Schedule",
      "Revision Policy",
      "Ownership",
      "Confidentiality",
      "Warranty",
      "Support",
      "Termination Clause"
    ]
  },
  {
    id: "design-development",
    step: 5,
    title: "Design & Development",
    description: "Once documentation is completed, development begins.",
    icon: "Code2",
    showTechStack: true,
    accordionDetails: [
      "UI/UX Design",
      "Database Architecture",
      "Frontend Development",
      "Backend Development",
      "API Integration",
      "Testing",
      "Performance Optimization"
    ]
  },
  {
    id: "client-review",
    step: 6,
    title: "Client Review",
    description: "Clients receive continuous updates throughout development.",
    icon: "CheckCircle",
    accordionDetails: [
      "Demo Sessions",
      "Progress Reports",
      "Feedback Collection",
      "Revisions",
      "Quality Assurance"
    ]
  },
  {
    id: "deployment",
    step: 7,
    title: "Deployment",
    description: "After final approval, the application is deployed.",
    icon: "Rocket",
    accordionDetails: [
      "Domain Setup",
      "Hosting",
      "SSL Configuration",
      "Production Deployment",
      "Final Testing",
      "Performance Optimization"
    ]
  },
  {
    id: "invoice",
    step: 8,
    title: "Invoice",
    description: "After project completion or milestone delivery, an official invoice is generated.",
    icon: "FileText",
    previewType: "invoice",
    accordionDetails: [
      "Invoice Number",
      "Billing Summary",
      "Services",
      "Taxes",
      "Total Amount",
      "Due Date",
      "Payment Methods",
      "Notes"
    ]
  },
  {
    id: "support-maintenance",
    step: 9,
    title: "Support & Maintenance",
    description: "Our relationship continues after launch.",
    icon: "HeartHandshake",
    accordionDetails: [
      "Bug Fixes",
      "Performance Monitoring",
      "Security Updates",
      "Feature Enhancements",
      "Technical Support",
      "Maintenance Plans"
    ]
  }
];



export const heroPillars = [
  "Engineering",
  "Performance",
  "Scalability",
  "Reliability",
] as const;

export const projects: Project[] = [
  {
    id: "saas-platform",
    title: "Enterprise SaaS Platform",
    category: "SaaS",
    problem: "A growing startup needed to migrate from a monolithic legacy system to a scalable multi-tenant SaaS platform.",
    solution: "Built a modern Next.js frontend with a Laravel API backend, implementing multi-tenancy, role-based access, and real-time analytics.",
    technologies: ["Next.js", "Laravel", "MySQL", "Redis", "AWS"],
    result: "Reduced page load times by 65% and enabled onboarding of 500+ enterprise clients within 6 months.",
    metrics: [
      { label: "Performance", value: "+65%" },
      { label: "Clients", value: "500+" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    id: "ecommerce-app",
    title: "Multi-Vendor E-Commerce",
    category: "E-Commerce",
    problem: "An established retailer wanted to launch a multi-vendor marketplace with complex inventory and payment workflows.",
    solution: "Developed a full-stack marketplace with Razorpay integration, vendor dashboards, and automated commission tracking.",
    technologies: ["Next.js", "Node.js", "Supabase", "Razorpay"],
    result: "Processed ₹2Cr+ in GMV within the first quarter with 99.99% payment success rate.",
    metrics: [
      { label: "GMV", value: "₹2Cr+" },
      { label: "Vendors", value: "150+" },
      { label: "Success Rate", value: "99.99%" },
    ],
  },
  {
    id: "mobile-fintech",
    title: "FinTech Mobile App",
    category: "Mobile",
    problem: "A fintech company required a secure, compliant mobile app for digital payments and financial management.",
    solution: "Built a Flutter cross-platform app with biometric auth, real-time transactions, and comprehensive audit logging.",
    technologies: ["Flutter", "Node.js", "PostgreSQL", "REST APIs"],
    result: "Achieved 50K+ downloads with 4.8★ rating and zero security incidents in production.",
    metrics: [
      { label: "Downloads", value: "50K+" },
      { label: "Rating", value: "4.8★" },
      { label: "Security", value: "Zero incidents" },
    ],
  },
];

export const whyUsItems: WhyUsItem[] = [
  {
    id: "engineering-first",
    title: "Engineering-First Approach",
    description: "We prioritize clean architecture, maintainable code, and technical excellence in every project.",
    icon: "Code2",
  },
  {
    id: "scalable",
    title: "Scalable Architecture",
    description: "Systems designed to grow with your business—from MVP to enterprise scale without rewrites.",
    icon: "Layers",
  },
  {
    id: "fast-delivery",
    title: "Fast Delivery",
    description: "Agile sprints and proven processes ensure rapid time-to-market without compromising quality.",
    icon: "Zap",
  },
  {
    id: "clean-code",
    title: "Clean Code",
    description: "Well-documented, tested codebases that your team can easily maintain and extend.",
    icon: "FileCode2",
  },
  {
    id: "support",
    title: "Long-Term Support",
    description: "We're partners for the long haul—ongoing maintenance, updates, and strategic guidance.",
    icon: "HeartHandshake",
  },
  {
    id: "communication",
    title: "Transparent Communication",
    description: "Regular updates, clear timelines, and direct access to your engineering team.",
    icon: "MessageSquare",
  },
];

export const coreValues: CoreValue[] = [
  {
    id: "excellence",
    title: "Excellence",
    description: "We hold ourselves to the highest standards in code quality, design, and delivery.",
  },
  {
    id: "integrity",
    title: "Integrity",
    description: "Honest communication, fair pricing, and commitments we always keep.",
  },
  {
    id: "innovation",
    title: "Innovation",
    description: "Embracing modern technologies and creative solutions to solve complex problems.",
  },
  {
    id: "partnership",
    title: "Partnership",
    description: "Your success is our success—we invest in long-term relationships, not transactions.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Nexora Labs transformed our legacy platform into a modern SaaS product. Their engineering expertise and attention to detail exceeded our expectations.",
    author: "Rajesh Kumar",
    role: "CEO",
    company: "TechVentures Inc.",
  },
  {
    id: "2",
    quote: "The team delivered our e-commerce platform ahead of schedule with zero critical bugs at launch. Their communication throughout was exceptional.",
    author: "Priya Sharma",
    role: "Founder",
    company: "ShopLocal",
  },
  {
    id: "3",
    quote: "Working with Nexora felt like having an in-house engineering team. They understood our vision and built exactly what we needed.",
    author: "Michael Chen",
    role: "CTO",
    company: "DataFlow Systems",
  },
];

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What types of projects do you work on?",
    answer: "We specialize in web applications, mobile apps, SaaS platforms, e-commerce solutions, APIs, and custom business software for startups, SMEs, and enterprise clients.",
  },
  {
    id: "2",
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope. An MVP typically takes 8-12 weeks, while larger enterprise projects may take 3-6 months. We provide detailed timelines during the discovery phase.",
  },
  {
    id: "3",
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer comprehensive maintenance and support packages including bug fixes, performance monitoring, security updates, and feature enhancements.",
  },
  {
    id: "4",
    question: "What is your development process?",
    answer: "We follow an agile methodology with regular sprints, demos, and feedback loops. Our process includes discovery, planning, design, development, testing, deployment, and ongoing support.",
  },
  {
    id: "5",
    question: "How do you handle project communication?",
    answer: "We use Slack, email, and weekly video calls to keep you informed. You'll have direct access to your project team and a dedicated project manager.",
  },
];

export const stats = [
  { label: "Projects Delivered", value: 12, suffix: "+" },
  { label: "Clients Worked With", value: 8, suffix: "+" },
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Focused Delivery", value: 100, suffix: "%" },
];
