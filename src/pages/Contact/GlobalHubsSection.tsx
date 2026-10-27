import React from 'react';

interface OfficeHub {
  hubTag: string;
  isPrimary?: boolean;
  timezone: string;
  country: string;
  role: string;
  address: string;
  specializationLabel: string;
  specializationText: string;
  mapLink: string;
  coordinates: string;
}

const GLOBAL_OFFICES: OfficeHub[] = [
  {
    hubTag: 'HUB // EUROPE',
    timezone: 'UTC+0 / BST',
    country: 'United Kingdom',
    role: 'Innovation & Solutions Hub',
    address:
      'The Innovation Centre, Sci-Tech Daresbury, Keckwick Lane, Daresbury, Cheshire, WA4 4FS',
    specializationLabel: 'REGIONAL SPECIALIZATION',
    specializationText:
      'UK & European Enterprise Architecture, DEFRA Compliance, Sports Tech',
    mapLink: 'https://maps.google.com/?q=Sci-Tech+Daresbury+WA4+4FS',
    coordinates: '53.344° N, 2.632° W',
  },
  {
    hubTag: 'HUB // NORTH AMERICA',
    timezone: 'UTC-6 (CST)',
    country: 'United States',
    role: 'North America Office',
    address: '320, Decker Drive, Suite #100, Irving, Texas 75062',
    specializationLabel: 'REGIONAL SPECIALIZATION',
    specializationText:
      'North America Client Engagements, SaaS Architecture, Commercial Partnerships',
    mapLink: 'https://maps.google.com/?q=320+Decker+Dr+Irving+TX+75062',
    coordinates: '32.848° N, 96.945° W',
  },
  {
    hubTag: 'GLOBAL HQ // R&D',
    isPrimary: true,
    timezone: 'UTC+5:30 (IST)',
    country: 'India (Global HQ)',
    role: 'Central Engineering & Delivery Center',
    address: 'Plot No 70 Pocket 1, Jasola Vihar, New Delhi 110025, India',
    specializationLabel: 'CORE CAPABILITIES',
    specializationText:
      'Agentic AI Lab, Full-Stack Engineering, 24/7 Global Delivery Center',
    mapLink: 'https://maps.google.com/?q=Jasola+Vihar+New+Delhi+110025',
    coordinates: '28.541° N, 77.291° E',
  },
];

export const GlobalHubsSection: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-lowest text-on-surface py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-outline-variant/20 relative">
      <div className="max-w-[1360px] mx-auto flex flex-col gap-10">
        {/* Section Heading */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-mono text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
            03 // DISTRIBUTED PRESENCE
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-bold tracking-tight">
            Connected Globally. Working Closely.
          </h2>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant">
            Operating across 3 corporate headquarters and 9 sovereign economic corridors to deliver seamless cross-timezone engineering.
          </p>
        </div>

        {/* Coordinates & Low-Latency Sync Bar */}
        <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low flex flex-wrap items-center justify-between gap-4 text-text-muted font-mono text-xs border border-outline-variant/20">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-on-surface font-semibold">
              GLOBAL PIPELINE: TRIPLE-ZONE SYNC (UK • US • IN)
            </span>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <span>LATENCY: &lt; 28MS</span>
            <span className="text-primary font-semibold">DISPATCH STATUS: ACTIVE 24/7/365</span>
          </div>
        </div>

        {/* 3 Global Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GLOBAL_OFFICES.map((office) => (
            <div
              key={office.country}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/20 hover:border-primary/40 transition-all duration-300 shadow-md group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-xs px-2.5 py-1 rounded font-semibold ${
                      office.isPrimary
                        ? 'bg-primary-container text-on-primary-container'
                        : 'bg-surface-container-highest text-primary'
                    }`}
                  >
                    {office.hubTag}
                  </span>
                  <span className="font-mono text-xs text-text-muted">{office.timezone}</span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-headline-md text-xl sm:text-2xl text-on-surface font-bold">
                    {office.country}
                  </h3>
                  <p className="font-label-md text-xs sm:text-sm text-primary-container font-semibold">
                    {office.role}
                  </p>
                </div>

                <div className="flex items-start gap-2.5 text-on-surface-variant font-body-sm text-xs sm:text-sm pt-1">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                    location_on
                  </span>
                  <p className="leading-relaxed">{office.address}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-container-high/60 border border-outline-variant/20 flex flex-col gap-1 mt-1">
                  <span className="font-mono text-[10px] text-text-muted uppercase font-semibold">
                    {office.specializationLabel}
                  </span>
                  <p className="font-body-sm text-xs text-on-surface leading-snug">
                    {office.specializationText}
                  </p>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-outline-variant/15 mt-6">
                <a
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:text-cyan-glow transition-colors font-semibold"
                >
                  <span>View on Google Maps</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
                <span className="font-mono text-[11px] text-text-muted">
                  {office.coordinates}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalHubsSection;
