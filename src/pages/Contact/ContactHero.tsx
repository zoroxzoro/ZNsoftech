import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAPAnimation } from '../../hooks/useGSAPAnimation';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const ContactHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useGSAPAnimation(
    (_ctx, target) => {
      if (prefersReduced || !target) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.ct-pill',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7 }
      )
        .fromTo(
          '.ct-hero-title',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.85 },
          '-=0.5'
        )
        .fromTo(
          '.ct-hero-desc',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.75 },
          '-=0.5'
        )
        .fromTo(
          '.ct-metric-card',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        );
    },
    [prefersReduced]
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-surface-container-lowest text-on-surface py-16 md:py-24 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-outline-variant/20"
    >
      {/* Atmospheric Backlit Lighting & Schematic Coordinate Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(103,137,255,0.18),transparent_70%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#434654_1px,transparent_1px),linear-gradient(to_bottom,#434654_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[340px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto z-10">
        <div className="max-w-4xl flex flex-col gap-6">
          {/* Live Status Pill */}
          <div className="ct-pill inline-flex items-center gap-3 w-fit px-4 py-1.5 rounded-full bg-surface-container-high/80 border border-outline-variant/30 shadow-inner">
            <span className="font-mono text-label-mono-tag uppercase tracking-widest text-primary font-semibold">
              00 // INITIATE COLLABORATION
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary-container inline-block" />
              Direct Consultancy Desk • Active
            </span>
          </div>

          {/* Headline */}
          <h1 className="ct-hero-title font-headline-xl text-3xl sm:text-5xl lg:text-6xl text-on-surface tracking-tight font-bold leading-tight">
            Let’s Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-glow to-primary-container">
              Extraordinary Together.
            </span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="ct-hero-desc font-body-xl text-base sm:text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">
            Have an ambitious project in mind, legacy systems to modernize, or an enterprise challenge to solve? Tell us what you’re working on, and let’s explore how our engineering teams deconstruct complexity into high-performance digital systems.
          </p>

          {/* Response Metrics Ticker */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl border-t border-outline-variant/20 mt-2">
            <div className="ct-metric-card flex items-center gap-3.5 p-4 rounded-xl bg-surface-container/60 shadow-sm border border-outline-variant/20 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0 border border-outline-variant/20">
                <span className="material-symbols-outlined text-[20px]">timer</span>
              </div>
              <div>
                <p className="font-label-lg text-sm sm:text-base font-bold text-on-surface">
                  &lt; 24h Turnaround
                </p>
                <p className="font-body-sm text-xs text-text-muted">
                  Initial Architectural Review
                </p>
              </div>
            </div>

            <div className="ct-metric-card flex items-center gap-3.5 p-4 rounded-xl bg-surface-container/60 shadow-sm border border-outline-variant/20 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0 border border-outline-variant/20">
                <span className="material-symbols-outlined text-[20px]">verified_user</span>
              </div>
              <div>
                <p className="font-label-lg text-sm sm:text-base font-bold text-on-surface">
                  100% Mutual NDA
                </p>
                <p className="font-body-sm text-xs text-text-muted">
                  Prior to Technical Discovery
                </p>
              </div>
            </div>

            <div className="ct-metric-card flex items-center gap-3.5 p-4 rounded-xl bg-surface-container/60 shadow-sm border border-outline-variant/20 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0 border border-outline-variant/20">
                <span className="material-symbols-outlined text-[20px]">engineering</span>
              </div>
              <div>
                <p className="font-label-lg text-sm sm:text-base font-bold text-on-surface">
                  Director-Led
                </p>
                <p className="font-body-sm text-xs text-text-muted">
                  Direct Engineering Oversight
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
