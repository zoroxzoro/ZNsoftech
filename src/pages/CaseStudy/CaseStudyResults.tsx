import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import type { CaseStudyData } from '../../data/caseStudies';

interface CaseStudyResultsProps {
  results: CaseStudyData['results'];
}

export const CaseStudyResults: React.FC<CaseStudyResultsProps> = ({ results }) => {
  return (
    <section className="w-full bg-[#10131b] py-20 lg:py-28 relative overflow-hidden border-t border-white/[0.04]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6789ff]/5 via-transparent to-[#BAE6FD]/5 pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
            {results.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight font-bold">
            {results.title}
          </h2>
          <p className="font-sans text-base text-[#8892a6] leading-relaxed">
            {results.description}
          </p>
        </div>

        {/* 4 Huge Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.metrics.map((m, idx) => (
            <motion.div
              key={m.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#181b23] p-8 rounded-2xl border border-white/[0.06] shadow-xl flex flex-col justify-between hover:border-[#6789ff]/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <span className="font-mono text-xs text-[#8892a6] uppercase tracking-wider block mb-3 font-semibold">
                  {m.type}
                </span>
                <span
                  style={{ color: m.color || '#ffffff' }}
                  className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold block tracking-tighter mb-4"
                >
                  {m.value}
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#8892a6] leading-relaxed">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CaseStudyResults;
