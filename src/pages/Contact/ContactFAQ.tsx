import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFAQItem {
  question: string;
  answer: string;
}

const CONTACT_FAQS: ContactFAQItem[] = [
  {
    question: 'What information is most helpful to include in an initial inquiry?',
    answer:
      'Sharing a high-level summary of your core objectives, existing tech stack (if modernizing an active system), target users, timeline expectations, and approximate investment tier enables our technical directors to formulate actionable architectural feedback before the first discovery call.',
  },
  {
    question: 'Can we discuss an early-stage concept or proof-of-concept (PoC)?',
    answer:
      'Yes. Many enterprise initiatives start with a structured 3- to 6-week Proof of Concept (PoC) or rapid MVP to validate technical feasibility, latency constraints, or agentic workflow models before full-scale enterprise rollout.',
  },
  {
    question: 'How does ZNSoftech handle confidentiality and Intellectual Property (IP)?',
    answer:
      'We operate under a strict 100% Client IP Ownership model. All custom codebases, architectural designs, trained models, data pipelines, and assets created during engagements belong wholly to the client. Mutual NDAs are executed prior to any proprietary disclosure.',
  },
  {
    question: 'Can you modernize or audit an existing live production codebase?',
    answer:
      'Frequently. Our legacy transformation team conducts comprehensive code audits, vulnerability scans, microservice decoupling plans, and database optimization assessments with zero scheduled downtime for live production environments.',
  },
  {
    question: 'How do your teams coordinate across multiple time zones?',
    answer:
      'With offices in the UK (Daresbury), North America (Texas), and India (New Delhi), we structure engineering pods to guarantee at least 4 to 6 hours of synchronous workday overlap with client teams in the US, Europe, and Asia-Pacific.',
  },
];

export const ContactFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-surface-container-lowest text-on-surface py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-outline-variant/20">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Side: Header & Support Contact */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
                05 // FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-bold tracking-tight">
                Before We Get Started.
              </h2>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Common questions regarding our NDA process, intellectual property rights, engagement models, and global coordination.
              </p>
            </div>

            <div className="pt-2">
              <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-2">
                <span className="font-label-md text-sm font-bold text-on-surface">
                  Have a unique legal or security question?
                </span>
                <p className="font-body-sm text-xs text-text-muted leading-relaxed">
                  Speak directly with our legal and security compliance team.
                </p>
                <a
                  href="mailto:security@znsoftech.com"
                  className="font-mono text-xs text-primary hover:text-cyan-glow transition-colors inline-flex items-center gap-1.5 mt-1 font-semibold"
                >
                  <span>security@znsoftech.com</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion List */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {CONTACT_FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              const headingId = `contact-faq-heading-${index}`;
              const panelId = `contact-faq-panel-${index}`;

              return (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-surface-container-low border border-outline-variant/20 overflow-hidden transition-colors hover:border-primary/30"
                >
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(index)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4 hover:bg-surface-container/60 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    <span className="font-headline-sm text-base sm:text-lg font-bold text-on-surface pr-2">
                      {faq.question}
                    </span>
                    <span
                      className={`material-symbols-outlined text-primary text-[24px] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_circle_down
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={headingId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-0 text-on-surface-variant font-body-md text-sm sm:text-base leading-relaxed border-t border-outline-variant/15 mt-1 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
