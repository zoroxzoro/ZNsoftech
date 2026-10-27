import React, { useEffect } from 'react';
import { HeroSection } from './HeroSection';
import { TrustMetricsSection } from './TrustMetricsSection';
import { AboutSection } from './AboutSection';
import { ServicesSection } from './ServicesSection';
import { ProjectsSection } from './ProjectsSection';
import { IndustriesSection } from './IndustriesSection';
import { ProcessSection } from './ProcessSection';
import { TestimonialsSection } from './TestimonialsSection';
import { ContactSection } from './ContactSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'ZNSoftech | Enterprise Digital Solutions & Agentic AI Systems';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <TrustMetricsSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <IndustriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
