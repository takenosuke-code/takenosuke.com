export type ProjectCategory = "ai-ml" | "fullstack";

export interface Project {
  slug: string;
  title: string;
  company: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  url?: string;
  github?: string;
  image: string;
  gallery?: string[];
  technologies: string[];
  softSkills: string[];
  highlights: {
    metric: string;
    label: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "vetonet",
    title: "VetoNet",
    company: "Founder / Engineer",
    category: "ai-ml",
    description:
      "Semantic firewall that prevents prompt injection attacks on AI agent transactions with a 98.87% block rate.",
    longDescription: `VetoNet is a security layer for AI agents that make real-world transactions. When an AI agent tries to spend money, book a service, or execute an action on behalf of a user, VetoNet intercepts the call and decides whether to approve or block it — in milliseconds, before the damage is done.

The core problem — intent drift:
AI agents can be manipulated by prompt injection so that what they execute drifts away from what the user originally asked for. A "$50 Amazon gift card" becomes "$50 of AWS Credits." A "$50 rental" becomes a "$50,000 yacht charter." The agent itself can't be trusted to report what it's doing — it's already been fooled.

VetoNet compares the user's original stated intent against the real tool call parameters hitting the API — not what the agent claims it's doing.

3-Layer defense engine:
• Deterministic rule checks — 10 hard rules (known bad vendors, category mismatches, price floors, obfuscated text, Cyrillic lookalikes, zero-width characters)
• ML classifier — Sentence Transformer + RandomForest trained on 4,400+ labeled real-world attacks
• LLM semantic layer — final judgment on subtle, context-dependent cases

Shipped:
• Open-source Python package (pip install vetonet) with LangChain @protected_tool decorator
• Live product with API key auth, rate limiting, React playground
• Flask API + Supabase auth + Groq LLM integration, deployed on Railway
• Tested against 3,820+ attack scenarios — 98.87% block rate, 24 real bypasses found and documented`,
    url: "https://veto-net.org",
    github: "https://github.com/takenosuke-code/vetonet",
    image: "/img/vetonetLP.png",
    technologies: [
      "Python",
      "Flask",
      "LangChain",
      "Sentence Transformers",
      "scikit-learn",
      "Groq",
      "Supabase",
      "React",
      "Railway",
    ],
    softSkills: ["AI Security", "ML Engineering", "Product Strategy"],
    highlights: [
      { metric: "98.87%", label: "Block Rate" },
      { metric: "3,820+", label: "Attacks Tested" },
      { metric: "4,400+", label: "Training Examples" },
    ],
  },
  {
    slug: "tennis-iq",
    title: "TennisIQ",
    company: "Founding Engineer",
    category: "ai-ml",
    description:
      "AI tennis swing analyzer with pose tracking, a custom-trained swing classifier, and Claude-powered coaching feedback.",
    longDescription: `TennisIQ helps players sharpen their technique by analyzing swing video frame-by-frame, comparing it against their own best swing, and giving AI coaching feedback on what changed.

Pose tracking & visualization:
• MediaPipe-powered detection of 33 body landmarks per frame (shoulders, elbows, wrists, knees)
• Real-time swing-path visualization of the racket-hand motion as a smooth curve
• Joint group filters to focus analysis on a specific part of the body
• Synchronized side-by-side playback at variable speeds for baseline vs. current

Custom-trained classifier:
• Built and trained a swing classifier on labeled tennis-swing data
• Identifies swing type and surfaces technique deviations the LLM can then explain
• Pre-processed pose-landmark sequences into model-ready features and tuned for low-latency inference in the browser/server pipeline

AI coaching layer:
• Claude analyzes joint-angle deltas between current swing and saved baseline
• Returns concrete, plain-English feedback on what improved and what regressed

Stack & infra:
• React frontend deployed on Vercel
• Vercel Blob for swing-video storage and retrieval
• Python services on Railway for pose processing and classifier inference
• MediaPipe (pose detection) + Claude API (coaching feedback)`,
    url: "https://tennisiq-sigma.vercel.app",
    image: "/img/tennisiq_LP.png",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "MediaPipe",
      "scikit-learn",
      "Claude API",
      "Vercel",
      "Vercel Blob",
      "Railway",
    ],
    softSkills: ["AI/ML", "Computer Vision", "Founding Engineer"],
    highlights: [
      { metric: "33", label: "Body Landmarks" },
      { metric: "Trained", label: "Swing Classifier" },
      { metric: "Claude", label: "Coaching" },
    ],
  },
  {
    slug: "cocopa",
    title: "Cocopa Resort Club",
    company: "Project Manager / Developer",
    category: "fullstack",
    description:
      "Led a team of 3 to rebuild a Golf resort's website with performance improvements.",
    longDescription: `As Project Manager, I led a team of 3 engineers and designers to completely rebuild the Cocopa Resort Club website.

Key achievements:
• Managed full SDLC from requirements to deployment
• Coordinated with Japanese stakeholders
• Implemented performance optimizations improving Core Web Vitals
• Delivered in 4 weeks, on time and under budget

Results:
• +60% page speed improvement
• +40% mobile engagement
• +25% booking increase`,
    url: "https://cocopa.co.jp",
    image: "/img/cocopaimg.png",
    technologies: ["Next.js", "Tailwind CSS", "Headless CMS", "Cloudflare", "Vercel"],
    softSkills: ["Project Management", "Team Leadership", "Client Relations"],
    highlights: [
      { metric: "+60%", label: "Page Speed" },
      { metric: "+40%", label: "Mobile Engagement" },
      { metric: "+25%", label: "Bookings" },
    ],
  },
  {
    slug: "taketora-antique",
    title: "Taketora Antique",
    company: "Developer",
    category: "fullstack",
    description:
      "Built a fullstack modern e-commerce store with WordPress as a headless CMS for non-technical clients.",
    longDescription: `Developed a full e-commerce solution for an anime/antique store using WordPress as a headless CMS.

Key achievements:
• Architected headless WordPress integration with REST API and GraphQL
• Built performant Next.js frontend with SSG 
• Integrated and set up supabase for inventory management & and auth
• Set up GA4, and designed site via hub and spoke model to improve SEO and Google Indexing
• Secured a 5 figure maintainance contract
Results:
• Headless CMS architecture for modern performance
• 100% client autonomy for content management`,
    url: "https://taketora-antique.com",
    image: "/img/taketoraimg.png",
    technologies: ["Next.js", "Tailwind CSS", "WordPress", "GraphQL", "Vercel", "Supabase"],
    softSkills: ["Full-stack Development", "API Integration"],
    highlights: [
      { metric: "Headless", label: "CMS" },
      { metric: "100%", label: "Client Autonomy" },
    ],
  },
  {
    slug: "mineka-japan",
    title: "Mineka Japan",
    company: "Project Manager",
    category: "fullstack",
    description:
      "Managed a cross-functional team to deliver an e-commerce platform for international clients.",
    longDescription: `Led product management for an e-commerce platform serving international markets.

Key achievements:
• Managed end-to-end product development
• Ensured timely delivery and client satisfaction
• Secured 4-figure maintenance contract`,

    url: "https://www.minekajapan.com",
    image: "/img/mineka_japanimg.png",
    technologies: ["HTML", "CSS", "Wix"],
    softSkills: ["Project Management", "Client Relations"],
    highlights: [
      { metric: "4-Figure", label: "Contract" },
      { metric: "2", label: "Team Members" },
    ],
  },
  {
    slug: "senpai-career",
    title: "Senpai Career",
    company: "Project Manager",
    category: "fullstack",
    description:
      "Career platform connecting students with mentors and opportunities in tech.",
    longDescription: `Led product development for Senpai Career, a platform to help students navigate tech careers.

Key achievements:
• Managed product roadmap and feature prioritization
• Coordinated design and development sprints
• Built user acquisition strategies`,
    url: "https://senpai-career-weld.vercel.app",
    image: "/img/senpaicareerimg.png",
    technologies: ["Next.js", "Tailwind CSS", "Vercel", "Supabase"],
    softSkills: ["Product Management", "Strategy"],
    highlights: [
      { metric: "Career", label: "Platform" },
    ],
  },
  {
    slug: "pleast",
    title: "PLEAST",
    company: "Product Design",
    category: "fullstack",
    description: "UI/UX design for a real estate platform.",
    longDescription: `Designed the user interface for PLEAST, a real estate platform.

Key achievements:
• Created UI mockups and design system
• Designed property listing and search flows
• Built responsive layouts for mobile and desktop`,
    image: "/img/pleastimg.png",
    gallery: ["/img/pleast2.png", "/img/pleast3.png"],
    technologies: ["UI/UX", "Figma", "Product Design"],
    softSkills: ["Visual Design", "User Research"],
    highlights: [
      { metric: "UI/UX", label: "Design" },
    ],
  },
  {
    slug: "ai-plaza",
    title: "AI Plaza",
    company: "Developer",
    category: "fullstack",
    description: "AI discovery platform with affiliate marketing.",
    longDescription: `Developed AI Plaza, a platform for discovering and comparing AI tools and services.

Key achievements:
• Built the frontend interface for browsing AI tools
• Implemented search and filtering algorithm to display relevant AI tools for users based on data analysis scoring users.
• Created responsive layouts for optimal user experience`,
    image: "/img/aiplazaimg.png",
    gallery: ["/img/aiplaza1.png", "/img/aiplaza2.png"],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    softSkills: ["Frontend Development", "UI Implementation"],
    highlights: [
      { metric: "AI", label: "Platform" },
    ],
  },
];

export interface Experience {
  slug: string;
  company: string;
  role: string;
  location: string;
  description: string;
  longDescription: string;
  technologies: string[];
  links: { label: string; url: string }[];
}

export const experiences: Experience[] = [
  {
    slug: "meta-lexical",
    company: "Meta",
    role: "Open Source Contributor",
    location: "Remote",
    description: "Contributed to Lexical, Meta's extensible text editor framework.",
    longDescription: `Contributed to Lexical, Meta's open-source extensible text editor framework used across Meta products.

Key contributions:
• Contributed to the Lexical text editor framework
• Worked within Meta's open-source ecosystem and contribution guidelines`,
    technologies: ["JavaScript", "TypeScript", "React", "Lexical"],
    links: [
      { label: "Lexical", url: "https://github.com/facebook/lexical" },
    ],
  },
  {
    slug: "nortiq-labs",
    company: "Nortiq Labs",
    role: "Co-Founder / CTO",
    location: "Kyoto, Japan",
    description: "Technical consulting firm. $40K+ revenue in 4 months · $100K ARR",
    longDescription: `Co-founded a technical consulting firm specializing in web development for Japanese businesses.

My Role & Key achievements:
• Built and led a team of 2 engineers 1 designer
• Technically consulted over 7 companies, securing 5 figure contracts
• Managed over 3 projects, developed 2, and designed 1
• Grew revenue to $40K+ in first 4 months, on track for $100K ARR`,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Supabase"],
    links: [
      { label: "Website", url: "https://nortiqlab.com" },
      { label: "Instagram", url: "https://www.instagram.com/nortiq_lab/" },
    ],
  },
  {
    slug: "anqa-life",
    company: "Anqa Life",
    role: "Blockchain Engineer",
    location: "Berkeley SkyDeck Batch 20",
    description: "Worked on DeFi infrastructure and open-source stablecoin insurance protocol.",
    longDescription: `Worked as a blockchain engineer at a Berkeley SkyDeck-backed startup.

Key achievements:
• Worked on open-source stablecoin insurance protocol
• Integrated 6 additional crypto wallets into the UI
• Shipped 4 fixes related to UI, smart contracts, syncronization issues`,
    technologies: ["Vue", "Solidity", "Web3.js", "Ethereum", "Ethers.js", "Hardhat Deploy"],
    links: [],
  },
  {
    slug: "hot",
    company: "Humanitarian OpenStreetMap Team",
    role: "ML Engineer",
    location: "Global Nonprofit",
    description: "Building OSM Tagger to map road conditions for disaster response using vision-language models.",
    longDescription: `Working as an ML Engineer at HOT, a global nonprofit that creates open map data for humanitarian response.

Project: OpenStreetMap (OSM) Tagger
• Building a system that takes geo-located street-level images and generates HOT-compatible OSM tags
• Processing street images using vision-language LLM to generate tags (road surface, smoothness)
• Goal: Map road conditions faster and more accurately to support disaster response and humanitarian operations
• Testing newer LLMs and exploring direct computer vision approaches`,
    technologies: ["Python", "FastAPI", "Computer Vision", "Vision-Language LLM", "Docker"],
    links: [],
  },
  {
    slug: "claoc",
    company: "CLAOC",
    role: "Intern",
    location: "Irvine, CA",
    description: "Designed healthcare solutions for underserved communities affected by cardiovascular disease.",
    longDescription: `Interned at CLAOC, working on accessible healthcare solutions for underserved communities affected by cardiovascular disease.

Key achievements:
• Designed a campaign to provide accessible healthcare solutions to underserved communities
• Researched mobile clinic solutions equipped with transcatheter heart valves and hemodynamic monitoring
• Collaborated with cross-functional team to develop and pitch product strategies
• Gained insight into precision manufacturing challenges for micro medical technologies`,
    technologies: ["Product Strategy", "Market Research", "Healthcare"],
    links: [],
  },
];
