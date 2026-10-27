import React from 'react';
import { FadeIn } from '../../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/motion/StaggerContainer';

interface CultureCard {
  image: string;
  alt: string;
  tagDotBg: string;
  tagText: string;
  tagTextColor: string;
  title: string;
  desc: string;
}

const cultureItems: CultureCard[] = [
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDri-snrZmdQFZpBqVLBbEZPofZPIpvoO8ykkU3ezYlXKL16qUw3wHyMrj-MCBoPx6GzvxNcyzBKDFSdtpE2OLc0nSNFQk_0ptYTqkHfz-9ZzuAHi3imWDS2ZYRDe4ItRRORnhikZB_kKjIVJ3z4iB-Tg8O0GsejHB_8lkPS5uswfdIwtRPrH19X4U56Ri4mXROA5oluSMxk0nwGwVJcaF8HPCZNpZKEd3Ldra9UbESAY5B5vzIFcbncA',
    alt: 'A modern collaborative tech software engineering team gathered around an architectural whiteboarding session.',
    tagDotBg: 'bg-primary',
    tagText: '500+ COLLABORATIVE MILESTONES',
    tagTextColor: 'text-primary',
    title: 'ZN Squad in Sync',
    desc: 'Daily autonomous pods that pair rapid ideation with rigorous QA sign-offs, fostering an environment where ideas win on merit, not tenure.',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDJRlO3OvW-LnbwG1B-jtxZU4wOCN4TRloVVJk_Jt6RChSMfRbkLrUG8PkhX7D4a_Sc3UjdJPeBftG8tc7X7Sh9KsZXDbpvZcCIXcT0IDfF_j8iUCFM0Us7wver4QDxi6ff-JK3ABUk-lhNaHseohKXDG6yzK2pCxdt1T7xhCWO6xRtPVreU8aEk3msoUK9Aj1MdXNibxXWG05iFeG1AN_FHghqvt1nfPD4oKtiTp7z3q52FRYbDxaxaA',
    alt: 'Diverse international software developers celebrating a product milestone launch party in a stylish tech studio.',
    tagDotBg: 'bg-secondary-fixed',
    tagText: '24/7 GLOBAL ENERGY',
    tagTextColor: 'text-secondary-fixed',
    title: 'Festival Lights',
    desc: 'Uniting cross-continental colleagues through cultural milestones, hackathons, and genuine camaraderie across time zones.',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9j3E2AXnVLlPuk4sD6ntchFhPY4tLigvenevvICQcy0Glz83H0KbUBy0OtITwH-qe87GBpJVq-A-iRIN-qvnaJulYiDn7RmWb34egLTYc11tBN2iGQ2PQo4HAWWVt8swMiqovOgcWU121bhGprm71-fT6XGtWeZKcKYxZ1ctUnSuHQafGu7ifg3tmSvS_0J9Htcgk1ZxBWsPrqo0Ppnb-twCBy3Qw7JVozJgoc-9Bm6XGps0pLqXY0w',
    alt: 'A focused digital systems architect reviewing complex neural diagrams and cloud deployment blueprints on a clean glass desk.',
    tagDotBg: 'bg-cyan-glow',
    tagText: '15+ GLOBAL PERSPECTIVES',
    tagTextColor: 'text-cyan-glow',
    title: 'Built by Thinkers',
    desc: 'Deep intellectual curiosity coupled with pragmatic commercial execution. We cultivate lifelong learners committed to cutting-edge tech.',
  },
];

export const CompanyCulture: React.FC = () => {
  return (
    <section className="w-full bg-surface py-16 lg:py-24" id="company-culture">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-12">
        <FadeIn direction="up" distance={20} className="flex flex-col gap-2 text-center items-center">
          <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
            07 // LIFE AT ZNSOFTECH
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-semibold tracking-tight">
            High Standards. Human Energy.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            A dynamic collective of engineers, researchers, and designers operating without corporate
            bureaucratic inertia.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch" staggerDelay={0.1}>
          {cultureItems.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="flex flex-col rounded-2xl bg-surface-container overflow-hidden border border-outline-variant/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group h-full">
                <div className="h-56 w-full relative overflow-hidden bg-surface-container-highest">
                  <img
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2.5 flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`h-2 w-2 rounded-full ${item.tagDotBg}`} />
                      <span
                        className={`font-label-mono-tag text-label-mono-tag ${item.tagTextColor} uppercase font-semibold`}
                      >
                        {item.tagText}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                      {item.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">
                      {item.desc}
                    </p>
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
