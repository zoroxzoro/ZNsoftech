import React from 'react';
import { FadeIn } from '../../components/motion/FadeIn';

export const MissionVision: React.FC = () => {
  return (
    <section className="w-full bg-surface py-16 lg:py-28" id="mission-vision">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-12">
        <FadeIn direction="up" distance={20} className="flex flex-col gap-2 text-center items-center">
          <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
            03 // STRATEGIC POLARITY
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-semibold tracking-tight">
            Purpose and Perspective
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Our Mission: Warm Editorial Canvas */}
          <FadeIn direction="up" distance={24} className="h-full">
            <div className="flex flex-col justify-between rounded-2xl bg-canvas-light text-text-light-primary p-8 lg:p-12 shadow-xl h-full border border-slate-100">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono-tag text-label-mono-tag uppercase tracking-widest text-text-muted font-bold">
                    M I S S I O N // OPERATIONAL EXTENSION
                  </span>
                  <span className="material-symbols-outlined text-primary-container text-2xl">
                    handshake
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-text-light-primary font-bold">
                  Our Mission
                </h3>
                <p className="font-body-xl text-body-xl text-text-light-primary/90 leading-relaxed italic">
                  "To empower businesses by delivering intelligent, future-ready digital solutions that
                  accelerate growth, efficiency, and meaningful transformation. We act as an extension
                  of our clients' teams, understanding their goals and aspirations to build solutions
                  that create measurable impact."
                </p>
              </div>
              <div className="pt-8 border-t border-slate-200 mt-8">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary-container" />
                  <span className="font-label-mono-tag text-label-mono-tag text-text-muted uppercase font-semibold">
                    CLIENT-EMBEDDED CO-CREATION MODEL
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Our Vision: Midnight Navy Tech Atmosphere */}
          <FadeIn direction="up" distance={24} delay={0.1} className="h-full">
            <div className="flex flex-col justify-between rounded-2xl bg-surface-dark-elevated text-on-surface p-8 lg:p-12 shadow-xl relative overflow-hidden h-full border border-outline-variant/30">
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase tracking-widest font-bold">
                    V I S I O N // GLOBAL HORIZON
                  </span>
                  <span className="material-symbols-outlined text-primary text-2xl">visibility</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                  Our Vision
                </h3>
                <p className="font-body-xl text-body-xl text-on-surface-variant leading-relaxed italic">
                  "To be the trusted technology partner for businesses worldwide — continuously
                  delivering high-quality, innovative solutions that help organizations stay ahead in a
                  rapidly evolving digital landscape."
                </p>
              </div>
              <div className="pt-8 relative z-10 border-t border-outline-variant/20 mt-8">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase font-semibold">
                    INTERNATIONAL ALIGNMENT & RESILIENCE
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
