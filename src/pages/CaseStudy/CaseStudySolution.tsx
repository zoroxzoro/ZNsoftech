import React from 'react';
import { motion } from 'framer-motion';
import { WifiOff } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import type { CaseStudyData } from '../../data/caseStudies';

interface CaseStudySolutionProps {
  solutions: CaseStudyData['solutions'];
}

export const CaseStudySolution: React.FC<CaseStudySolutionProps> = ({ solutions }) => {
  return (
    <section className="w-full bg-[#10131b] text-[#e0e2ed] py-20 lg:py-28 relative border-t border-white/[0.04]">
      <Container>
        {/* Section Header */}
        <div className="mb-16 max-w-3xl flex flex-col gap-3">
          <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
            {solutions.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight font-bold leading-tight">
            {solutions.title}
          </h2>
        </div>

        {/* 3 Solution Rows */}
        <div className="flex flex-col gap-8">
          {solutions.items.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#181b23] p-8 lg:p-10 rounded-2xl border border-white/[0.06] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Col 1: Big Number (2 cols) */}
              <div className="lg:col-span-2 font-display text-6xl lg:text-7xl text-[#6789ff]/80 font-bold opacity-80">
                {item.number}
              </div>

              {/* Col 2: Explanation (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <h3 className="font-display text-2xl text-white font-semibold">
                  {item.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#8892a6] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Col 3: Interactive Widget / Stat Block (5 cols) */}
              <div className="lg:col-span-5 bg-[#111827] p-6 rounded-xl border border-white/[0.04]">
                {idx === 0 && (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between text-xs font-mono text-[#b6c4ff]">
                      <span>ACWR MODEL: ACUTE / CHRONIC</span>
                      <span className="font-bold">1.04 BALANCED</span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-xs text-[#e0e2ed]">
                        <span>Endurance Accumulation</span>
                        <span className="text-[#BAE6FD] font-mono">48.2 km / 50.0 km</span>
                      </div>
                      <div className="w-full bg-[#181b23] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#BAE6FD] h-full w-[96%] rounded-full" />
                      </div>

                      <div className="flex justify-between text-xs text-[#e0e2ed] pt-2">
                        <span>Strength Volume (Tonnes)</span>
                        <span className="text-[#6789ff] font-mono">18,400 kg / 19,000 kg</span>
                      </div>
                      <div className="w-full bg-[#181b23] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#6789ff] h-full w-[94%] rounded-full" />
                      </div>
                    </div>
                  </div>
                )}

                {idx === 1 && (
                  <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-[#181b23] p-4 rounded-xl border border-white/[0.04]">
                        <span className="font-display text-2xl font-bold text-white block">
                          150+
                        </span>
                        <span className="font-mono text-[11px] text-[#8892a6] uppercase">
                          Athletes Per Coach
                        </span>
                      </div>
                      <div className="bg-[#181b23] p-4 rounded-xl border border-white/[0.04]">
                        <span className="font-display text-2xl font-bold text-[#b6c4ff] block">
                          4.2s
                        </span>
                        <span className="font-mono text-[11px] text-[#8892a6] uppercase">
                          Macro Block Deploy
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-[#8892a6] font-mono text-center pt-1">
                      Bulk programming templates deployed in 1-click across cohorts.
                    </p>
                  </div>
                )}

                {idx === 2 && (
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-xs text-[#BAE6FD] font-semibold">
                        OFFLINE SYNC STATUS
                      </span>
                      <p className="font-display text-base font-semibold text-white">
                        PWA IndexedDB Cache Ready
                      </p>
                      <p className="text-xs text-[#8892a6]">
                        Zero data lost during subterranean sessions
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#6789ff]/20 flex items-center justify-center text-[#b6c4ff] flex-shrink-0">
                      <WifiOff className="w-6 h-6" />
                    </div>
                  </div>
                )}

                {idx > 2 && (
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-xs text-[#b6c4ff] uppercase">
                      {item.metricLabel || 'SYSTEM METRIC'}
                    </span>
                    <p className="font-display text-2xl text-white font-bold">
                      {item.metricValue || '100% Verified'}
                    </p>
                    {item.subtext && (
                      <p className="text-xs text-[#8892a6]">{item.subtext}</p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CaseStudySolution;
