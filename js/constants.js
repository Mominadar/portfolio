/**
 * ============================================================================
 *  SITE CONTENT — edit everything here.
 * ============================================================================
 *  This is the only file you need to touch to update the portfolio's content:
 *  your name, bio, projects, skills, work history, contact details, etc.
 *
 *  The markup in index.html is rendered from this data by js/main.js, so you
 *  never have to edit HTML to change a project, add a job, or update a link.
 *
 *  Colours used across the site (keep these in sync with css/styles.css):
 *    orange  #ff6a3d   |  amber  #ffd166
 *    teal    #5eead4   |  pink   #ff8fb3   |  muted grey  #8b93a1
 * ============================================================================
 */

const SITE = {
  /* --- Identity ---------------------------------------------------------- */
  name: "Momina Babar",
  role: "Full Stack Developer",
  location: "Pakistan",
  email: "mominababar97@gmail.com",
  yearsExperience: 5,

  /* Headline shown in the hero.
     - "\n" becomes a line break.
     - Wrap text in {accent}…{/accent} to paint it in the accent colour. */
  headline: "Building systems that\nscale with intent{accent}.{/accent}",

  /* Short intro paragraph under the headline. */
  intro:
    "Full Stack Developer and technical leader with 5 years of experience " +
    "setting direction, establishing durable engineering practices, and " +
    "shipping production-scale products. Based in {location}, working with teams everywhere.",

  focus: "full-stack systems · engineering standards · applied AI",

  /* --- Availability ------------------------------------------------------ */
  // When `available` is true a teal "open" badge shows; otherwise an amber one.
  available: true,
  availableLabel: "Open to new opportunities",
  unavailableLabel: "Not currently looking",

  /* --- Accent colour ----------------------------------------------------- */
  // Primary accent used for highlights, buttons and links.
  // Options that pair well with the theme: #ff6a3d #5eead4 #ffd166 #ff8fb3
  accentColor: "#ff6a3d",

  /* --- Links ------------------------------------------------------------- */
  cvLink: "#", // link to your CV/résumé PDF
  socials: {
    github: "https://github.com/Mominadar",
    linkedin: "https://www.linkedin.com/in/mominababardar",
  },

  /* --- Section: Selected work -------------------------------------------- */
  // `tagColor` accepts any of the theme colours above.
  projectGroups: [
    {
      title: "Career Projects",
      projects: [
        {
          name: "OOI Prototyping Platform",
          category: "Developer Platform",
          tagColor: "#5eead4",
          year: "2024 — now",
          link: "#",
          description:
            "A micro-frontend framework for UNICEF Office of Innovation prototypes, " +
            "reducing build-to-deploy time by 10× and accelerating the path from MVP to product.",
          stack: ["React", "TypeScript", "Micro-frontends", "AWS", "CI/CD"],
        },
        {
          name: "AI Prototype Framework",
          category: "Applied AI",
          tagColor: "#a78bfa",
          year: "2024 — now",
          link: "#",
          description:
            "An AI-assisted framework that enables non-technical teams to generate " +
            "real-world prototypes aligned with UNICEF guidelines.",
          stack: ["LLMs", "Agents", "RAG", "React", "Python"],
        },
        {
          name: "Multi-tenant ERP",
          category: "Enterprise",
          tagColor: "#ff8fb3",
          year: "2022 — 2024",
          link: "#",
          description:
            "Architected and delivered a multi-tenant ERP platform with a " +
            "double-entry accounting module and shared CI/CD infrastructure.",
          stack: ["MongoDB", "Express", "React", "Node.js", "AWS"],
        },
        {
          name: "Client Health Monitor",
          category: "Observability",
          tagColor: "#ffd166",
          year: "2021",
          link: "#",
          description:
            "A React monitoring dashboard with automated health alerts that " +
            "reduced client system downtime by 70%.",
          stack: ["React", "JavaScript", "Testing", "Monitoring"],
        }
      ],
    },
    {
      title:"Client Work",
      projects:[
        {
          name: "Agha & Associates",
          category: "Web & SEO",
          tagColor: "#5eead4",
          year: "2023",
          link: "https://aghaandassociates.com/",
          description:
            "A search-optimized website for a law firm that ranks highly for " +
            "relevant Google searches.",
          stack: ["React", "SEO", "HTML", "CSS"],
        },
        {
          name: "Apex Law Firm",
          category: "Web & SEO",
          tagColor: "#5eead4",
          year: "2023",
          link: "https://apexlawf.com/",
          description:
            "A search-optimized website for a law firm that ranks highly for " +
            "relevant Google searches.",
          stack: ["React", "SEO", "HTML", "CSS"],
        },
      ]
    },
    {
      title: "Personal projects",
      projects: [
        {
          name: "Mock Progress",
          category: "Open Source",
          tagColor: "#ff8fb3",
          year: "2024",
          link: "https://www.npmjs.com/package/mock-progress-react",
          description:
            "A type-safe npm package for mocking front-end progress states, " +
            "with more than 500 downloads.",
          stack: ["TypeScript", "React", "npm"],
        },
      ],
    },
  ],

  /* --- Section: Toolbox (skills) ----------------------------------------- */
  skillGroups: [
    { title: "Languages", color: "#ff6a3d", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
    { title: "Frontend", color: "#ffd166", items: ["React", "Next.js", "Remix", "HTML/CSS"] },
    { title: "Backend", color: "#5eead4", items: ["Node.js", "NestJS", "MongoDB", "PostgreSQL", "MySQL"] },
    { title: "AI", color: "#a78bfa", items: ["Claude", "ChatGPT", "Gemini", "AI agents", "RAG", "LLM prototyping"] },
    { title: "DevOps", color: "#ff8fb3", items: ["AWS", "Azure", "Docker", "Git", "CI/CD"] },
    { title: "Engineering", color: "#8b93a1", items: ["System architecture", "Testing", "Engineering standards", "Mentoring", "Operational excellence"] },
  ],

  /* --- Section: Experience log ------------------------------------------- */
  // `dotColor` uses "accent" to inherit the accent colour, or any hex value.
  timeline: [
    {
      range: "Jun 2024 — now",
      role: "Full Stack Developer",
      org: "UNICEF Office of Innovation",
      orgLink: "https://www.unicef.org/innovation/",
      dotColor: "accent",
      highlights: [
        "Created a micro-frontend platform that reduced prototype build-to-deploy time by 10×.",
        "Research frontier technologies and build real-world prototypes for UNICEF initiatives.",
        "Built an AI framework that helps non-technical teams generate prototypes aligned with UNICEF guidelines.",
      ],
    },
    {
      range: "Jan 2022 — May 2024",
      role: "Senior Software Engineer",
      org: "Auxcube",
      orgLink: "https://www.auxcube.com/",
      dotColor: "#5eead4",
      highlights: [
        "Joined as a founding team member and helped establish engineering processes for a growing startup.",
        "Architected a multi-tenant MERN ERP with a double-entry accounting module.",
        "Established engineering standards, mentored developers, and set up shared GitHub and AWS CI/CD pipelines.",
        "Optimized critical healthcare database operations, delivering 20% operational savings.",
      ],
    },
    {
      range: "Mar 2021 — Dec 2021",
      role: "Analyst Software Engineer",
      org: "Afiniti",
      orgLink: "https://www.afiniti.com/",
      dotColor: "#ffd166",
      highlights: [
        "Built a React monitoring dashboard with automated alerts, reducing client system downtime by 70%.",
        "Raised automated and manual test coverage across codebases to more than 80%.",
        "Took ownership of product support within two months of joining.",
      ],
    },
    {
      range: "2017 — 2021",
      role: "Bachelor of Computer Science",
      org: "COMSATS University Islamabad",
      dotColor: "#8b93a1",
      highlights: ["Graduated as a bronze medalist."],
    },
  ],

  /* --- Section: Open to (engagements) ------------------------------------ */
  // Toggle the whole section on/off with `showRates`.
  showRates: true,
  engagements: [
    {
      tag: "Full-time",
      title: "Permanent roles",
      desc: "Looking to join a team long-term, own meaningful problems, and grow with the company.",
    },
    {
      tag: "Contract",
      title: "Fixed-term contract",
      desc: "Available for contract or contract-to-hire positions with a clear scope and timeline.",
    },
    {
      tag: "Advisory",
      title: "Consulting",
      desc: "Short engagements — architecture reviews, technical due diligence, or unblocking a team.",
    },
  ],

  /* --- Contact copy ------------------------------------------------------ */
  contact: {
    heading: "Let's work\ntogether.",
    blurb:
      "Open to new roles and opportunities. Fastest way to reach me is " +
      "email — I reply within a day.",
  },
};

// Expose to the browser (loaded as a plain script, so this works from file://
// as well as when served over http). Also support CommonJS for tooling/tests.
if (typeof window !== "undefined") window.SITE = SITE;
if (typeof module !== "undefined" && module.exports) module.exports = SITE;
