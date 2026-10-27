import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import type { CaseStudyData } from '../../data/caseStudies';

interface CaseStudyNextProjectProps {
  nextProject: CaseStudyData['nextProject'];
}

export const CaseStudyNextProject: React.FC<CaseStudyNextProjectProps> = ({ nextProject }) => {
  return (
    <section className="w-full bg-[#10131b] py-16 sm:py-20 relative border-t border-white/[0.04]">
      <Container>
        <div className="bg-[#181b23] p-8 lg:p-12 rounded-2xl border border-white/[0.06] shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-mono text-xs text-[#8892a6] uppercase tracking-wider block">
              Next Verified Engagement
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-white uppercase font-bold group-hover:text-[#b6c4ff] transition-colors">
              {nextProject.title}
            </h3>
            <p className="font-sans text-sm text-[#8892a6] leading-relaxed">
              {nextProject.description}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#b6c4ff] pt-1">
              <span className="w-2 h-2 rounded-full bg-[#6789ff]" />
              <span>{nextProject.stat}</span>
            </div>
          </div>

          <Link
            to={`/case-study/${nextProject.slug}`}
            className="inline-flex items-center justify-center px-6 py-3.5 bg-[#272a32] hover:bg-[#6789ff] hover:text-white text-white font-mono text-xs uppercase tracking-wider rounded-xl transition-all shadow-md group/btn flex-shrink-0 border border-white/[0.06]"
          >
            <span>Explore Next Case Study</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudyNextProject;
