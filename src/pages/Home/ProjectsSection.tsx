import React from 'react';
import { projectsData } from '../../data/projects';
import { ProjectCard } from '../../components/ui/ProjectCard';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { FadeIn } from '../../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/motion/StaggerContainer';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="portfolio-section" className="w-full bg-canvas-light text-text-light-primary py-16 sm:py-20">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-12 sm:gap-16">
        <FadeIn direction="up" distance={20}>
          <SectionHeading
            theme="light"
            eyebrow="REAL-WORLD IMPLEMENTATIONS"
            title="Our Finest Work — Crafted with Innovation and Precision."
          />
        </FadeIn>

        {/* Asymmetric Editorial Showcase Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.1}>
          {projectsData.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
