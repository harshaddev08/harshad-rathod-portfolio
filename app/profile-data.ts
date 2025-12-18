export type ContactLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  highlights: string[];
  demoUrl?: string;
};

export type Education = {
  program: string;
  institution: string;
  period: string;
};

export type Stat = {
  value: string;
  label: string;
  description: string;
};

export type ProfileContent = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  availability: string;
  summary: string[];
  contact: ContactLink[];
  skills: string[];
  services: string[];
  stats: Stat[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
};

export const profile: ProfileContent = {
  name: "Harshad Rathod",
  role: "Frontend Engineer",
  tagline:
    "Crafting resilient web applications with polished user experiences and dependable engineering.",
  location: "Ahmedabad, Gujarat, India",
  availability: "Open to full-time roles & remote MERN engagements.",
  summary: [
    "MCA graduate with 3.5+ years of hands-on experience delivering end-to-end web solutions across the full SDLC.",
    "Specialized in building performant, user-centric web applications using React, Next.js, and Node.js.",
    "Experienced in collaborating with cross-functional teams to optimize codebases, enhance UI/UX, and ship reliable releases.",
  ],
  contact: [
    {
      label: "Call",
      href: "tel:+917359376386",
    },
    {
      label: "Email",
      href: "mailto:rathodharshad351@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/harshad-rathod-63a288206/",
    },
  ],
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "React Native",
    "Redux",
    "Tailwind CSS",
    "Material UI",
    "Mantine UI",
    "Bootstrap",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "SVG",
    "Sockets",
    "PWA",
    "Git",
    "REST APIs",
  ],
  services: [
    "Product engineering & feature delivery",
    "Frontend architecture & design systems",
    "API integration & backend collaboration",
    "Performance tuning & accessibility",
    "Client communication & stakeholder alignment",
  ],
  stats: [
    {
      value: "3.5+",
      label: "Years Experience",
      description: "Shipping full-stack solutions across diverse domains.",
    },
    {
      value: "12+",
      label: "End-to-End Projects",
      description:
        "Leading delivery from discovery to launch for web & mobile apps.",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      description: "Trusted partner for ongoing support and feature growth.",
    },
  ],
  experience: [
    {
      company: "Albiorix Technology Pvt. Ltd.",
      role: "Frontend Engineer",
      period: "Jun 2024 – Jul 2025",
      location: "Ahmedabad, Gujarat",
      achievements: [
        "Engineered a comprehensive sports club booking platform with real-time court reservations, calendaring, and membership management.",
        "Shipped responsive admin dashboard experiences enabling operations teams to manage bookings, facilities, and customer memberships efficiently.",
      ],
    },
    {
      company: "Wedowebapps Pvt. Ltd.",
      role: "Frontend Engineer",
      period: "Mar 2023 – Jun 2024",
      location: "Ahmedabad, Gujarat",
      achievements: [
        "Stabilized and enhanced a Next.js e-commerce application, resolving high-priority defects and accelerating client onboarding.",
        "Provided end-to-end product support, partnering with clients to deliver incremental improvements aligned with business goals.",
      ],
    },
    {
      company: "Ansorbit Technolabs Pvt. Ltd.",
      role: "Frontend Developer",
      period: "Jan 2022 – Feb 2023",
      location: "Ahmedabad, Gujarat",
      achievements: [
        "Delivered a React-powered real estate platform improving discovery for buyers, sellers, and investors.",
        "Led React and Node.js initiatives built with TypeScript, emphasizing reusability and maintainability across shared components.",
      ],
    },
  ],
  projects: [
    {
      name: "Lordhair",
      description:
        "Next.js and GraphQL powered commerce platform serving the hair prosthesis market, delivering optimized order flow experiences.",
      stack: ["Next.js", "Redux", "GraphQL", "Apollo", "SSR"],
      demoUrl: "https://www.lordhair.com/",
      highlights: [
        "Optimized checkout and order placement flows to improve conversion rates.",
        "Enhanced server-side rendering and Apollo cache strategies for faster perceived performance.",
      ],
    },
    {
      name: "Result Plan",
      description:
        "Diet food delivery platform offering customized meal plans with an emphasis on wellness and seamless ordering.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      demoUrl: "https://resultplan.com/",
      highlights: [
        "Implemented tailored onboarding to capture nutritional preferences and personalize meal plans.",
        "Built responsive UI components with Tailwind CSS to ensure a consistent experience across devices.",
      ],
    },
    {
      name: "Bookings Africa",
      description:
        "Marketplace enabling digital and in-person services across Nigeria with secure collaboration features.",
      stack: ["Next.js", "Node.js", "Express", "MongoDB", "Bootstrap"],
      demoUrl: "https://bookingsafrica.com/",
      highlights: [
        "Developed job modules supporting both B2B and B2C flows, including posting, matching, and application management.",
        "Integrated server-side rendering and Apollo cache optimizations for reliable global access.",
      ],
    },
    {
      name: "AI Resource Augmentation Platform",
      description:
        "AI-powered platform that streamlines hiring by enabling organizations to source, evaluate, hire, manage, and pay tech talent through a unified system.",
      stack: ["Next.js", "Tailwind CSS", "TypeScript"],
      demoUrl: "https://hireqed.ai/",
      highlights: [
        "Implemented end-to-end hiring workflows including candidate search, shortlisting, interviews, onboarding, and payments.",
        "Built scalable project, task, timesheet, and performance tracking modules to support efficient resource management.",
      ],
    },
  ],
  education: [
    {
      program: "Master of Computer Applications",
      institution: "Government MCA College, Maninagar",
      period: "2020 – 2022",
    },
    {
      program: "Bachelor of Computer Applications (Information Technology)",
      institution: "Kamani Science & Pratapray Arts College, Amreli",
      period: "2017 – 2020",
    },
  ],
};
