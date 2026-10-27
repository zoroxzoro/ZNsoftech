import React from 'react';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { FadeIn } from '../../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/motion/StaggerContainer';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  avatarColor: string;
  starColor: string;
  hoverBorder: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      '“ZNSoftech is our preferred technical partner for application development for managing our complex pipe rehabilitation project. The team completely demonstrated high technical competency along with strong professional ethics.”',
    name: 'Nafis A. Farooqi',
    role: 'Managing Director, Shartya Geosciences Pipe Systems Ltd.',
    initials: 'NF',
    avatarBg: 'bg-primary-container',
    avatarColor: 'text-on-primary-container',
    starColor: 'text-primary',
    hoverBorder: 'hover:border-primary/30',
  },
  {
    quote:
      '“ZNSoftech exemplified remarkable technical prowess and ethical standards. Best wishes for their future endeavors; looking forward to a lasting partnership.”',
    name: 'Vijay Ranjan',
    role: 'Director, Boku Directory',
    initials: 'VR',
    avatarBg: 'bg-secondary-container',
    avatarColor: 'text-on-secondary',
    starColor: 'text-secondary',
    hoverBorder: 'hover:border-secondary/30',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials-section" className="w-full bg-surface-container text-on-surface py-16 sm:py-20">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-12 sm:gap-16">
        <FadeIn direction="up" distance={20}>
          <SectionHeading
            theme="dark"
            eyebrow="VERIFIED CLIENT TESTIMONIALS"
            title="What Our Clients Say."
            description="Hear from satisfied enterprise leaders who trust ZNSoftech to deliver reliable solutions and exceptional execution."
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.12}>
          {testimonials.map((t, idx) => (
            <StaggerItem key={idx}>
              <div
                className={`h-full p-8 sm:p-10 bg-surface-container-high rounded-2xl flex flex-col justify-between gap-8 shadow-md border border-outline-variant/20 ${t.hoverBorder} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex flex-col gap-4">
                  <div className={`flex items-center gap-1 ${t.starColor}`}>
                    {[...Array(5)].map((_, sIdx) => (
                      <span
                        key={sIdx}
                        className="material-symbols-outlined text-[20px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-body-lg text-body-lg text-on-surface italic leading-relaxed">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-2 border-t border-outline-variant/20">
                  <div
                    className={`w-12 h-12 rounded-full ${t.avatarBg} ${t.avatarColor} font-headline-sm font-bold flex items-center justify-center shadow-sm shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                      {t.name}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
