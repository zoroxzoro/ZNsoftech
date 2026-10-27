import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container } from '../../components/ui/Container';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 'why-znsoftech',
    question: 'Why choose ZNSoftech for custom software development?',
    answer: 'Unlike generic outsource shops, ZNSoftech functions as an embedded engineering leadership unit. We pair mathematical domain analysis, test-driven continuous integration, and contractual on-time guarantees with enterprise-ready Agentic AI integrations. Every line of code is reviewed, clean, documented, and transferable.'
  },
  {
    id: 'discovery-sprint',
    question: 'How does your Discovery Sprint prevent budget and scope creep?',
    answer: 'Our initial 1–2 week discovery sprint deconstructs your business requirements into precise technical specifications, database entities, and API contracts before coding begins. This eliminates 95% of scope ambiguity upfront, providing a transparent, predictable roadmap with fixed milestones.'
  },
  {
    id: 'legacy-modernization',
    question: 'Can you modernize our legacy systems without causing business downtime?',
    answer: 'Yes. We implement the proven Strangler Fig architectural pattern. Instead of a risky "big bang" overhaul, we incrementally extract services into modular microservices behind an API gateway. Your existing core continues serving customers undisturbed while new modern components take over safely.'
  },
  {
    id: 'post-launch',
    question: 'What happens after our product is launched to production?',
    answer: 'We provide continuous post-deployment warranties and flexible ongoing SLA tiers. This includes 24/7 telemetry monitoring, automated security patch rollouts, feature iteration sprints, and synchronous cloud infrastructure management.'
  },
  {
    id: 'ip-ownership',
    question: 'Do we retain full Intellectual Property (IP) of the software created?',
    answer: 'Absolutely. 100% of the source code, design assets, database models, algorithms, and documentation are transferred to your company. You have complete autonomy, zero proprietary licensing fees, and no vendor lock-in whatsoever.'
  }
];

export default function ServicesFAQ() {
  const [openId, setOpenId] = useState<string | null>('why-znsoftech');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full py-24 bg-[#10131b] relative border-t border-white/[0.04]">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col gap-3 text-center items-center">
            <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
              08 // TRANSPARENCY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-tight font-semibold">
              Questions Worth Asking.
            </h2>
            <p className="font-sans text-[#8892a6] text-base max-w-lg leading-relaxed">
              Clear answers about our development standards, engagement models, and engineering workflows.
            </p>
          </div>

          {/* Accordion List */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#181b23] border-[#6789ff]/40 shadow-lg'
                      : 'bg-[#181b23]/60 border-white/[0.04] hover:border-white/[0.12]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-display text-base sm:text-lg font-medium text-white transition-colors hover:text-[#b6c4ff]">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-[#6789ff]/20 text-[#b6c4ff]'
                          : 'bg-[#272a32] text-[#8892a6]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-white/[0.04]">
                          <p className="font-sans text-sm text-[#8892a6] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
