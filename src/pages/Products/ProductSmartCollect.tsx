import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAPAnimation } from '../../hooks/useGSAPAnimation';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const SMART_COLLECT_FEATURES = [
  'Dynamic Job Scheduling & Route Allocation',
  'Driver & Vehicle Safety Checklists with Defect Reporting',
  'Mileage Tracking & Live Telemetry Engine',
  'Real-Time Monitoring & Google Maps Navigation',
  'Zone Mapping & Customer Account Portals',
  'Statutory Compliance Documents & Automated Invoicing',
  'Digital Signatures & Delivery Auditing',
  'Comprehensive Operational Reporting & Analytics',
];

export const ProductSmartCollect: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useGSAPAnimation(
    (_ctx, target) => {
      if (prefersReduced || !target) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: target,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        '.sc-label',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          '.sc-title',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          '.sc-desc',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          '.sc-feature-item',
          { opacity: 0, x: -15 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.06 },
          '-=0.3'
        )
        .fromTo(
          '.sc-mockup-frame',
          { opacity: 0, scale: 1.04 },
          { opacity: 1, scale: 1, duration: 0.85, ease: 'power3.out' },
          '-=0.6'
        );
    },
    [prefersReduced]
  );

  return (
    <section
      ref={sectionRef}
      id="smart-collect"
      className="w-full bg-surface-container-lowest text-on-surface py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 relative border-b border-outline-variant/20"
    >
      <div className="max-w-[1360px] mx-auto flex flex-col gap-10">
        {/* Headline & Subtitle Banner */}
        <div className="flex flex-col gap-2 max-w-3xl">
          <span className="sc-label font-mono text-label-mono-tag text-primary tracking-widest uppercase font-semibold">
            01 // MOBILE WORKFORCE & LOGISTICS
          </span>
          <h2 className="sc-title font-headline-xl text-3xl sm:text-4xl md:text-5xl text-on-surface font-bold tracking-tight">
            Smart Collect
          </h2>
          <p className="sc-desc font-headline-md text-xl sm:text-2xl text-primary font-medium">
            End-to-End Waste Collection, Vehicle Inspections & Field Service Logistics
          </p>
        </div>

        {/* Content Split: Capabilities & High-Fidelity UI Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Capabilities Checklist */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <p className="font-body-md text-body-md text-text-muted leading-relaxed">
              Engineered for high-volume commercial waste operators, council fleet divisions, and multi-region logistics operators requiring deterministic statutory compliance and dynamic route navigation.
            </p>

            <div className="grid grid-cols-1 gap-2.5 pt-1">
              {SMART_COLLECT_FEATURES.map((feature) => (
                <div
                  key={feature}
                  className="sc-feature-item flex items-center gap-3 bg-surface-container/40 p-3 rounded-lg border border-outline-variant/15"
                >
                  <span
                    className="material-symbols-outlined text-emerald-400 text-[20px] shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="font-body-md text-sm text-on-surface font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#smart-collect"
                className="inline-flex items-center justify-center h-11 px-6 bg-primary-container text-on-primary-container font-label-lg text-label-lg font-semibold rounded-lg hover:bg-primary hover:text-on-primary active:scale-95 transition-all duration-300 shadow-md shadow-primary-container/20"
              >
                Explore Smart Collect
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-11 px-6 bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold rounded-lg hover:bg-surface-container-high border border-outline-variant/30 active:scale-95 transition-all duration-300"
              >
                Request Operational Demo
              </Link>
            </div>
          </div>

          {/* Right: High-Fidelity Conceptual Interface Canvas */}
          <div className="lg:col-span-7">
            <div className="sc-mockup-frame bg-surface-dark rounded-2xl p-4 sm:p-6 shadow-2xl border border-outline-variant/30 relative overflow-hidden">
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-3 bg-surface-container-low px-4 py-2.5 rounded-t-lg border-b border-outline-variant/20">
                <span className="font-mono text-label-mono-tag text-text-muted">
                  SMART_COLLECT_OS // FLEET_DISPATCH_CONSOLE
                </span>
                <span className="font-mono text-[11px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded font-semibold border border-emerald-400/20">
                  ALL DRIVERS SYNCED
                </span>
              </div>

              {/* Conceptual Fleet Map & Telemetry Dashboard Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-3">
                {/* Left Map & Manifest Pane */}
                <div className="md:col-span-8 flex flex-col gap-3">
                  {/* Fleet Route Card */}
                  <div className="bg-surface-container-low rounded-xl p-4 relative min-h-[220px] overflow-hidden flex flex-col justify-between border border-outline-variant/20">
                    <div className="absolute inset-0 opacity-25 pointer-events-none">
                      {/* Subtle SVG Route Grid Lines */}
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <line
                          className="text-primary"
                          stroke="currentColor"
                          strokeDasharray="4"
                          strokeWidth="2"
                          x1="20"
                          x2="280"
                          y1="40"
                          y2="90"
                        />
                        <line
                          className="text-primary"
                          stroke="currentColor"
                          strokeDasharray="4"
                          strokeWidth="2"
                          x1="280"
                          x2="380"
                          y1="90"
                          y2="180"
                        />
                        <circle cx="20" cy="40" fill="#527BFF" r="5" />
                        <circle cx="280" cy="90" fill="#527BFF" r="5" />
                        <circle cx="380" cy="180" fill="#10B981" r="5" />
                      </svg>
                    </div>

                    <div className="flex justify-between items-start z-10">
                      <div>
                        <span className="font-mono text-[10px] text-text-muted uppercase">
                          ACTIVE VECTOR // UK NORTH
                        </span>
                        <h4 className="font-headline-sm text-base sm:text-lg text-on-surface font-semibold">
                          Run #SC-4402: Merseyside Commercial
                        </h4>
                      </div>
                      <span className="bg-primary-container/20 text-primary font-mono text-xs px-2 py-1 rounded border border-primary/30">
                        ON SCHEDULE
                      </span>
                    </div>

                    <div className="z-10 grid grid-cols-3 gap-2 bg-surface-dark-elevated/90 backdrop-blur p-2.5 rounded-lg border border-outline-variant/20">
                      <div>
                        <span className="font-mono text-[10px] text-text-muted block">COMPLETED</span>
                        <span className="font-label-lg text-sm text-on-surface font-bold">14 / 18 Jobs</span>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-text-muted block">DISTANCE</span>
                        <span className="font-label-lg text-sm text-on-surface font-bold">84.2 km</span>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-text-muted block">AUDIT PROOF</span>
                        <span className="font-label-lg text-sm text-emerald-400 font-bold">14 Signs</span>
                      </div>
                    </div>
                  </div>

                  {/* Driver Job Rows */}
                  <div className="bg-surface-container-low rounded-xl p-3 flex flex-col gap-2 border border-outline-variant/20">
                    <div className="flex items-center justify-between text-body-sm text-on-surface bg-surface-dark-elevated p-2.5 rounded-lg border border-outline-variant/20">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-emerald-400 text-[18px]">
                          verified
                        </span>
                        <span className="font-medium text-xs sm:text-sm">
                          Unit 04: Keckwick Lane Chemical Disposal
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-text-muted shrink-0">
                        10:42 AM • SIGNED
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-body-sm text-on-surface bg-surface-dark-elevated p-2.5 rounded-lg border border-outline-variant/20">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          navigation
                        </span>
                        <span className="font-medium text-xs sm:text-sm">
                          Unit 05: Sci-Tech Daresbury Tech Pod
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-primary shrink-0 font-medium">
                        EN ROUTE • 4 MIN
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Telemetry & Inspection Sidebar */}
                <div className="md:col-span-4 flex flex-col gap-3">
                  {/* Vehicle Defect Checklist Panel */}
                  <div className="bg-surface-container-low rounded-xl p-3.5 flex flex-col gap-2 border border-outline-variant/20">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-text-muted uppercase">
                        PRE-TRIP DEFECT AUDIT
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-emerald-400">
                        task_alt
                      </span>
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between text-text-muted">
                        <span>Brakes & Hydraulics</span>
                        <span className="text-emerald-400 font-semibold font-mono">PASS</span>
                      </div>
                      <div className="flex justify-between text-text-muted">
                        <span>Tire Pressure & Tread</span>
                        <span className="text-emerald-400 font-semibold font-mono">PASS</span>
                      </div>
                      <div className="flex justify-between text-text-muted">
                        <span>Tachograph Calibration</span>
                        <span className="text-emerald-400 font-semibold font-mono">VERIFIED</span>
                      </div>
                      <div className="flex justify-between text-text-muted">
                        <span>Waste Consignment Note</span>
                        <span className="text-emerald-400 font-semibold font-mono">LOCKED</span>
                      </div>
                    </div>
                  </div>

                  {/* Driver Telemetry Progress */}
                  <div className="bg-surface-container-low rounded-xl p-3.5 flex flex-col justify-between border border-outline-variant/20">
                    <span className="font-mono text-[11px] text-text-muted uppercase">
                      DISPATCH SATISFACTION
                    </span>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="font-headline-lg text-xl sm:text-2xl text-on-surface font-bold">
                        99.4%
                      </span>
                      <span className="text-emerald-400 font-mono text-[11px]">↑ +1.2%</span>
                    </div>
                    <p className="font-body-sm text-[12px] text-text-muted mt-1 leading-snug">
                      Zero statutory infractions across 1,480 recorded collections this cycle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSmartCollect;
