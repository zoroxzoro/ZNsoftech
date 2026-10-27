import React from 'react';
import { StaggerContainer, StaggerItem } from '../../components/motion/StaggerContainer';
import { AnimatedCounter } from '../../components/motion/AnimatedCounter';

const stats = [
  {
    value: 500,
    suffix: '+',
    title: 'Apps Delivered',
    desc: 'Enterprise grade platforms shipped to production.',
  },
  {
    value: 12,
    suffix: '+',
    title: 'Years Experience',
    desc: 'Serving the IT and global software industry.',
  },
  {
    value: 10,
    suffix: 'M+',
    title: 'User Engagement',
    desc: 'Active global end-users interacting with our code.',
  },
  {
    value: 100,
    suffix: '%',
    title: 'Guaranteed Delivery',
    desc: 'Absolute adherence to scope, budget, and SLAs.',
  },
];

export const CompanyStats: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-low py-16" id="statistics-bar">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-12 lg:px-20">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-start" staggerDelay={0.08}>
          {stats.map((s, idx) => (
            <StaggerItem key={idx}>
              <div className="flex flex-col gap-1.5 p-5 rounded-xl bg-surface-container border border-outline-variant/20 hover:border-primary/40 transition-colors h-full">
                <div className="flex items-baseline gap-1">
                  <span className="font-display-hero text-headline-xl lg:text-display-hero text-on-surface font-bold">
                    <AnimatedCounter value={s.value} />
                  </span>
                  <span className="font-display-hero text-headline-lg text-primary font-bold">
                    {s.suffix}
                  </span>
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
                  {s.title}
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
