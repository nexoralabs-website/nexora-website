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
    description: "We start by understanding your business, goals, audience, and project requirements.",
    icon: "MessageSquare",
    accordionDetails: [
      "Understanding your business goals",
      "Target audience analysis",
      "Project scope discussion",
      "Initial timeline and budget"
    ]
  },
  {
    id: "requirements-gathering",
    step: 2,
    title: "Requirements Gathering",
    description: "We detail all functional and non-functional requirements for your project.",
    icon: "CheckCircle",
    accordionDetails: [
      "User stories and use cases",
      "Technical specifications",
      "Feature prioritization",
      "Success metrics definition"
    ]
  },
  {
    id: "proposal",
    step: 3,
    title: "Proposal",
    description: "We prepare a detailed proposal with project scope, timeline, and deliverables.",
    icon: "FileText",
    previewType: "proposal",
    accordionDetails: [
      "Client Information",
      "Project Overview",
      "Proposed Solution",
      "Features Breakdown",
      "Technology Stack",
      "Estimated Timeline",
      "Project Cost"
    ]
  },
  {
    id: "quotation",
    step: 4,
    title: "Quotation",
    description: "A professional quotation with pricing and payment terms.",
    icon: "Receipt",
    previewType: "quotation",
    accordionDetails: [
      "Scope of Work",
      "Pricing Breakdown",
      "Payment Schedule",
      "Terms & Conditions"
    ]
  },
  {
    id: "contract",
    step: 5,
    title: "Contract",
    description: "Finalize the agreement with scope, deliverables, and terms.",
    icon: "FileCheck",
    previewType: "contract",
    accordionDetails: [
      "Scope of Work",
      "Deliverables",
      "Payment Terms",
      "Confidentiality",
      "Ownership",
      "Termination Clause"
    ]
  },
  {
    id: "design",
    step: 6,
    title: "Design",
    description: "Create UI/UX designs and wireframes for your product.",
    icon: "Palette",
    accordionDetails: [
      "Wireframing",
      "UI/UX Design",
      "Design System",
      "Prototyping",
      "Feedback & Revisions"
    ]
  },
  {
    id: "development",
    step: 7,
    title: "Development",
    description: "Build the product using modern technologies and best practices.",
    icon: "Code2",
    showTechStack: true,
    accordionDetails: [
      "Frontend Development",
      "Backend Development",
      "API Integration",
      "Database Architecture",
      "Code Reviews"
    ]
  },
  {
    id: "testing",
    step: 8,
    title: "Testing",
    description: "Rigorous testing to ensure quality and reliability.",
    icon: "ShieldCheck",
    accordionDetails: [
      "Unit Testing",
      "Integration Testing",
      "User Acceptance Testing",
      "Performance Testing",
      "Bug Fixes"
    ]
  },
  {
    id: "deployment",
    step: 9,
    title: "Deployment",
    description: "Launch your product to production environment.",
    icon: "Rocket",
    accordionDetails: [
      "Infrastructure Setup",
      "Domain & SSL",
      "Production Deployment",
      "Final Checks",
      "Monitoring Setup"
    ]
  },
  {
    id: "support",
    step: 10,
    title: "Support",
    description: "Ongoing support and maintenance for your product.",
    icon: "HeartHandshake",
    accordionDetails: [
      "Bug Fixes",
      "Security Updates",
      "Performance Optimization",
      "Feature Enhancements",
      "Technical Support"
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
