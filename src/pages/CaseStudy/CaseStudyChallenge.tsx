import React from 'react';
import { motion } from 'framer-motion';
import { Activity, GitFork, UserX, AlertTriangle } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import type { CaseStudyData } from '../../data/caseStudies';

interface CaseStudyChallengeProps {
  challenges: CaseStudyData['challenges'];
}

export const CaseStudyChallenge: React.FC<CaseStudyChallengeProps> = ({ challenges }) => {
  const icons = [
    <Activity key="1" className="w-6 h-6 text-[#6789ff]" />,
    <GitFork key="2" className="w-6 h-6 text-[#BAE6FD]" />,
    <UserX key="3" className="w-6 h-6 text-[#c8bfff]" />
  ];

  return (
    <section className="w-full bg-[#0b0e15] text-[#e0e2ed] py-20 lg:py-28 relative border-t border-white/[0.04]">
      <Container>
        {/* Section Header */}
        <div className="mb-16 max-w-3xl flex flex-col gap-3">
          <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
            {challenges.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight font-bold leading-tight">
            {challenges.title}
          </h2>
        </div>

        {/* 3 Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.items.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#181b23] p-7 sm:p-9 rounded-2xl border border-white/[0.06] shadow-xl flex flex-col justify-between hover:border-[#6789ff]/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#272a32] flex items-center justify-center mb-2">
                  {icons[idx % icons.length]}
                </div>
                <span className="font-mono text-xs text-[#8892a6] uppercase tracking-wider block">
                  {item.number}
                </span>
                <h3 className="font-display text-xl text-white font-semibold group-hover:text-[#b6c4ff] transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-[#8892a6] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 bg-[#272a32]/60 p-3.5 rounded-xl border border-white/[0.04] flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#BAE6FD] flex-shrink-0" />
                <span className="font-mono text-xs text-[#BAE6FD] font-medium truncate">
                  {item.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CaseStudyChallenge;
