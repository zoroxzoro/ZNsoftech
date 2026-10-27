import React from 'react';

const DEEP_DIVE_STEPS = [
  {
    step: '01',
    title: 'Driver Onboarding & Vehicle Checks',
    desc: 'Drivers log in via smartphone, complete statutory digital pre-trip defect reports with photographic capture, and log starting odometer readings before ignition clearance.',
    badgeLabel: 'REGULATORY STANDARD',
    badgeText: 'DVSA & Statutory UK Fleet Compliance',
  },
  {
    step: '02',
    title: 'Route Optimization & GPS Dispatch',
    desc: 'Central dispatch sequences daily collection manifests using intelligent proximity sorting, broadcasting live turn-by-turn navigation directly into the vehicle cabin.',
    badgeLabel: 'DISPATCH TELEMETRY',
    badgeText: 'Integrated Google Maps Engine & Geo-Fencing',
  },
  {
    step: '03',
    title: 'Automated Invoicing & Compliance Sign-Off',
    desc: 'Upon collection completion, customers provide a digital sign-off. The platform generates an encrypted Waste Transfer Note and triggers automated billing to accounting.',
    badgeLabel: 'FINANCIAL RECONCILIATION',
    badgeText: 'Instant PDF Invoicing & Accounting Webhooks',
  },
];

export const ProductSmartCollectDeepDive: React.FC = () => {
  return (
    <section className="w-full bg-surface-container py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-outline-variant/20">
      <div className="max-w-[1360px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2 text-center items-center max-w-2xl mx-auto">
          <span className="font-mono text-label-mono-tag text-primary tracking-widest uppercase font-semibold">
            OPERATIONAL PROCESS BLUEPRINT
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-bold tracking-tight">
            Inside the Platform: Smart Collect Architecture
          </h2>
          <p className="font-body-md text-base text-text-muted">
            A granular look at how Smart Collect unites field personnel, compliance officers, and finance teams in an unbroken digital chain of custody.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {DEEP_DIVE_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-surface-dark-elevated p-6 sm:p-8 rounded-2xl flex flex-col gap-3.5 relative border border-outline-variant/25 shadow-lg"
            >
              <span className="font-headline-xl text-4xl sm:text-5xl text-primary/30 font-bold">
                {item.step}
              </span>
              <h4 className="font-headline-md text-lg sm:text-xl text-on-surface font-bold">
                {item.title}
              </h4>
              <p className="font-body-md text-sm text-text-muted leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-auto pt-4 bg-surface-container/60 p-3 rounded-lg border border-outline-variant/20">
                <span className="font-mono text-[10px] text-primary uppercase block font-semibold">
                  {item.badgeLabel}
                </span>
                <span className="font-body-sm text-xs text-on-surface font-medium mt-0.5 block">
                  {item.badgeText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSmartCollectDeepDive;
