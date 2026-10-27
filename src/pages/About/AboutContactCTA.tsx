import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../components/motion/FadeIn';
import { companyContact } from '../../data/navigation';

export const AboutContactCTA: React.FC = () => {
  return (
    <section className="w-full bg-surface py-16 lg:py-28" id="final-contact-cta">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-12 lg:px-20">
        <FadeIn direction="up" distance={24}>
          <div className="relative overflow-hidden rounded-3xl bg-surface-container-high p-8 lg:p-16 shadow-2xl border border-outline-variant/30">
            {/* Atmospheric Glow Effect */}
            <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8 flex flex-col gap-6">
                <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
                  START A PROJECT
                </span>
                <h2 className="font-headline-xl text-headline-xl lg:font-display-hero lg:text-display-hero text-on-surface font-bold tracking-tight leading-tight">
                  Have an Ambitious Idea? Let's Build Something Meaningful Together.
                </h2>
                <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl leading-relaxed">
                  Whether architecting a distributed system, training a localized enterprise AI model,
                  or upgrading mission-critical software, our leadership is ready to connect.
                </p>

                {/* Direct Verified Contact Chips */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    className="inline-flex items-center gap-2 rounded-lg bg-surface-container px-4 py-2.5 font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors border border-outline-variant/20"
                    href={`mailto:${companyContact.email}`}
                  >
                    <span className="material-symbols-outlined text-primary text-base">mail</span>
                    <span>{companyContact.email}</span>
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-lg bg-surface-container px-4 py-2.5 font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors border border-outline-variant/20"
                    href={`tel:${companyContact.phone.replace(/[^0-9+]/g, '')}`}
                  >
                    <span className="material-symbols-outlined text-primary text-base">call</span>
                    <span>{companyContact.phone}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <Link
                  to="/contact"
                  className="cta-glow-pulse flex h-14 w-full items-center justify-center rounded-xl bg-primary-container px-8 font-label-lg text-label-lg text-on-primary-container font-semibold transition-all hover:bg-primary hover:text-on-primary shadow-xl shadow-primary-container/25"
                >
                  <span>Initiate Project Consultation</span>
                  <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
                </Link>
                <div className="flex items-center justify-center gap-2 text-text-muted font-label-mono-tag text-label-mono-tag">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>CONFIDENTIAL // NDA PROTECTED DISCOVERY</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
