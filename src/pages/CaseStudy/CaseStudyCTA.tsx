import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/ui/Container';

export const CaseStudyCTA: React.FC = () => {
  return (
    <section className="w-full bg-[#0b0e15] text-white py-20 lg:py-28 relative overflow-hidden border-t border-white/[0.04]">
      {/* Ambient Glow */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#6789ff]/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="text-center relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col gap-5 items-center">
          <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
            Initiate Engineering Collaboration
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight font-bold leading-tight">
            Have a Similar Engineering Challenge? Let's Solve It Together.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#8892a6] max-w-2xl mx-auto leading-relaxed">
            Whether architecting a complex health telemetry engine or scaling an enterprise platform to hundreds of thousands of users, let us deconstruct the problem and build the solution.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 bg-[#6789ff] text-white font-mono text-xs uppercase tracking-wider rounded-xl font-semibold shadow-[0_0_32px_rgba(103,137,255,0.4)] hover:bg-[#b6c4ff] hover:text-[#00164f] transition-all"
            >
              Discuss Your Project
            </Link>

            <Link
              to="/our-work"
              className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 bg-[#181b23] text-white font-mono text-xs uppercase tracking-wider rounded-xl font-medium hover:bg-[#272a32] border border-white/[0.06] transition-all"
            >
              Explore All Work
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudyCTA;
