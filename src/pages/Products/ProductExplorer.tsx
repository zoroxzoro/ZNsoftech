import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ProductDirectoryItem {
  id: string;
  name: string;
  category: 'logistics' | 'fitness' | 'sports' | 'crm';
  categoryLabel: string;
  tagColor: string;
  icon: string;
  description: string;
  tags: string[];
  anchor: string;
}

const PRODUCTS_DIRECTORY: ProductDirectoryItem[] = [
  {
    id: 'smart-collect',
    name: 'Smart Collect',
    category: 'logistics',
    categoryLabel: 'Mobile Workforce & Logistics',
    tagColor: 'text-primary bg-primary/10',
    icon: 'local_shipping',
    description:
      'Waste collection routing, driver safety pre-trip checklists, statutory digital documents, and live telemetry navigation.',
    tags: ['Route Optimization', 'Defect Checklists', 'Google Maps Nav'],
    anchor: '#smart-collect',
  },
  {
    id: 'fitness-crm',
    name: 'Firebird Fitness CRM',
    category: 'fitness',
    categoryLabel: 'Fitness & Wellness',
    tagColor: 'text-primary bg-primary/10',
    icon: 'fitness_center',
    description:
      'White-labeled studio operations, automated recurring member billing, custom workout-regimen building, and attendance operations.',
    tags: ['White-Label Branding', 'Recurring Billing', 'Class Scheduling'],
    anchor: '#fitness-crm',
  },
  {
    id: 'sports-crm',
    name: 'Crowdr Sports CRM',
    category: 'sports',
    categoryLabel: 'Athletic Clubs & Arenas',
    tagColor: 'text-tertiary bg-tertiary/10',
    icon: 'stadium',
    description:
      'Matchday reserved digital ticketing, stadium supporter relationship tracking, club merchandise sales, and automated marketing campaigns.',
    tags: ['Matchday Ticketing', 'Supporter CRM', 'Retail Commerce'],
    anchor: '#sports-crm',
  },
  {
    id: 'growthfactor',
    name: 'GrowthFactor CRM',
    category: 'crm',
    categoryLabel: 'Commercial Sales',
    tagColor: 'text-primary bg-primary/10',
    icon: 'trending_up',
    description:
      'Automated inbound lead ingestion, dynamic deal stage tracking, multi-touch analytics attribution, and executive commercial forecasting.',
    tags: ['Lead Ingestion', 'Pipeline Stages', 'Revenue Analytics'],
    anchor: '#growthfactor',
  },
  {
    id: 'crowdr-events',
    name: 'Crowdr — Event CRM',
    category: 'sports',
    categoryLabel: 'Events & Festivals',
    tagColor: 'text-tertiary-container bg-tertiary-container/10',
    icon: 'confirmation_number',
    description:
      'High-throughput checkout engine, tiered admission passes, real-time gate scanner verification, and promoter revenue settlement audits.',
    tags: ['High-Throughput', 'Mobile QR Scanner', 'Promoter Ledger'],
    anchor: '#event-ticketing',
  },
];

const FILTER_TABS = [
  { id: 'all', label: 'All Products (5)' },
  { id: 'logistics', label: 'Workforce & Logistics (1)' },
  { id: 'fitness', label: 'Fitness & Wellness (1)' },
  { id: 'sports', label: 'Sports & Events (2)' },
  { id: 'crm', label: 'Sales CRM (1)' },
] as const;

type FilterType = (typeof FILTER_TABS)[number]['id'];

export const ProductExplorer: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProducts = PRODUCTS_DIRECTORY.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section
      id="product-explorer"
      className="w-full bg-surface text-on-surface py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-outline-variant/20"
    >
      <div className="max-w-[1360px] mx-auto flex flex-col gap-8">
        {/* Section Headers & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-mono text-label-mono-tag text-primary tracking-widest uppercase font-semibold">
              VERIFIED PLATFORM DIRECTORY
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-bold tracking-tight">
              Find the Right Platform for Your Business.
            </h2>
            <p className="font-body-md text-base text-text-muted">
              Filter our verified product suite by industry domain or operational requirement.
            </p>
          </div>

          {/* Pill Filter Navigation */}
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Filter products by domain"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="products-grid"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-full font-mono text-xs uppercase transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container font-semibold shadow-md shadow-primary-container/20'
                      : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high font-medium border border-outline-variant/20'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid with Framer Motion Layout Transition */}
        <motion.div
          id="products-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                className="product-item bg-surface-container rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-md hover:shadow-2xl hover:border-primary/40 border border-outline-variant/25 transition-colors duration-300 group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <span
                      className={`font-mono text-xs px-2.5 py-1 rounded uppercase font-semibold ${product.tagColor}`}
                    >
                      {product.categoryLabel}
                    </span>
                    <span className="material-symbols-outlined text-primary text-[26px] transition-transform duration-300 group-hover:scale-110">
                      {product.icon}
                    </span>
                  </div>

                  <h3 className="font-headline-md text-xl sm:text-2xl text-on-surface font-bold mt-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <p className="font-body-sm text-sm text-text-muted leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] bg-surface-dark-elevated text-on-surface px-2.5 py-1 rounded border border-outline-variant/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={product.anchor}
                  className="inline-flex items-center gap-2 text-primary font-headline-sm text-sm font-semibold hover:text-cyan-glow transition-colors pt-2 group-hover:underline"
                >
                  <span>Explore Platform</span>
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                    north_east
                  </span>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductExplorer;
