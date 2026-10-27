import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAPAnimation } from '../../hooks/useGSAPAnimation';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const ProductsHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useGSAPAnimation(
    (_ctx, target) => {
      if (prefersReduced || !target) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-eyebrow',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          '.hero-title-line',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
          '-=0.6'
        )
        .fromTo(
          '.hero-desc',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          '-=0.5'
        )
        .fromTo(
          '.hero-ticker-item',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          '-=0.4'
        )
        .fromTo(
          '.hero-mockup-window',
          { opacity: 0, scale: 0.97, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 1.0, ease: 'power3.out' },
          '-=0.8'
        )
        .fromTo(
          '.hero-badge-float',
          { opacity: 0, scale: 0.92, y: 10 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.15 },
          '-=0.5'
        );
    },
    [prefersReduced]
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-surface-container-lowest text-on-surface overflow-hidden pt-12 pb-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-outline-variant/20"
    >
      {/* Atmospheric Ambient Backlight */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-primary-container/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[350px] bg-cyan-glow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        {/* Left Column: Value Proposition & Directives */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Eyebrow + Live Verification Pill Badge */}
          <div className="hero-eyebrow flex flex-wrap items-center gap-3">
            <span className="font-mono text-label-mono-tag tracking-widest text-primary uppercase font-semibold">
              OUR PRODUCTS // PURPOSE-BUILT PLATFORMS
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/15 text-primary border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-on-surface">
                VERIFIED OPERATIONAL SYSTEMS
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-on-surface tracking-tight font-bold leading-tight">
            <span className="hero-title-line block">Intelligent Products.</span>
            <span className="hero-title-line block">
              Built for{' '}
              <span className="bg-gradient-to-r from-primary via-cyan-glow to-primary-container bg-clip-text text-transparent">
                Real-World Challenges.
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-desc font-body-lg text-body-lg text-text-muted max-w-xl leading-relaxed">
            Explore purpose-built digital platforms designed to simplify operations, connect teams, and support business growth across workforce logistics, fitness management, sports events, and enterprise sales.
          </p>

          {/* CTA Cluster */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#product-explorer"
              className="hero-cta inline-flex items-center justify-center h-12 px-7 bg-primary-container text-on-primary-container font-headline-sm text-label-lg font-semibold rounded-lg hover:bg-primary hover:text-on-primary active:scale-95 transition-all duration-300 shadow-xl shadow-primary-container/20 group"
            >
              <span>Explore Products</span>
              <span className="material-symbols-outlined ml-2 text-[18px] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                north_east
              </span>
            </a>
            <Link
              to="/contact"
              className="hero-cta inline-flex items-center justify-center h-12 px-7 bg-surface-container-high text-on-surface font-headline-sm text-label-lg font-semibold rounded-lg hover:bg-surface-bright hover:border-primary/40 border border-outline-variant/30 active:scale-95 transition-all duration-300"
            >
              Talk to Our Team
            </Link>
          </div>

          {/* Metric Ticker / Telemetry Index */}
          <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg border-t border-outline-variant/20">
            <div className="hero-ticker-item flex flex-col">
              <span className="font-headline-lg text-2xl sm:text-3xl text-on-surface font-bold tracking-tight">
                5+
              </span>
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider mt-0.5">
                Operational Suites
              </span>
            </div>
            <div className="hero-ticker-item flex flex-col">
              <span className="font-headline-lg text-2xl sm:text-3xl text-on-surface font-bold tracking-tight">
                99.98%
              </span>
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider mt-0.5">
                Dispatch Uptime
              </span>
            </div>
            <div className="hero-ticker-item flex flex-col">
              <span className="font-headline-lg text-2xl sm:text-3xl text-on-surface font-bold tracking-tight">
                2.4M+
              </span>
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider mt-0.5">
                Processed Events
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Telemetry Layered Mock UI Interface */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] pt-4 lg:pt-0">
          {/* Base Glass Card: Smart Collect Fleet Core */}
          <div className="hero-mockup-window w-full bg-surface-dark/95 backdrop-blur-xl rounded-xl p-5 sm:p-6 shadow-2xl border border-outline-variant/30 relative z-10">
            {/* Mock Terminal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-accent-red" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="font-mono text-[11px] text-text-muted ml-2">
                  TELEMETRY_ENGINE // LIVE_DISPATCH
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-[11px] text-emerald-400 uppercase font-semibold">
                  Active Mesh
                </span>
              </div>
            </div>

            {/* Main Metric Grid inside Terminal */}
            <div className="grid grid-cols-2 gap-3 my-4">
              <div className="bg-surface-container rounded-lg p-3.5 border border-outline-variant/20">
                <div className="flex justify-between items-center text-text-muted font-mono text-[11px]">
                  <span>ACTIVE FLEET NODES</span>
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    local_shipping
                  </span>
                </div>
                <p className="font-headline-md text-xl sm:text-2xl text-on-surface font-bold mt-1">
                  142 <span className="text-xs text-text-muted font-normal">Vehicles</span>
                </p>
                <div className="w-full bg-surface-dark-elevated h-1.5 rounded-full mt-2.5 overflow-hidden">
                  <div className="bg-primary h-full w-[84%]" />
                </div>
              </div>

              <div className="bg-surface-container rounded-lg p-3.5 border border-outline-variant/20">
                <div className="flex justify-between items-center text-text-muted font-mono text-[11px]">
                  <span>TICKET ALLOCATIONS</span>
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    confirmation_number
                  </span>
                </div>
                <p className="font-headline-md text-xl sm:text-2xl text-on-surface font-bold mt-1">
                  18,490 <span className="text-xs text-text-muted font-normal">Units</span>
                </p>
                <div className="w-full bg-surface-dark-elevated h-1.5 rounded-full mt-2.5 overflow-hidden">
                  <div className="bg-tertiary-container h-full w-[92%]" />
                </div>
              </div>
            </div>

            {/* Live Routing Stream Visualizer */}
            <div className="bg-surface-container-high rounded-lg p-3.5 flex flex-col gap-2 border border-outline-variant/20">
              <div className="flex items-center justify-between text-on-surface-variant font-mono text-[11px]">
                <span>DYNAMIC JOB SEQUENCING [DISPATCH ID: SC-904]</span>
                <span className="text-primary font-semibold">AUTO-OPTIMIZED</span>
              </div>
              <div className="flex items-center gap-3 py-1">
                <div className="flex-1 bg-surface-dark-elevated rounded p-2.5 border border-outline-variant/20">
                  <span className="font-mono text-[10px] text-text-muted block">ZONE CHESHIRE NW</span>
                  <span className="font-body-sm text-sm text-on-surface font-semibold block truncate">
                    Stop 1: Daresbury Sci-Park
                  </span>
                </div>
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                  arrow_forward
                </span>
                <div className="flex-1 bg-surface-dark-elevated rounded p-2.5 border border-outline-variant/20">
                  <span className="font-mono text-[10px] text-text-muted block">ZONE MANCHESTER S</span>
                  <span className="font-body-sm text-sm text-on-surface font-semibold block truncate">
                    Stop 2: Logistics Hub #4
                  </span>
                </div>
              </div>
            </div>

            {/* Micro Stats Row */}
            <div className="grid grid-cols-3 gap-2 mt-3 pt-2 text-center">
              <div className="bg-surface-container/60 rounded py-2 px-1 border border-outline-variant/20">
                <span className="font-mono text-[10px] text-text-muted uppercase block">DEFECT AUDITS</span>
                <span className="font-headline-sm text-sm text-emerald-400 font-bold">100% PASS</span>
              </div>
              <div className="bg-surface-container/60 rounded py-2 px-1 border border-outline-variant/20">
                <span className="font-mono text-[10px] text-text-muted uppercase block">PIPELINE DEAL FLOW</span>
                <span className="font-headline-sm text-sm text-primary font-bold">$3.82M</span>
              </div>
              <div className="bg-surface-container/60 rounded py-2 px-1 border border-outline-variant/20">
                <span className="font-mono text-[10px] text-text-muted uppercase block">LATENCY EDGE</span>
                <span className="font-headline-sm text-sm text-cyan-glow font-bold">18ms</span>
              </div>
            </div>
          </div>

          {/* Overlapping Glass Badge 1: GrowthFactor Deal Ingestion */}
          <div className="hero-badge-float absolute -bottom-6 -left-6 z-20 hidden sm:flex items-center gap-3 bg-surface-dark-elevated/95 backdrop-blur-md p-3.5 rounded-xl shadow-2xl border border-outline-variant/40 max-w-xs">
            <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-[22px]">trending_up</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-mono text-[10px] text-text-muted uppercase">GrowthFactor CRM Engine</span>
              <span className="font-body-sm text-sm font-semibold text-on-surface truncate">
                High Velocity Deal Captured
              </span>
              <span className="font-mono text-[11px] text-emerald-400 font-semibold">
                +$84,500 Recurring ARR
              </span>
            </div>
          </div>

          {/* Overlapping Glass Badge 2: Crowdr QR Gate Scan */}
          <div className="hero-badge-float absolute -top-6 -right-4 z-20 hidden sm:flex items-center gap-3 bg-surface-dark-elevated/95 backdrop-blur-md p-3 rounded-xl shadow-2xl border border-outline-variant/40">
            <span className="material-symbols-outlined text-tertiary text-[22px]">qr_code_scanner</span>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-text-muted uppercase">Turnstile Ingress</span>
              <span className="font-label-md text-xs font-semibold text-on-surface">
                Gate 4B: Pass Validated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
