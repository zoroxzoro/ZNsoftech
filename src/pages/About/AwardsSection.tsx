import React from 'react';
import { FadeIn } from '../../components/motion/FadeIn';
import { StaggerContainer, StaggerItem } from '../../components/motion/StaggerContainer';

interface AwardItem {
  icon: string;
  title: string;
  subtitle: string;
}

const awards: AwardItem[] = [
  { icon: 'workspace_premium', title: 'Google Experts', subtitle: 'Cloud & Web Standards' },
  { icon: 'star', title: 'Clutch Certified', subtitle: 'Top Rated IT Partner' },
  { icon: 'store', title: 'Shopify Partners', subtitle: 'Custom Commerce Engineering' },
  { icon: 'smartphone', title: 'App Futura', subtitle: 'Mobile Developer Certified' },
  { icon: 'cloud_sync', title: 'Amazon Partner Award', subtitle: 'Cloud Architecture Specialist' },
  { icon: 'database', title: 'Oracle Certified', subtitle: 'Enterprise Database Solutions' },
  { icon: 'military_tech', title: 'GoodFirms Award', subtitle: 'Top Software Company' },
  { icon: 'check_circle', title: 'Fiverr Pro Certified', subtitle: 'Vetted Tier-1 Engineering' },
  { icon: 'shopping_cart', title: 'Magento Certified', subtitle: 'High Scale Adobe Commerce' },
];

export const AwardsSection: React.FC = () => {
  return (
    <section className="w-full bg-surface py-16 lg:py-20" id="awards-recognition">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-10">
        <FadeIn direction="up" distance={20} className="flex flex-col items-center text-center gap-2">
          <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
            05 // CERTIFIED REPUTATION
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
            Validated by Industry Authorities
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Recognized by global technology leaders and enterprise auditing platforms for delivery precision.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4" staggerDelay={0.05}>
          {awards.map((award, idx) => (
            <StaggerItem key={idx}>
              <div className="flex items-center gap-3.5 rounded-lg bg-surface-container p-4 hover:bg-surface-container-high transition-colors border border-outline-variant/15 hover:border-primary/30">
                <span className="material-symbols-outlined text-primary text-xl shrink-0">
                  {award.icon}
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="font-headline-sm text-headline-sm text-on-surface text-sm font-semibold truncate">
                    {award.title}
                  </span>
                  <span className="font-label-mono-tag text-label-mono-tag text-text-muted truncate">
                    {award.subtitle}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
