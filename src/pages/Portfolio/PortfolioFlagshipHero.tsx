import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import ProjectImageReveal from '../../components/motion/ProjectImageReveal';

interface PortfolioFlagshipHeroProps {
  isVisible?: boolean;
}

export const PortfolioFlagshipHero: React.FC<PortfolioFlagshipHeroProps> = ({ isVisible = true }) => {
  if (!isVisible) return null;

  return (
    <section className="w-full bg-[#10131b] py-16 sm:py-24 relative overflow-hidden">
      <Container>
        {/* Flagship Outer Container */}
        <div className="relative bg-[#1A2234] rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-14 border border-white/[0.08] group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {/* Ambient Top Illumination Bar */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#6789ff] to-transparent opacity-60" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Case Metadata (Cols 1-6) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#6789ff]/20 text-[#b6c4ff] font-mono text-xs uppercase tracking-wider font-semibold">
                  FLAGSHIP 01 // HEALTH & HYBRID ATHLETICS
                </span>
                <span className="text-[#8892A6] text-xs font-mono">UK & GLOBAL</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight leading-tight">
                Omnia Performance — Adaptive Training & Hybrid Athlete Ecosystem
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#c4c5d7] leading-relaxed">
                Engineered a high-performance web platform and digital telemetry suite powering customized hybrid athletic programming. Features dynamic adaptive workout generation, bio-telemetry ingestion, and real-time interactive coach oversight at global scale.
              </p>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-[#181b23] border border-white/[0.04]">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-[#b6c4ff] block">
                    +280%
                  </span>
                  <span className="font-sans text-xs text-[#8892a6]">Subscription Growth</span>
                </div>
                <div className="p-4 rounded-xl bg-[#181b23] border border-white/[0.04]">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-[#BAE6FD] block">
                    &lt; 1s
                  </span>
                  <span className="font-sans text-xs text-[#8892a6]">Telemetry Compute</span>
                </div>
                <div className="p-4 rounded-xl bg-[#181b23] border border-white/[0.04]">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-emerald-400 block">
                    99.98%
                  </span>
                  <span className="font-sans text-xs text-[#8892a6]">Platform Uptime</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/case-study/omnia-performance"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-xl bg-[#6789ff] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#b6c4ff] hover:text-[#00164f] shadow-[0_0_32px_-6px_rgba(103,137,255,0.45)] transition-all font-semibold group/btn"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>

                <a
                  href="https://www.omnia-performance.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-[#272a32] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#363941] transition-colors font-medium border border-white/[0.06]"
                >
                  <span>Explore Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-2 text-[#8892a6]" />
                </a>
              </div>
            </div>

            {/* Case Visual Mockup with Smooth Zoom (Cols 7-12) */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-[360px] sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl bg-[#181b23] border border-white/[0.08]">
                <ProjectImageReveal
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW8N5jEnWaqTrBBWna6i0QQicr5aVyVN-Mddb9fkGBtcAsmCuYMaGSFhjohWSyofPih0-PEpC2i2hUe6lvkpcVZi56OPre6_wCYDWMXrw4S3CZEmDK4wU4f4ErseItwbFWAzZps4_hfWq2jK9VTH6oScDfJRknux-xnV0fZVq4COjrRq62vswIaSyvgQT1-P9hC0VaLtdAUqfwtt4OPOUk93OLsB0AC6s81HvQ3c1gUw18cvCTkjkUKA"
                  alt="Modern fitness analytics web dashboard on dark glass UI displaying athlete workout programming, live heart rate recovery curves, progress trackers, and coach communications"
                  aspectRatio="h-full w-full"
                  containerClassName="h-full w-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2234]/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating Pill Indicator */}
                <div className="absolute bottom-6 right-6 p-4 rounded-xl bg-[#111827]/90 backdrop-blur-md max-w-xs shadow-xl border border-white/[0.08]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                      Live Athlete Sync
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#8892a6] leading-relaxed">
                    Processing 42,000+ daily biometric logs across UK & US endurance cohorts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioFlagshipHero;
