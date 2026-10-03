// Edit this file to make the site yours. Everything on the page is pulled from here.

export const profile = {
  name: 'Ansh Kaushal',
  initials: 'AK',
  role: 'Software Engineer',
  tagline: 'I build fast, reliable systems — and the occasional unnecessary terminal emulator.',
  location: 'Earth, probably at a keyboard',
  githubUsername: 'kaemikun',
  email: 'you@example.com',
  resumeUrl: '#',

  bio: [
    "I'm a software engineer who likes systems that are fast, boring in production, and a little fun to build.",
    "I care about clean interfaces, honest error messages, and shipping things that actually get used.",
    'Outside of work: reading changelogs for fun, breaking my own side projects, and fixing them again.',
  ],

  social: {
    github: 'https://github.com/kaemikun',
    linkedin: 'https://linkedin.com/in/your-handle',
    twitter: 'https://twitter.com/your-handle',
    email: 'mailto:you@example.com',
  },

  skills: [
    {
      category: 'Languages',
      items: ['TypeScript', 'Python', 'Go', 'Java', 'SQL'],
    },
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'Tailwind CSS', 'Three.js'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'PostgreSQL', 'Redis', 'gRPC', 'REST APIs'],
    },
    {
      category: 'Infra / Tools',
      items: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Terraform'],
    },
  ],

  experience: [
    {
      role: 'Software Engineer',
      company: 'Company Name',
      period: '2023 — Present',
      description:
        'Built and maintained core services handling production traffic. Led a migration that improved p99 latency by 40%.',
      stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Previous Company',
      period: 'Summer 2022',
      description:
        'Shipped a feature end-to-end used by thousands of daily active users. Wrote tests that caught 3 production-bound bugs before launch.',
      stack: ['React', 'Python', 'Docker'],
    },
    {
      role: 'B.S. Computer Science',
      company: 'Your University',
      period: '2019 — 2023',
      description: 'Focused on distributed systems and HCI coursework. Teaching assistant for intro data structures.',
      stack: [],
    },
  ],

  projects: [
    {
      name: 'Project One',
      description: 'A short, punchy description of what this project does and why it matters.',
      stack: ['TypeScript', 'React', 'Node.js'],
      github: 'https://github.com/kaemikun',
      live: '#',
      highlight: true,
    },
    {
      name: 'Project Two',
      description: 'Another project worth showing off — what problem did it solve, what did you learn?',
      stack: ['Python', 'FastAPI', 'PostgreSQL'],
      github: 'https://github.com/kaemikun',
      live: '#',
      highlight: true,
    },
    {
      name: 'Project Three',
      description: 'A smaller tool, script, or experiment that still demonstrates good engineering instincts.',
      stack: ['Go'],
      github: 'https://github.com/kaemikun',
      live: '#',
      highlight: false,
    },
    {
      name: 'Project Four',
      description: 'Side project, hackathon build, or open-source contribution worth mentioning.',
      stack: ['React', 'Three.js'],
      github: 'https://github.com/kaemikun',
      live: '#',
      highlight: false,
    },
  ],
}

export type Profile = typeof profile
