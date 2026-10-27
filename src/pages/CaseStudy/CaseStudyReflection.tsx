import React from 'react';
import { Container } from '../../components/ui/Container';
import type { CaseStudyData } from '../../data/caseStudies';

interface CaseStudyReflectionProps {
  testimonial: CaseStudyData['testimonial'];
}

export const CaseStudyReflection: React.FC<CaseStudyReflectionProps> = ({ testimonial }) => {
  return (
    <section className="w-full bg-[#0b0e15] py-20 lg:py-28 relative border-t border-white/[0.04]">
      <Container>
        <div className="bg-[#181b23] p-8 sm:p-12 lg:p-16 rounded-2xl border border-white/[0.08] shadow-2xl relative overflow-hidden">
          <div className="max-w-4xl relative z-10 flex flex-col gap-6">
            <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
              Partnership Reflection
            </span>

            <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed font-normal">
              {testimonial.quote}
            </blockquote>

            <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
              <div className="w-12 h-12 rounded-full bg-[#6789ff] flex items-center justify-center text-[#00164f] font-bold font-display text-base shadow-md">
                {testimonial.initials}
              </div>
              <div>
                <p className="font-display text-base font-semibold text-white">
                  {testimonial.author}
                </p>
                <p className="font-sans text-xs text-[#8892a6] mt-0.5">
                  {testimonial.role} • {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudyReflection;
