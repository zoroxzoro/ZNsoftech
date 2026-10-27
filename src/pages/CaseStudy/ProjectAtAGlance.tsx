import React from 'react';
import { Sliders, Zap, RefreshCw, AlertCircle } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import type { CaseStudyData } from '../../data/caseStudies';

interface ProjectAtAGlanceProps {
  glance: CaseStudyData['glance'];
}

export const ProjectAtAGlance: React.FC<ProjectAtAGlanceProps> = ({ glance }) => {
  const bulletIcons = [
    <Sliders key="1" className="w-4 h-4 text-[#2152d6]" />,
    <Zap key="2" className="w-4 h-4 text-[#2152d6]" />,
    <RefreshCw key="3" className="w-4 h-4 text-[#2152d6]" />
  ];

  return (
    <section className="w-full bg-[#F8F9FC] text-[#151922] py-20 lg:py-28 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Sticky Heading (Cols 1-5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col gap-5">
            <span className="font-mono text-xs text-[#2152d6] uppercase tracking-widest font-semibold block">
              {glance.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#151922] font-bold leading-tight uppercase">
              {glance.title}
            </h2>
            <p className="font-sans text-lg text-[#8892A6] leading-relaxed">
              {glance.lead}
            </p>

            <div className="pt-4 flex flex-col gap-3.5 border-t border-black/[0.08]">
              {glance.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2152d6]/10 flex items-center justify-center flex-shrink-0">
                    {bulletIcons[idx % bulletIcons.length]}
                  </div>
                  <span className="font-display text-sm font-semibold text-[#151922]">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative Context (Cols 6-12) */}
          <div className="lg:col-span-7 flex flex-col gap-6 font-sans text-base sm:text-lg text-[#151922]/85 leading-relaxed">
            {glance.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className={idx === 0 ? 'text-lg sm:text-xl font-medium text-[#151922]' : ''}
              >
                {para}
              </p>
            ))}

            {/* Operational Bottleneck Highlight */}
            {glance.bottleneck && (
              <div className="p-6 sm:p-7 rounded-2xl bg-white shadow-md border border-black/[0.06] flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-[#C6202E]">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#151922]">
                    {glance.bottleneck.title}
                  </h3>
                </div>
                <p className="font-sans text-sm text-[#8892A6] leading-relaxed">
                  {glance.bottleneck.description}
                </p>
              </div>
            )}

            <p className="text-base font-medium text-[#151922] pt-2">
              {glance.conclusion}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectAtAGlance;
