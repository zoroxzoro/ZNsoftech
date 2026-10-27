import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const ServicesHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const interactiveZoneRef = useRef<HTMLDivElement>(null);
  const telemetryCardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // GSAP Coordinated Entrance Timeline
  useEffect(() => {
    if (shouldReduceMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.services-hero-eyebrow',
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
      )
        .fromTo(
          '.services-hero-headline-line',
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.1 },
          '-=0.3'
        )
        .fromTo(
          '.services-hero-desc',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, delay: 0.1 },
          '-=0.4'
        )
        .fromTo(
          '.services-hero-cta',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          '-=0.3'
        )
        .fromTo(
          '.services-hero-stat',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          '-=0.3'
        )
        .fromTo(
          telemetryCardRef.current,
          { opacity: 0, scale: 0.94, y: 24 },
          { opacity: 1, scale: 1, y: 0, duration: 0.95, ease: 'power3.out' },
          '-=0.7'
        );
    }, heroRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  // Micro-parallax on telemetry card
  useEffect(() => {
    if (shouldReduceMotion) return;
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) return;

    const zone = interactiveZoneRef.current;
    const card = telemetryCardRef.current;
    if (!zone || !card) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = zone.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 10;
      targetY = y * 10;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    zone.addEventListener('mousemove', handleMouseMove);
    zone.addEventListener('mouseleave', handleMouseLeave);

    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      if (card) {
        card.style.transform = `perspective(1000px) rotateY(${currentX}deg) rotateX(${-currentY}deg) translateY(-4px)`;
      }
      animationFrameId = requestAnimationFrame(updateParallax);
    };

    animationFrameId = requestAnimationFrame(updateParallax);

    return () => {
      zone.removeEventListener('mousemove', handleMouseMove);
      zone.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldReduceMotion]);

  return (
    <section
      ref={heroRef}
      id="hero-interactive-zone"
      className="relative w-full px-4 sm:px-6 md:px-12 lg:px-20 -mt-20 pt-28 pb-16 lg:pb-24 overflow-hidden bg-surface"
    >
      {/* Atmospheric Ambient Backlight */}
      <div className="absolute -top-32 left-1/4 w-[680px] h-[520px] rounded-full bg-primary-container/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-24 w-[480px] h-[480px] rounded-full bg-secondary-container/15 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Editorial Headline & Actions (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="services-hero-eyebrow flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary font-label-mono-tag text-label-mono-tag uppercase tracking-wider border border-primary/20 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              OUR EXPERTISE // ARCHITECTURAL MASTERY
            </span>
            <span className="text-outline text-body-sm font-body-sm font-mono">
              // VERIFIED DELIVERY ENGINE
            </span>
          </div>

          <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight leading-tight flex flex-col">
            <span className="overflow-hidden inline-block">
              <span className="services-hero-headline-line block">Technology Solutions</span>
            </span>
            <span className="overflow-hidden inline-block">
              <span className="services-hero-headline-line block">
                Built for{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-fixed via-primary-fixed-dim to-secondary">
                  What's Next.
                </span>
              </span>
            </span>
          </h1>

          <p className="services-hero-desc font-body-xl text-body-xl text-on-surface-variant leading-relaxed max-w-2xl">
            From intelligent automation and autonomous multi-agent systems to high-scale digital
            platforms, we help enterprise leaders deconstruct friction, accelerate execution, and
            engineer zero-downtime futures.
          </p>

          {/* CTAs & Micro-trust Indicators */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#contact-inquiry"
              className="services-hero-cta cta-glow-pulse inline-flex items-center gap-2 font-label-lg text-label-lg px-6 py-3 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary active:scale-98 transition-all duration-300 group shadow-lg font-semibold"
            >
              <span>Discuss Your Project</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
            <a
              href="#service-directory"
              className="services-hero-cta inline-flex items-center gap-2 font-label-lg text-label-lg px-6 py-3 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-all duration-200 border border-outline-variant/30 font-semibold"
            >
              <span>Explore Blueprints</span>
              <span className="material-symbols-outlined text-[18px] text-primary">south</span>
            </a>
          </div>

          {/* Telemetry Pill Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-on-surface-variant">
            <div className="services-hero-stat flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
              <span className="font-body-sm text-body-sm font-medium text-on-surface">
                100% On-Time Guarantee
              </span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-outline-variant hidden sm:block" />
            <div className="services-hero-stat flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">security</span>
              <span className="font-body-sm text-body-sm font-medium text-on-surface">
                Full IP Ownership
              </span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-outline-variant hidden sm:block" />
            <div className="services-hero-stat flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">speed</span>
              <span className="font-body-sm text-body-sm font-medium text-on-surface">
                18ms Runtime Latency
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Telemetry & Interconnected Systems Visual (5 Cols) */}
        <div
          ref={interactiveZoneRef}
          className="lg:col-span-5 flex justify-center lg:justify-end perspective-[1000px]"
        >
          <div
            ref={telemetryCardRef}
            id="telemetry-card"
            className="ambient-card-float w-full max-w-md bg-surface-container-high p-6 rounded-xl shadow-2xl relative overflow-hidden border border-outline-variant/30 transition-all duration-100 ease-out"
          >
            {/* Top Header Strip */}
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
                <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase font-bold">
                  ZN-KINETIC NODE v4.2
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant font-label-mono-tag text-label-mono-tag">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>LIVE CLUSTER</span>
              </div>
            </div>

            {/* Dynamic SVG Topology Diagram */}
            <div className="relative w-full h-52 bg-surface-container-lowest rounded-lg p-3 flex items-center justify-center overflow-hidden border border-outline-variant/20">
              <svg className="w-full h-full" fill="none" viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg">
                {/* Grid background lines */}
                <path
                  className="text-outline-variant/20"
                  d="M0 45H360 M0 90H360 M0 135H360"
                  stroke="currentColor"
                  strokeDasharray="2 4"
                />
                <path
                  className="text-outline-variant/20"
                  d="M90 0V180 M180 0V180 M270 0V180"
                  stroke="currentColor"
                  strokeDasharray="2 4"
                />
                {/* Schematic Flow Connections */}
                <path
                  className="text-primary-container/40"
                  d="M60 90 Q 120 40 180 90 T 300 90"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  className="text-secondary/40"
                  d="M60 90 Q 120 140 180 90 T 300 90"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                {/* Sparkline Shimmer Data Pulse */}
                <path
                  className="text-primary sparkline-shimmer"
                  d="M60 90 Q 120 40 180 90 T 300 90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                {/* Central Gateway Node */}
                <circle className="fill-surface-container-high" cx="180" cy="90" r="18" />
                <circle className="fill-primary-container/30" cx="180" cy="90" r="14" />
                <circle className="fill-primary animate-pulse" cx="180" cy="90" r="6" />
                {/* Ingress Node */}
                <circle className="fill-surface-container-high" cx="60" cy="90" r="12" />
                <circle className="fill-tertiary" cx="60" cy="90" r="4" />
                {/* Sub-processing Nodes */}
                <circle className="fill-surface-container-high" cx="120" cy="48" r="9" />
                <circle className="fill-secondary" cx="120" cy="48" r="3" />
                <circle className="fill-surface-container-high" cx="240" cy="132" r="9" />
                <circle className="fill-primary" cx="240" cy="132" r="3" />
                {/* Egress Autonomous Agent Sink */}
                <circle className="fill-surface-container-high" cx="300" cy="90" r="14" />
                <circle className="fill-primary-container" cx="300" cy="90" r="7" />
                <text
                  fill="#ffffff"
                  fontFamily="Space Grotesk"
                  fontSize="8"
                  fontWeight="bold"
                  textAnchor="middle"
                  x="300"
                  y="93"
                >
                  AI
                </text>
              </svg>
              <div className="absolute bottom-2 left-3 flex items-center gap-1.5 font-label-mono-tag text-label-mono-tag text-on-surface-variant">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>SYNCHRONOUS MESH</span>
              </div>
              <div className="absolute top-2 right-3 font-label-mono-tag text-label-mono-tag text-primary font-bold">
                18.4 MS AVG
              </div>
            </div>

            {/* Real-Time Metrics Readouts */}
            <div className="grid grid-cols-2 gap-3 pt-3">
              <div className="bg-surface-container-lowest p-3 rounded-lg flex flex-col border border-outline-variant/15">
                <span className="font-label-mono-tag text-label-mono-tag text-on-surface-variant uppercase">
                  Agentic AI Status
                </span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  Optimal 99.98%
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Autonomous goal mesh active
                </span>
              </div>
              <div className="bg-surface-container-lowest p-3 rounded-lg flex flex-col border border-outline-variant/15">
                <span className="font-label-mono-tag text-label-mono-tag text-on-surface-variant uppercase">
                  Throughput Engine
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  4.2k req/s
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Zero unhandled exceptions
                </span>
              </div>
            </div>

            {/* System Terminal Log Snippet */}
            <div className="mt-3 p-2.5 bg-surface-container-lowest/80 rounded-lg font-label-mono-tag text-label-mono-tag text-outline flex items-center justify-between border border-outline-variant/15">
              <div className="flex items-center gap-2 truncate">
                <span className="text-primary font-bold">&gt;</span>
                <span className="truncate">EXEC: pipeline.dispatch(orchestrator_01) [ACK 200]</span>
              </div>
              <span className="text-on-surface font-bold ml-2">READY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
