import { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Layers, Palette, Code2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Container } from '../../components/ui/Container';

interface Step {
  id: string;
  number: string;
  title: string;
  timeline: string;
  description: string;
  icon: typeof Compass;
  deliverables: string[];
}

const steps: Step[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover & Understand',
    timeline: 'WEEK 1–2',
    description: 'Deep domain requirements extraction, legacy dependency mapping, architectural feasibility, and stakeholder alignment.',
    icon: Compass,
    deliverables: ['Domain Requirements Doc', 'Architecture Feasibility', 'Risk Matrix']
  },
  {
    id: 'plan',
    number: '02',
    title: 'Plan & Strategize',
    timeline: 'WEEK 2–3',
    description: 'Technical specifications, API contract definitions, cloud topology selection, and low-latency interactive wireframes.',
    icon: Layers,
    deliverables: ['OpenAPI Contracts', 'Cloud Infrastructure Spec', 'Sprint Milestones']
  },
  {
    id: 'design',
    number: '03',
    title: 'Design & Architect',
    timeline: 'WEEK 4–5',
    description: 'Clean domain architecture, relational and vector database schema modeling, and full design token system rollout.',
    icon: Palette,
    deliverables: ['Obsidian Design System', 'ERD & Vector Schemas', 'Interactive Prototypes']
  },
  {
    id: 'develop',
    number: '04',
    title: 'Develop & Integrate',
    timeline: 'WEEK 6–10',
    description: 'Test-driven CI/CD implementation, modular code reviews, autonomous agent tool bindings, and bi-weekly release cycles.',
    icon: Code2,
    deliverables: ['Bi-Weekly Demo Deployments', '100% Type-Safe Codebase', 'Automated Test Suite']
  },
  {
    id: 'launch',
    number: '05',
    title: 'Test, Launch & Support',
    timeline: 'CONTINUOUS',
    description: 'Penetration auditing, zero-downtime blue/green deployment, 24/7 proactive telemetry monitoring, and SLA covenants.',
    icon: ShieldCheck,
    deliverables: ['Zero-Downtime Deployment', '24/7 Telemetry Overlap', 'Self-Enforcing SLAs']
  }
];

export default function ServicesTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="w-full py-24 bg-[#0b0e15] relative overflow-hidden border-t border-white/[0.04]" id="process-section">
      {/* Background ambient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
              05 // METHODICAL SPRINTS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-tight font-semibold">
              From First Conversation to Final Delivery.
            </h2>
          </div>
          <p className="font-sans text-[#8892a6] text-base max-w-sm leading-relaxed">
            A disciplined, zero-ambiguity five-stage pipeline designed for predictability, transparent milestones, and zero-defect execution.
          </p>
        </div>

        {/* Process Stepper Progress Bar Indicator */}
        <div className="w-full mb-12">
          <div className="w-full h-1.5 bg-[#1d2027] rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#6789ff] to-[#b6c4ff] rounded-full"
              initial={{ width: '20%' }}
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="flex justify-between items-center mt-3 text-xs font-mono text-[#8892a6]">
            <span>PHASE {activeStep + 1} OF 5</span>
            <span className="text-[#b6c4ff] font-semibold">{steps[activeStep].timeline}</span>
          </div>
        </div>

        {/* 5-Stage Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <motion.div
                key={step.id}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                tabIndex={0}
                role="button"
                aria-label={`Step ${step.number}: ${step.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveStep(idx);
                  }
                }}
                className={`flex flex-col justify-between p-5 rounded-xl border transition-all duration-300 cursor-pointer text-left ${
                  isActive
                    ? 'bg-[#181b23] border-[#6789ff]/50 shadow-[0_0_24px_rgba(103,137,255,0.15)] ring-1 ring-[#6789ff]/30'
                    : isCompleted
                    ? 'bg-[#10131b]/80 border-white/[0.08] hover:border-white/[0.18]'
                    : 'bg-[#10131b]/40 border-white/[0.04] hover:border-white/[0.12] opacity-75 hover:opacity-100'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-display text-2xl font-bold transition-colors ${
                      isActive ? 'text-[#b6c4ff]' : isCompleted ? 'text-white/80' : 'text-white/40'
                    }`}>
                      {step.number}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#6789ff]/20 text-[#b6c4ff]' : 'bg-[#1d2027] text-[#8892a6]'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className={`font-display text-base font-semibold mb-2 transition-colors ${
                    isActive ? 'text-white' : 'text-[#c4c5d7]'
                  }`}>
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs text-[#8892a6] leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex flex-col gap-2">
                  <span className="font-mono text-[11px] text-[#b6c4ff] font-semibold">
                    {step.timeline}
                  </span>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col gap-1 mt-1"
                    >
                      {step.deliverables.map((deliv) => (
                        <div key={deliv} className="flex items-center gap-1.5 text-[11px] text-[#e0e2ed]">
                          <CheckCircle2 className="w-3 h-3 text-[#6789ff] flex-shrink-0" />
                          <span className="truncate">{deliv}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
