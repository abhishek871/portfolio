/* ============================================================================
   👋 THIS IS THE ONLY FILE YOU NEED TO EDIT TO MAKE THE SITE YOURS.
   Everything on the page — AND the AI chatbot's knowledge — reads from here.
   ============================================================================ */

export const profile = {
  name: 'Abhishek Chaudhary',
  firstName: 'Abhishek',
  role: 'Senior Frontend Engineer',
  tagline: 'I make the web fun & fast.',
  location: 'Noida, India',
  blurb:
    "I'm a senior frontend engineer at 99acres (InfoEdge), building search & discovery " +
    "for millions of home-hunters. I live for performance, accessibility, and reusable " +
    "design systems — I've cut app load time by 40%, lifted CTR by 17%, and pushed 8M+ URLs " +
    "into Google's ‘Good’ Web Vitals zone.",
  availability: 'Open to interesting opportunities',
  yearsExperience: '4+',
  stats: [
    { value: '4+', label: 'years' },
    { value: '8M+', label: 'URLs improved' },
    { value: '∞', label: 'coffee' },
  ],
  resumeUrl: '/resume.pdf', // copy your PDF to public/resume.pdf
  email: 'abhishekjnv1999@gmail.com',
  socials: [
    { label: 'GitHub', url: 'https://github.com/abhishek871', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/abhishek-chaudhary-4894ab196', icon: 'linkedin' },
    { label: 'LeetCode', url: 'https://leetcode.com/acjnv2000', icon: 'leetcode' },
    { label: 'Email', url: 'mailto:abhishekjnv1999@gmail.com', icon: 'mail' },
  ],
}

// Projects → shown as playful tilt cards in the "Playground" section
export const projects = [
  {
    title: 'Project Tuples, Reimagined',
    emoji: '🎠',
    blurb:
      'Rebuilt the search-page property cards as a reusable carousel with seamless video playback — viewport-aware play/pause as cards scroll in and out of view, plus auto-carousel.',
    tags: ['React', 'Video', 'IntersectionObserver', 'Perf'],
    highlight: '+17% CTR',
    link: '',
    accent: 'pink',
  },
  {
    title: '40% Faster App Load',
    emoji: '🚀',
    blurb:
      'Re-architected the API call flow with a backend-for-frontend pattern to defer non-critical data, and added component-level lazy loading + smarter pagination.',
    tags: ['BFF', 'Code-Splitting', 'Lazy Loading'],
    highlight: '40% faster',
    link: '',
    accent: 'teal',
  },
  {
    title: 'Micro-Frontend Platform',
    emoji: '🧩',
    blurb:
      'Decoupled features into independently deployable units with a shared component library using Webpack Module Federation — 30% less cross-team dependency time.',
    tags: ['Module Federation', 'Webpack', 'Architecture'],
    highlight: '2× faster releases',
    link: '',
    accent: 'yellow',
  },
  {
    title: '99acres Design System',
    emoji: '🎨',
    blurb:
      'Built a library of common, reusable frontend components adopted across 99acres, documented in Storybook — keeping UI consistent and accelerating every team.',
    tags: ['Design Systems', 'Storybook', 'React'],
    highlight: 'Org-wide',
    link: '',
    accent: 'pink',
  },
  {
    title: 'Real User Monitoring @ IndiaMart',
    emoji: '📊',
    blurb:
      'Instrumented Web Vitals for real users and drove a 55% INP improvement, moving 8M poor-INP URLs into the Good zone. Also gave a RUM tech talk to 300+ engineers.',
    tags: ['Web Vitals', 'INP', 'Performance', 'RUM'],
    highlight: '8M+ URLs fixed',
    link: '',
    accent: 'teal',
  },
  {
    title: 'Accessibility, Shift-Left',
    emoji: '♿',
    blurb:
      'Drove WCAG 2.1 AA compliance across key journeys — semantic markup, ARIA, keyboard nav, contrast-safe UI — resolving 90+ violations and lifting Lighthouse a11y 72 → 96.',
    tags: ['WCAG 2.1 AA', 'ARIA', 'Lighthouse'],
    highlight: '72 → 96',
    link: '',
    accent: 'yellow',
  },
]

// Skills → grouped "sticker" clusters
export const skillGroups = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'C/C++', 'Java', 'HTML', 'CSS', 'SASS'] },
  { title: 'Frontend', items: ['React.js', 'React Native', 'Micro-Frontends', 'Module Federation', 'SSR', 'Code-Splitting'] },
  { title: 'Testing', items: ['Jest', 'Playwright', 'React Testing Library', 'Unit / Integration'] },
  { title: 'Tooling & CI/CD', items: ['Git', 'GitLab CI/CD', 'Webpack', 'Vite', 'Babel', 'Figma'] },
  { title: 'AI & Monitoring', items: ['Claude Code', 'GitHub Copilot', 'RUM', 'Kibana', 'Google Analytics'] },
]

// Timeline → your journey (most recent first)
export const timeline = [
  {
    when: 'Dec 2024 — Now',
    what: 'Senior Software Engineer',
    where: '99acres (InfoEdge)',
    detail: 'Search & discovery for one of India’s largest real-estate platforms. Perf, micro-frontends, design systems, accessibility.',
  },
  {
    when: 'Feb 2022 — Nov 2024',
    what: 'Software Engineer',
    where: 'IndiaMart',
    detail: 'Web performance (RUM, Web Vitals), SSR widgets for SEO, and Web-Worker offloading. Best Performer of the Month ×2.',
  },
  {
    when: '2018 — 2022',
    what: 'B.Tech, Computer Science',
    where: 'HBTU, Kanpur',
    detail: 'Computer Science & Engineering — CGPA 8.0. Where the competitive-programming habit started.',
  },
]

// Fun facts → shown in the About section
export const funFacts = [
  '4★ on CodeChef, 600+ problems solved.',
  'Gave a RUM tech talk to 300+ engineers.',
  'Best Performer of the Month — twice.',
  'I chase milliseconds off render times for fun.',
]

/* ----------------------------------------------------------------------------
   AI ASSISTANT KNOWLEDGE — fed to the chatbot as grounding. First person.
   The bot is instructed to never invent facts beyond what's written here.
   -------------------------------------------------------------------------- */
export const aiKnowledge = `
ABOUT ME
I'm Abhishek Chaudhary, a Senior Software Engineer (frontend-focused) based in Noida, India, with 4+ years of experience. I currently work at 99acres (InfoEdge India Ltd), building search & discovery experiences for one of India's largest real-estate platforms. I studied Computer Science at Harcourt Butler Technical University (HBTU), Kanpur, graduating in 2022 with an 8.0 CGPA.

WHAT I'M GREAT AT
- Frontend performance engineering: code-splitting, lazy loading, bundle optimization, Web Vitals (LCP, INP, FID), Web Workers, profiling with Chrome DevTools.
- React and React Native at scale, micro-frontends with Webpack Module Federation, and SSR.
- Building and documenting reusable design systems (Storybook).
- Accessibility (WCAG 2.1 AA) done shift-left, not bolted on.

WHAT I'VE SHIPPED AT 99ACRES (Senior Software Engineer, Dec 2024 – present)
- Rebuilt search-page "Project Tuples" as a reusable carousel with seamless, viewport-aware video playback and auto-carousel → +17% CTR.
- Revamped the project detail page with a new Properties Tab in React Native (mobile site + apps) with advanced filtering → +5% CTR and 8–10% longer sessions.
- Cut app load time by 40% by re-architecting the API flow into a backend-for-frontend pattern, deferring non-critical data, and adding component-level lazy loading + pagination.
- Built a design system of reusable components adopted across 99acres, documented in Storybook.
- Contributed to a micro-frontend architecture with Webpack Module Federation → 30% less cross-team dependency time and 2× faster release cycles across 3+ teams.
- Drove WCAG 2.1 AA accessibility: resolved 90+ violations and lifted the Lighthouse accessibility score from 72 to 96.
- Improved CI/CD pipelines (bundle analysis, tree-shaking) and engineered backend integrations with caching + async refresh → 35% fewer redundant API calls, ~50ms lower latency.

WHAT I DID AT INDIAMART (Software Engineer, Feb 2022 – Nov 2024)
- Implemented Real User Monitoring (RUM) capturing Web Vitals; drove a 55% INP improvement and moved 8 million poor-INP URLs into the Good zone. Gave a RUM tech talk to a 300+ audience.
- Offloaded heavy computation to Web Workers and used lazy loading + code splitting to move 200K First Input Delay URLs into the Good zone.
- Built SSR-based Company Card and Top Product widgets, improving SEO and the Company Page's LCP by 20%.
- Awarded "Best Performer of the Month" (Sept 2023 and Jan 2024).

SKILLS
Languages: JavaScript, TypeScript, C/C++, Java (basic), HTML, CSS, SASS.
Frontend: React.js, React Native, Micro-Frontends, Module Federation, SSR, Code-Splitting, WCAG accessibility.
Testing: Jest, Playwright, React Testing Library.
Tooling: Git, GitLab CI/CD, Webpack, Vite, Babel, Figma, JIRA, Postman.
AI & Monitoring: Claude Code, GitHub Copilot, RUM, Kibana, Google Search Console, Google Analytics.

ACHIEVEMENTS
4★ on CodeChef, 600+ problems solved, 472nd in Scaler EDGE APEX 2021, 269th in CodeChef May Lunchtime 2021 (5500+ candidates).

WHAT I'M LOOKING FOR
Interesting senior frontend / full-stack-leaning roles where craft, performance, and user experience genuinely matter.

HOW TO REACH ME
Email: abhishekjnv1999@gmail.com · GitHub: github.com/abhishek871 · LinkedIn: linkedin.com/in/abhishek-chaudhary · LeetCode: leetcode.com/acjnv2000
`
