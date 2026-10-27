import React from 'react';
import { FadeIn } from '../../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/motion/StaggerContainer';

interface Pillar {
  number: string;
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  highlightTag: string;
}

const pillarsData: Pillar[] = [
  {
    number: 'PILLAR 01',
    icon: 'hub',
    title: 'Digital Transformation',
    desc: 'We translate fragmented analog workflows and legacy databases into unified, real-time operating canvases that unlock unprecedented organizational velocity.',
    tags: ['Automation Workflows', 'Modern UI/UX Systems', 'Scalable Technology'],
    highlightTag: 'Digital Optimization',
  },
  {
    number: 'PILLAR 02',
    icon: 'precision_manufacturing',
    title: 'Engineering Excellence',
    desc: 'Our codebases conform to rigorous decoupling principles, deterministic automated tests, CI/CD telemetry, and fault-tolerant cloud distributions.',
    tags: ['Clean Architecture', 'Cloud Native Systems', 'High Performance Apps'],
    highlightTag: 'Advanced Engineering',
  },
  {
    number: 'PILLAR 03',
    icon: 'rocket_launch',
    title: 'Innovation & Growth',
    desc: 'Every deliverable is oriented toward high-conversion commercial traction, lowering cost-per-acquisition, and maximizing lifetime user engagement.',
    tags: ['User-First Approach', 'Faster Development', 'High Impact Delivery'],
    highlightTag: 'Growth Focused',
  },
];

export const CorePillars: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-lowest py-16 lg:py-24" id="core-pillars">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-12">
        <FadeIn direction="up" distance={20} className="flex flex-col gap-2 max-w-2xl">
          <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
            02 // OPERATIONAL PILLARS
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-semibold tracking-tight">
            Engineered for Longevity. Governed by Rigor.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Three foundational imperatives govern every sprint, design system, and deployment
            architecture we commit.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
          {pillarsData.map((pillar) => (
            <StaggerItem key={pillar.number}>
              <div className="flex flex-col justify-between rounded-xl bg-surface-container p-8 shadow-md hover:bg-surface-container-high transition-all duration-300 border border-outline-variant/20 hover:border-primary/40 h-full">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label-mono-tag text-label-mono-tag text-primary font-semibold tracking-widest">
                      {pillar.number}
                    </span>
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-xl">{pillar.icon}</span>
                    </div>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-6 flex flex-wrap gap-2 border-t border-outline-variant/20 mt-6">
                  {pillar.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-full bg-surface-container-highest px-3 py-1 font-label-mono-tag text-label-mono-tag text-on-surface"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="rounded-full bg-surface-container-highest px-3 py-1 font-label-mono-tag text-label-mono-tag text-primary">
                    {pillar.highlightTag}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
