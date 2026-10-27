import React from 'react';
import { AboutHero } from './AboutHero';
import { CompanyIntro } from './CompanyIntro';
import { CorePillars } from './CorePillars';
import { CompanyStats } from './CompanyStats';
import { MissionVision } from './MissionVision';
import { DeliveryProcess } from './DeliveryProcess';
import { AwardsSection } from './AwardsSection';
import { GlobalPresence } from './GlobalPresence';
import { CompanyCulture } from './CompanyCulture';
import { CareersCTA } from './CareersCTA';
import { AboutContactCTA } from './AboutContactCTA';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <CompanyIntro />
      <CorePillars />
      <CompanyStats />
      <MissionVision />
      <DeliveryProcess />
      <AwardsSection />
      <GlobalPresence />
      <CompanyCulture />
      <CareersCTA />
      <AboutContactCTA />
    </div>
  );
};

export default About;
