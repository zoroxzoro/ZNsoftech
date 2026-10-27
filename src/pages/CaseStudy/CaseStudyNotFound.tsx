import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, ArrowRight, Home } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import { getAllCaseStudies } from '../../data/caseStudies';

interface CaseStudyNotFoundProps {
  slug?: string;
}

export const CaseStudyNotFound: React.FC<CaseStudyNotFoundProps> = ({ slug }) => {
  const availableStudies = getAllCaseStudies();

  return (
    <div className="w-full bg-[#10131b] text-white py-24 sm:py-32 min-h-[75vh] flex items-center">
      <Container className="flex flex-col items-center text-center max-w-2xl mx-auto gap-6">
        <div className="w-20 h-20 rounded-2xl bg-[#181b23] border border-white/[0.08] flex items-center justify-center text-[#6789ff] shadow-xl">
          <FileQuestion className="w-10 h-10" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest">
            ERROR 404 // CASE STUDY NOT FOUND
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Case Study Not Found
          </h1>
        </div>

        <p className="font-sans text-base text-[#8892a6] leading-relaxed">
          {slug ? (
            <>
              The case study requested at <code className="text-[#b6c4ff] px-2 py-0.5 rounded bg-[#181b23] font-mono text-sm">{slug}</code> has not been published or does not exist in our audited production registry.
            </>
          ) : (
            'The case study you are looking for does not exist in our audited production registry.'
          )}
        </p>

        {/* Quick Links to Verified Case Studies */}
        <div className="w-full mt-4 p-6 rounded-2xl bg-[#181b23] border border-white/[0.06] flex flex-col gap-3 text-left">
          <span className="font-mono text-xs text-[#8892a6] uppercase tracking-wider">
            Explore Published Case Studies:
          </span>
          <div className="flex flex-col gap-2">
            {availableStudies.map((study) => (
              <Link
                key={study.slug}
                to={`/case-study/${study.slug}`}
                className="p-3 rounded-xl bg-[#111827] hover:bg-[#272a32] border border-white/[0.04] flex items-center justify-between group transition-colors"
              >
                <div>
                  <h2 className="font-display text-sm font-semibold text-white group-hover:text-[#b6c4ff] transition-colors">
                    {study.title}
                  </h2>
                  <p className="font-sans text-xs text-[#8892a6]">{study.category}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8892a6] group-hover:text-[#b6c4ff] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            to="/our-work"
            className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-[#6789ff] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#b6c4ff] hover:text-[#00164f] font-semibold transition-all shadow-md"
          >
            <span>Back to All Projects</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-[#181b23] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#272a32] font-medium border border-white/[0.06] transition-all"
          >
            <Home className="w-4 h-4 mr-2 text-[#8892a6]" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CaseStudyNotFound;
