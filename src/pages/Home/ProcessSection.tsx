import React, { useRef } from 'react';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { FadeIn } from '../../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/motion/StaggerContainer';
import { ScrollProgress } from '../../components/motion/ScrollProgress';

interface ProcessStep {
  number: string;
  icon: string;
  color: string;
  hoverBorder: string;
  title: string;
  desc: string;
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: 'lightbulb',
    color: 'text-primary',
    hoverBorder: 'hover:border-primary/50',
    title: 'Creative Thinking + Agility',
    desc: 'Combining creative thinking and agility leads to increased operational efficiency and higher ROI.',
  },
  {
    number: '02',
    icon: 'psychology',
    color: 'text-tertiary',
    hoverBorder: 'hover:border-tertiary/50',
    title: 'Consultant-Based Discovery',
    desc: 'Evaluate customer needs, gather feedback, and optimize product features for maximum satisfaction.',
  },
  {
    number: '03',
    icon: 'group_work',
    color: 'text-secondary',
    hoverBorder: 'hover:border-secondary/50',
    title: 'Dedicated Engineering Pods',
    desc: 'Retaining experienced team members leads to continuous productivity and faster learning curve gains.',
  },
  {
    number: '04',
    icon: 'speed',
    color: 'text-primary-fixed-dim',
    hoverBorder: 'hover:border-primary-fixed-dim/50',
    title: 'Optimum Team Blend',
    desc: 'Diverse skills and perspectives lead to significant cost savings and faster time-to-market.',
  },
  {
    number: '05',
    icon: 'verified',
    color: 'text-primary',
    hoverBorder: 'hover:border-primary/50',
    title: 'Quality & Compliance',
    desc: 'High quality output achieved through skilled people, efficient processes, and strict industry compliance.',
  },
];

export const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="process-section"
      className="w-full bg-surface-container-low text-on-surface py-16 sm:py-20 relative"
    >
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-10 sm:gap-14">
        <FadeIn direction="up" distance={20}>
          <SectionHeading
            align="split"
            theme="dark"
            eyebrow="METHODICAL ENGINEERING"
            title="From Ambitious Ideas to Exceptional Digital Products."
            description="A perfect balance of strategy, design, and execution — our process ensures clarity, quality, and measurable outcomes."
          />
        </FadeIn>

        {/* Progress Stepper Track (Desktop) */}
        <div className="hidden md:block w-full">
          <ScrollProgress containerRef={sectionRef} />
        </div>

        {/* Process Step Cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6"
          staggerDelay={0.08}
        >
          {processSteps.map((step) => (
            <StaggerItem key={step.number}>
              <div
                className={`h-full p-6 bg-surface-container rounded-xl flex flex-col justify-between gap-5 border border-outline-variant/20 ${step.hoverBorder} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-label-mono-tag text-label-mono-tag ${step.color} font-bold`}>
                    {step.number}
                  </span>
                  <span className={`material-symbols-outlined ${step.color} text-[20px]`}>
                    {step.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug">
                    {step.title}
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {step.desc}
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
