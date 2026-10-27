import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { ArrowDown, ShieldCheck } from 'lucide-react';
import { Container } from '../../components/ui/Container';

export const PortfolioHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // GSAP Coordinated Entrance Timeline
  useEffect(() => {
    if (shouldReduceMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.portfolio-hero-eyebrow',
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
      )
        .fromTo(
          '.portfolio-hero-headline',
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.1 },
          '-=0.4'
        )
        .fromTo(
          '.portfolio-hero-desc',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          '.portfolio-hero-stats',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        )
        .fromTo(
          '.portfolio-hero-card',
          { opacity: 0, scale: 0.95, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.95 },
          '-=0.6'
        );
    }, heroRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  // Subtle Interactive Mouse Parallax on Telemetry Card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 0.02}deg) rotateX(${-y * 0.02}deg) translateY(-2px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)';
    cardRef.current.style.transition = 'transform 0.5s ease';
  };

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = 'none';
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full bg-[#F8F9FC] text-[#151922] overflow-hidden py-16 md:py-24 lg:py-32"
    >
      {/* Ambient Glow Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#6789ff]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#BAE6FD]/20 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Expressive Editorial Copy (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Eyebrow & Live Verified Chip */}
            <div className="flex flex-wrap items-center gap-3 portfolio-hero-eyebrow">
              <span className="font-mono text-xs tracking-wider uppercase text-[#2152d6] bg-[#dce1ff] px-3 py-1 rounded-full font-semibold">
                00 // OUR PORTFOLIO / SELECTED WORK
              </span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111827]/5 text-[#151922] text-[11px] font-mono uppercase font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                VERIFIED CASE REPOSITORY
              </div>
            </div>

            {/* Main Expressive Heading */}
            <div className="portfolio-hero-headline">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#151922] tracking-tight font-bold leading-[1.08]">
                Digital Products.
                <br />
                <span className="text-[#2152d6]">Real-World Impact.</span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="portfolio-hero-desc font-sans text-lg sm:text-xl text-[#8892A6] max-w-2xl leading-relaxed">
              Explore the digital experiences, high-availability software platforms, and mission-critical cloud solutions we have engineered across the UK, USA, Europe, and global markets.
            </p>

            {/* Metrics Strip */}
            <div className="pt-2 grid grid-cols-3 gap-6 max-w-lg portfolio-hero-stats">
              <div className="flex flex-col">
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#151922]">500+</p>
                <p className="font-sans text-xs sm:text-sm text-[#8892A6]">Digital Systems Built</p>
              </div>
              <div className="flex flex-col">
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#151922]">99.98%</p>
                <p className="font-sans text-xs sm:text-sm text-[#8892A6]">SLA Availability</p>
              </div>
              <div className="flex flex-col">
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#151922]">10M+</p>
                <p className="font-sans text-xs sm:text-sm text-[#8892A6]">Global End Users</p>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-4 flex items-center gap-2 text-[#8892A6] font-mono text-xs tracking-widest uppercase">
              <ArrowDown className="w-4 h-4 text-[#6789ff] animate-bounce" />
              <span>Explore Flagship Case Studies</span>
            </div>
          </div>

          {/* Right Column: Dimensional Preview Glass & Telemetry Mockup (Cols 8-12) */}
          <div className="lg:col-span-5 relative portfolio-hero-card">
            {/* Base Visual Mockup Card */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              className="relative bg-[#111827] text-[#e0e2ed] rounded-2xl p-6 shadow-2xl overflow-hidden border border-white/[0.08] transition-transform duration-300"
            >
              {/* Subtle Top Photonic Glow Line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#6789ff] to-transparent" />

              {/* Window Controls Strip */}
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-[#8892a6]">
                    NODE_METRICS // OMNIA.SYS
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#BAE6FD] uppercase tracking-wider font-semibold">
                  LIVE CLOUD
                </span>
              </div>

              {/* Visual Imagery Preview Frame */}
              <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-[#1d2027] group">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Editorial athletic technology interface display showcasing adaptive training metrics for Omnia Performance"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7avOx-b26cTWFhyMEMW4BjohuauwaUJStvN77gG1jma-b2qHbEdKOzE2z8opjJgzBalaIfbrVggm1HUcbLVwWPsuN2M1JbqEkXgKyBBnxgzqE9kwcwdJiqLLiBwJjoJKAmnm36smVSnOjVxCqTvZ_hIfFodHOOSA2qy2m_U4plBU8NdEzI1G5OaZtRUV1MvHf1__vn6Ivg8lbg-M2fbAJ6x9lWNwchRH9yChu-b90hYg5_s1KZGw5xw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#e0e2ed] bg-[#111827]/85 backdrop-blur px-2.5 py-1 rounded">
                    Omnia Performance // Athlete Suite
                  </span>
                  <span className="text-emerald-400 font-bold bg-[#111827]/85 backdrop-blur px-2.5 py-1 rounded">
                    ↑ 280% MRR
                  </span>
                </div>
              </div>

              {/* Realtime Telemetry Grid */}
              <div className="mt-4 grid grid-cols-2 gap-3 font-mono text-xs text-[#c4c5d7]">
                <div className="p-3 bg-[#181b23] rounded-lg border border-white/[0.04]">
                  <p className="text-[10px] uppercase text-[#8892a6]">Bio-Telemetry Delay</p>
                  <p className="text-sm font-bold text-white mt-0.5">&lt; 140ms Sub-Second</p>
                </div>
                <div className="p-3 bg-[#181b23] rounded-lg border border-white/[0.04]">
                  <p className="text-[10px] uppercase text-[#8892a6]">Concurrency Tolerance</p>
                  <p className="text-sm font-bold text-white mt-0.5">25,000+ Req/Sec</p>
                </div>
              </div>
            </div>

            {/* Dimensional Overlapping Floating Badge */}
            <div className="-mt-6 -ml-4 sm:-ml-6 relative z-20 max-w-[270px] bg-white text-[#151922] p-4 rounded-xl shadow-xl border border-black/[0.06] transition-transform duration-300 hover:translate-x-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#2152d6]/10 flex items-center justify-center text-[#2152d6]">
                  <ShieldCheck className="w-5 h-5 text-[#2152d6]" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-[#151922]">100% Audit Cleared</p>
                  <p className="font-sans text-[11px] text-[#8892A6]">UK Hazardous Waste Portal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioHero;
