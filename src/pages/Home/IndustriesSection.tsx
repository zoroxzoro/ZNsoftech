import React from 'react';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { FadeIn } from '../../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/motion/StaggerContainer';

interface IndustryItem {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
  bulletColor: string;
  bullets: string[];
}

const industries: IndustryItem[] = [
  {
    icon: 'local_shipping',
    iconBg: 'bg-primary-fixed',
    iconColor: 'text-on-primary-fixed',
    title: 'Transport & Logistics',
    desc: 'Driving efficient freight operations with technology-powered transport.',
    bulletColor: 'bg-on-primary-fixed-variant',
    bullets: ['Supply Chain Optimization', 'Fleet Management', 'Smart Telematics'],
  },
  {
    icon: 'confirmation_number',
    iconBg: 'bg-secondary-fixed',
    iconColor: 'text-on-secondary-fixed',
    title: 'Event Tech',
    desc: 'Next-gen event tech for seamless management and global audience engagement.',
    bulletColor: 'bg-secondary-container',
    bullets: ['Event Automation', 'Digital Engagement', 'Smart Ticketing Systems'],
  },
  {
    icon: 'vital_signs',
    iconBg: 'bg-tertiary-fixed',
    iconColor: 'text-on-tertiary-fixed',
    title: 'Health & Fitness',
    desc: 'Redefining wellness with tailored training and patient connection.',
    bulletColor: 'bg-tertiary-container',
    bullets: ['Adaptive Fitness Algorithms', 'Real-time Health Monitoring', 'Virtual Ecosystems'],
  },
  {
    icon: 'factory',
    iconBg: 'bg-primary-fixed-dim',
    iconColor: 'text-on-primary-fixed',
    title: 'Manufacturing',
    desc: 'Operational clarity, waste management, and industrial compliance.',
    bulletColor: 'bg-on-primary-fixed-variant',
    bullets: ['Automated Audits', 'Resource Planning', 'IoT Sensor Integration'],
  },
];

export const IndustriesSection: React.FC = () => {
  return (
    <section id="industries-section" className="w-full bg-surface-light text-text-light-primary py-16 sm:py-20">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-12 sm:gap-16">
        <FadeIn direction="up" distance={20}>
          <SectionHeading
            theme="light"
            eyebrow="Specialized Industry Solutions"
            title="Engineering Impact Across Crucial Sectors."
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
          {industries.map((ind, idx) => (
            <StaggerItem key={idx}>
              <div className="h-full p-6 sm:p-7 rounded-xl bg-canvas-light flex flex-col justify-between gap-6 hover:bg-surface-light hover:shadow-md transition-all duration-300 group border border-transparent hover:border-slate-200">
                <div className="flex flex-col gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${ind.iconBg} flex items-center justify-center ${ind.iconColor} group-hover:scale-110 transition-transform`}
                  >
                    <span className="material-symbols-outlined text-[24px]">{ind.icon}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-headline-sm text-headline-sm text-text-light-primary font-semibold">
                      {ind.title}
                    </span>
                    <p className="font-body-sm text-body-sm text-text-muted leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2 border-t border-slate-200/50">
                  {ind.bullets.map((b, bIdx) => (
                    <span
                      key={bIdx}
                      className="font-body-sm text-body-sm text-text-light-primary flex items-center gap-2"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${ind.bulletColor}`} />
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
