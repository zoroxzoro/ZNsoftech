import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../components/ui/Container';

export type PortfolioCategory = 'all' | 'web' | 'mobile' | 'enterprise' | 'health';

interface FilterOption {
  id: PortfolioCategory;
  label: string;
  count: string;
}

const filterOptions: FilterOption[] = [
  { id: 'all', label: 'All Projects', count: '06' },
  { id: 'web', label: 'Web Applications', count: '03' },
  { id: 'mobile', label: 'Mobile Applications', count: '02' },
  { id: 'enterprise', label: 'Enterprise Solutions', count: '02' },
  { id: 'health', label: 'Health & Logistics', count: '03' }
];

interface PortfolioFilterBarProps {
  activeFilter: PortfolioCategory;
  onFilterChange: (category: PortfolioCategory) => void;
}

export const PortfolioFilterBar: React.FC<PortfolioFilterBarProps> = ({
  activeFilter,
  onFilterChange
}) => {
  return (
    <section className="w-full bg-[#0b0e15] sticky top-20 z-40 border-y border-white/[0.06] shadow-md py-3 backdrop-blur-xl bg-opacity-95">
      <Container>
        <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-0.5">
          {/* Filter Pills */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Portfolio Category Filters">
            {filterOptions.map((opt) => {
              const isActive = activeFilter === opt.id;

              return (
                <button
                  key={opt.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="projectsDirectory"
                  onClick={() => onFilterChange(opt.id)}
                  className={`relative px-4 py-2 rounded-lg font-mono text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6789ff] ${
                    isActive
                      ? 'text-white font-semibold shadow-sm'
                      : 'text-[#8892a6] hover:text-white hover:bg-[#181b23] font-medium'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterBubble"
                      className="absolute inset-0 bg-[#6789ff] rounded-lg -z-10 shadow-[0_0_16px_rgba(103,137,255,0.4)]"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span>{opt.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono transition-colors ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#1d2027] text-[#8892a6]'
                    }`}
                  >
                    {opt.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Metric Tagline Right */}
          <div className="hidden xl:flex items-center gap-2.5 font-mono text-xs text-[#8892A6]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff] animate-pulse" />
            <span className="tracking-wider uppercase">FILTERING AUDITED PRODUCTION DELIVERABLES</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioFilterBar;
