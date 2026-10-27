import React from 'react';

const PRINCIPLES = [
  {
    icon: 'smart_toy',
    title: 'Workflow Automation',
    desc: 'Eliminating repetitive manual data entry through event-driven triggers, automated customer notifications, and status transitions.',
  },
  {
    icon: 'lock',
    title: 'Deterministic Security',
    desc: 'Granular role-based access control (RBAC), end-to-end telemetry encryption, and verified adherence to SOC2 and GDPR governance standards.',
  },
  {
    icon: 'query_stats',
    title: 'Real-Time Telemetry',
    desc: 'Instant operational visibility through live map streaming, gate throughput telemetry, and exportable executive audit ledgers.',
  },
  {
    icon: 'hub',
    title: 'Scalable Multi-Tenant',
    desc: 'Containerized edge deployments with isolated data partitions engineered to support tens of thousands of concurrent operations.',
  },
];

export const ProductArchitecturePrinciples: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-lowest text-on-surface py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-outline-variant/20">
      <div className="max-w-[1360px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-mono text-label-mono-tag text-primary tracking-widest uppercase font-semibold">
            ENGINEERING ARCHITECTURE
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-bold tracking-tight">
            Designed Around the Way Businesses Work.
          </h2>
          <p className="font-body-md text-base text-text-muted">
            Every platform built by ZNSoftech is anchored by four foundational engineering standards that ensure continuous availability, uncompromised security, and rapid user adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRINCIPLES.map((item) => (
            <div
              key={item.title}
              className="bg-surface-container p-6 sm:p-7 rounded-2xl flex flex-col gap-3.5 border border-outline-variant/20 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <span className="material-symbols-outlined text-[24px]">
                  {item.icon}
                </span>
              </div>
              <h4 className="font-headline-md text-lg sm:text-xl text-on-surface font-bold mt-1">
                {item.title}
              </h4>
              <p className="font-body-sm text-sm text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductArchitecturePrinciples;
