import React from 'react';
import { FadeIn } from '../../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/motion/StaggerContainer';

const differentiators = [
  {
    icon: 'verified',
    color: 'text-primary-container',
    title: 'Guaranteed Project Delivery',
    desc: 'Rigorous commitments with contractual milestones.',
  },
  {
    icon: 'analytics',
    color: 'text-tertiary-container',
    title: 'Free Business Analysis',
    desc: 'Comprehensive architectural and ROI assessment.',
  },
  {
    icon: 'gavel',
    color: 'text-on-secondary-container',
    title: 'Project Penalty Enforcement',
    desc: 'Full accountability baked into our delivery contracts.',
  },
  {
    icon: 'workspace_premium',
    color: 'text-on-primary-fixed-variant',
    title: '100% Satisfaction Guarantee',
    desc: 'High-trust partnership through continuous refinement.',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-canvas-light text-text-light-primary py-16 sm:py-20">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-12 sm:gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Statement */}
          <FadeIn direction="up" distance={24} className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-label-mono-tag text-label-mono-tag text-on-primary-fixed-variant uppercase tracking-widest font-semibold">
              About Us
            </span>
            <h2 className="font-headline-xl text-headline-xl text-text-light-primary tracking-tight leading-tight">
              Driven by Innovation. Built Around Your Ambitions.
            </h2>
            <div className="p-6 sm:p-7 bg-surface-light rounded-xl shadow-sm flex flex-col gap-2 border border-slate-100 hover:shadow-md transition-shadow">
              <span className="font-headline-sm text-headline-sm text-on-primary-fixed-variant font-semibold">
                We Build. We Market. We Scale.
              </span>
              <p className="font-body-md text-body-md text-text-muted leading-relaxed">
                Transforming complex operational challenges into future-ready digital platforms that redefine what's possible for your business.
              </p>
            </div>
          </FadeIn>

          {/* Right Story & Core Differentiators */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <FadeIn direction="up" distance={20} delay={0.1}>
              <p className="font-body-lg text-body-lg text-text-light-primary leading-relaxed">
                ZNSoftech is a global technology partner trusted by businesses across the USA, UK, Europe, and the GCC for delivering intelligent, scalable, and cost-efficient digital solutions. We combine deep domain expertise with cutting-edge engineering to build systems that automate operations, enhance efficiency, and accelerate enterprise growth.
              </p>
            </FadeIn>

            <FadeIn direction="up" distance={20} delay={0.15}>
              <p className="font-body-md text-body-md text-text-muted leading-relaxed">
                At the heart of ZNSoftech lies a culture of innovation, collaboration, and technical excellence. Our solutions don’t just meet requirements — they improve user experience, minimize time-to-value, and maximize operational efficiency across logistics, healthcare, manufacturing, and beyond.
              </p>
            </FadeIn>

            {/* Differentiator Grid */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {differentiators.map((diff, idx) => (
                <StaggerItem key={idx}>
                  <div className="p-4 sm:p-5 bg-surface-light rounded-lg shadow-sm flex items-start gap-3.5 hover:translate-y-[-2px] hover:shadow-md transition-all border border-slate-100">
                    <span className={`material-symbols-outlined ${diff.color} text-[24px] shrink-0 mt-0.5`}>
                      {diff.icon}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label-lg text-label-lg text-text-light-primary font-semibold">
                        {diff.title}
                      </span>
                      <span className="font-body-sm text-body-sm text-text-muted leading-relaxed">
                        {diff.desc}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
