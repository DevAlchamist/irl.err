
import { site } from '@/data/site';
import type { CompareGroup, Faq, Plan } from '@/interface';

export const plans: Plan[] = [
  {
    name: 'Quick Fixes',
    monthly: 5000,
    yearly: 5000,
    description: 'Need a few improvements, fixes, or extra features? Get practical development help without committing to a massive project.',
    cta: 'Get a quick fix',
    href: site.cta.primary.href,
    features: [
      'Starting at ₹5,000',
      'Small feature additions',
      'Website and application fixes',
      'UI and workflow improvements',
      'Minor automation and integrations',
    ],
  },
  {
    name: 'Custom Software',
    monthly: 10000,
    yearly: 10000,
    description: 'Have a bigger idea? Build a complete website, application, business platform, or automation system around your requirements.',
    cta: 'Build your project',
    href: site.cta.secondary.href,
    featured: true,
    features: [
      'Starting at ₹10,000',
      'Custom website and application development',
      'Business platforms and dashboards',
      'Automation and API integrations',
      'Project-specific scope and deliverables',
    ],
  },
  {
    name: 'Free Consultation',
    monthly: 0,
    yearly: 0,
    description: 'Not sure what you need yet? Bring your idea or problem. Let’s discuss what can be built, how it could work, and what it might cost.',
    cta: 'Book a free consultation',
    href: site.cta.primary.href,
    features: [
      'Completely free initial discussion',
      'Explain your idea or problem',
      'Explore possible technical solutions',
      'Understand project feasibility',
      'Get an initial project estimate',
    ],
  },
];

export const compareGroups: CompareGroup[] = [
  {
    title: 'Getting started',
    rows: [
      { feature: 'Initial consultation', values: [true, true, true] },
      { feature: 'Project discussion', values: [true, true, true] },
      { feature: 'Requirement understanding', values: [true, true, true] },
      { feature: 'Initial feasibility discussion', values: [true, true, true] },
    ],
  },
  {
    title: 'Development and changes',
    rows: [
      { feature: 'Small fixes and improvements', values: [true, true, false] },
      { feature: 'Additional feature development', values: [true, true, false] },
      { feature: 'Custom website development', values: [false, true, false] },
      { feature: 'Custom application development', values: [false, true, false] },
      { feature: 'Automation and integrations', values: [false, true, false] },
      { feature: 'Out-of-scope changes', values: [true, true, false] },
    ],
  },
  {
    title: 'Project planning',
    rows: [
      { feature: 'Custom project quotation', values: [false, true, true] },
      { feature: 'Defined deliverables', values: [true, true, false] },
      { feature: 'Development timeline', values: [true, true, false] },
      { feature: 'Milestone-based planning', values: [false, true, false] },
    ],
  },
];

export const faqs: Faq[] = [
  {
    question: 'Is the initial consultation really free?',
    answer: `Yes! Your first consultation with ${site.name} is completely free. We can discuss your idea, understand your problem, and explore possible solutions without charging you.`,
  },
  {
    question: 'What can I get for ₹5,000?',
    answer:
      'The Quick Fixes option is intended for smaller development tasks, such as website fixes, minor feature additions, UI improvements, and workflow adjustments. The exact work depends on complexity and will be agreed upon before starting.',
  },
  {
    question: 'How much does custom software development cost?',
    answer:
      'Custom software projects start at ₹10,000. The final price depends on the features, technical requirements, integrations, complexity, and development timeline. You will receive a project estimate before development begins.',
  },
  {
    question: 'What happens if I request changes after the project starts?',
    answer:
      'Changes within the originally agreed scope are handled as part of the project. Additional or unnecessary changes outside the approved agreement may cost ₹5,000–₹10,000 depending on the work involved. We will always discuss and approve the extra cost before proceeding.',
  },
  {
    question: 'What happens after the free consultation?',
    answer:
      'Once we understand your requirements, we discuss the best approach, project scope, estimated timeline, deliverables, and pricing. Development starts only after you approve the proposal.',
  },
  {
    question: 'Do I need to pay before discussing my idea?',
    answer:
      'No. The initial consultation is free. You only proceed with a paid service when you are comfortable with the proposed scope, pricing, and terms.',
  },
];
