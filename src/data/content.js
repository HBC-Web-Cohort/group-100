// Language-independent data: links, colors and layout.
// All visible text lives in src/locales/<lang>.json and is matched by index.

export const profile = {
  monogram: 'A', // brand mark stays the same in every language
  email: 'hello@example.com',
  socials: [
    { id: 'linkedin', href: '#' },
    { id: 'resume', href: '#' },
  ],
}

// Two-column rows on the Info page. `offset` puts text above the image.
export const storyLayout = [
  [{ hue: 210 }, { hue: 280, offset: true }],
  [{ hue: 160 }, { hue: 30, offset: true }],
  [{ hue: 340, signature: true }, { hue: 190, offset: true }],
]

export const friendSites = [
  'jordanlee.design',
  'sampatel.co',
  'rileychen.dev',
  'morgandiaz.com',
  'caseykim.io',
  'taylorbrooks.me',
  'averynguyen.art',
  'quinnokafor.com',
  'drewsantos.studio',
]

export const projectHues = [220, 150, 25, 290]
