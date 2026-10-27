import { motion } from 'framer-motion';
import { Dumbbell, Globe2, Ticket, ArrowUpRight } from 'lucide-react';
import { Container } from '../../components/ui/Container';

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  url: string;
  icon: typeof Dumbbell;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'omnia',
    category: 'HEALTH & ATHLETICS',
    title: 'Omnia Performance',
    description: 'Engineered an elite coaching platform for hybrid endurance athletes with tailored training algorithm pipelines, real-time load analytics, and athlete community spaces.',
    metricLabel: 'METRIC',
    metricValue: '+280% Active Subscriptions',
    url: 'https://www.omnia-performance.com',
    icon: Dumbbell
  },
  {
    id: 'ora',
    category: 'GOV & ENVIRONMENT',
    title: 'Oil Recycling Association',
    description: 'Architected the national member compliance registry for UK hazardous waste recyclers, oil recovery logistics, and sustainable industry regulatory growth tracking.',
    metricLabel: 'METRIC',
    metricValue: '100% Audit Compliance',
    url: 'https://stage.ora.org.uk',
    icon: Globe2
  },
  {
    id: 'indemand',
    category: 'GLOBAL TICKETING',
    title: 'Indemand Tickets',
    description: 'Built a bulletproof high-traffic ticketing platform with queue management, seat selection locking, and integrated freight forwarding infrastructure.',
    metricLabel: 'METRIC',
    metricValue: '0 Dropouts in On-Sales',
    url: 'https://www.indemandtickets.co.uk',
    icon: Ticket
  }
];

export default function ServicesShowcase() {
  return (
    <section className="w-full py-24 bg-[#10131b] relative border-t border-white/[0.04]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
              06 // PROVEN PRODUCTION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-tight font-semibold">
              Proven Execution in Production.
            </h2>
          </div>
          <p className="font-sans text-[#8892a6] text-base max-w-sm leading-relaxed">
            Real enterprise clients. Measurable metrics. High-stakes platforms built and scaled by ZNSoftech.
          </p>
        </div>

        {/* 3 Case Study Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study) => {
            const IconComponent = study.icon;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#181b23] rounded-xl border border-white/[0.06] hover:border-[#6789ff]/40 overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="p-8 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#b6c4ff] tracking-wider uppercase font-semibold">
                      {study.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#272a32] flex items-center justify-center text-[#8892a6] group-hover:text-[#b6c4ff] group-hover:bg-[#6789ff]/10 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#b6c4ff] transition-colors">
                    {study.title}
                  </h3>

                  <p className="font-sans text-sm text-[#8892a6] leading-relaxed">
                    {study.description}
                  </p>
                </div>

                <div className="p-6 bg-[#272a32]/60 border-t border-white/[0.04] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-[#8d90a0] uppercase tracking-wider">
                      {study.metricLabel}
                    </span>
                    <span className="font-display text-lg sm:text-xl text-[#b6c4ff] font-bold">
                      {study.metricValue}
                    </span>
                  </div>

                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${study.title} case study`}
                    className="w-10 h-10 rounded-full bg-[#181b23] border border-white/[0.08] flex items-center justify-center text-[#b6c4ff] group-hover:bg-[#6789ff] group-hover:text-white group-hover:border-[#6789ff] transition-all duration-300"
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
