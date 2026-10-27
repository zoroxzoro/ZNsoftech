import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAPAnimation } from '../../hooks/useGSAPAnimation';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const FITNESS_CAPABILITIES = [
  {
    title: 'Complete Brand Customization & White-Labeling',
    desc: "Deploy under your studio's custom domain with custom mobile aesthetics.",
  },
  {
    title: 'Custom Studio Website Integration',
    desc: 'Instant conversion widgets, timetable embeds, and digital lead signups.',
  },
  {
    title: 'Tiered Payment-Plan & Recurring Billing',
    desc: 'Automated card debits, failed payment retry logic, and zero invoice chasing.',
  },
  {
    title: 'Structured Workout-Regimen & Scheduling',
    desc: 'Deliver customized programming and track progression inside client accounts.',
  },
  {
    title: 'Centralized Member Records & Attendance',
    desc: 'Automated check-ins, medical note storage, and retention risk tracking.',
  },
];

export const ProductFitnessCRM: React.FC = () => {
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
        '.fit-label',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          '.fit-title',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          '.fit-desc',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          '.fit-mockup-frame',
          { opacity: 0, scale: 1.04 },
          { opacity: 1, scale: 1, duration: 0.85 },
          '-=0.5'
        )
        .fromTo(
          '.fit-capability-card',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          '-=0.5'
        );
    },
    [prefersReduced]
  );

  return (
    <section
      ref={sectionRef}
      id="fitness-crm"
      className="w-full bg-[#F8F9FC] text-slate-900 py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-slate-200"
    >
      <div className="max-w-[1360px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-3xl">
          <span className="fit-label font-mono text-label-mono-tag text-blue-700 tracking-widest uppercase font-bold">
            02 // HEALTH & WELLNESS INFRASTRUCTURE
          </span>
          <h2 className="fit-title font-headline-xl text-3xl sm:text-4xl md:text-5xl text-slate-900 font-bold tracking-tight">
            Firebird Fitness CRM
          </h2>
          <p className="fit-desc font-headline-md text-xl sm:text-2xl text-blue-700 font-medium">
            Centralized Business Operations & Member Regimens for Modern Studios
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Studio Interface Mockup */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="fit-mockup-frame bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-200/90 flex flex-col gap-5">
              {/* Sub-Header Status */}
              <div className="flex items-center justify-between pb-3 bg-slate-50 px-4 py-2.5 rounded-lg border border-slate-200/70">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span className="font-mono text-xs font-semibold text-slate-900">
                    FIREBIRD_STUDIO // ATHLETIC_PORTAL
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate-500 font-semibold">
                  WHITE-LABEL TENANT #881
                </span>
              </div>

              {/* Calendar & Regimen Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 flex flex-col justify-between">
                  <span className="font-mono text-[10px] text-slate-500 uppercase">ACTIVE MEMBERS</span>
                  <span className="font-headline-md text-2xl text-slate-900 font-bold my-1">
                    1,840
                  </span>
                  <span className="font-body-sm text-xs text-emerald-600 font-semibold">
                    94% Retention Rate
                  </span>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 flex flex-col justify-between">
                  <span className="font-mono text-[10px] text-slate-500 uppercase">RECURRING REVENUE</span>
                  <span className="font-headline-md text-2xl text-slate-900 font-bold my-1">
                    £52,480
                  </span>
                  <span className="font-body-sm text-xs text-slate-500">
                    Auto-Debited Monthly
                  </span>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 flex flex-col justify-between">
                  <span className="font-mono text-[10px] text-slate-500 uppercase">CLASS CAPACITY</span>
                  <span className="font-headline-md text-2xl text-slate-900 font-bold my-1">
                    96.8%
                  </span>
                  <span className="font-body-sm text-xs text-blue-700 font-semibold">
                    Waitlist Activated
                  </span>
                </div>
              </div>

              {/* Class Schedule & Regimen Plan Card */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="font-label-lg text-sm font-semibold text-slate-900">
                    Live Daily Schedule & Trainer Roster
                  </span>
                  <span className="font-mono text-xs text-blue-700 font-semibold">
                    ROOM A + ROOM B
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border border-slate-200/60">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-blue-700">07:00 AM</span>
                      <span className="font-body-md text-sm font-semibold text-slate-900">
                        High-Intensity Conditioning (Elite Tier)
                      </span>
                    </div>
                    <span className="font-body-sm text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-medium">
                      Full • 24/24
                    </span>
                  </div>

                  <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border border-slate-200/60">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-blue-700">09:30 AM</span>
                      <span className="font-body-md text-sm font-semibold text-slate-900">
                        Mobility & Strength Regimen Protocol
                      </span>
                    </div>
                    <span className="font-body-sm text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-medium">
                      18/20 Booked
                    </span>
                  </div>
                </div>
              </div>

              {/* Member Regimen Builder Snippet */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                    <span className="material-symbols-outlined text-[18px]">sports_martial_arts</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-body-sm text-xs sm:text-sm font-semibold text-slate-900">
                      Custom Regimen Builder: 12-Week Hypertrophy
                    </span>
                    <span className="font-mono text-[11px] text-slate-500">
                      Assigned to 142 Active Members • Auto-Progression Synced
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-blue-700 text-[20px]">
                  chevron_right
                </span>
              </div>
            </div>
          </div>

          {/* Right: Verified Capabilities & Detail */}
          <div className="lg:col-span-5 flex flex-col gap-6 order-1 lg:order-2">
            <p className="font-body-md text-body-md text-slate-600 leading-relaxed">
              Engineered for boutique health studios, gym franchises, and personal training academies seeking complete operational sovereignty over their brand, membership revenue, and client workout regimens.
            </p>

            <div className="grid grid-cols-1 gap-3 pt-1">
              {FITNESS_CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="fit-capability-card flex items-start gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-slate-200/80"
                >
                  <span
                    className="material-symbols-outlined text-blue-700 text-[20px] shrink-0 mt-0.5"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-sm sm:text-base font-semibold text-slate-900">
                      {cap.title}
                    </span>
                    <span className="font-body-sm text-xs sm:text-sm text-slate-600 mt-0.5">
                      {cap.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-11 px-7 bg-blue-700 text-white font-label-lg text-label-lg font-semibold rounded-lg hover:bg-blue-800 active:scale-95 transition-all duration-300 shadow-md"
              >
                Explore Fitness CRM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFitnessCRM;
