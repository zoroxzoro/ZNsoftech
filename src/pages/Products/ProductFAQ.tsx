import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const PRODUCT_FAQS: FAQItem[] = [
  {
    question:
      'Which ZNSoftech product is engineered for field operations and mobile workforce management?',
    answer: (
      <p>
        Smart Collect is our dedicated platform for workforce logistics and waste collection. It features dynamic job allocation, driver vehicle inspection checklists with defect tracking, mileage telemetry, zone mapping, statutory compliance certification, digital signatures, and automated invoicing.
      </p>
    ),
  },
  {
    question: 'Which platforms support CRM and customer relationship workflows?',
    answer: (
      <p>
        We provide three domain-specific CRM platforms: <strong>GrowthFactor CRM</strong> (for enterprise lead tracking, pipeline velocity, and commercial deals), <strong>Firebird Fitness CRM</strong> (for studio membership billing, workout regimens, and attendance), and <strong>Crowdr Sports CRM</strong> (for athletic supporter relationships, ticketing, and merchandising).
      </p>
    ),
  },
  {
    question:
      'Does ZNSoftech offer specialized event ticketing and sports management software?',
    answer: (
      <p>
        Yes. Our Crowdr suite includes <strong>Crowdr Sports CRM</strong> (built for athletic clubs, stadium reserved seating, and fan marketing) and <strong>Crowdr Event CRM</strong> (built for music festivals, arena promoters, dynamic gate check-ins, and high-throughput ticket checkouts).
      </p>
    ),
  },
  {
    question:
      'How can enterprise businesses inquire about deploying or tailoring a ZNSoftech product?',
    answer: (
      <p>
        Organizations can connect directly with our engineering architecture leads via our global dispatch line (+91 9717 786 450) or email (info@znsoftech.com). We conduct technical scoping sessions to discuss white-label deployment, multi-tenant cloud hosting, or custom feature expansion tailored to your operations.
      </p>
    ),
  },
];

export const ProductFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-[#F8F9FC] text-slate-900 py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-slate-200">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2 text-center items-center">
          <span className="font-mono text-label-mono-tag text-blue-700 tracking-widest uppercase font-bold">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
            Platform Architecture & Deployment Inquiries
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {PRODUCT_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `product-faq-heading-${index}`;
            const panelId = `product-faq-panel-${index}`;

            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 transition-shadow duration-200 hover:shadow-md"
              >
                <button
                  type="button"
                  id={headingId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(index)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors hover:bg-slate-50/70 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                >
                  <span className="font-headline-sm text-base sm:text-lg font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-blue-700 text-[24px] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
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
                      <div className="px-5 sm:px-6 pb-6 pt-0 text-slate-600 font-body-md text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-1 pt-3">
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
    </section>
  );
};

export default ProductFAQ;
