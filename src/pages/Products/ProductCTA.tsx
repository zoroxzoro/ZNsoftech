import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCTA: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-lowest text-on-surface py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Photonic Backlight Flare */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-container/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center gap-6 relative z-10">
        <span className="font-mono text-label-mono-tag text-primary tracking-widest uppercase font-semibold">
          NEXT STEP // ENGAGE ARCHITECTURE TEAM
        </span>

        <h2 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-on-surface font-bold tracking-tight">
          Find the Technology That Fits Your Business.
        </h2>

        <p className="font-body-lg text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed">
          Explore how ZNSoftech's purpose-built digital products can streamline your operations, protect compliance, and drive measurable revenue growth across your organization.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-12 px-8 bg-primary-container text-on-primary-container font-headline-sm text-label-lg font-semibold rounded-lg hover:bg-primary hover:text-on-primary active:scale-95 transition-all duration-300 shadow-xl shadow-primary-container/20 group"
          >
            <span>Discuss Your Requirements</span>
            <span className="material-symbols-outlined ml-2 text-[18px] transition-transform duration-200 group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center h-12 px-8 bg-surface-container-high text-on-surface font-headline-sm text-label-lg font-semibold rounded-lg hover:bg-surface-bright hover:border-primary/40 border border-outline-variant/30 active:scale-95 transition-all duration-300"
          >
            Explore Our Services
          </Link>
        </div>

        {/* Direct Engineering Dispatch Coordinates */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-8 text-text-muted font-body-sm text-sm border-t border-outline-variant/20 mt-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">call</span>
            <span>Direct Line:</span>
            <a
              href="tel:+919717786450"
              className="text-on-surface font-semibold hover:text-primary transition-colors"
            >
              +91 9717 786 450
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
            <span>Architecture Inquiry:</span>
            <a
              href="mailto:info@znsoftech.com"
              className="text-on-surface font-semibold hover:text-primary transition-colors"
            >
              info@znsoftech.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;
