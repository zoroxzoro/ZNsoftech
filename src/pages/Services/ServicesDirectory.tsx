import React from 'react';
import { FadeIn } from '../../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/motion/StaggerContainer';

interface ServiceBlueprint {
  number: string;
  title: string;
  badge?: string;
  tags: string[];
  desc: string;
  href: string;
}

const blueprints: ServiceBlueprint[] = [
  {
    number: '01',
    title: 'Agentic AI & Autonomous Intelligence',
    badge: 'Flagship',
    tags: ['Cognitive Reasoning', 'Multi-Agent Loops', 'Safe Action Spaces'],
    desc: 'Transform high-overhead business workflows using self-correcting, goal-driven AI agents, distributed reasoning chains, and real-time operational heuristics.',
    href: '#capability-deep-dive',
  },
  {
    number: '02',
    title: 'Custom Software Development',
    tags: ['Bespoke SaaS Platforms', 'Zero-Downtime Microservices'],
    desc: 'Mission-critical web engines, distributed event pipelines, and core proprietary business systems engineered for resilience, auditability, and massive concurrency.',
    href: '#contact-inquiry',
  },
  {
    number: '03',
    title: 'Enterprise Applications',
    tags: ['Scalable ERPs', 'Resource Hubs', 'Secure API Gateways'],
    desc: 'Enterprise resource architectures, compliance-hardened internal suites, and cross-department synchronization engines tailored to complex global regulatory models.',
    href: '#contact-inquiry',
  },
  {
    number: '04',
    title: 'Mobile Application Engineering',
    tags: ['Native iOS & Android', 'Flutter / React Native'],
    desc: 'High-velocity, battery-efficient mobile applications with local-first encrypted storage, background telemetry streams, and frictionless biometric auth.',
    href: '#contact-inquiry',
  },
  {
    number: '05',
    title: 'UI/UX & Digital Experience Design',
    tags: ['Design Systems', 'Cognitive Ergonomics'],
    desc: 'Human-centered interfaces, strictly tokenized multi-platform design systems, and rapid interactive prototyping that eliminate user confusion and accelerate task completion.',
    href: '#contact-inquiry',
  },
  {
    number: '06',
    title: 'Digital Transformation & Automation',
    tags: ['Robotic Process Pipelines', 'Legacy Refactoring'],
    desc: 'Deconstruct legacy monoliths into cloud-native architectures, automating manual spreadsheet workflows into continuous, verifiable machine routines.',
    href: '#contact-inquiry',
  },
  {
    number: '07',
    title: 'Performance Digital Marketing & Growth',
    tags: ['Data-Backed Attribution', 'Algorithmic Ad Engines'],
    desc: 'High-converting digital acquisition funnels, technical search visibility algorithms, and market expansion systems built to optimize customer lifetime value.',
    href: '#contact-inquiry',
  },
];

export const ServicesDirectory: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-16 lg:py-24 bg-surface-dim relative" id="service-directory">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Section Title & Narrative Eyebrow */}
        <FadeIn direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
                01 // SERVICE BLUEPRINTS
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight">
                Expertise That Turns Ideas Into Impact.
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm leading-relaxed">
              Strictly engineered architectures. Every blueprint is backed by our full IP transfer
              and contractual delivery covenants.
            </p>
          </div>
        </FadeIn>

        {/* Horizontal Editorial Rows (01 through 07) */}
        <StaggerContainer className="flex flex-col gap-3" staggerDelay={0.06}>
          {blueprints.map((item) => (
            <StaggerItem key={item.number}>
              <a
                href={item.href}
                className="service-row-item group w-full p-6 lg:p-7 bg-surface-container hover:bg-surface-container-high rounded-xl transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border border-outline-variant/15 hover:border-primary/40 shadow-sm"
              >
                <div className="flex items-start lg:items-center gap-6 lg:w-5/12">
                  <span className="font-headline-lg text-headline-lg font-bold text-primary group-hover:text-primary-fixed transition-colors">
                    {item.number}
                  </span>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-all duration-200 group-hover:translate-x-1">
                        {item.title}
                      </h3>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary font-label-mono-tag text-label-mono-tag uppercase font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {item.tags.map((tag, tIdx) => (
                        <React.Fragment key={tIdx}>
                          {tIdx > 0 && <span className="text-outline-variant">•</span>}
                          <span className="font-label-mono-tag text-label-mono-tag text-on-surface-variant">
                            {tag}
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant lg:w-5/12 leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex items-center justify-end lg:w-2/12">
                  <span className="w-11 h-11 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 service-arrow shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
