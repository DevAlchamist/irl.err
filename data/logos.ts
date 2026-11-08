import type { Integration, PartnerLogo } from '@/interface';

export const customerLogos: PartnerLogo[] = [
  { name: 'Apna healer', shape: 'orbit' },
  { name: 'Gadgets Arena', shape: 'wave' },
  { name: 'Tiny poper', shape: 'prism' },
  { name: 'Bivvo', shape: 'split' },
  { name: 'Navotix', shape: 'spark' },
  { name: 'Dev Masters', shape: 'loop' },
  { name: 'Xploroo', shape: 'grid' },
];

export const integrations: Integration[] = [
  { label: 'Billing', icon: 'credit-card' },
  { label: 'CRM', icon: 'kanban' },
  { label: 'Support desk', icon: 'lifebuoy' },
  { label: 'Data warehouse', icon: 'database' },
  { label: 'Product analytics', icon: 'chart' },
  { label: 'Team chat', icon: 'chat' },
  { label: 'Call recordings', icon: 'phone' },
  { label: 'Email', icon: 'email' },
  { label: 'Cloud storage', icon: 'cloud' },
];
