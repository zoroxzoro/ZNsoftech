import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import type { CaseStudyData } from '../../data/caseStudies';

interface CaseStudyHeroProps {
  data: CaseStudyData;
}

export const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ data }) => {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.cs-hero-breadcrumb',
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.1 }
      )
        .fromTo(
          '.cs-hero-title',
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.3'
        )
        .fromTo(
          '.cs-hero-desc',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.5'
        )
        .fromTo(
          '.cs-hero-meta',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          '-=0.4'
        )
        .fromTo(
          '.cs-hero-card',
          { opacity: 0, scale: 0.96, y: 24 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9 },
          '-=0.6'
        );
    }, heroRef);

    return () => ctx.revert();
  }, [shouldReduceMotion, data.slug]);

  return (
    <section
      ref={heroRef}
      className="w-full bg-[#10131b] text-white pt-8 pb-16 sm:pb-24 relative overflow-hidden border-b border-white/[0.04]"
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full bg-[#6789ff]/10 blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-mono text-[#8892a6] mb-8 cs-hero-breadcrumb"
        >
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#8892a6]/60" />
          <Link to="/our-work" className="hover:text-white transition-colors">
            Our Work
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#8892a6]/60" />
          <span className="text-[#b6c4ff] font-semibold">{data.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Project Title & Metadata (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#6789ff]/20 text-[#b6c4ff] font-mono text-xs uppercase tracking-wider font-semibold">
                {data.flagshipLabel}
              </span>
              <span className="text-[#8892a6] text-xs font-mono">{data.location}</span>
            </div>

            <div className="cs-hero-title">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.08]">
                {data.title}
              </h1>
              <p className="font-display text-xl sm:text-2xl text-[#b6c4ff] mt-2 font-medium">
                {data.subtitle}
              </p>
            </div>

            <p className="cs-hero-desc font-sans text-base sm:text-lg text-[#c4c5d7] leading-relaxed max-w-2xl">
              {data.glance.lead}
            </p>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/[0.06] cs-hero-meta">
              <div>
                <span className="text-[10px] font-mono text-[#8892a6] uppercase tracking-wider block">
                  CLIENT
                </span>
                <p className="font-display text-sm font-semibold text-white mt-1">
                  {data.client}
                </p>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#8892a6] uppercase tracking-wider block">
                  TIMELINE
                </span>
                <p className="font-display text-sm font-semibold text-white mt-1">
                  {data.timeline}
                </p>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#8892a6] uppercase tracking-wider block">
                  SERVICES
                </span>
                <p className="font-display text-sm font-semibold text-[#b6c4ff] mt-1">
                  {data.services[0]}
                </p>
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#8892a6] uppercase tracking-wider block">
                  STATUS
                </span>
                <p className="font-display text-sm font-semibold text-emerald-400 mt-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live in Production
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {data.heroMetrics.map((m) => (
                <div
                  key={m.label}
                  className="p-4 rounded-xl bg-[#181b23] border border-white/[0.04]"
                >
                  <span className="font-display text-2xl sm:text-3xl font-bold text-[#b6c4ff] block">
                    {m.value}
                  </span>
                  <span className="font-mono text-[10px] text-[#8892a6] uppercase">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {data.externalUrl && (
              <div className="pt-2">
                <a
                  href={data.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#b6c4ff] hover:text-white transition-colors"
                >
                  <span>Explore Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Realtime Feed / Telemetry Preview Card (Cols 8-12) */}
          <div className="lg:col-span-5 cs-hero-card">
            <div className="bg-[#181b23] rounded-2xl p-6 sm:p-7 border border-white/[0.08] shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/[0.06]">
                  <h3 className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
                    Live Telemetry Stream
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#272a32] text-[#b6c4ff] font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff] animate-ping" />
                    SYNC ACTIVE
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {data.telemetryFeed.map((feed, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-[#111827] rounded-xl border border-white/[0.04]"
                    >
                      <div className="flex items-center justify-between text-[11px] text-[#8892a6] mb-1 font-mono">
                        <span style={{ color: feed.color }} className="font-semibold">
                          {feed.source}
                        </span>
                        <span>{feed.time}</span>
                      </div>
                      <p className="font-sans text-xs text-[#c4c5d7] leading-relaxed">
                        "{feed.message}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Metrics Footer */}
              <div className="mt-5 pt-4 bg-[#272a32]/60 p-4 rounded-xl flex items-center justify-between border border-white/[0.04]">
                <div>
                  <span className="font-mono text-[10px] text-[#8892a6] uppercase block">
                    Interference Index
                  </span>
                  <span className="font-display text-base text-[#b6c4ff] font-semibold">
                    0.12 (Optimal)
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#8892a6] uppercase block">
                    Readiness Score
                  </span>
                  <span className="font-display text-base text-[#BAE6FD] font-semibold">
                    94 / 100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudyHero;
