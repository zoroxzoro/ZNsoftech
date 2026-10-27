import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Shield, Server, RefreshCw } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import type { CaseStudyData } from '../../data/caseStudies';

interface CaseStudyArchitectureProps {
  highlights: CaseStudyData['highlights'];
  architecture: CaseStudyData['architecture'];
}

export const CaseStudyArchitecture: React.FC<CaseStudyArchitectureProps> = ({
  highlights,
  architecture
}) => {
  return (
    <div className="w-full">
      {/* 4 Modular Strengths Cards */}
      <section className="w-full bg-[#10131b] py-20 lg:py-28 relative border-t border-white/[0.04]">
        <Container>
          <div className="mb-14 flex flex-col gap-2 max-w-2xl">
            <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
              System Strengths
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight font-bold">
              Architectural Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, idx) => (
              <motion.div
                key={h.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#181b23] p-7 rounded-2xl border border-white/[0.06] shadow-xl flex flex-col justify-between hover:border-[#6789ff]/40 transition-all duration-300 group"
              >
                <div>
                  <span className="font-display text-3xl font-bold text-[#6789ff]/40 block mb-3">
                    {h.number}
                  </span>
                  <h3 className="font-display text-lg text-white font-semibold mb-2 group-hover:text-[#b6c4ff] transition-colors">
                    {h.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#8892a6] leading-relaxed">
                    {h.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center gap-2 text-xs font-mono text-[#b6c4ff]">
                  <RefreshCw className="w-3.5 h-3.5 text-[#6789ff]" />
                  <span>{h.badge}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Infrastructure & Code Topology Block */}
      <section className="w-full bg-[#0b0e15] py-20 lg:py-28 relative border-t border-white/[0.04]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
                  {architecture.eyebrow}
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight font-bold leading-tight">
                  {architecture.title}
                </h2>
              </div>

              <p className="font-sans text-base text-[#8892a6] leading-relaxed">
                {architecture.description}
              </p>

              <div className="flex flex-col gap-4 pt-2">
                {architecture.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#181b23] border border-white/[0.04]">
                    <div className="w-9 h-9 rounded-lg bg-[#272a32] flex items-center justify-center text-[#b6c4ff] flex-shrink-0 mt-0.5">
                      {idx === 0 ? <Database className="w-4 h-4" /> : idx === 1 ? <Zap className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-semibold text-white">
                        {feat.title}
                      </h4>
                      <p className="font-sans text-xs text-[#8892a6] mt-1 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Topology & Code Block (7 cols) */}
            <div className="lg:col-span-7 bg-[#181b23] p-7 sm:p-9 rounded-2xl border border-white/[0.08] shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#6789ff]" />
                  <span className="font-mono text-xs text-[#8892a6] uppercase tracking-wider">
                    Architecture Topology
                  </span>
                </div>
                <span className="font-mono text-xs text-[#b6c4ff] font-semibold bg-[#272a32] px-2.5 py-0.5 rounded">
                  v2.1 STABLE
                </span>
              </div>

              {/* Code / Schema Visualization Block */}
              <div className="bg-[#0b0e15] p-5 rounded-xl font-mono text-xs text-[#8892a6] space-y-2 border border-white/[0.04] overflow-x-auto">
                <div className="text-[#6789ff] font-semibold">
                  // 1. Biometric Ingestion & Calculation Pipeline
                </div>
                <div className="text-white font-bold">{architecture.apiSnippet.endpoint}</div>
                <pre className="text-[#BAE6FD] font-mono text-xs leading-relaxed whitespace-pre">
                  {architecture.apiSnippet.payload}
                </pre>
                <div className="pt-2 text-emerald-400 font-mono text-xs">
                  {architecture.apiSnippet.response}
                </div>
              </div>

              {/* Stats Strip */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {architecture.stats.map((st) => (
                  <div
                    key={st.label}
                    className="bg-[#111827] p-4 rounded-xl border border-white/[0.04]"
                  >
                    <span className="font-display text-xl sm:text-2xl text-white font-bold block">
                      {st.value}
                    </span>
                    <span className="font-mono text-[10px] text-[#8892a6] uppercase tracking-wider mt-1 block">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CaseStudyArchitecture;
