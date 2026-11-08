import { site } from '@/data/site';

export const customersPage = {
  meta: {
    title: 'Customers',
    description: `How freight networks, labs, energy operators and payment companies use ${site.name} to act on problems while they are still small.`,
  },
  hero: {
    lines: ['Real problems.', 'Real builds.'],
    intro:
      'Explore the problems people brought to irl.err, the ideas we explored, and the solutions we turned into working tools.',
  },
  grid: {
    filterLabel: 'Filter stories by industry',
    one: 'story',
    many: 'stories',
    empty: 'No stories in this industry yet.',
  },
  results: {
    title: 'What changes in the first ninety days.',
    items: [
      { value: 9, suffix: 'days', label: 'earlier warning on the problems that matter, on average' },
      { value: 3, suffix: 'in 4', label: 'briefs acted on within one working day' },
      { value: 20, suffix: 'min', label: 'from sign-up to the first connected source' },
    ],
  },
  cta: { title: 'Be the next story.', body: 'Most teams see their first useful brief within a week of connecting.' },
};

export const storyPage = {
  metaSuffix: 'customer story',
  labels: { industry: 'Industry', team: 'Team', since: 'Customer since', next: 'Next story' },
};

export const pricingPage = {
  meta: {
    title: 'Pricing',
    description: `Start free with five sources. Upgrade when ${site.name} is catching problems worth more than it costs.`,
  },
  hero: {
    lines: ['Start free.', 'Pay when it pays off.'],
    accent: 1,
    intro:
      'Every plan includes anomaly detection and weekly briefs. Upgrade for real-time alerts, deeper history and admin controls.',
  },
  plans: {
    monthly: 'Monthly',
    yearly: 'Yearly',
    yearlyBadge: '-20%',
    note: 'Prices per workspace. Unlimited viewers on every plan.',
    featuredLabel: 'Most teams start here',
    free: 'free forever',
    perMonth: '/ month',
    noCard: 'No card needed',
    billedMonthly: 'Billed monthly',
    billedYearly: 'billed yearly',
    enterprise: { prompt: 'Running more than ten teams?', link: 'Talk to us about Enterprise' },
  },
  compare: {
    title: 'Compare every plan.',
    caption: 'Feature comparison across plans',
    feature: 'Feature',
    yes: 'Included',
    no: 'Not included',
  },
  faq: { title: 'Questions, answered.' },
  sales: {
    title: 'Tell us where to start.',
    body: `Open a free workspace now, or book thirty minutes with someone who has set ${site.name} up for teams like yours.`,
    image: '/images/gallery-window.jpg',
    imageAlt: 'A laptop on a desk by a window at sunset',
    intentLegend: 'I want to',
    intents: { free: site.cta.primary.label, demo: site.cta.secondary.label },
    fields: {
      name: { label: 'Full name', placeholder: 'Amara Diallo', error: 'Tell us what to call you.' },
      email: {
        label: 'Work email',
        placeholder: 'amara@company.com',
        error: 'Use a work email like name@company.com.',
      },
      company: { label: 'Company', placeholder: 'Halden Freight', error: 'Add your company name.' },
      size: { label: 'Company size', help: 'Helps us pick the right person.' },
      message: {
        label: `What would you like ${site.name} to watch?`,
        placeholder: 'Churn signals across our enterprise accounts',
      },
    },
    sizes: ['1-10 people', '11-50 people', '51-200 people', '201-1,000 people', 'More than 1,000'],
    submit: { free: 'Create my workspace', demo: 'Request a demo' },
    consent: `By continuing you agree to be contacted about ${site.name}. No spam.`,
    sending: 'Sending...',
    success: {
      demo: 'Thanks, {name}. We will email {email} within one working day to pick a time.',
      free: 'Your workspace is on its way. Check {email} for the sign-in link.',
    },
  },
};

export const projectsPage = {
  meta: {
    title: 'Projects',
    description: `Explore the projects built by ${site.name}, from custom applications and business platforms to automation tools and experimental ideas.`,
  },
  hero: {
    lines: ['Ideas into', 'working reality.'],
    intro: `A collection of real-world projects, experiments, and digital solutions built by ${site.name}. Explore what we've created, the problems behind each project, and the ideas that brought them to life.`,
  },
  list: {
    title: 'Things we\'ve built',
    filterLabel: 'Filter projects by category',
    empty: 'No projects in this category yet. Something new is brewing.',
  },
  post: {
    related: 'More things we\'ve built.',
    back: 'All projects',
  },
};

export const journalPage = projectsPage;
export const aboutPage = {
  meta: {
    title: 'About',
    description: `${site.name} is built by a remote-first team in Berlin and London who think the warning should arrive before the damage.`,
  },
  hero: {
    lines: ['Somewhere,', 'there\'s an app for that. If not,', 'we\'ll make one.'],
    accent: 2,
    intro: `${site.name} is a space where everyday frustrations become useful tools. From repetitive tasks and annoying workflows to ideas you've always wished existed we explore, build, and turn them into something that works.`,
    image: '/images/about-hero.jpg',
    imageAlt: 'A lone figure walking under a concrete overpass in black and white',
    facts: [
      { value: 2026, from: 2001, grouping: false, label: 'Founded in New Delhi' },
      { value: 10, label: 'People on the team' },
      { value: 10, suffix: '+', label: `Teams on ${site.name}` },
    ] as { value: number; from?: number; suffix?: string; grouping?: boolean; label: string }[],
  },
  timeline: {
    title: 'A simple idea',
    body: 'technology should make everyday life less annoying',
  },
  values: { title: 'What we hold ourselves to.' },
  team: { title: 'The people behind the briefs.' },
  roles: {
    title: 'Join the team.',
    body: 'Remote-first, with hubs in Berlin and London. We hire people who would rather fix it early.',
  },
};

export const notFoundPage = {
  meta: { title: 'Page not found', description: 'This page slipped past us.' },
  eyebrow: 'Error 404',
  lines: [{ text: 'This page' }, { text: 'slipped', accent: 'past us.' }],
  body: 'Click anywhere in the field to send a pulse while you are here.',
  cta: { label: 'Back to home', href: '/' },
};
