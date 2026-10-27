import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCaseStudyBySlug } from '../../data/caseStudies';
import CaseStudyHero from './CaseStudyHero';
import ProjectAtAGlance from './ProjectAtAGlance';
import CaseStudyChallenge from './CaseStudyChallenge';
import CaseStudySolution from './CaseStudySolution';
import CaseStudyExperience from './CaseStudyExperience';
import CaseStudyArchitecture from './CaseStudyArchitecture';
import CaseStudyResults from './CaseStudyResults';
import CaseStudyReflection from './CaseStudyReflection';
import CaseStudyNextProject from './CaseStudyNextProject';
import CaseStudyCTA from './CaseStudyCTA';
import CaseStudyNotFound from './CaseStudyNotFound';
import ProjectImageReveal from '../../components/motion/ProjectImageReveal';
import { Container } from '../../components/ui/Container';

export const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const currentSlug = slug || 'omnia-performance';
  const data = getCaseStudyBySlug(currentSlug);

  useEffect(() => {
    if (data) {
      document.title = `${data.title} // Case Study // ZNSoftech — Enterprise Engineering`;
    } else {
      document.title = 'Case Study Not Found // ZNSoftech';
    }
    window.scrollTo(0, 0);
  }, [data, currentSlug]);

  if (!data) {
    return <CaseStudyNotFound slug={slug} />;
  }

  return (
    <div className="w-full bg-[#10131b] text-[#e0e2ed] flex flex-col min-h-screen">
      {/* 1. Hero Section (Breadcrumb, Title, Live Telemetry Feed) */}
      <CaseStudyHero data={data} />

      {/* 2. Full-Width Visual Showcase with Clip-Path Reveal */}
      <section className="w-full bg-[#0b0e15] py-12 sm:py-16 relative border-b border-white/[0.04]">
        <Container>
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/[0.08]">
            <ProjectImageReveal
              src={data.heroImage}
              alt={data.heroImageAlt}
              aspectRatio="aspect-[16/9] sm:aspect-[21/9]"
              containerClassName="w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10131b]/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </Container>
      </section>

      {/* 3. The Project at a Glance (Architectural Off-White Palette) */}
      <ProjectAtAGlance glance={data.glance} />

      {/* 4. Section 01: The Challenge */}
      <CaseStudyChallenge challenges={data.challenges} />

      {/* 5. Section 02: The Solution */}
      <CaseStudySolution solutions={data.solutions} />

      {/* 6. Product Experience & Interface Ergonomics */}
      <CaseStudyExperience />

      {/* 7. Key System Strengths & Technical Architecture */}
      <CaseStudyArchitecture
        highlights={data.highlights}
        architecture={data.architecture}
      />

      {/* 8. The Measurable Impact & Verified Outcomes */}
      <CaseStudyResults results={data.results} />

      {/* 9. Client Endorsement & Partnership Reflection */}
      <CaseStudyReflection testimonial={data.testimonial} />

      {/* 10. Next Verified Engagement Teaser */}
      <CaseStudyNextProject nextProject={data.nextProject} />

      {/* 11. Final Closing Collaboration Banner */}
      <CaseStudyCTA />
    </div>
  );
};

export default CaseStudy;
