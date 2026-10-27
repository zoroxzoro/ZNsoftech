import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAPAnimation } from '../../hooks/useGSAPAnimation';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const EVENT_CAPABILITIES = [
  {
    icon: 'confirmation_number',
    title: 'High-Throughput Ticket Purchasing Engine',
    desc: 'Designed to handle massive ticket on-sale spikes without queue crashes or duplicate seat allocations.',
  },
  {
    icon: 'chair',
    title: 'Dynamic Seating & Tiered Admission Management',
    desc: 'General admission, VIP lounges, early-bird tiers, and backstage passes configured in seconds.',
  },
  {
    icon: 'account_circle',
    title: 'Attendee Profile Data & Order History',
    desc: 'Full customer profiles with lifetime spend, refund history, and opted-in marketing permissions.',
  },
  {
    icon: 'qr_code_scanner',
    title: 'Real-Time Gate Scanning & Entry Verification',
    desc: 'Instant mobile scanner app syncing with sub-second speeds to block duplicate tickets.',
  },
  {
    icon: 'receipt_long',
    title: 'Promoter Revenue Settlement & Audit Trails',
    desc: 'Transparent ledger settlements, split payments, and statutory ticketing compliance reports.',
  },
];

export const ProductCrowdrEvents: React.FC = () => {
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
        '.cr-label',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          '.cr-title',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          '.cr-desc',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          '.cr-item',
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          '-=0.3'
        )
        .fromTo(
          '.cr-mockup-frame',
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
      id="event-ticketing"
      className="w-full bg-surface-container-lowest text-on-surface py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-outline-variant/20"
    >
      <div className="max-w-[1360px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-3xl">
          <span className="cr-label font-mono text-label-mono-tag text-tertiary-container tracking-widest uppercase font-semibold">
            05 // LIVE ENTERTAINMENT & EXPERIENCES
          </span>
          <h2 className="cr-title font-headline-xl text-3xl sm:text-4xl md:text-5xl text-on-surface font-bold tracking-tight">
            Crowdr — Event CRM
          </h2>
          <p className="cr-desc font-headline-md text-xl sm:text-2xl text-tertiary-container font-medium">
            Bespoke Ticketing Infrastructure & Attendee Journey Management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Verified Capabilities */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <p className="font-body-md text-body-md text-text-muted leading-relaxed">
              Constructed for music festivals, arena promoters, independent conferences, and cultural organizers requiring zero-latency high-concurrency ticket checkouts paired with deterministic barcode validation.
            </p>

            <div className="space-y-3 pt-1">
              {EVENT_CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="cr-item bg-surface-dark-elevated p-4 rounded-xl flex items-start gap-3.5 border border-outline-variant/20"
                >
                  <span
                    className="material-symbols-outlined text-tertiary-container text-[22px] shrink-0 mt-0.5"
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
                Explore Crowdr Events
              </Link>
            </div>
          </div>

          {/* Right: Mobile Pass & Gate Turnstile Visual */}
          <div className="lg:col-span-7">
            <div className="cr-mockup-frame bg-surface-dark rounded-2xl p-5 sm:p-7 shadow-2xl border border-outline-variant/30 flex flex-col sm:flex-row gap-5 items-center justify-center">
              {/* Mobile Wallet Digital Ticket Pass */}
              <div className="w-full sm:w-64 bg-surface-container-high rounded-2xl p-5 flex flex-col justify-between shadow-xl border-t-4 border-tertiary-container border-x border-b border-outline-variant/20">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] text-text-muted">
                      CROWDR PASS #TX-9021
                    </span>
                    <span className="material-symbols-outlined text-tertiary-container text-[20px]">
                      nfc
                    </span>
                  </div>
                  <h5 className="font-headline-sm text-base text-on-surface font-bold mt-2">
                    Echo Sound Summit 2025
                  </h5>
                  <span className="font-body-sm text-xs text-tertiary-container block font-medium mt-0.5">
                    VIP Weekend Access
                  </span>
                </div>

                {/* Mock QR Code Box */}
                <div className="my-4 bg-white p-4 rounded-xl flex flex-col items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-[72px] text-slate-900 leading-none">
                    qr_code_2
                  </span>
                  <span className="font-mono text-[9px] text-slate-500 mt-1 uppercase font-semibold">
                    DYNAMIC ROLLING TOKEN • 24s
                  </span>
                </div>

                <div className="space-y-1 font-mono text-[11px] text-text-muted border-t border-outline-variant/20 pt-2.5">
                  <div className="flex justify-between">
                    <span>SECTOR:</span> <span className="text-on-surface font-bold">L-3 / ARENA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ENTRY:</span> <span className="text-on-surface font-bold">GATE NORTH 02</span>
                  </div>
                </div>
              </div>

              {/* Promoter Analytics Breakdown Pane */}
              <div className="flex-1 w-full bg-surface-container rounded-2xl p-5 flex flex-col gap-3 border border-outline-variant/20">
                <span className="font-mono text-[11px] text-tertiary-container uppercase font-semibold">
                  PROMOTER GATE REAL-TIME TELEMETRY
                </span>

                <div className="space-y-2.5 mt-1">
                  <div className="bg-surface-dark-elevated p-3.5 rounded-xl border border-outline-variant/20">
                    <span className="font-mono text-[10px] text-text-muted block uppercase">
                      TOTAL TICKETS SOLD
                    </span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="font-headline-md text-xl sm:text-2xl text-on-surface font-bold">
                        14,250
                      </span>
                      <span className="text-emerald-400 font-mono text-xs font-semibold">
                        100% SOLD OUT
                      </span>
                    </div>
                  </div>

                  <div className="bg-surface-dark-elevated p-3.5 rounded-xl border border-outline-variant/20">
                    <span className="font-mono text-[10px] text-text-muted block uppercase">
                      GATES INGRESS VELOCITY
                    </span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="font-headline-md text-xl sm:text-2xl text-on-surface font-bold">
                        640 / min
                      </span>
                      <span className="text-tertiary-container font-mono text-xs font-semibold">
                        AVG 1.2s SCAN
                      </span>
                    </div>
                  </div>

                  <div className="bg-surface-dark-elevated p-3.5 rounded-xl border border-outline-variant/20">
                    <span className="font-mono text-[10px] text-text-muted block uppercase">
                      TOTAL SETTLED REVENUE
                    </span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="font-headline-md text-xl sm:text-2xl text-emerald-400 font-bold">
                        £712,500
                      </span>
                      <span className="text-text-muted font-mono text-xs font-semibold">
                        AUDITED
                      </span>
                    </div>
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

export default ProductCrowdrEvents;
