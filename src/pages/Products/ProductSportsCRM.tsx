import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAPAnimation } from '../../hooks/useGSAPAnimation';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const SPORTS_CAPABILITIES = [
  {
    icon: 'sports_soccer',
    title: 'Matchday & Season Pass Digital Ticketing',
    desc: 'Interactive stadium seat maps, tiered season packages, and NFC-ready mobile wallets.',
  },
  {
    icon: 'groups',
    title: 'Supporter Relationship Management (CRM)',
    desc: 'Unified fan profiles aggregating attendance frequency, hospitality bookings, and retail history.',
  },
  {
    icon: 'calendar_month',
    title: 'Multi-Venue Event & Match Scheduling',
    desc: 'Synchronize fixture changes, tournament phases, and auxiliary stadium events in one portal.',
  },
  {
    icon: 'shopping_bag',
    title: 'High-Conversion Online Merchandise & Ticket Sales',
    desc: 'Cross-sell official club apparel and hospitality upgrades directly during checkout.',
  },
  {
    icon: 'campaign',
    title: 'Targeted Fan Marketing & Campaign Automation',
    desc: 'Automated SMS/Email journeys triggered by attendance, birthdays, and away derby days.',
  },
];

export const ProductSportsCRM: React.FC = () => {
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
        '.sp-label',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          '.sp-title',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          '.sp-desc',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          '.sp-item',
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          '-=0.3'
        )
        .fromTo(
          '.sp-mockup-frame',
          { opacity: 0, scale: 1.04 },
          { opacity: 1, scale: 1, duration: 0.85 },
          '-=0.5'
        );
    },
    [prefersReduced]
  );

  return (
    <section
      ref={sectionRef}
      id="sports-crm"
      className="w-full bg-surface text-on-surface py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-outline-variant/20"
    >
      <div className="max-w-[1360px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-3xl">
          <span className="sp-label font-mono text-label-mono-tag text-tertiary tracking-widest uppercase font-semibold">
            03 // ATHLETIC CLUBS & ARENA MANAGEMENT
          </span>
          <h2 className="sp-title font-headline-xl text-3xl sm:text-4xl md:text-5xl text-on-surface font-bold tracking-tight">
            Crowdr Sports CRM
          </h2>
          <p className="sp-desc font-headline-md text-xl sm:text-2xl text-tertiary font-medium">
            Integrated Matchday Ticketing, Club CRM & Omnichannel Supporter Commerce
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Verified Capabilities List */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <p className="font-body-md text-body-md text-text-muted leading-relaxed">
              Constructed specifically for football clubs, rugby unions, athletics associations, and modern sports venues seeking to unite ticketing gate data with lifelong fan merchandising and membership loyalty.
            </p>

            <div className="space-y-3 pt-1">
              {SPORTS_CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="sp-item bg-surface-container p-4 rounded-xl flex items-start gap-3.5 border border-outline-variant/20"
                >
                  <span
                    className="material-symbols-outlined text-tertiary text-[22px] shrink-0 mt-0.5"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {cap.icon}
                  </span>
                  <div>
                    <h4 className="font-headline-sm text-sm sm:text-base text-on-surface font-semibold">
                      {cap.title}
                    </h4>
                    <p className="font-body-sm text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-11 px-7 bg-primary-container text-on-primary-container font-label-lg text-label-lg font-semibold rounded-lg hover:bg-primary hover:text-on-primary active:scale-95 transition-all duration-300 shadow-md shadow-primary-container/20"
              >
                Explore Sports CRM
              </Link>
            </div>
          </div>

          {/* Right: Stadium Seat Map & Supporter Dashboard Visual */}
          <div className="lg:col-span-7">
            <div className="sp-mockup-frame bg-surface-dark-elevated rounded-2xl p-5 sm:p-7 shadow-2xl border border-outline-variant/30 flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-tertiary text-[22px]">
                    stadium
                  </span>
                  <span className="font-headline-sm text-base sm:text-lg text-on-surface font-semibold">
                    Stamford Arena • West Stand Allocation
                  </span>
                </div>
                <span className="font-mono text-[11px] bg-tertiary/10 text-tertiary px-2.5 py-1 rounded font-semibold border border-tertiary/20">
                  MATCHDAY -24H • 91% CAPACITY
                </span>
              </div>

              {/* Conceptual Stadium Seating Visualization */}
              <div className="bg-surface-container rounded-xl p-5 flex flex-col items-center justify-center min-h-[220px] relative overflow-hidden border border-outline-variant/20">
                <div className="w-full flex items-center justify-between font-mono text-[10px] text-text-muted mb-3">
                  <span>PITCH ORIENTATION NORTH</span>
                  <span>TUNNEL ACCESS G</span>
                </div>

                {/* Seating Block Grid (8 columns x 2 rows) */}
                <div className="grid grid-cols-8 gap-2 w-full max-w-md my-auto">
                  {['A1', 'A2', 'A3'].map((seat) => (
                    <div
                      key={seat}
                      className="h-7 rounded bg-tertiary text-[10px] flex items-center justify-center font-bold text-on-tertiary shadow-sm"
                    >
                      {seat}
                    </div>
                  ))}
                  {['A4', 'A5'].map((seat) => (
                    <div
                      key={seat}
                      className="h-7 rounded bg-primary text-[10px] flex items-center justify-center font-bold text-on-primary shadow-sm"
                    >
                      {seat}
                    </div>
                  ))}
                  {['A6', 'A7', 'A8'].map((seat) => (
                    <div
                      key={seat}
                      className="h-7 rounded bg-tertiary text-[10px] flex items-center justify-center font-bold text-on-tertiary shadow-sm"
                    >
                      {seat}
                    </div>
                  ))}
                  {['B1', 'B2'].map((seat) => (
                    <div
                      key={seat}
                      className="h-7 rounded bg-tertiary text-[10px] flex items-center justify-center font-bold text-on-tertiary shadow-sm"
                    >
                      {seat}
                    </div>
                  ))}
                  {['B3', 'B4'].map((seat) => (
                    <div
                      key={seat}
                      className="h-7 rounded bg-surface-bright text-[10px] flex items-center justify-center font-semibold text-text-muted border border-outline-variant/30"
                    >
                      {seat}
                    </div>
                  ))}
                  {['B5', 'B6', 'B7', 'B8'].map((seat) => (
                    <div
                      key={seat}
                      className="h-7 rounded bg-tertiary text-[10px] flex items-center justify-center font-bold text-on-tertiary shadow-sm"
                    >
                      {seat}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-4 font-mono text-[10px] text-text-muted flex-wrap justify-center">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-tertiary inline-block" />
                    <span>Season Pass (Claimed)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-primary inline-block" />
                    <span>VIP Hospitality</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-surface-bright border border-outline-variant/30 inline-block" />
                    <span>Open On-Sale</span>
                  </div>
                </div>
              </div>

              {/* Supporter Engagement Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-surface-container rounded-xl p-4 flex flex-col justify-between border border-outline-variant/20">
                  <span className="font-mono text-[10px] text-text-muted uppercase">
                    FAN LIFECYCLE INDEX
                  </span>
                  <span className="font-headline-md text-xl sm:text-2xl text-on-surface font-bold mt-1">
                    42,800 Fans
                  </span>
                  <span className="font-body-sm text-xs text-primary mt-0.5">
                    82% Verified Digital Identifiers
                  </span>
                </div>

                <div className="bg-surface-container rounded-xl p-4 flex flex-col justify-between border border-outline-variant/20">
                  <span className="font-mono text-[10px] text-text-muted uppercase">
                    MERCHANDISE CROSS-SELL
                  </span>
                  <span className="font-headline-md text-xl sm:text-2xl text-emerald-400 font-bold mt-1">
                    +34.8%
                  </span>
                  <span className="font-body-sm text-xs text-text-muted mt-0.5">
                    Conversion with Ticket Bundle
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSportsCRM;
