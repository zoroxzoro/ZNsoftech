import React from 'react';

export const ContactClosingCTA: React.FC = () => {
  return (
    <section className="relative w-full bg-surface-container-lowest text-on-surface py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Photonic Backlight Flare */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(circle_at_bottom,rgba(103,137,255,0.4),transparent_60%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto text-center flex flex-col items-center gap-6 z-10">
        <span className="font-mono text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
          06 // THE NEXT MILESTONE
        </span>

        <h2 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl text-on-surface font-bold tracking-tight">
          Great Ideas Start With a Conversation.
        </h2>

        <p className="font-body-xl text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          Let’s explore what’s possible. No obligation, no generic sales pitch — just thoughtful engineering solutions and direct technical dialogue.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
          <a
            href="#inquiry-form-section"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-label-lg text-label-lg text-on-primary bg-primary hover:bg-primary-fixed px-8 h-12 rounded-lg shadow-xl shadow-primary/20 active:scale-95 transition-all duration-300 font-semibold group"
          >
            <span>Initiate Project Brief</span>
            <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:-translate-y-0.5">
              arrow_upward
            </span>
          </a>

          <a
            href="mailto:info@znsoftech.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-label-lg text-label-lg text-on-surface hover:text-primary bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/30 px-6 h-12 rounded-lg active:scale-95 transition-all duration-300 font-semibold"
          >
            <span>Direct Email: info@znsoftech.com</span>
            <span className="material-symbols-outlined text-[18px]">alternate_email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactClosingCTA;
