import React from 'react';
import { ContactForm } from '../../components/forms/ContactForm';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="inquiry-form-section"
      className="w-full bg-[#F8F9FC] text-slate-900 py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-slate-200"
    >
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Context & Direct Contact Nodes */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-label-mono-tag text-blue-700 uppercase tracking-widest font-bold">
                01 // PROJECT INTAKE
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl text-slate-900 tracking-tight font-bold">
                Tell Us About Your Project.
              </h2>
              <p className="font-body-lg text-base sm:text-lg text-slate-600 leading-relaxed">
                Whether you’re scoping an autonomous AI deployment, building a bespoke cloud platform from the ground up, or scaling an existing mission-critical system, our technical partners in the UK, US, and India are ready.
              </p>
            </div>

            {/* Direct Channels Block */}
            <div className="flex flex-col gap-3.5">
              {/* Global Line */}
              <a
                href="tel:+919717786450"
                className="group flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md border border-slate-200/80 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    Direct Global Line
                  </span>
                  <span className="font-headline-sm text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    +91 9717 786 450
                  </span>
                  <span className="font-body-sm text-xs text-slate-500 mt-0.5">
                    Mon–Fri • Direct Technical Dispatch
                  </span>
                </div>
              </a>

              {/* Business Email */}
              <a
                href="mailto:info@znsoftech.com"
                className="group flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md border border-slate-200/80 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[22px]">alternate_email</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    Primary Business Email
                  </span>
                  <span className="font-headline-sm text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    info@znsoftech.com
                  </span>
                  <span className="font-body-sm text-xs text-slate-500 mt-0.5">
                    General RFP, Architectural Queries
                  </span>
                </div>
              </a>

              {/* Careers Email */}
              <a
                href="mailto:careers@znsoftech.com"
                className="group flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md border border-slate-200/80 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[22px]">badge</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    Corporate Careers & Talents
                  </span>
                  <span className="font-headline-sm text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    careers@znsoftech.com
                  </span>
                  <span className="font-body-sm text-xs text-slate-500 mt-0.5">
                    Research fellows, Principal engineers
                  </span>
                </div>
              </a>
            </div>

            {/* Social Matrix */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Institutional Channels
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href="https://linkedin.com/company/znsoftech-pvt-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-white text-slate-700 shadow-sm hover:text-blue-700 border border-slate-200 font-mono text-xs flex items-center gap-1.5 transition-all"
                >
                  <span>LinkedIn</span>
                  <span className="material-symbols-outlined text-[14px]">north_east</span>
                </a>
                <a
                  href="https://x.com/znsoftech1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-white text-slate-700 shadow-sm hover:text-blue-700 border border-slate-200 font-mono text-xs flex items-center gap-1.5 transition-all"
                >
                  <span>X / Twitter</span>
                  <span className="material-symbols-outlined text-[14px]">north_east</span>
                </a>
                <a
                  href="https://facebook.com/znsoftech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-white text-slate-700 shadow-sm hover:text-blue-700 border border-slate-200 font-mono text-xs flex items-center gap-1.5 transition-all"
                >
                  <span>Facebook</span>
                  <span className="material-symbols-outlined text-[14px]">north_east</span>
                </a>
                <a
                  href="https://instagram.com/znsoftech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-white text-slate-700 shadow-sm hover:text-blue-700 border border-slate-200 font-mono text-xs flex items-center gap-1.5 transition-all"
                >
                  <span>Instagram</span>
                  <span className="material-symbols-outlined text-[14px]">north_east</span>
                </a>
              </div>
            </div>

            {/* Trust & Confidentiality Assurance */}
            <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200 flex items-start gap-4">
              <span className="material-symbols-outlined text-blue-700 text-[26px] shrink-0 mt-0.5">
                lock_clock
              </span>
              <div className="flex flex-col gap-1">
                <span className="font-label-lg text-sm sm:text-base font-bold text-slate-900">
                  Strict Confidentiality Protocol
                </span>
                <p className="font-body-sm text-xs sm:text-sm text-slate-600 leading-relaxed">
                  All client specifications, proprietary IP, and architecture schemas are held under strict non-disclosure obligations. Mutual agreements executed within 6 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Touch Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
