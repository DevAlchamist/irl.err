import { site } from '@/data/site';

export const hero = {
  lines: [{ text: 'There\'s probably' }, { text: 'a', accent: 'better way' }],
  intro: `${site.name} is where everyday frustrations meet practical engineering. Bring us the annoying tasks, broken workflows, and ideas you've been sitting on. We'll turn them into something useful.`,
};

export const logosSection = {
  label: 'For everyone who has ever thought, "There has to be an easier way."',
};

export const manifesto = {
  eyebrow: `Why ${site.name}`,
  parts: [
    { text: 'Every day, there is something that takes longer than it should.' },
    { image: '/images/manifesto-face.jpg' },
    { text: 'A form you have to fill out again. A task you repeat for the hundredth time.' },
    { image: '/images/manifesto-city.jpg' },
    { text: `An idea you wish existed as an app. At ${site.name}, we believe` },
    { image: '/images/manifesto-hand.jpg' },
    { text: 'you should not have to put up with things just because nobody has built a better way yet.' },
  ] as ({ text: string } | { image: string })[],
  hint: 'Drag across the line, or tap it',
};

export const productStory = {
  title: ['From idea,', 'to done.'],
  heroImage: '/images/journal-face.jpg',
  tiles: [
    'gallery-corridor',
    'journal-noise',
    'gallery-street',
    'manifesto-city',
    'gallery-desk',
    'journal-light',
    'gallery-tower',
    'product-reveal',
    'journal-blur',
    'gallery-road',
    'capability-lights',
    'journal-swirl',
    'about-city',
    'gallery-window',
  ].map((name) => `/images/${name}.jpg`),
  acts: [
    {
      tab: 'Discover',
      title: 'First, tell us what bugs you.',
      body: 'Show us the task, explain the idea, or walk us through the problem. You don\'t need to know anything about technology.',
      count: 400,
      unit: 'ideas explored',
    },
    {
      tab: 'Figure it out',
      title: 'Find the simplest way forward.',
      body: `We break down the problem, explore possible approaches, and figure out what ${site.name} can build to make things easier.`,
      count: 37,
      unit: 'solutions explored',
    },
    {
      tab: 'Build',
      title: 'Something useful takes shape.',
      body: 'We turn the plan into a working tool, test it, refine it, and get it ready for you to use.',
      count: 40,
      unit: 'solution delivered',
    },
  ],
};

export const capabilities = {
  title: 'A little bit of code. A lot less hassle.',
  detect: {
    title: 'Spot the problem',
    body: 'From repetitive tasks to frustrating workflows, we start by understanding what is actually getting in your way.',
    label: 'Problem spotted ✓',
  },
  connect: {
    title: 'Make it work with your world',
    body: 'We explore how your existing tools, websites, apps, and workflows fit together to create a solution that makes sense.',
    image: '/images/capability-lights.jpg',
  },
  rank: {
    title: 'Find the right approach',
    body: 'Not every problem needs a complicated app. We focus on what will solve it effectively without adding unnecessary complexity.',
    items: [
      { title: 'Repetitive work', value: 'Automate it' },
      { title: 'Disconnected tools', value: 'Connect them' },
      { title: 'An idea worth building', value: 'Make it real' },
    ],
  },
  brief: {
    title: 'Turn the idea into a tool',
    body: 'From the first sketch to the final build, we design, develop, and test something around the way you actually work.',
    text: 'Problem understood. Approach figured out. Tool built and tested. Your everyday workflow just got a little easier.',
  },
  privacy: {
    title: 'Built around your needs',
    body: 'Your requirements come first. We keep the solution focused, avoid unnecessary features, and respect your data and privacy.',
  },
};

export const howItWorks = {
  title: 'Four steps from problem to solution.',
  watchHint: 'Drag the line',
};

export const storiesSection = {
  title: 'Someone had a problem. We got building.',
  body: `Every project at ${site.name} starts with a real need. Explore the ideas people brought us, the challenges we tackled, and the tools that came out of them.`,
  cta: { label: 'Explore what we have built', href: '/customers' },
};

export const proofSection = {
  title: 'The results speak for themselves.',
};

export const closingCta = {
  title: 'Got a problem? We have a keyboard.',
  body: 'Tell us what is annoying you, what you wish existed, or what you have been meaning to build. Let\'s see what we can make happen.',
};