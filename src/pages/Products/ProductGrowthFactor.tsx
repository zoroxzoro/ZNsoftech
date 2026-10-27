import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAPAnimation } from '../../hooks/useGSAPAnimation';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const GROWTHFACTOR_CAPABILITIES = [
  {
    icon: 'filter_alt',
    text: 'Unified Lead Management & Automated Ingestion',
  },
  {
    icon: 'connect_without_contact',
    text: 'Omni-Channel Contact & Account Tracking',
  },
  {
    icon: 'view_kanban',
    text: 'Dynamic Sales Opportunity & Pipeline Stages',
  },
  {
    icon: 'insights',
    text: 'Multi-Touch Commercial Analytics & Forecasting',
  },
  {
    icon: 'dataset',
    text: 'Structured Customer Data Organization',
  },
  {
    icon: 'dashboard',
    text: 'Executive Dashboards & Operational Reporting',
  },
];

export const ProductGrowthFactor: React.FC = () => {
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
        '.gf-label',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          '.gf-title',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          '.gf-desc',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          '.gf-mockup-frame',
          { opacity: 0, scale: 1.04 },
          { opacity: 1, scale: 1, duration: 0.85 },
          '-=0.5'
        )
        .fromTo(
          '.gf-item',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.06 },
          '-=0.4'
        );
    },
    [prefersReduced]
  );

  return (
    <section
      ref={sectionRef}
      id="growthfactor"
      className="w-full bg-[#F8F9FC] text-slate-900 py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-slate-200"
    >
      <div className="max-w-[1360px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-3xl">
          <span className="gf-label font-mono text-label-mono-tag text-blue-700 tracking-widest uppercase font-bold">
            04 // ENTERPRISE SALES ACCELERATION
          </span>
          <h2 className="gf-title font-headline-xl text-3xl sm:text-4xl md:text-5xl text-slate-900 font-bold tracking-tight">
            GrowthFactor CRM
          </h2>
          <p className="gf-desc font-headline-md text-xl sm:text-2xl text-blue-700 font-medium">
            Intelligent Lead Tracking, Deal Pipelines & Commercial Visibility
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Sales Pipeline Board Mockup */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="gf-mockup-frame bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-200/90 flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 bg-slate-50 px-4 py-2.5 rounded-lg border border-slate-200/70">
                <span className="font-mono text-xs font-semibold text-slate-900">
                  GROWTHFACTOR // COMMERCIAL_PIPELINE
                </span>
                <span className="font-mono text-[11px] text-blue-700 font-semibold">
                  Q3 REVENUE TARGET: 94% REACHED
                </span>
              </div>

              {/* Pipeline Kanban Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Column 1: Discovery */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70 flex flex-col gap-2.5">
                  <div className="flex justify-between items-center text-slate-500 font-mono text-[11px]">
                    <span>DISCOVERY (6)</span>
                    <span className="font-bold text-slate-900">$420K</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/70 text-xs">
                    <span className="font-mono text-[10px] text-blue-700 block font-semibold uppercase">
                      ENTERPRISE LOGISTICS
                    </span>
                    <p className="font-semibold text-slate-900 mt-1 text-sm">Omega Rail Corp</p>
                    <span className="text-slate-500 mt-0.5 block">$120k ARR • Stage 1</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/70 text-xs">
                    <span className="font-mono text-[10px] text-blue-700 block font-semibold uppercase">
                      GLOBAL HEALTH
                    </span>
                    <p className="font-semibold text-slate-900 mt-1 text-sm">Apex Gym Network</p>
                    <span className="text-slate-500 mt-0.5 block">$85k ARR • Demo Booked</span>
                  </div>
                </div>

                {/* Column 2: Negotiation / Proposal */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70 flex flex-col gap-2.5">
                  <div className="flex justify-between items-center text-slate-500 font-mono text-[11px]">
                    <span>PROPOSAL (4)</span>
                    <span className="font-bold text-slate-900">$890K</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/70 border-l-4 border-l-blue-600 text-xs">
                    <span className="font-mono text-[10px] text-emerald-600 block font-semibold uppercase">
                      90% PROBABILITY
                    </span>
                    <p className="font-semibold text-slate-900 mt-1 text-sm">Stratus Cloud PLC</p>
                    <span className="text-slate-500 mt-0.5 block">$340k ARR • Legal Review</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/70 text-xs">
                    <span className="font-mono text-[10px] text-blue-700 block font-semibold uppercase">
                      SPORTS LEAGUE
                    </span>
                    <p className="font-semibold text-slate-900 mt-1 text-sm">Celtic Athletic Trust</p>
                    <span className="text-slate-500 mt-0.5 block">$195k ARR • Master Contract</span>
                  </div>
                </div>

                {/* Column 3: Closed Won */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70 flex flex-col gap-2.5">
                  <div className="flex justify-between items-center text-slate-500 font-mono text-[11px]">
                    <span>CLOSED WON (18)</span>
                    <span className="font-bold text-emerald-600">$2.1M</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/70 border-l-4 border-l-emerald-500 text-xs">
                    <span className="font-mono text-[10px] text-emerald-600 block font-semibold uppercase">
                      EXECUTED TODAY
                    </span>
                    <p className="font-semibold text-slate-900 mt-1 text-sm">Vanguard Facilities</p>
                    <span className="text-emerald-700 font-semibold mt-0.5 block">
                      +$240,000 Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Revenue Velocity Metric Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-slate-500 uppercase">
                      SALES CYCLE VELOCITY
                    </span>
                    <p className="font-headline-sm text-xl text-slate-900 font-bold mt-0.5">
                      28.4 Days
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-blue-700 text-[28px]">
                    speed
                  </span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-slate-500 uppercase">
                      LEAD-TO-DEAL CONVERSION
                    </span>
                    <p className="font-headline-sm text-xl text-emerald-600 font-bold mt-0.5">
                      34.2%
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-emerald-600 text-[28px]">
                    trending_up
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Capabilities Breakdown */}
          <div className="lg:col-span-5 flex flex-col gap-6 order-1 lg:order-2">
            <p className="font-body-md text-body-md text-slate-600 leading-relaxed">
              Eliminates spreadsheet ambiguity and disconnected sales communications with a structured revenue acceleration platform built for high-growth commercial teams.
            </p>

            <div className="grid grid-cols-1 gap-2.5 pt-1">
              {GROWTHFACTOR_CAPABILITIES.map((cap) => (
                <div
                  key={cap.text}
                  className="gf-item flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-200/80"
                >
                  <span className="material-symbols-outlined text-blue-700 text-[20px] shrink-0">
                    {cap.icon}
                  </span>
                  <span className="font-body-md text-sm text-slate-900 font-medium">
                    {cap.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-11 px-7 bg-blue-700 text-white font-label-lg text-label-lg font-semibold rounded-lg hover:bg-blue-800 active:scale-95 transition-all duration-300 shadow-md"
              >
                Explore GrowthFactor CRM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrowthFactor;
