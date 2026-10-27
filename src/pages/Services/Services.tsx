import { useEffect } from 'react';
import { ServicesHero } from './ServicesHero';
import { ServicesDirectory } from './ServicesDirectory';
import { CapabilityDeepDive } from './CapabilityDeepDive';
import { BusinessChallenges } from './BusinessChallenges';
import { ServicesIndustries } from './ServicesIndustries';
import ServicesTimeline from './ServicesTimeline';
import ServicesShowcase from './ServicesShowcase';
import WhyPartnerSection from './WhyPartnerSection';
import ServicesFAQ from './ServicesFAQ';
import ServicesContactSection from './ServicesContactSection';

export default function Services() {
  useEffect(() => {
    document.title = 'Services & Solutions // ZNSoftech — Enterprise Digital Engineering';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#10131b] text-[#e0e2ed] flex flex-col min-h-screen">
      {/* 1. Hero Section with Live Kinetic Telemetry Grid */}
      <ServicesHero />

      {/* 2. Interactive Service Directory (7 Editorial Rows) */}
      <ServicesDirectory />

      {/* 3. Capability Deep Dive (Autonomous AI Systems) */}
      <CapabilityDeepDive />

      {/* 4. Strategic Fit (5 Business Challenges Solved) */}
      <BusinessChallenges />

      {/* 5. Domain Specialization (Industries Showcase) */}
      <ServicesIndustries />

      {/* 6. Methodical Sprints (5-Stage Engineering Timeline) */}
      <ServicesTimeline />

      {/* 7. Proven Production (Enterprise Case Studies) */}
      <ServicesShowcase />

      {/* 8. The ZNSoftech Difference (4 Trust Pillars) */}
      <WhyPartnerSection />

      {/* 9. Transparency FAQ (Interactive Accordion) */}
      <ServicesFAQ />

      {/* 10. Final Conversion Inquiry Section */}
      <ServicesContactSection />
    </div>
  );
}
