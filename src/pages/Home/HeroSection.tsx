import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { AnimatedCounter } from '../../components/motion/AnimatedCounter';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const interactiveZoneRef = useRef<HTMLDivElement>(null);
  const telemetryCardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // GSAP Entrance Timeline (Steps 1-5)
  useEffect(() => {
    if (shouldReduceMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-pill',
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
      )
        .fromTo(
          '.hero-headline-line',
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
          '-=0.3'
        )
        .fromTo(
          '.hero-description',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          '.hero-cta-btn',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          '-=0.3'
        )
        .fromTo(
          '.hero-stat-card',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          '-=0.3'
        )
        .fromTo(
          telemetryCardRef.current,
          { opacity: 0, scale: 0.94, y: 24 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'back.out(1.2)' },
          '-=0.6'
        );
    }, heroRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  // Subtle Interactive Cursor-Responsive Parallax for Telemetry Card
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
      // Controlled subtle rotation (max 10-12 deg)
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
      id="hero-section"
      className="relative w-full bg-surface-container-lowest text-on-surface overflow-hidden -mt-20 pt-28 pb-12 sm:pb-16"
    >
      {/* Atmospheric Ambient Glow Fields */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-secondary-container/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Editorial & Conversion Authority */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Status Indicator Pill */}
          <div className="hero-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
              GLOBAL TECHNOLOGY PARTNER • USA • UK • EUROPE • GCC
            </span>
          </div>

          {/* Expressive Headline with Staggered Line Reveal */}
          <h1 className="font-headline-xl text-headline-xl lg:font-display-hero lg:text-display-hero text-on-surface tracking-tight leading-tight flex flex-col">
            <span className="overflow-hidden inline-block">
              <span className="hero-headline-line block">We Build Digital</span>
            </span>
            <span className="overflow-hidden inline-block">
              <span className="hero-headline-line block">Experiences That</span>
            </span>
            <span className="overflow-hidden inline-block">
              <span className="hero-headline-line bg-gradient-to-r from-primary via-tertiary to-secondary bg-clip-text text-transparent block">
                Move Businesses Forward.
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="hero-description font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            ZNSoftech engineers intelligent, scalable, and cost-efficient digital systems — transforming
            complex enterprise challenges into seamless digital platforms across logistics,
            manufacturing, and healthcare.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Link
              to="/contact"
              className="hero-cta-btn inline-flex items-center gap-2 font-label-lg text-label-lg px-6 py-3.5 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary active:scale-[0.98] transition-all duration-300 shadow-xl shadow-primary-container/20 group font-semibold"
            >
              <span>Start Your Project</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </Link>
            <Link
              to="/our-work"
              className="hero-cta-btn inline-flex items-center gap-2 font-label-lg text-label-lg px-6 py-3.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high hover:border-primary/30 border border-outline-variant/30 active:scale-[0.98] transition-all duration-300 group font-semibold"
            >
              <span>Explore Our Work</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                north_east
              </span>
            </Link>
          </div>

          {/* Verified Stats Baseline Bar */}
          <div className="w-full pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="hero-stat-card flex flex-col gap-1 p-3 bg-surface-container/60 rounded-lg hover:bg-surface-container/80 transition-colors border border-outline-variant/10">
              <span className="font-headline-md text-headline-md text-on-surface font-semibold">
                <AnimatedCounter value={500} suffix="+" />
              </span>
              <span className="font-label-mono-tag text-label-mono-tag text-on-surface-variant uppercase">
                Apps Delivered
              </span>
            </div>
            <div className="hero-stat-card flex flex-col gap-1 p-3 bg-surface-container/60 rounded-lg hover:bg-surface-container/80 transition-colors border border-outline-variant/10">
              <span className="font-headline-md text-headline-md text-tertiary font-semibold">
                <AnimatedCounter value={10} prefix="" suffix="+ M" />
              </span>
              <span className="font-label-mono-tag text-label-mono-tag text-on-surface-variant uppercase">
                User Engagement
              </span>
            </div>
            <div className="hero-stat-card flex flex-col gap-1 p-3 bg-surface-container/60 rounded-lg hover:bg-surface-container/80 transition-colors border border-outline-variant/10">
              <span className="font-headline-md text-headline-md text-on-surface font-semibold">
                <AnimatedCounter value={12} suffix="+ Yrs" />
              </span>
              <span className="font-label-mono-tag text-label-mono-tag text-on-surface-variant uppercase">
                Industry Experience
              </span>
            </div>
            <div className="hero-stat-card flex flex-col gap-1 p-3 bg-surface-container/60 rounded-lg hover:bg-surface-container/80 transition-colors border border-outline-variant/10">
              <span className="font-headline-md text-headline-md text-secondary font-semibold">
                <AnimatedCounter value={100} suffix="%" />
              </span>
              <span className="font-label-mono-tag text-label-mono-tag text-on-surface-variant uppercase">
                Delivery Guaranteed
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Neural Architecture & Telemetry Card */}
        <div
          ref={interactiveZoneRef}
          id="hero-interactive-zone"
          className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] perspective-[1000px] py-4"
        >
          {/* Ambient Glow Backplate */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-secondary-container/10 rounded-2xl filter blur-xl pointer-events-none" />

          {/* Interactive Telemetry Visualizer Card */}
          <div
            ref={telemetryCardRef}
            id="telemetry-card"
            className="ambient-card-float relative w-full bg-surface-dark-elevated/90 backdrop-blur-xl p-6 sm:p-7 rounded-xl shadow-2xl flex flex-col gap-4 border border-outline-variant/30 transition-transform duration-100 ease-out"
          >
            {/* Visualizer Header */}
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                </span>
                <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase font-bold tracking-wider">
                  Agentic AI • Live Telemetry
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container text-on-surface-variant text-[11px] font-mono border border-outline-variant/40">
                <span className="material-symbols-outlined text-[14px] text-tertiary">tune</span>
                v4.8 NODE
              </div>
            </div>

            {/* Network Architecture Canvas Visualization */}
            <div className="relative w-full h-52 bg-surface-container-lowest/80 rounded-lg p-4 flex flex-col justify-between overflow-hidden border border-outline-variant/20">
              {/* Simulated Neural Pipeline Wireframe */}
              <svg
                className="absolute inset-0 w-full h-full text-primary/20 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="cyber-line" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#b6c4ff" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#3198dc" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <line
                  className="sparkline-shimmer"
                  stroke="url(#cyber-line)"
                  strokeDasharray="4 4"
                  strokeWidth="1.5"
                  x1="20"
                  x2="160"
                  y1="30"
                  y2="100"
                />
                <line
                  className="sparkline-shimmer"
                  stroke="url(#cyber-line)"
                  strokeWidth="1.5"
                  x1="160"
                  x2="310"
                  y1="100"
                  y2="60"
                />
                <line
                  className="sparkline-shimmer"
                  stroke="url(#cyber-line)"
                  strokeDasharray="2 2"
                  strokeWidth="1.5"
                  x1="160"
                  x2="280"
                  y1="100"
                  y2="160"
                />
                <circle className="animate-pulse" cx="20" cy="30" fill="#6789ff" r="5" />
                <circle cx="160" cy="100" fill="#b6c4ff" r="7" />
                <circle
                  className="animate-ping"
                  cx="310"
                  cy="60"
                  fill="#3198dc"
                  r="4"
                  style={{ animationDuration: '3s' }}
                />
                <circle cx="280" cy="160" fill="#c8bfff" r="5" />
              </svg>

              {/* Real-time Active Pill Overlay */}
              <div className="flex justify-between items-start z-10">
                <div className="px-2.5 py-1 rounded bg-surface-container-high/90 backdrop-blur-md border border-outline-variant/30">
                  <span className="font-label-mono-tag text-label-mono-tag text-on-surface">
                    COGNITIVE LATENCY: <strong className="text-tertiary">14ms</strong>
                  </span>
                </div>
                <div className="px-2.5 py-1 rounded bg-primary-container/25 border border-primary/30">
                  <span className="font-label-mono-tag text-label-mono-tag text-primary">
                    STATUS: AUTONOMOUS
                  </span>
                </div>
              </div>
              <div className="z-10 bg-surface-dark/80 p-2.5 rounded backdrop-blur-md flex items-center justify-between border border-outline-variant/30">
                <span className="font-body-sm text-body-sm text-on-surface">
                  Goal-Driven Workflow Engine
                </span>
                <span className="font-label-mono-tag text-label-mono-tag text-tertiary font-bold tracking-wide">
                  99.98% ACCURACY
                </span>
              </div>
            </div>

            {/* Bottom Telemetry Tiles */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-surface-container p-3 rounded-lg flex flex-col gap-1 border border-outline-variant/20 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-1.5 text-on-surface-variant font-label-mono-tag text-label-mono-tag">
                  <span className="material-symbols-outlined text-[14px] text-primary">memory</span>
                  <span>DATA INTEGRATION</span>
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  1.4 GB/s
                </span>
                <span className="text-[11px] text-tertiary font-mono">Continuous Stream</span>
              </div>
              <div className="bg-surface-container p-3 rounded-lg flex flex-col gap-1 border border-outline-variant/20 hover:border-secondary/40 transition-colors">
                <div className="flex items-center gap-1.5 text-on-surface-variant font-label-mono-tag text-label-mono-tag">
                  <span className="material-symbols-outlined text-[14px] text-secondary">security</span>
                  <span>SYSTEM UPTIME</span>
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  99.98%
                </span>
                <span className="text-[11px] text-secondary font-mono">Zero Failure Record</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
