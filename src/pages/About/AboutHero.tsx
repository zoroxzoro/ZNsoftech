import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { AnimatedCounter } from '../../components/motion/AnimatedCounter';

export const AboutHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const interactiveZoneRef = useRef<HTMLDivElement>(null);
  const telemetryCardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Coordinated GSAP entrance timeline
  useEffect(() => {
    if (shouldReduceMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.about-hero-eyebrow',
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
      )
        .fromTo(
          '.about-hero-headline-line',
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.1 },
          '-=0.3'
        )
        .fromTo(
          '.about-hero-desc',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, delay: 0.15 },
          '-=0.4'
        )
        .fromTo(
          '.about-hero-cta',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          '-=0.3'
        )
        .fromTo(
          '.about-hero-stat',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          '-=0.3'
        )
        .fromTo(
          telemetryCardRef.current,
          { opacity: 0, scale: 0.94, y: 24, clipPath: 'inset(10% 10% 10% 10% round 16px)' },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            clipPath: 'inset(0% 0% 0% 0% round 16px)',
            duration: 0.95,
            ease: 'power3.out',
          },
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
      id="about-hero"
      className="relative w-full overflow-hidden bg-surface -mt-20 pt-28 pb-16 lg:pb-24"
    >
      {/* Ambient photonic backdrop glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 -right-28 h-[460px] w-[460px] rounded-full bg-tertiary-container/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Left Column: Editorial & Framing */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Monospaced Pill Indicator */}
            <div className="about-hero-eyebrow inline-flex items-center gap-2 self-start rounded-full bg-primary/10 px-3.5 py-1 text-primary border border-primary/20 backdrop-blur-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-mono-tag text-label-mono-tag tracking-widest uppercase font-semibold">
                ABOUT ZNSOFTECH
              </span>
            </div>

            {/* Master Headline */}
            <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight leading-tight flex flex-col">
              <span className="overflow-hidden inline-block">
                <span className="about-hero-headline-line block">Building Intelligent</span>
              </span>
              <span className="overflow-hidden inline-block">
                <span className="about-hero-headline-line block">
                  Digital Systems for a{' '}
                  <span className="bg-gradient-to-r from-primary via-primary-fixed to-tertiary bg-clip-text text-transparent">
                    Smarter Future.
                  </span>
                </span>
              </span>
            </h1>

            {/* Tagline & Core Abstract */}
            <div className="about-hero-desc flex flex-col gap-2">
              <p className="font-headline-sm text-headline-sm text-primary tracking-wide uppercase font-semibold">
                We Build. We Market. We Scale.
              </p>
              <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl leading-relaxed">
                ZNSoftech is a global technology partner, trusted by businesses across the USA, UK,
                Europe, and the GCC for delivering intelligent, scalable, and cost-efficient digital
                solutions.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/our-work"
                className="about-hero-cta inline-flex h-11 items-center justify-center rounded-lg bg-primary-container px-6 font-label-lg text-label-lg text-on-primary-container shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 font-semibold"
              >
                <span>Explore Our Work</span>
                <span className="material-symbols-outlined ml-2 text-base">arrow_forward</span>
              </Link>
              <Link
                to="/contact"
                className="about-hero-cta inline-flex h-11 items-center justify-center rounded-lg bg-surface-container-high px-6 font-label-lg text-label-lg text-on-surface transition-colors hover:bg-surface-variant border border-outline-variant/30 font-semibold"
              >
                <span>Contact Us</span>
                <span className="material-symbols-outlined ml-2 text-base">chat_bubble</span>
              </Link>
            </div>

            {/* Micro-Telemetry Key Stats Bar */}
            <div className="pt-4 grid grid-cols-3 gap-4 max-w-lg">
              <div className="about-hero-stat flex flex-col">
                <span className="font-headline-md text-headline-md text-on-surface font-semibold">
                  <AnimatedCounter value={12} suffix="+" />
                </span>
                <span className="font-label-mono-tag text-label-mono-tag text-text-muted uppercase">
                  Years Heritage
                </span>
              </div>
              <div className="about-hero-stat flex flex-col">
                <span className="font-headline-md text-headline-md text-on-surface font-semibold">
                  <AnimatedCounter value={500} suffix="+" />
                </span>
                <span className="font-label-mono-tag text-label-mono-tag text-text-muted uppercase">
                  Production Apps
                </span>
              </div>
              <div className="about-hero-stat flex flex-col">
                <span className="font-headline-md text-headline-md text-primary font-semibold">
                  <AnimatedCounter value={10} suffix="M+" />
                </span>
                <span className="font-label-mono-tag text-label-mono-tag text-text-muted uppercase">
                  Global Users
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Abstract Tech Telemetry Architecture Panel */}
          <div
            ref={interactiveZoneRef}
            id="hero-interactive-zone"
            className="lg:col-span-5 relative mt-8 lg:mt-0 perspective-[1000px]"
          >
            <div
              ref={telemetryCardRef}
              id="telemetry-card"
              className="ambient-card-float relative w-full rounded-2xl bg-surface-container p-6 shadow-2xl transition-all duration-100 ease-out border border-outline-variant/30"
            >
              {/* Node Panel Header */}
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-accent-red" />
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-secondary-fixed" />
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                  <span className="ml-2 font-label-mono-tag text-label-mono-tag text-text-muted uppercase tracking-widest font-semibold">
                    SYSTEM // GLOBAL TELEMETRY
                  </span>
                </div>
                <span className="font-label-mono-tag text-label-mono-tag text-primary font-bold">
                  v4.8 ACTIVE
                </span>
              </div>

              {/* Neural Data Pipeline Visualization */}
              <div className="relative my-3 h-48 w-full overflow-hidden rounded-xl bg-surface-container-lowest p-4 flex flex-col justify-between border border-outline-variant/20">
                <div className="flex items-center justify-between text-xs text-text-muted font-label-mono-tag">
                  <span>PIPELINE_ORCHESTRATION</span>
                  <span className="text-primary font-semibold">99.98% OPTIMAL</span>
                </div>

                {/* Animated Sparkline Flow */}
                <svg className="h-24 w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 80">
                  <path
                    className="stroke-primary/20"
                    d="M0,45 Q40,15 90,40 T180,30 T270,60 T360,20"
                    fill="none"
                    strokeWidth="2"
                  />
                  <path
                    className="sparkline-shimmer stroke-primary"
                    d="M0,45 Q40,15 90,40 T180,30 T270,60 T360,20"
                    fill="none"
                    strokeWidth="2"
                  />
                  <circle className="fill-primary animate-ping" cx="180" cy="30" r="4" />
                  <circle className="fill-primary" cx="180" cy="30" r="3" />
                  <circle className="fill-secondary-container" cx="270" cy="60" r="3" />
                  <circle className="fill-cyan-glow" cx="90" cy="40" r="3" />
                </svg>

                <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] font-label-mono-tag text-text-muted">
                  <div className="flex flex-col">
                    <span>THROUGHPUT</span>
                    <span className="text-on-surface font-semibold">4.8k req/sec</span>
                  </div>
                  <div className="flex flex-col">
                    <span>LATENCY</span>
                    <span className="text-on-surface font-semibold">18ms AVG</span>
                  </div>
                  <div className="flex flex-col">
                    <span>CLUSTER</span>
                    <span className="text-primary font-semibold">3 CONTINENTS</span>
                  </div>
                </div>
              </div>

              {/* Distributed Node Cards */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-lg bg-surface-container-high p-3 flex flex-col gap-1 border border-outline-variant/20">
                  <div className="flex items-center justify-between">
                    <span className="font-label-mono-tag text-label-mono-tag text-text-muted uppercase">
                      CORRIDOR / US
                    </span>
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">Dallas Hub</span>
                  <span className="font-label-mono-tag text-label-mono-tag text-primary">
                    AWS // Hybrid Mesh
                  </span>
                </div>
                <div className="rounded-lg bg-surface-container-high p-3 flex flex-col gap-1 border border-outline-variant/20">
                  <div className="flex items-center justify-between">
                    <span className="font-label-mono-tag text-label-mono-tag text-text-muted uppercase">
                      CORRIDOR / UK
                    </span>
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">Cheshire Tech</span>
                  <span className="font-label-mono-tag text-label-mono-tag text-primary">
                    Sci-Tech Edge
                  </span>
                </div>
              </div>

              {/* Agentic Status Callout */}
              <div className="mt-4 flex items-center justify-between rounded-lg bg-primary/10 p-3 border border-primary/20">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">neurology</span>
                  <span className="font-label-mono-tag text-label-mono-tag text-primary font-semibold">
                    AGENTIC AI ACCELERATOR ENGAGED
                  </span>
                </div>
                <span className="font-label-mono-tag text-label-mono-tag text-on-surface-variant font-bold">
                  READY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
