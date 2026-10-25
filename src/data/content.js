// All copy here is placeholder content — swap in your own story.

export const profile = {
  name: 'Alex Rivera',
  role: 'Product Designer',
  email: 'hello@example.com',
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Resume', href: '#' },
  ],
}

export const heroLine = {
  lead: 'I design calm, considered products that',
  accent: 'feel effortless.',
}

// Rendered as two-column rows; `image` blocks get a glass window frame.
export const storyRows = [
  [
    {
      image: { label: 'Studio desk', hue: 210 },
      title: 'Where it started.',
      body: [
        'I began in industrial design, sketching objects long before I opened a design tool. Form, material and how things feel in the hand still guide how I work.',
        'That habit of prototyping early and often followed me into software.',
      ],
    },
    {
      offset: true,
      title: 'A few chapters, with some photos from the road.',
      image: { label: 'City at dusk', hue: 280 },
    },
  ],
  [
    {
      image: { label: 'Sketchbook', hue: 160 },
      title: 'Finding interaction design.',
      body: [
        'A side project turned into a small app, and the app turned into a career. I found I loved the loop of shipping, watching people use it, and iterating.',
      ],
    },
    {
      offset: true,
      title: 'Wanting more scale.',
      body: [
        'Small teams taught me speed. I wanted to bring that same care to products used by millions of people every day.',
      ],
      image: { label: 'Mountain trail', hue: 30 },
    },
  ],
  [
    {
      image: { label: 'Weekend coffee', hue: 340 },
      title: 'Outside of work,',
      body: [
        "you'll find me cycling, shooting film, or rebuilding this site for the fifth time.",
      ],
      closing: 'Thanks for stopping by!',
      signature: true,
    },
    {
      offset: true,
      title: 'How I work.',
      body: [
        'I start with the problem, sketch widely, and narrow fast. Craft matters to me: motion, type and spacing are where trust is earned.',
      ],
      image: { label: 'Workshop', hue: 190 },
    },
  ],
]

export const experience = [
  {
    company: 'Northwind Labs',
    dates: "03/'24 — Present",
    role: 'Senior Product Designer',
    body: 'Leading design for the core messaging experience and a few projects I can’t talk about yet.',
  },
  {
    company: 'Lumen Studio',
    dates: "06/'21 — 02/'24",
    role: 'Interaction Designer',
    body: 'Designed controller-first interfaces and motion systems for a cross-platform media app.',
  },
  {
    company: 'Brightpath',
    dates: "Summer '20",
    role: 'UX Design Intern',
    body: 'Redesigned onboarding flows for a personal finance product.',
  },
]

export const friends = [
  { name: 'Jordan Lee', role: 'Designer — Orbit', site: 'jordanlee.design' },
  { name: 'Sam Patel', role: 'Product Designer — Fieldnote', site: 'sampatel.co' },
  { name: 'Riley Chen', role: 'Design Engineer — Halo', site: 'rileychen.dev' },
  { name: 'Morgan Diaz', role: 'Staff Designer — Parcel', site: 'morgandiaz.com' },
  { name: 'Casey Kim', role: 'UX Writer — Meridian', site: 'caseykim.io' },
  { name: 'Taylor Brooks', role: 'Design Lead — Kite', site: 'taylorbrooks.me' },
  { name: 'Avery Nguyen', role: 'Visual Designer — Prism', site: 'averynguyen.art' },
  { name: 'Quinn Okafor', role: 'Product Designer — Tandem', site: 'quinnokafor.com' },
  { name: 'Drew Santos', role: 'Motion Designer — Ripple', site: 'drewsantos.studio' },
]

export const projects = [
  { title: 'Threads', tag: 'Messaging · 2025', hue: 220 },
  { title: 'Pulse', tag: 'Health dashboard · 2024', hue: 150 },
  { title: 'Atlas', tag: 'Travel planning · 2023', hue: 25 },
  { title: 'Canvas', tag: 'Design tooling · 2022', hue: 290 },
]
