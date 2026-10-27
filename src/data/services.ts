export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tags: string;
  description: string;
  icon?: string;
  href: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'agentic-ai',
    number: '01',
    title: 'Agentic AI & Autonomous Intelligence',
    tags: 'AUTONOMOUS DECISION-MAKING • ADAPTIVE AGENTS',
    description: 'Agentic AI transforms workflows using autonomous, intelligent AI agents capable of multi-step reasoning, goal-driven execution, and dynamic task delegation.',
    icon: 'smart_toy',
    href: '/services#agentic-ai',
  },
  {
    id: 'bespoke-software',
    number: '02',
    title: 'Bespoke Software Solutions',
    tags: 'CUSTOM PLATFORMS • LEGACY MODERNIZATION',
    description: 'Tailor-engineered business platforms and backend systems that streamline operations, eliminate data silos, and integrate seamlessly with your core tools.',
    icon: 'terminal',
    href: '/services#bespoke-software',
  },
  {
    id: 'product-engineering',
    number: '03',
    title: 'Product Engineering & SaaS',
    tags: 'ARCHITECTURE DESIGN • MULTI-TENANT CLOUD',
    description: 'Full-lifecycle development from rapid MVP build to multi-tenant scalable software-as-a-service architectures built to sustain exponential user growth.',
    icon: 'cloud_done',
    href: '/services#product-engineering',
  },
  {
    id: 'mobile-applications',
    number: '04',
    title: 'Mobile Application Engineering',
    tags: 'IOS • ANDROID • CROSS-PLATFORM',
    description: 'Engineered native and hybrid mobile experiences built for high-load user engagement, real-time sync, and fluid hardware-accelerated interfaces.',
    icon: 'phone_iphone',
    href: '/services#mobile-applications',
  },
  {
    id: 'digital-marketing',
    number: '05',
    title: 'Digital Marketing & Growth Systems',
    tags: 'PERFORMANCE • RETENTION • MULTI-CHANNEL',
    description: 'Data-backed acquisition funnels, digital market penetration, and algorithmic advertising frameworks engineered to scale customer lifetime value.',
    icon: 'trending_up',
    href: '/services#digital-marketing',
  },
  {
    id: 'ui-ux-design',
    number: '06',
    title: 'UI/UX & Digital Experience Design',
    tags: 'ENTERPRISE SYSTEMS • DESIGN TOKENS',
    description: 'Human-centered interfaces, intuitive interactive workflows, and modular design systems that reduce cognitive friction and delight end users.',
    icon: 'design_services',
    href: '/services#ui-ux-design',
  },
];
