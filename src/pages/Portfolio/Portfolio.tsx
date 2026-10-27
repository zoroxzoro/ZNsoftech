import React, { useState, useEffect } from 'react';
import PortfolioHero from './PortfolioHero';
import PortfolioFilterBar, { type PortfolioCategory } from './PortfolioFilterBar';
import PortfolioFlagshipHero from './PortfolioFlagshipHero';
import PortfolioGrid from './PortfolioGrid';
import PortfolioPhilosophy from './PortfolioPhilosophy';
import PortfolioCapabilities from './PortfolioCapabilities';
import PortfolioTestimonials from './PortfolioTestimonials';
import PortfolioCTA from './PortfolioCTA';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('all');

  useEffect(() => {
    document.title = 'Selected Work & Portfolio // ZNSoftech — Enterprise Digital Systems';
    window.scrollTo(0, 0);
  }, []);

  const showFlagship = activeFilter === 'all' || activeFilter === 'web' || activeFilter === 'mobile' || activeFilter === 'health';

  return (
    <div className="w-full bg-[#10131b] text-[#e0e2ed] flex flex-col min-h-screen">
      {/* 1. Hero Section (Warm Editorial Canvas with Dimensional Telemetry Card) */}
      <PortfolioHero />

      {/* 2. Interactive Category Filter Bar */}
      <PortfolioFilterBar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* 3. Section 01: Flagship Hero Showcase (Omnia Performance) */}
      <PortfolioFlagshipHero isVisible={showFlagship} />

      {/* 4. Section 02: Asymmetric Editorial Project Directory */}
      <PortfolioGrid activeFilter={activeFilter} />

      {/* 5. Section 03: Engineering Philosophy — Beyond the Interface */}
      <PortfolioPhilosophy />

      {/* 6. Section 04: Production Technical Capabilities Matrix */}
      <PortfolioCapabilities />

      {/* 7. Section 05: Client Trust & Verified Testimonials */}
      <PortfolioTestimonials />

      {/* 8. Section 06: Final High-Impact Conversion CTA */}
      <PortfolioCTA />
    </div>
  );
};

export default Portfolio;
