import type { Step } from '@/interface';
import { site } from '@/data/site';

export const steps: Step[] = [
  {
    verb: 'Tell us',
    tag: 'The starting point',
    visual: 'connect',
    title: `Show ${site.name} what's bugging you.`,
    body: 'Whether it is a repetitive task, a frustrating workflow, an idea for an app, or something you wish existed, start by telling us about it. No technical explanation required.',
    points: [
      'Share a problem or an idea',
      'Explain how you currently handle it',
      'Tell us what you would like to achieve',
    ],
    image: '/images/step-connect.jpg',
  },
  {
    verb: 'Explore',
    tag: 'Plan the approach',
    visual: 'watch',
    title: "Let's figure out the best way to solve it.",
    body: `We look into your requirements, explore possible solutions, and decide what makes the most sense. Sometimes it needs a custom app, sometimes a simple automation is all it takes.`,
    points: [
      'Understand the actual problem',
      'Explore practical solutions',
      'Agree on the scope and approach',
    ],
    image: '/images/step-watch.jpg',
  },
  {
    verb: 'Build',
    tag: 'From idea to reality',
    visual: 'brief',
    title: 'We turn the plan into something that works.',
    body: `${site.name} designs, develops, and tests a solution around your needs. You'll get updates along the way, and once everything is ready, we'll hand over a tool you can actually use.`,
    points: [
      'Design and develop your solution',
      'Test, refine, and make improvements',
      'Get your finished tool, ready to use',
    ],
    image: '/images/step-brief.jpg',
  },
];

export const briefPreview = {
  title: `${site.name} project brief`,
  meta: 'Your idea, understood',
  priority: 'Ready to build',
  text: 'Problem: Repetitive form filling. Approach: A custom form-filling tool that handles recurring entries and saves time.',
  actions: { secondary: 'View approach', primary: 'Start building' },
};