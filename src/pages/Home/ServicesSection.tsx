import React from 'react';
import { servicesData } from '../../data/services';
import { ServiceCard } from '../../components/ui/ServiceCard';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { FadeIn } from '../../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/motion/StaggerContainer';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services-section" className="w-full bg-surface-light text-text-light-primary py-16 sm:py-20">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-12 sm:gap-16">
        <FadeIn direction="up" distance={20}>
          <SectionHeading
            align="split"
            theme="light"
            eyebrow="FULL-LIFECYCLE ENGINEERING & AI"
            title="Technology That Solves Real Business Challenges."
            description="From self-governing artificial intelligence to bulletproof enterprise platforms, engineered for immediate operational impact."
          />
        </FadeIn>

        {/* Editorial Numbered Rows */}
        <StaggerContainer className="flex flex-col gap-3 sm:gap-4" staggerDelay={0.08}>
          {servicesData.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
