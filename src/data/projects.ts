export interface ProjectItem {
  id: string;
  category: string;
  icon: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  metrics?: { label: string; value: string; highlight?: boolean }[];
  tags: string[];
  link: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'omnia-performance',
    category: 'Health & Hybrid Athletes',
    icon: 'fitness_center',
    title: 'Omnia Performance',
    description: 'Expert online coaching ecosystem and adaptive performance platform built for ambitious hybrid athletes ready to reach their full athletic potential.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlANFNGzhMaO3GclwbIAZ4p6h0rsdV6rzArOB5mOKGbvtq-OOdxauomkeEa0CB8yw7zIuS2ULs-P5TEWIZX--OlkySLnbzaTFF6pOH5iVFt7fPWpt_WyhooLYjZl_HV0r141U5kEHpPbOEzk6CsPD5_oKWqQMObDcFbWKfHUqTms1ptOcOvjI8TH4mXkYOZIcvi4zTs4_h_yXw4O8IL6bBCvB3PzBCCQH-kmFV9VAqb_1uTnkTvpDXKA',
    imageAlt: 'Athletic high performance dashboard displaying heart rate telemetry, training cycles, and athlete performance metrics on a dark modern screen interface with vibrant cyan and electric blue accents.',
    tags: ['Web App', 'Portal', 'Analytics'],
    link: '/case-study/omnia-performance',
  },
  {
    id: 'oil-recycling-association',
    category: 'UK Environmental Sustainability',
    icon: 'recycling',
    title: 'Oil Recycling Association (UK)',
    description: 'National digital infrastructure supporting UK industry members in hazardous waste recycling, oil recovery, and sustainable environmental regulatory compliance.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7Q7Mv0HMFeJQhA7A_MYzKUsDCEYKqWBGLWQJ0rJXs2a_9J42PoeNDjI3bc_S0nfp0_j8_YEyA2wM32M7m-wZHs7TOXHdlbbOBL8nT7xMKReYbm684Qr4FkRHmSUEJqnPYA63D5465Lw0ytw7RHvVX2h-BUSWu3alVUU0sDMU8dYiKjBscKEzD4zTXAqLKaZb7MIMmuEF8kUnFFFSxmKtTp_skBrnQQB8pRwiRL3Htj5a1fMYRBV8EQA',
    imageAlt: 'Industrial environmental analytics and compliance management platform showing waste recycling metrics, regulatory reports, and green sustainability audit indices.',
    tags: ['UK Compliance', 'Directory', 'Auditing'],
    link: '/our-work',
  },
  {
    id: 'indemand-tickets',
    category: 'Ticketing & Logistics',
    icon: 'confirmation_number',
    title: 'Indemand Tickets',
    description: 'High-volume ticketing engine and logistics workflow coordinating international events alongside integrated freight forwarding operations.',
    metrics: [
      { label: 'PEAK CONCURRENCY', value: '25,000+ tps' },
      { label: 'PAYMENT LATENCY', value: '< 320ms', highlight: true },
      { label: 'SEAT ALLOCATION', value: 'Real-time' },
    ],
    tags: ['High-Scale Architecture'],
    link: '/our-work',
  },
  {
    id: 'thryva-care-hearsan',
    category: 'Healthcare & Social Impact',
    icon: 'health_and_safety',
    title: 'Thryva Care & HearSan',
    description: 'Digital health monitoring, child welfare support, and audiology care platforms delivering transparent, empathetic patient care and remote diagnostic workflows.',
    metrics: [
      { label: 'PATIENT ENGAGEMENT', value: '98.4%' },
      { label: 'COMPLIANCE', value: 'HIPAA / GDPR', highlight: true },
      { label: 'TELEHEALTH', value: 'Integrated' },
    ],
    tags: ['Telemedicine', 'Social NGO'],
    link: '/our-work',
  },
];
