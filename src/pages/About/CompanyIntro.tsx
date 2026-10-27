import React from 'react';
import { FadeIn } from '../../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/motion/StaggerContainer';

const capabilities = [
  {
    icon: 'autorenew',
    title: 'Digital Transformation',
    desc: 'Modernizing legacy monoliths into elastic, event-driven architectures.',
  },
  {
    icon: 'account_tree',
    title: 'Business Process Automation',
    desc: 'Eliminating repetitive manual workflows through custom intelligent pipelines.',
  },
  {
    icon: 'terminal',
    title: 'Custom Software Platforms',
    desc: 'Bespoke SaaS engines and internal tooling aligned strictly to your business rules.',
  },
  {
    icon: 'phone_iphone',
    title: 'Mobile Application Engineering',
    desc: 'High-framerate iOS & Android consumer apps and rugged field enterprise portals.',
  },
  {
    icon: 'dns',
    title: 'Enterprise Software',
    desc: 'Scalable ERPs, resource planning clusters, and robust cross-department APIs.',
  },
  {
    icon: 'trending_up',
    title: 'Scalable Digital Solutions',
    desc: 'High-concurrency infrastructure engineered to expand without friction.',
  },
];

export const CompanyIntro: React.FC = () => {
  return (
    <section className="w-full bg-canvas-light text-text-light-primary py-16 lg:py-24" id="company-intro">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-8">
        {/* Section Identifier */}
        <FadeIn direction="up" distance={16}>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-text-light-primary/30" />
            <span className="font-label-mono-tag text-label-mono-tag uppercase tracking-widest text-text-muted font-bold">
              01 // ORGANIZATIONAL BLUEPRINT
            </span>
          </div>
        </FadeIn>

        {/* High-Contrast 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <FadeIn direction="up" distance={20} className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="font-headline-xl text-headline-xl text-text-light-primary font-bold tracking-tight leading-tight">
              Technology Built Around Real Business Challenges.
            </h2>
            <p className="font-body-lg text-body-lg text-text-light-primary/80 leading-relaxed">
              We reject off-the-shelf mediocrity. Every framework, microservice, and user interface is
              engineered to resolve high-stakes operational bottlenecks with mathematical precision.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-xl">verified_user</span>
              </div>
              <div>
                <span className="block font-headline-sm text-headline-sm text-text-light-primary font-semibold">
                  100% Delivery Track Record
                </span>
                <span className="block font-body-sm text-body-sm text-text-muted">
                  Zero project abandonment in 12+ operating years
                </span>
              </div>
            </div>
          </FadeIn>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <FadeIn direction="up" distance={20} delay={0.1}>
              <p className="font-body-xl text-body-xl text-text-light-primary/90 leading-relaxed">
                We specialize in transforming complex business challenges into seamless digital
                experiences — empowering organizations to automate operations, enhance efficiency,
                and accelerate growth. From concept to execution, ZNSoftech builds future-ready systems
                that drive measurable impact across diverse industries including logistics, waste
                management, manufacturing, construction, and beyond.
              </p>
            </FadeIn>

            {/* Core Capability Grid (6 Capabilities) */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2" staggerDelay={0.07}>
              {capabilities.map((cap, idx) => (
                <StaggerItem key={idx}>
                  <div className="rounded-xl bg-surface-light p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col justify-between h-full">
                    <div>
                      <span className="material-symbols-outlined text-primary-container text-2xl mb-2 block">
                        {cap.icon}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-text-light-primary font-semibold">
                        {cap.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-text-muted mt-1 leading-relaxed">
                        {cap.desc}
                      </p>
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
