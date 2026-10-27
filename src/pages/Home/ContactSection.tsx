import React, { useState } from 'react';
import { FadeIn } from '../../components/motion/FadeIn';
import { officeLocations, companyContact } from '../../data/navigation';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: 'Agentic AI & Intelligent Workflows',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-section" className="w-full bg-surface-container-lowest text-on-surface py-16 sm:py-20">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-12 sm:gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Form */}
          <FadeIn
            direction="up"
            distance={24}
            className="lg:col-span-7 bg-surface-container p-6 sm:p-10 rounded-2xl flex flex-col gap-8 shadow-xl border border-outline-variant/30"
          >
            <div className="flex flex-col gap-2">
              <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
                INITIATE CONSULTATION
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Have an Ambitious Idea? Let’s Build Something Extraordinary.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Book your free consultancy call and discover how we turn complex business goals into
                actionable digital strategies with no cost, no pressure — just clarity.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-primary font-headline-sm font-semibold">
                  <span className="material-symbols-outlined text-[24px]">check_circle</span>
                  <span>Thank you for reaching out!</span>
                </div>
                <p className="font-body-md text-on-surface leading-relaxed">
                  A senior ZNSoftech solutions architect will contact you within 24 business hours to
                  discuss your requirements.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="self-start mt-2 px-4 py-2 rounded bg-surface-container text-primary text-sm font-semibold hover:bg-surface-container-high transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 px-3.5 rounded bg-surface-container-high text-on-surface placeholder:text-outline font-body-md border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 shadow-inner transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-11 px-3.5 rounded bg-surface-container-high text-on-surface placeholder:text-outline font-body-md border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 shadow-inner transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                      Country Code & Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-11 px-3.5 rounded bg-surface-container-high text-on-surface placeholder:text-outline font-body-md border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 shadow-inner transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                      Primary Requirement
                    </label>
                    <select
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full h-11 px-3.5 rounded bg-surface-container-high text-on-surface font-body-md border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 shadow-inner transition-all duration-200 cursor-pointer"
                    >
                      <option>Agentic AI & Intelligent Workflows</option>
                      <option>Bespoke Enterprise Software</option>
                      <option>Product Engineering & SaaS</option>
                      <option>Mobile Application Engineering</option>
                      <option>Digital Marketing & Growth Systems</option>
                      <option>UI/UX & Experience Architecture</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md text-on-surface font-semibold">
                    Project Scope & Challenges
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your objectives, timeline, or current system challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 rounded bg-surface-container-high text-on-surface placeholder:text-outline font-body-md border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 shadow-inner resize-none transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto self-start px-8 py-3.5 rounded-lg bg-primary-container text-on-primary-container font-label-lg text-label-lg font-semibold hover:bg-primary hover:text-on-primary active:scale-95 transition-all duration-300 shadow-lg shadow-primary-container/20 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    send
                  </span>
                </button>
              </form>
            )}
          </FadeIn>

          {/* Right Column: Verified Global Office Hubs */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <FadeIn direction="up" distance={20} delay={0.1}>
              <div className="flex flex-col gap-2">
                <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
                  LOCATIONS & REACH
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Global Enterprise Presence
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Operating across key economic hubs to provide continuous synchronous engineering support.
                </p>
              </div>
            </FadeIn>

            {/* Office Hub Cards */}
            <div className="flex flex-col gap-4">
              {officeLocations.map((loc, idx) => (
                <FadeIn key={idx} direction="up" distance={16} delay={0.15 + idx * 0.08}>
                  <div className="p-4 sm:p-5 bg-surface-container rounded-xl flex items-start gap-4 border border-outline-variant/20 hover:border-primary/40 transition-all duration-300 hover:translate-x-1">
                    <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">{loc.icon}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase font-bold">
                        {loc.country}
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface">
                        {loc.title}
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {loc.address}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}

              {/* Direct Channels Card */}
              <FadeIn direction="up" distance={16} delay={0.4}>
                <div className="p-5 bg-surface-dark-elevated rounded-xl flex flex-col gap-3 shadow-md border border-outline-variant/30">
                  <span className="font-label-mono-tag text-label-mono-tag text-on-surface-variant uppercase font-bold">
                    DIRECT CHANNELS
                  </span>
                  <div className="flex flex-col gap-2">
                    <a
                      href={`mailto:${companyContact.email}`}
                      className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="material-symbols-outlined text-primary text-[18px] group-hover:scale-110 transition-transform">
                        mail
                      </span>
                      <span>{companyContact.email}</span>
                    </a>
                    <a
                      href={`tel:${companyContact.phone.replace(/[^0-9+]/g, '')}`}
                      className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="material-symbols-outlined text-primary text-[18px] group-hover:scale-110 transition-transform">
                        call
                      </span>
                      <span>{companyContact.phone}</span>
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
