import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../components/motion/FadeIn';

export const CareersCTA: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-low py-16" id="careers-cta">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-12 lg:px-20">
        <FadeIn direction="up" distance={20}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 rounded-2xl bg-surface-container p-8 lg:p-12 shadow-xl border border-outline-variant/20">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
                JOIN OUR GLOBAL TEAM
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                Build What's Next With Us.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                We are always scouting for visionary engineers, Agentic AI specialists, product
                designers, and solution strategists looking to build foundational software.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary-container px-6 font-label-lg text-label-lg text-on-primary-container shadow-md transition-transform hover:-translate-y-0.5 active:translate-y-0 font-semibold"
              >
                <span>Explore Careers at ZNSoftech</span>
                <span className="material-symbols-outlined ml-2 text-base">arrow_outward</span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
