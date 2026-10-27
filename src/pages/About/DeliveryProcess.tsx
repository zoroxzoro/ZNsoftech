import React, { useRef } from 'react';
import { FadeIn } from '../../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/motion/StaggerContainer';
import { ScrollProgress } from '../../components/motion/ScrollProgress';

const stages = [
  {
    number: '01',
    stageTag: 'STAGE // FOUNDATION',
    icon: 'explore',
    title: 'Strategic Discovery & Needs Analysis',
    desc: 'Deconstructing your legacy friction points, stakeholder interviews, technical dependency mapping, and establishing definitive success metrics before writing a single line of code.',
  },
  {
    number: '02',
    stageTag: 'STAGE // BLUEPRINT',
    icon: 'architecture',
    title: 'Transparent Architecture & Sprint Planning',
    desc: 'Modular service breakdowns, database schemas, API contracts, interactive low-latency Figma design prototypes, and unambiguous bi-weekly milestone timelines.',
  },
  {
    number: '03',
    stageTag: 'STAGE // EXECUTION',
    icon: 'code',
    title: 'High-Velocity Engineering & Quality Benchmarks',
    desc: 'Clean full-stack implementation under strict code reviews, real-time CI/CD automated test suites, performance profiling, and continuous client staging environments.',
  },
  {
    number: '04',
    stageTag: 'STAGE // RUNTIME',
    icon: 'verified',
    title: 'Compliance, Security & Continuous Delivery',
    desc: 'Penetration testing, GDPR/SOC-2 security alignment, seamless production zero-downtime cutovers, 24/7 SLA telemetry monitoring, and evolutionary feature roadmapping.',
  },
];

export const DeliveryProcess: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-surface-container-lowest py-16 lg:py-28 relative"
      id="process-section"
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-10 lg:gap-14">
        <FadeIn direction="up" distance={20} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
              04 // METHODICAL EXECUTION
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface font-semibold tracking-tight">
              How We Deliver
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              A battle-tested 4-stage lifecycle engineered for predictability, rapid time-to-value,
              and zero surprise outcomes.
            </p>
          </div>

          {/* Stepper Progress Tracker Indicator */}
          <div className="w-full lg:w-72 flex flex-col gap-2">
            <div className="flex items-center justify-between font-label-mono-tag text-label-mono-tag text-text-muted">
              <span>SPRINT_CADENCE</span>
              <span className="text-primary font-bold">PHASED GOVERNANCE</span>
            </div>
            <ScrollProgress containerRef={sectionRef} />
          </div>
        </FadeIn>

        {/* Editorial Numbered Rows */}
        <StaggerContainer className="flex flex-col gap-4" staggerDelay={0.08}>
          {stages.map((st) => (
            <StaggerItem key={st.number}>
              <div className="service-row-item flex flex-col lg:flex-row lg:items-center justify-between gap-6 rounded-xl bg-surface-container p-6 lg:p-8 hover:bg-surface-container-high transition-all duration-300 border border-outline-variant/20 hover:border-primary/40">
                <div className="flex items-baseline gap-6">
                  <span className="font-headline-lg text-headline-lg text-primary font-bold">
                    {st.number}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      {st.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0 self-end lg:self-auto">
                  <span className="font-label-mono-tag text-label-mono-tag text-text-muted uppercase font-semibold">
                    {st.stageTag}
                  </span>
                  <div className="service-arrow h-10 w-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined text-lg">{st.icon}</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
