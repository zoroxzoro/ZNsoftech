import React from 'react';
import { FadeIn } from '../../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/motion/StaggerContainer';
import { AnimatedCounter } from '../../components/motion/AnimatedCounter';

const operatingCorridors = [
  'INDIA',
  'UNITED KINGDOM',
  'UNITED STATES',
  'CANADA',
  'NORWAY',
  'UAE',
  'BAHRAIN',
  'GERMANY',
  'FRANCE',
];

const pillars = [
  {
    icon: 'timer',
    bg: 'bg-primary-fixed',
    iconColor: 'text-on-primary-fixed',
    title: '100% On-Time Guarantee',
    desc: 'Rigorous sprint milestones backed by contractual penalty enforcement.',
  },
  {
    icon: 'support_agent',
    bg: 'bg-secondary-fixed',
    iconColor: 'text-on-secondary-fixed',
    title: '24/7 Global Support',
    desc: 'Synchronous cross-timezone response infrastructure for uninterrupted ops.',
  },
  {
    icon: 'verified_user',
    bg: 'bg-tertiary-fixed',
    iconColor: 'text-on-tertiary-fixed',
    title: 'High-Trust Governance',
    desc: 'Enterprise confidentiality, strict NDA standards, and ISO-aligned execution.',
  },
];

export const TrustMetricsSection: React.FC = () => {
  return (
    <section className="w-full bg-surface-light text-text-light-primary py-16 sm:py-20 transition-colors">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-12 sm:gap-16">
        {/* Editorial Section Intro */}
        <FadeIn direction="up" distance={20}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl flex flex-col gap-2">
              <span className="font-label-mono-tag text-label-mono-tag text-on-primary-fixed-variant uppercase tracking-widest font-semibold">
                Proven Impact & Global Scale
              </span>
              <h2 className="font-headline-lg text-headline-lg text-text-light-primary tracking-tight leading-snug">
                Trusted by forward-thinking enterprises, high-growth startups, and global institutions.
              </h2>
            </div>
            <p className="font-body-md text-body-md text-text-muted max-w-sm">
              Delivering high-performance digital platforms across 30+ countries with unyielding architectural integrity.
            </p>
          </div>
        </FadeIn>

        {/* Verified Market Footprint Numbers */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StaggerItem>
            <div className="bg-canvas-light p-6 sm:p-7 rounded-xl shadow-sm flex flex-col gap-1 hover:translate-y-[-4px] hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary-fixed">
              <span className="font-headline-xl text-headline-xl text-on-primary-fixed-variant font-bold">
                <AnimatedCounter value={78} suffix="+" />
              </span>
              <span className="font-label-lg text-label-lg text-text-light-primary font-semibold">
                Startups Accelerated
              </span>
              <p className="font-body-sm text-body-sm text-text-muted">
                From MVP incubation to rapid venture scaling.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-canvas-light p-6 sm:p-7 rounded-xl shadow-sm flex flex-col gap-1 hover:translate-y-[-4px] hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary-fixed">
              <span className="font-headline-xl text-headline-xl text-text-light-primary font-bold">
                <AnimatedCounter value={159} suffix="+" />
              </span>
              <span className="font-label-lg text-label-lg text-text-light-primary font-semibold">
                High-Growth SMEs
              </span>
              <p className="font-body-sm text-body-sm text-text-muted">
                Transforming legacy friction into automation.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-canvas-light p-6 sm:p-7 rounded-xl shadow-sm flex flex-col gap-1 hover:translate-y-[-4px] hover:shadow-md transition-all duration-300 border border-transparent hover:border-tertiary-container">
              <span className="font-headline-xl text-headline-xl text-tertiary-container font-bold">
                <AnimatedCounter value={96} suffix="+" />
              </span>
              <span className="font-label-lg text-label-lg text-text-light-primary font-semibold">
                Global Enterprises
              </span>
              <p className="font-body-sm text-body-sm text-text-muted">
                High-volume architecture and enterprise governance.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-canvas-light p-6 sm:p-7 rounded-xl shadow-sm flex flex-col gap-1 hover:translate-y-[-4px] hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary-fixed">
              <span className="font-headline-xl text-headline-xl text-text-light-primary font-bold">
                <AnimatedCounter value={400} suffix="+" />
              </span>
              <span className="font-label-lg text-label-lg text-text-light-primary font-semibold">
                Brands Worldwide
              </span>
              <p className="font-body-sm text-body-sm text-text-muted">
                Spanning across 30+ international jurisdictions.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Global Footprint Country Badges */}
        <FadeIn direction="up" distance={16} delay={0.1}>
          <div className="flex flex-col gap-3">
            <span className="font-label-mono-tag text-label-mono-tag text-text-muted uppercase tracking-wider font-semibold">
              Active Operating Corridors:
            </span>
            <div className="flex flex-wrap gap-2">
              {operatingCorridors.map((country) => (
                <span
                  key={country}
                  className="px-3.5 py-1.5 rounded-full bg-canvas-light font-label-mono-tag text-label-mono-tag text-text-light-primary font-medium shadow-sm hover:scale-105 transition-transform cursor-default"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Core Pillars */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {pillars.map((pillar, idx) => (
            <StaggerItem key={idx}>
              <div className="p-6 sm:p-7 rounded-xl bg-canvas-light flex items-start gap-4 hover:shadow-md transition-all duration-300 border border-slate-100">
                <div className={`w-10 h-10 rounded-lg ${pillar.bg} flex items-center justify-center shrink-0`}>
                  <span className={`material-symbols-outlined ${pillar.iconColor} text-[20px]`}>
                    {pillar.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-headline-sm text-headline-sm text-text-light-primary font-semibold">
                    {pillar.title}
                  </span>
                  <p className="font-body-sm text-body-sm text-text-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
