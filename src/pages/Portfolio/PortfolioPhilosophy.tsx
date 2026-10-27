import React from 'react';
import { motion } from 'framer-motion';
import { Search, Cpu, Rocket } from 'lucide-react';
import { Container } from '../../components/ui/Container';

interface Pillar {
  number: string;
  title: string;
  description: string;
  phase: string;
  color: string;
  icon: React.ReactNode;
}

const pillars: Pillar[] = [
  {
    number: '01',
    title: 'Understanding the Challenge',
    description: 'Deep-domain decompilation of operational friction, statutory covenants, and architectural bottlenecks before writing a single line of code. We map business risk to technical causality.',
    phase: 'Phase: Discovery • Domain Modeling • Risk Matrix',
    color: '#6789ff',
    icon: <Search className="w-6 h-6 text-[#6789ff]" />
  },
  {
    number: '02',
    title: 'Designing the Solution',
    description: 'Human-centered ergonomics paired with deterministic design systems and resilient cloud-native data pipelines engineered for fault tolerance, sub-second latency, and horizontal scaling.',
    phase: 'Phase: Microservices • Token Ergonomics • CI/CD',
    color: '#BAE6FD',
    icon: <Cpu className="w-6 h-6 text-[#BAE6FD]" />
  },
  {
    number: '03',
    title: 'Delivering the Experience',
    description: 'Zero-downtime blue/green deployment orchestration, rigorous end-to-end load simulations, and contractual SLA guarantees backed by 100% intellectual property transfer to your enterprise.',
    phase: 'Phase: Zero Downtime • Telemetry • Full IP Transfer',
    color: '#c8bfff',
    icon: <Rocket className="w-6 h-6 text-[#c8bfff]" />
  }
];

export const PortfolioPhilosophy: React.FC = () => {
  return (
    <section className="w-full bg-[#080B12] text-[#e0e2ed] py-24 lg:py-36 relative overflow-hidden border-t border-white/[0.04]">
      {/* Photonic Backlit Fields */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6789ff]/10 blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Editorial Section Title */}
        <div className="max-w-3xl flex flex-col gap-4 mb-20">
          <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
            03 // ENGINEERING PHILOSOPHY — BEYOND THE INTERFACE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Thoughtful engineering, meaningful experiences, designed around real business challenges.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#8892a6] leading-relaxed">
            We reject superficial aesthetics in favor of architectural durability. Every system is built to survive high transaction velocities, shifting compliance laws, and organizational growth.
          </p>
        </div>

        {/* 3 Distinctive Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#181b23]/70 backdrop-blur-md p-8 sm:p-10 rounded-2xl flex flex-col justify-between border border-white/[0.06] hover:border-white/[0.16] hover:bg-[#181b23] transition-all duration-300 group"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span
                    style={{ color: pillar.color }}
                    className="font-display text-3xl font-bold"
                  >
                    {pillar.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#272a32] flex items-center justify-center">
                    {pillar.icon}
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl text-white font-semibold group-hover:text-[#b6c4ff] transition-colors">
                  {pillar.title}
                </h3>

                <p className="font-sans text-sm text-[#8892a6] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-white/[0.04] text-[11px] font-mono text-[#8892a6] uppercase tracking-wider">
                {pillar.phase}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PortfolioPhilosophy;
