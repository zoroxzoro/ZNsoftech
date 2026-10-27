import React from 'react';

interface ProductPillar {
  number: string;
  category: string;
  title: string;
  description: string;
  platform: string;
  anchor: string;
  icon: string;
}

const PILLARS: ProductPillar[] = [
  {
    number: 'Pillar 01',
    category: 'Workforce & Logistics',
    title: 'Workforce & Logistics',
    description:
      'Mobile driver dispatch, statutory safety checklists, real-time telemetry, and automated waste collection auditing.',
    platform: 'Platform: Smart Collect',
    anchor: '#smart-collect',
    icon: 'local_shipping',
  },
  {
    number: 'Pillar 02',
    category: 'Health & Fitness',
    title: 'Health & Fitness',
    description:
      'White-label studio websites, recurring subscription billing, class rosters, and customized member workout regimens.',
    platform: 'Platform: Firebird Fitness',
    anchor: '#fitness-crm',
    icon: 'fitness_center',
  },
  {
    number: 'Pillar 03',
    category: 'Sports & Events',
    title: 'Sports & Events',
    description:
      'Matchday reserved ticketing, supporter engagement CRM, high-conversion merchandise sales, and gate scan validation.',
    platform: 'Platform: Crowdr Sports',
    anchor: '#sports-crm',
    icon: 'stadium',
  },
  {
    number: 'Pillar 04',
    category: 'Sales CRM Pipelines',
    title: 'Sales CRM Pipelines',
    description:
      'Lead ingestion, deal stages, multi-touch attribution, commercial velocity modeling, and forecasting analytics.',
    platform: 'Platform: GrowthFactor',
    anchor: '#growthfactor',
    icon: 'query_stats',
  },
];

export const ProductsOverview: React.FC = () => {
  return (
    <section className="w-full bg-[#F8F9FC] text-slate-900 py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-slate-200">
      <div className="max-w-[1360px] mx-auto">
        {/* Editorial Section Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12">
          <div className="lg:col-span-5 flex flex-col gap-2">
            <span className="font-mono text-label-mono-tag tracking-widest text-blue-700 uppercase font-bold">
              STRATEGIC FOUNDATION
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl text-slate-900 tracking-tight font-bold">
              Purpose-Built Technology for Modern Businesses.
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-4 text-slate-600 font-body-lg text-base sm:text-lg leading-relaxed pt-2">
            <p>
              Off-the-shelf software often forces growing enterprises into restrictive patterns, bloated feature lists, and disconnected third-party integrations. At ZNSoftech, our product engineering division builds dedicated platforms engineered precisely for deterministic real-world operating workflows.
            </p>
            <p>
              Each system is architected as an end-to-end operational hub—bridging mobile personnel in the field, front-desk studio coordinators, stadium turnstiles, and commercial sales executives into a single unified telemetry backbone.
            </p>
          </div>
        </div>

        {/* 4 Verified Product Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-slate-200/90 flex flex-col justify-between h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-[24px]">
                    {pillar.icon}
                  </span>
                </div>
                <span className="font-mono text-xs text-blue-700 uppercase font-semibold">
                  {pillar.number}
                </span>
                <h3 className="font-headline-md text-xl text-slate-900 font-bold">
                  {pillar.title}
                </h3>
                <p className="font-body-sm text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6">
                <a
                  href={pillar.anchor}
                  className="inline-flex items-center gap-1.5 font-label-md text-sm text-blue-700 font-semibold group-hover:text-blue-800 transition-colors"
                >
                  <span>{pillar.platform}</span>
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
