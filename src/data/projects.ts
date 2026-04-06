export interface Project {
  slug: string;
  title: string;
  company: string;
  description: string;
  longDescription: string;
  url?: string;
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
    slug: "cocopa",
    title: "Cocopa Resort Club",
    company: "Project Manager / Developer",
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
    slug: "edwards-lifesciences",
    company: "Edwards Lifesciences",
    role: "Product Management Intern",
    location: "Irvine, CA",
    description: "Designed healthcare solutions for underserved communities affected by cardiovascular disease.",
    longDescription: `Interned at Edwards Lifesciences, a global leader in medical innovations for structural heart disease.

Key achievements:
• Designed a campaign to provide accessible healthcare solutions to underserved communities
• Researched mobile clinic solutions equipped with transcatheter heart valves and hemodynamic monitoring
• Collaborated with cross-functional team to develop and pitch product strategies
• Gained insight into precision manufacturing challenges for micro medical technologies`,
    technologies: ["Product Strategy", "Market Research", "Healthcare"],
    links: [],
  },
];
