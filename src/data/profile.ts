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
      items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'Shell'],
    },
    {
      category: 'Frontend',
      items: ['React', 'Angular (SSR)', 'Tailwind CSS', 'Three.js'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'MongoDB', 'WebSocket', 'REST APIs'],
    },
    {
      category: 'Infra / Tools & APIs',
      items: ['Google Gemini API', 'Google OAuth 2.0 / JWT', 'Docker', 'Linux', 'Vercel'],
    },
  ],

  experience: [
    {
      role: 'Software Engineer Intern',
      company: 'FICO',
      period: 'March 2026 — Present',
      description:
        'Collaborated on Know Your Locality, a full-stack geolocation app using the Google Gemini API to generate AI-powered activity recommendations based on user location and travel mode (car, bike, walk). Contributed to a real-time WebSocket chat interface for AI-driven activity planning with persistent chat history in MongoDB. Helped implement Google OAuth 2.0 / JWT authentication and three-layer (frontend, backend, database) distance-cap validation for travel radius limits.',
      stack: ['Angular (SSR)', 'Express.js', 'MongoDB', 'WebSocket', 'Gemini API'],
    },
    {
      role: 'B.E. Computer Science Engineering',
      company: 'Chitkara University',
      period: '2023 — 2027',
      description: 'Batch of 2023–2027.',
      stack: [],
    },
  ],

  projects: [
    {
      name: 'Know Your Locality',
      description:
        'A full-stack geolocation app that uses the Google Gemini API to generate AI-powered activity recommendations based on user location and travel mode. Includes a real-time WebSocket chat for AI-driven activity planning, persistent chat history in MongoDB, and Google OAuth 2.0 / JWT authentication.',
      stack: ['Angular (SSR)', 'Express.js', 'MongoDB', 'WebSocket', 'Gemini API'],
      github: 'https://github.com/Gaurav-Singh-Heer/Know-Your-Locality',
      live: 'https://know-your-locality.vercel.app/',
      highlight: true,
    },
    {
      name: 'YuruWatch',
      description:
        'A responsive, consumer-facing content streaming platform with search, previews, and dynamic content rendering. Contributed to refactoring monolithic logic into modular services, improving page load time by 20%.',
      stack: ['React', 'Express.js'],
      github: 'https://github.com/saayraposwal2/YuruWatch',
      live: '#',
      highlight: true,
    },
    {
      name: 'BrewDev',
      description:
        'A fast, automated developer environment setup tool that configures full-stack or backend environments in minutes, with system safety checks, rollback mechanisms, and user-friendly CLI output.',
      stack: ['Shell', 'Linux', 'CLI'],
      github: 'https://github.com/kaemikun/brewdev',
      live: '#',
      highlight: false,
    },
  ],
}

export type Profile = typeof profile
