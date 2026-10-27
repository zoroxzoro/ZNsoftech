import React from 'react';
import { FadeIn } from '../../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/motion/StaggerContainer';

const corridors = ['India', 'UK', 'USA', 'Canada', 'Norway', 'UAE', 'Bahrain', 'Germany', 'France'];

const offices = [
  {
    country: 'UNITED KINGDOM',
    name: 'Daresbury Innovation Hub',
    address: 'The Innovation Centre, Sci-Tech Daresbury, Keckwick Lane, Daresbury, Cheshire, WA4 4FS',
    icon: 'location_city',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCAzMXgJjn-g0xZqks4L_vY_iSod-1BDm2BAjnKrzQZL9opUbyz9UEazfMRjH9tNLOfhrxDg8Vo9NYtjFwlS08eZ3gyVu8Oe9OYJ4S6t4m4Bb0lNAQpQ25PvbWm_2w83tkB2jRLoYeYqNQKAY6kmXDASR4Gou_quDVIBTB9qZsH6t2bVnYZeWBU37y-mHVXjufWtEACmOUZGCwp8yvktDX853gPkPyfNE58dxpkez2wshYegIPTeuzhJw',
  },
  {
    country: 'UNITED STATES',
    name: 'Dallas Regional Office',
    address: '320, Decker Drive, Suite #100, Irving Texas 75062',
    icon: 'domain',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8XixmYSfKKjuplMyD-DCOZRwP6CWU7jpXMI7zcJHqyjN6zlu1dwJ2byLpY39anadZlobTCsNSE6bPL3bX4DQSEDCx6xs9rsuEIRXGxWlsTW8NzvxsRGbp-LeifPxZFlp7y0CYQyIIHNo2RHWc0RRNhsARmJyowRTtuE4j_QfYrTTHwAoeqleSOc9Dd-g6zowA8k1kn-kMKP5EhuHllCqZPpXAX_DCY6xzFjIoatDpYLfuaLHnWVxS2g',
  },
  {
    country: 'INDIA (HQ)',
    name: 'New Delhi Global HQ',
    address: 'Plot No 70 Pocket 1, Jasola Vihar, New Delhi 110025',
    icon: 'apartment',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-3M9E-DKl-J5XPFUkl5h5wjuATP6kFj1lQoW3MdWh6cYov5wqcLSqzh2Z3mKdlOpBGlzyN2zyUO6sPIAyaKAyEuxzCkfXyv3hXu8RCSs266JkxB2_XxnpKIfftwDbLg7TjxiOdq8lPxy2obZVU7_4GeXu3LM6nNw1knxvChbu8iAOGZSj_c_39wkEn5YZG10vcU4xecSfAo6nj3UtYlgWfpInLfIdbHBfuMtEoVGSSGBejer9jnBe5Q',
  },
];

export const GlobalPresence: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-lowest py-16 lg:py-28" id="global-presence">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-10">
        <FadeIn direction="up" distance={20} className="flex flex-col gap-2">
          <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
            06 // GLOBAL REACH
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-semibold tracking-tight">
            Physical Footprint & Active Corridors
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Operating around the clock across 3 dedicated corporate tech centres and 9 sovereign economic corridors.
          </p>
        </FadeIn>

        {/* Active Corridors Strip */}
        <FadeIn direction="up" distance={16} delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 rounded-xl bg-surface-container p-4 border border-outline-variant/20">
            <span className="font-label-mono-tag text-label-mono-tag text-text-muted uppercase mr-2 font-bold">
              ACTIVE CORRIDORS:
            </span>
            {corridors.map((c) => (
              <span
                key={c}
                className="rounded-full bg-surface-container-highest px-3 py-1 font-label-mono-tag text-label-mono-tag text-on-surface"
              >
                {c}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Physical Offices (3 Verified Locations) */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
          {offices.map((office) => (
            <StaggerItem key={office.country}>
              <div className="flex flex-col justify-between rounded-xl bg-surface-container p-6 hover:bg-surface-container-high transition-colors border border-outline-variant/20 hover:border-primary/40 h-full group">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase font-bold">
                      {office.country}
                    </span>
                    <span className="material-symbols-outlined text-primary text-xl">
                      {office.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    {office.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {office.address}
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-outline-variant/15">
                  <div
                    className="h-32 w-full rounded-lg bg-cover bg-center overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ backgroundImage: `url('${office.image}')` }}
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
