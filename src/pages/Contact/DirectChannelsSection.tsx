import React from 'react';

const FAST_TRACK_CHANNELS = [
  {
    number: '01',
    title: 'Executive Engineering Advisory',
    subtitle: 'Direct route to Technical Principals and Enterprise Solutions Architects',
    tag: 'info@znsoftech.com',
    href: 'mailto:info@znsoftech.com',
    icon: 'north_east',
    isExternal: false,
  },
  {
    number: '02',
    title: 'Direct Telephony & WhatsApp Desk',
    subtitle: 'Direct voice line • Operating Mon–Fri 09:00–19:00 UTC',
    tag: '+91 9717 786 450',
    href: 'tel:+919717786450',
    icon: 'call',
    isExternal: false,
  },
  {
    number: '03',
    title: 'LinkedIn Corporate Dispatch',
    subtitle: 'Follow release cycles, technical patents, and cross-continental hiring',
    tag: 'znsoftech-pvt-ltd',
    href: 'https://linkedin.com/company/znsoftech-pvt-ltd',
    icon: 'north_east',
    isExternal: true,
  },
];

export const DirectChannelsSection: React.FC = () => {
  return (
    <section className="w-full bg-surface text-on-surface py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-outline-variant/20">
      <div className="max-w-[1360px] mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="font-mono text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
              02 // FAST-TRACK PROTOCOLS
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
              Prefer to Reach Out Directly?
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
              Bypass intake forms for emergency system triage, press coordination, or institutional partnerships.
            </p>
          </div>
          <div className="font-mono text-xs text-text-muted">
            AVG_RESPONSE: <span className="text-primary font-bold">&lt; 3.2 HOURS</span>
          </div>
        </div>

        {/* Horizontal Editorial Rows */}
        <div className="flex flex-col gap-3.5">
          {FAST_TRACK_CHANNELS.map((channel) => (
            <a
              key={channel.number}
              href={channel.href}
              target={channel.isExternal ? '_blank' : undefined}
              rel={channel.isExternal ? 'noopener noreferrer' : undefined}
              className="group flex flex-col md:flex-row md:items-center justify-between p-5 sm:p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/20 hover:border-primary/40 transition-all duration-300 shadow-sm gap-4"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="font-mono text-xl sm:text-2xl text-primary font-bold">
                  {channel.number}
                </span>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-base sm:text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                    {channel.title}
                  </span>
                  <span className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-0.5">
                    {channel.subtitle}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 md:self-auto self-end">
                <span className="font-mono text-xs px-3 py-1.5 rounded-lg bg-surface-container-high text-primary border border-outline-variant/20">
                  {channel.tag}
                </span>
                <span className="w-10 h-10 rounded-full bg-surface-container-highest group-hover:bg-primary-container group-hover:text-on-primary-container flex items-center justify-center text-on-surface transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    {channel.icon}
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectChannelsSection;
