import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import type { PortfolioCategory } from './PortfolioFilterBar';

interface GridProject {
  id: string;
  slug?: string;
  categoryTag: string;
  categoryColor: string;
  region: string;
  title: string;
  description: string;
  statLabel?: string;
  statValue?: string;
  statIcon?: React.ReactNode;
  statGrid?: { label: string; value: string; highlight?: boolean }[];
  techStack: string;
  colSpan: string;
  types: PortfolioCategory[];
  actionLabel: string;
  link: string;
}

const projects: GridProject[] = [
  {
    id: 'ora-uk',
    slug: 'oil-recycling-association',
    categoryTag: 'Environmental Compliance & Enterprise Directory',
    categoryColor: '#BAE6FD',
    region: 'UK NATIONAL',
    title: 'Oil Recycling Association (ORA UK)',
    description: 'Architected the official United Kingdom statutory compliance portal and hazardous waste tracking engine. Provides automated verification for certified nationwide collection operators, auditing chains of custody in adherence to DEFRA environmental mandates.',
    statLabel: 'Statutory Compliance Status',
    statValue: '100% Nationwide Audit Cleared',
    statIcon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    techStack: 'Next.js • Cloud Microservices • SQL Registry',
    colSpan: 'md:col-span-7',
    types: ['enterprise', 'web'],
    actionLabel: 'View System Specs',
    link: '/case-study/oil-recycling-association'
  },
  {
    id: 'indemand-tickets',
    slug: 'indemand-tickets',
    categoryTag: 'High-Concurrency Event & Logistics',
    categoryColor: '#C6202E',
    region: 'GLOBAL',
    title: 'Indemand Tickets',
    description: 'Engineered high-throughput queuing architecture and resilient transaction gateways designed to absorb sudden peak stadium ticket dropouts without data collisions or payment timeout stalls.',
    statGrid: [
      { label: 'PEAK CONCURRENCY', value: '25,000+ Req/s' },
      { label: 'CHECKOUT LATENCY', value: '< 320ms', highlight: true }
    ],
    techStack: 'Distributed Redis • Stripe Connect',
    colSpan: 'md:col-span-5',
    types: ['web', 'enterprise'],
    actionLabel: 'View Specs',
    link: '/case-study/indemand-tickets'
  },
  {
    id: 'thryva-care',
    categoryTag: 'Healthcare & Social Impact',
    categoryColor: '#6789ff',
    region: 'GLOBAL',
    title: 'Thryva Care',
    description: 'Digital health monitoring and caregiver coordination platform designed for specialized child welfare support, ensuring clinical record accuracy and continuous family engagement.',
    statLabel: 'Compliance Standard',
    statValue: 'HIPAA & GDPR Compliant',
    techStack: '98.4% Patient Engagement',
    colSpan: 'md:col-span-4',
    types: ['health', 'mobile'],
    actionLabel: 'Explore Platform',
    link: '/case-study/omnia-performance'
  },
  {
    id: 'hearsan',
    categoryTag: 'Audiology & Telehealth',
    categoryColor: '#BAE6FD',
    region: 'INDIA & APAC',
    title: 'HearSan',
    description: 'Connected digital hearing care ecosystem supporting remote acoustic diagnostic tests, specialized calibration algorithms, and encrypted virtual consultations with certified audiologists.',
    statLabel: 'Diagnostic Sync',
    statValue: 'Real-Time Audio Analysis',
    techStack: 'WebRTC • Audio DSP Engines',
    colSpan: 'md:col-span-4',
    types: ['health', 'web'],
    actionLabel: 'Explore Platform',
    link: '/case-study/omnia-performance'
  },
  {
    id: 'insono',
    categoryTag: 'Digital Health Commerce',
    categoryColor: '#c8bfff',
    region: 'PAN-INDIA',
    title: 'Insono Hearing Solution',
    description: 'Pioneering transparent hearing aid marketplace in India. Features bespoke acoustic fit profiling, automated audiogram parsing, and verified clinic appointment dispatching.',
    statLabel: 'Market Footprint',
    statValue: 'Pan-India Clinic Network',
    techStack: 'E-Commerce • Clinic ERP Platform',
    colSpan: 'md:col-span-4',
    types: ['health', 'web', 'enterprise'],
    actionLabel: 'Explore Platform',
    link: '/case-study/omnia-performance'
  }
];

interface PortfolioGridProps {
  activeFilter: PortfolioCategory;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ activeFilter }) => {
  const filteredProjects = projects.filter(
    (p) => activeFilter === 'all' || p.types.includes(activeFilter)
  );

  return (
    <section className="w-full bg-[#0b0e15] py-20 lg:py-28 relative border-t border-white/[0.04]" id="projectsDirectory">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
              02 // ARCHIVE OF SELECTED ENGAGEMENTS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
              High-Precision Engineering Across Critical Sectors.
            </h2>
          </div>
          <p className="font-sans text-[#8892a6] text-base max-w-sm leading-relaxed">
            Verified production platforms built for strict regulatory compliance, extreme concurrency, and frictionless digital health delivery.
          </p>
        </div>

        {/* Asymmetric Grid Showcase */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`${project.colSpan} bg-[#111827] rounded-2xl p-7 sm:p-9 shadow-xl flex flex-col justify-between border border-white/[0.06] hover:border-[#6789ff]/40 transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      style={{ color: project.categoryColor }}
                      className="px-3 py-1 rounded-full bg-[#181b23] border border-white/[0.06] font-mono text-[11px] uppercase tracking-wider font-medium truncate"
                    >
                      {project.categoryTag}
                    </span>
                    <span className="text-[11px] font-mono text-[#8892a6] uppercase tracking-wider flex-shrink-0">
                      {project.region}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl text-white font-semibold group-hover:text-[#b6c4ff] transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-sans text-sm text-[#8892a6] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights or Stats */}
                  {project.statLabel && (
                    <div className="p-4 rounded-xl bg-[#181b23] border border-white/[0.04] flex items-center justify-between mt-2">
                      <div>
                        <p className="text-[10px] font-mono text-[#8892a6] uppercase tracking-wider">
                          {project.statLabel}
                        </p>
                        <p className="text-sm font-bold text-white mt-0.5">
                          {project.statValue}
                        </p>
                      </div>
                      {project.statIcon}
                    </div>
                  )}

                  {project.statGrid && (
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      {project.statGrid.map((stat) => (
                        <div
                          key={stat.label}
                          className="p-3 bg-[#181b23] rounded-xl border border-white/[0.04]"
                        >
                          <span className="text-[10px] text-[#8892a6] font-mono block uppercase">
                            {stat.label}
                          </span>
                          <span
                            className={`text-sm sm:text-base font-bold ${
                              stat.highlight ? 'text-[#BAE6FD]' : 'text-white'
                            }`}
                          >
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6789ff]" />
                    <span className="text-xs font-mono text-[#8892a6]">
                      {project.techStack}
                    </span>
                  </div>

                  <Link
                    to={project.link}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#b6c4ff] hover:text-white transition-colors group-hover:translate-x-1 duration-300 font-semibold"
                  >
                    <span>{project.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
};

export default PortfolioGrid;
