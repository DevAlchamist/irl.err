import type { NavLink } from '@/interface';

export const navLinks: NavLink[] = [
  { label: 'Customers', href: '/customers' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
];

export const menuLinks: NavLink[] = [{ label: 'Home', href: '/' }, ...navLinks];

export const routeLabels: Record<string, string> = {
  '/': 'Home',
  '/customers': 'Customers',
  '/pricing': 'Pricing',
  '/projects': 'Projects',
  '/journal': 'Projects',
  '/about': 'About',
};
