import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '../../components/ui/Container';

interface Capability {
  number: string;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    number: '01',
    title: 'Agentic AI & Autonomous Workflows',
    description: 'Context-aware autonomous LLM agents, automated semantic data ingestion, enterprise RAG pipelines, and self-correcting business process automation.'
  },
  {
    number: '02',
    title: 'Bespoke Software & Cloud Microservices',
    description: 'Scalable Kubernetes microservice fabrics, API federation, event-driven streaming with Apache Kafka, and ultra-resilient distributed architectures on AWS and Azure.'
  },
  {
    number: '03',
    title: 'High-Concurrency Web Applications',
    description: 'Full-stack web ecosystems tuned for instant time-to-interactive, edge caching, sub-second transaction validation, and resilience under extreme traffic spikes.'
  },
  {
    number: '04',
    title: 'Cross-Platform Mobile Engineering',
    description: 'Production iOS and Android architectures built via Flutter and React Native with native hardware sensor integrations, real-time bio-telemetry, and offline-first data sync.'
  },
  {
    number: '05',
    title: 'Enterprise ERP & Regulatory Systems',
    description: 'Strict statutory portals, supply-chain custody tracking, automated regulatory audits, and enterprise resource synchronization for complex legacy operations.'
  },
  {
    number: '06',
    title: 'UI/UX & Design Systems Ergonomics',
    description: 'Mathematical token architectures, high-contrast accessible typography hierarchies, and intuitive interfaces tested for maximum user completion rates and reduced cognitive load.'
  }
];

export const PortfolioCapabilities: React.FC = () => {
  return (
    <section className="w-full bg-[#10131b] py-20 lg:py-28 relative border-t border-white/[0.04]">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-14 flex flex-col gap-2">
          <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
            04 // ENTERPRISE CAPABILITY MATRIX
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
            Engineering Competencies.
          </h2>
          <p className="font-sans text-base text-[#8892a6]">
            Cross-disciplinary software craft honed across 12+ years of enterprise deployment.
          </p>
        </div>

        {/* Horizontal Editorial Capability Rows */}
        <div className="flex flex-col gap-4">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 md:p-8 rounded-xl bg-[#181b23] border border-white/[0.04] hover:bg-[#1d2027] hover:border-[#6789ff]/30 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-default"
            >
              <div className="flex items-baseline gap-6 md:w-1/3">
                <span className="font-mono text-sm text-[#b6c4ff] font-bold">
                  {cap.number}
                </span>
                <h3 className="font-display text-lg sm:text-xl text-white font-semibold group-hover:text-[#b6c4ff] transition-colors">
                  {cap.title}
                </h3>
              </div>

              <p className="font-sans text-sm text-[#8892a6] leading-relaxed md:w-1/2">
                {cap.description}
              </p>

              <div className="md:w-auto flex justify-end">
                <div className="w-10 h-10 rounded-full bg-[#272a32] flex items-center justify-center text-[#8892a6] group-hover:bg-[#6789ff] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PortfolioCapabilities;
