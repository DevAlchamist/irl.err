import { site } from '@/data/site';
import type { Milestone, Role, TeamMember, Value } from '@/interface';

export const milestones: Milestone[] = [
  {
    year: '01',
    title: 'The problem lands',
    body: "Tell us what's broken, repetitive, or unnecessarily complicated. No technical explanation needed. Just show us what's bugging you.",
    image: '/images/about-city.jpg',
  },
  {
    year: '02',
    title: "Let's figure it out",
    body: "We'll discuss your idea, understand what you actually need, and figure out the simplest practical way to make it happen.",
    image: '/images/about-studio.jpg',
  },
  {
    year: '03',
    title: 'Into the workshop',
    body: "We design, develop, and test a solution around your needs. You'll get updates along the way, so there are no mysterious surprises.",
    image: '/images/gallery-desk.jpg',
  },
  {
    year: '04',
    title: 'Problem? Patched.',
    body: 'We deliver the finished solution, help you get started, and make adjustments if needed. Time to say goodbye to that annoying problem.',
    image: '/images/gallery-tower.jpg',
  },
];

export const values: Value[] = [
  {
    title: 'Problems before products',
    body: 'We don’t build apps just for the sake of it. Every tool starts with a real problem worth solving.',
  },
  {
    title: 'Simple beats complicated',
    body: 'The best solution isn’t always the biggest one. We look for the simplest way to make your life easier.',
  },
  {
    title: 'Build it. Test it. Fix it.',
    body: 'Ideas are great, but working solutions are better. We build, test, learn, and improve along the way.',
  },
  {
    title: 'Made for real people',
    body: 'No unnecessary features or tech for the sake of tech. Just useful tools that solve problems in the real world.',
  },
];

export const team: TeamMember[] = [
  { name: 'Amara Diallo', role: 'Co-founder, CEO', image: '/images/team-amara.jpg' },
  { name: 'Jonas Weber', role: 'Co-founder, CTO', image: '/images/team-jonas.jpg' },
  { name: 'Lin Takahashi', role: 'Head of Design', image: '/images/team-lin.jpg' },
  { name: 'Rafael Costa', role: 'Head of Machine Learning', image: '/images/team-rafael.jpg' },
  { name: 'Sade Adeyemi', role: 'Head of Customer Success', image: '/images/team-sade.jpg' },
  { name: 'Viktor Lind', role: 'Chair, Board of Directors', image: '/images/team-viktor.jpg' },
];

export const roles: Role[] = [
  { title: 'Senior Product Engineer', team: 'Engineering', location: 'Remote, Europe' },
  { title: 'Machine Learning Engineer', team: 'Signals', location: 'Berlin or remote' },
  { title: 'Product Designer', team: 'Design', location: 'Remote, Americas' },
  { title: 'Customer Success Lead', team: 'Customers', location: 'London' },
];
