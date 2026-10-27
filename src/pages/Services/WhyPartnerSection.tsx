import { motion } from 'framer-motion';
import { CalendarCheck, Scale, Key, Clock } from 'lucide-react';
import { Container } from '../../components/ui/Container';

interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: typeof CalendarCheck;
}

const pillars: Pillar[] = [
  {
    id: 'ontime',
    title: '100% On-Time Delivery',
    description: 'Every sprint milestone is fixed, scoped, and contractually guaranteed. We pride ourselves on predictable execution rhythms.',
    icon: CalendarCheck
  },
  {
    id: 'penalty',
    title: 'Penalty Enforcement',
    description: 'We put skin in the game. Our client agreements include self-enforcing timeline penalties if we fail to hit agreed criteria.',
    icon: Scale
  },
  {
    id: 'ip',
    title: 'Full IP Ownership',
    description: 'Zero vendor lock-in. 100% of code, architecture diagrams, tests, and intellectual property belong strictly to you from day one.',
    icon: Key
  },
  {
    id: 'sync',
    title: '24/7 Global Sync',
    description: 'Dedicated engineering overlap across UK, US, Europe, and India. Rapid turnaround on critical changes and live support.',
    icon: Clock
  }
];

export default function WhyPartnerSection() {
  return (
    <section className="w-full py-24 bg-[#0b0e15] relative border-t border-white/[0.04]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col gap-3 text-center items-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
            07 // THE ZNSOFTECH DIFFERENCE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-tight font-semibold">
            More Than Developers. Your Technology Partner.
          </h2>
          <p className="font-sans text-[#8892a6] text-base leading-relaxed mt-1">
            We replace ambiguous agency engagements with strict contractual covenants and world-class technical accountability.
          </p>
        </div>

        {/* 4 Pillars of Confidence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 bg-[#181b23] border border-white/[0.06] rounded-xl flex flex-col gap-4 shadow-lg hover:border-[#6789ff]/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#272a32] flex items-center justify-center text-[#b6c4ff] group-hover:bg-[#6789ff]/20 transition-colors">
                  <IconComponent className="w-5 h-5 text-[#b6c4ff]" />
                </div>

                <h3 className="font-display text-lg font-semibold text-white group-hover:text-[#b6c4ff] transition-colors">
                  {pillar.title}
                </h3>

                <p className="font-sans text-sm text-[#8892a6] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
