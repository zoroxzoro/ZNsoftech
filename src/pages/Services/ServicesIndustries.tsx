import React from 'react';
import { FadeIn } from '../../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/motion/StaggerContainer';

export const ServicesIndustries: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-16 lg:py-24 bg-surface relative" id="industries">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Section Title */}
        <FadeIn direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
                04 // DOMAIN SPECIALIZATION
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight">
                Engineering Impact Across Crucial Sectors.
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm leading-relaxed">
              Deep industry-specific telemetry models and domain compliance rules configured right
              into the architecture.
            </p>
          </div>
        </FadeIn>

        {/* Industry Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.08}>
          {/* 1. Transport & Logistics */}
          <StaggerItem>
            <div className="portfolio-card-item bg-surface-container rounded-xl overflow-hidden shadow-lg flex flex-col h-full border border-outline-variant/20 hover:border-primary/40 group">
              <div
                className="h-48 w-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSslKyboj6bmXSmbRfarfi6PP3AGi3Dt2eOS5VmsPdC5G-DqVgUCT8t2xM5lzwziFNBeMVq6mxFqe6EAdoLNOc5UA-MtIO8lrcE7L95hHIsb-grrniWomU5DZ7TW967QHweH-PN9mn5uuz--E3aNXGm0FTyvw_Xjo_1rf1Z1YW9X_m6KkcqL_0DyotNDeCA6FiekZHJUJF6TmEfnysmeBGwWM9VrMqUXuuUcdoPrmD58DdYsZWIYTlwQ')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-surface/80 backdrop-blur font-label-mono-tag text-label-mono-tag text-primary font-bold">
                  LOGISTICS & SUPPLY
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                    Transport & Logistics
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    Supply chain route optimization, fleet telematics tracking, and automated
                    international freight forwarding platforms.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-outline-variant/15">
                  <span className="px-2.5 py-1 rounded bg-surface-container-highest text-primary font-label-mono-tag text-label-mono-tag">
                    Fleet Telematics
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-highest text-primary font-label-mono-tag text-label-mono-tag">
                    Automated Dispatch
                  </span>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* 2. Event Technology */}
          <StaggerItem>
            <div className="portfolio-card-item bg-surface-container rounded-xl overflow-hidden shadow-lg flex flex-col h-full border border-outline-variant/20 hover:border-primary/40 group">
              <div
                className="h-48 w-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBofAaXFEx7L6-mau8Q7ENOc6Lgq4VyYovxayXiixGIjYoiPod5VXO23wXbZd5PWcqk7EdgikuVTltbqoK4QAgiLOdmaSicVhctb_igsgFVj6m63el4c8a12P9DGBC3Sc01Jf2Xaflj4AwefkUUaT28hyrRSbud5Tfcm90-pJpvEAMKgWy33SjFMvf0WXBKS67k-kENUjDd6pDWFtdkt55cno_5TnvpzFlo-MUVdsa8nh2mLdWdy7boVg')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-surface/80 backdrop-blur font-label-mono-tag text-label-mono-tag text-primary font-bold">
                  EVENT INFRASTRUCTURE
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                    Event Technology
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    High-concurrency global ticketing engines, interactive seat mapping, and
                    real-time attendee engagement apps.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-outline-variant/15">
                  <span className="px-2.5 py-1 rounded bg-surface-container-highest text-primary font-label-mono-tag text-label-mono-tag">
                    100k+ Concurrency
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-highest text-primary font-label-mono-tag text-label-mono-tag">
                    Seat Allocation Engine
                  </span>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* 3. Health & Fitness */}
          <StaggerItem>
            <div className="portfolio-card-item bg-surface-container rounded-xl overflow-hidden shadow-lg flex flex-col h-full border border-outline-variant/20 hover:border-primary/40 group">
              <div
                className="h-48 w-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCMHI9mbacxt8FqM62uDki7GD8h489rQ2M9BWeh-3BxvpcYlgIAAjgjCQ_d4C4r3mzQl17o7dx_IhdYFIcBpzjs6G_DwtIi3dik-VBuq4D5a3F5EWgGsIS5m1EXMiAYym5OGFBorLi7S7G-MQsQm3yfY9xJEVTZ2GGzFEMXIcO6nGrZkuIESj0HH7MDCmrl1z-GdHjk_uRRHIMM1B3P5FDJgYA2EkJ4Ty2fsd93z1yagz_dFkleNXAIbg')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-surface/80 backdrop-blur font-label-mono-tag text-label-mono-tag text-primary font-bold">
                  HEALTHCARE & ATHLETICS
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                    Health & Fitness
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    Adaptive fitness algorithms, real-time athlete telemetry dashboards, and
                    virtual coaching ecosystems for hybrid performers.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-outline-variant/15">
                  <span className="px-2.5 py-1 rounded bg-surface-container-highest text-primary font-label-mono-tag text-label-mono-tag">
                    Biometric Streams
                  </span>
                  <span className="px-2.5 py-1 rounded bg-surface-container-highest text-primary font-label-mono-tag text-label-mono-tag">
                    Adaptive Coaching AI
                  </span>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* 4. Waste Management & Environmental */}
          <StaggerItem>
            <div className="portfolio-card-item bg-surface-container rounded-xl overflow-hidden shadow-lg flex flex-col h-full border border-outline-variant/20 hover:border-primary/40">
              <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                <div className="flex flex-col gap-2">
                  <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase font-bold">
                    REGULATORY COMPLIANCE
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                    Waste Management & Environmental
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Supporting circular economy compliance, hazardous material lifecycle auditing,
                    and UK government environmental certifications.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between border-t border-outline-variant/15">
                  <span className="text-body-sm font-body-sm text-outline font-medium">
                    ORA UK Platform Partner
                  </span>
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    recycling
                  </span>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* 5. Manufacturing & Industrial Operations (Spans 2 cols on lg) */}
          <StaggerItem className="lg:col-span-2">
            <div className="portfolio-card-item bg-surface-container rounded-xl overflow-hidden shadow-lg flex flex-col h-full border border-outline-variant/20 hover:border-primary/40">
              <div className="p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 flex-1">
                <div className="flex flex-col gap-2 max-w-xl">
                  <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase font-bold">
                    INDUSTRIAL IOT & AUTOMATION
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                    Manufacturing & Industrial Operations
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Connect production line sensors, automate visual quality assurance routines with
                    computer vision, and deploy predictive maintenance models before hardware
                    failures occur.
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-start sm:items-end shrink-0">
                  <span className="font-headline-lg text-headline-lg font-bold text-primary">
                    99.4%
                  </span>
                  <span className="font-label-mono-tag text-label-mono-tag text-on-surface uppercase font-medium">
                    Anomaly Detection Rate
                  </span>
                  <a
                    className="mt-2 inline-flex items-center gap-1 font-label-lg text-label-lg text-primary hover:underline font-semibold"
                    href="#contact-inquiry"
                  >
                    <span>View Industrial Spec</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
