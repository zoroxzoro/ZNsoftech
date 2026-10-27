import React from 'react';
import { FadeIn } from '../../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/motion/StaggerContainer';

interface ChallengeItem {
  icon: string;
  title: string;
  desc: string;
  outcome: string;
  span2?: boolean;
}

const challenges: ChallengeItem[] = [
  {
    icon: 'published_with_changes',
    title: 'Modernizing Outdated Software',
    desc: 'De-risk brittle monoliths with progressive strangler fig migrations, decoupling data stores and deploying elastic containerized microservices without operational downtime.',
    outcome: '99.99% availability, 70% lower server overhead',
  },
  {
    icon: 'rocket_launch',
    title: 'Building a New Digital Product',
    desc: 'Accelerate time-to-market with disciplined MVP scoping, high-fidelity design prototypes, multi-tenant scalable databases, and immediate product analytics instrumentation.',
    outcome: 'Production-grade launch in 6 to 10 weeks',
  },
  {
    icon: 'sync_alt',
    title: 'Automating Repetitive Workflows',
    desc: 'Replace manual spreadsheets and copy-paste busywork with automated ETL pipelines, OCR invoice extraction, event triggers, and autonomous exception handling.',
    outcome: 'Over 240 staff hours saved per week per unit',
  },
  {
    icon: 'touch_app',
    title: 'Improving Digital User Experiences',
    desc: 'Eliminate cognitive friction through scientific design audits, responsive accessibility engineering, sub-second page loads, and intuitive task routing.',
    outcome: '+42% task completion speed, reduced churn',
  },
  {
    icon: 'monitoring',
    title: 'Scaling Business Operations Globally',
    desc: 'Harden distributed cloud architectures with global load balancers, multi-region database replication, edge caching, and real-time observability telemetry to withstand sudden 10x traffic surges.',
    outcome: '99.98% SLA backed by penalty covenant',
    span2: true,
  },
];

export const BusinessChallenges: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-16 lg:py-24 bg-canvas-light text-text-light-primary relative" id="strategic-fit">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <FadeIn direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-label-mono-tag text-label-mono-tag text-primary-container font-bold uppercase tracking-widest">
                03 // STRATEGIC FIT
              </span>
              <h2 className="font-headline-xl text-headline-xl text-text-light-primary tracking-tight leading-tight">
                Whatever the Challenge, Let's Find the Right Solution.
              </h2>
            </div>
            <p className="font-body-md text-body-md text-text-muted max-w-sm leading-relaxed">
              Select an organizational friction point below to explore our targeted engineering
              playbooks and rapid time-to-value pathways.
            </p>
          </div>
        </FadeIn>

        {/* 5 Interactive Solution Panels Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.08}>
          {challenges.map((item, idx) => (
            <StaggerItem key={idx} className={item.span2 ? 'lg:col-span-2' : ''}>
              <div className="p-6 sm:p-7 bg-surface-light rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-6 h-full border border-slate-100">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-lg bg-canvas-light flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-text-light-primary font-semibold">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md text-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div
                  className={`pt-3 border-t border-slate-100 ${
                    item.span2
                      ? 'flex flex-col sm:flex-row sm:items-center justify-between gap-3'
                      : 'flex flex-col gap-1'
                  }`}
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-label-mono-tag text-label-mono-tag text-primary-container font-bold uppercase">
                      OUTCOME
                    </span>
                    <span className="font-body-sm text-body-sm text-text-light-primary font-medium">
                      {item.outcome}
                    </span>
                  </div>
                  {item.span2 && (
                    <a
                      className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary-container font-semibold hover:underline"
                      href="#contact-inquiry"
                    >
                      <span>Request Scoping Assessment</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
