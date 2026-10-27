import React from 'react';
import { FadeIn } from '../../components/motion/FadeIn';

export const CapabilityDeepDive: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-16 lg:py-24 bg-surface relative overflow-hidden" id="capability-deep-dive">
      {/* Subtle gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-container-low to-surface pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12 relative z-10">
        <FadeIn direction="up" distance={20} className="flex flex-col gap-2">
          <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase tracking-widest font-semibold">
            02 // CAPABILITY DEEP DIVE
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight">
            Intelligent Systems. Meaningful Outcomes.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Deep Technical Narrative (6 Cols) */}
          <FadeIn direction="up" distance={24} className="lg:col-span-6 flex flex-col gap-6">
            <p className="font-body-xl text-body-xl text-on-surface font-medium leading-relaxed">
              Generic chatbots belong in the past. ZNSoftech deploys autonomous Agentic AI
              architectures capable of decomposing multi-step strategic objectives into real-world
              code, queries, and business executions.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              By combining stateful cognitive loops with strict deterministic safety guardrails, our
              autonomous systems monitor, reason, and take action within existing enterprise software
              ecosystems without needing constant manual prompt intervention.
            </p>

            {/* 3 Value Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="p-4 bg-surface-container rounded-lg flex flex-col gap-1 border border-outline-variant/20">
                <span className="font-headline-md text-headline-md text-primary font-bold">85%</span>
                <span className="font-label-mono-tag text-label-mono-tag text-on-surface uppercase font-semibold">
                  Overhead Cut
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Automated triage & action dispatch
                </span>
              </div>
              <div className="p-4 bg-surface-container rounded-lg flex flex-col gap-1 border border-outline-variant/20">
                <span className="font-headline-md text-headline-md text-primary font-bold">&lt;35ms</span>
                <span className="font-label-mono-tag text-label-mono-tag text-on-surface uppercase font-semibold">
                  Edge Inference
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Local runtime vector retrieval
                </span>
              </div>
              <div className="p-4 bg-surface-container rounded-lg flex flex-col gap-1 border border-outline-variant/20">
                <span className="font-headline-md text-headline-md text-primary font-bold">100%</span>
                <span className="font-label-mono-tag text-label-mono-tag text-on-surface uppercase font-semibold">
                  Deterministic
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Strict sandboxed tool constraints
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact-inquiry"
                className="inline-flex items-center gap-2 font-label-lg text-label-lg px-6 py-3 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary transition-all font-semibold shadow-md"
              >
                <span>Schedule Architecture Review</span>
                <span className="material-symbols-outlined text-[18px]">terminal</span>
              </a>
            </div>
          </FadeIn>

          {/* Right: Interactive Architecture Widget (6 Cols) */}
          <FadeIn direction="up" distance={24} delay={0.15} className="lg:col-span-6">
            <div className="bg-surface-container p-6 lg:p-7 rounded-xl shadow-2xl flex flex-col gap-5 border border-outline-variant/30">
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-accent-red/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="font-label-mono-tag text-label-mono-tag text-on-surface-variant ml-2 font-semibold">
                    AGENTIC EXECUTION PIPELINE
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-mono-tag text-label-mono-tag font-bold border border-primary/20">
                  GUARDRAILS: ACTIVE
                </span>
              </div>

              {/* Pipeline 4-Stage Node Visualizer */}
              <div className="flex flex-col gap-3">
                {/* Stage 1 */}
                <div className="p-3 bg-surface-container-high rounded-lg flex items-center justify-between border border-outline-variant/15">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-label-mono-tag text-label-mono-tag text-primary font-bold">
                      01
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                        Goal Formulation
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Intent extraction & constraint boundaries
                      </span>
                    </div>
                  </div>
                  <span className="font-label-mono-tag text-label-mono-tag text-primary font-bold">
                    COMPLETE // 2ms
                  </span>
                </div>

                {/* Stage 2 */}
                <div className="p-3 bg-surface-container-high rounded-lg flex items-center justify-between border border-outline-variant/15">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-label-mono-tag text-label-mono-tag text-primary font-bold">
                      02
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                        Cognitive Reasoning
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Vector retrieval & step-by-step hypothesis
                      </span>
                    </div>
                  </div>
                  <span className="font-label-mono-tag text-label-mono-tag text-primary font-bold">
                    RESOLVED // 14ms
                  </span>
                </div>

                {/* Stage 3 */}
                <div className="p-3 bg-surface-container-high rounded-lg flex items-center justify-between border border-outline-variant/15">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-label-mono-tag text-label-mono-tag text-primary font-bold">
                      03
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                        Tool Execution
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Sandboxed API invoke & transactional SQL
                      </span>
                    </div>
                  </div>
                  <span className="font-label-mono-tag text-label-mono-tag text-primary flex items-center gap-1 font-bold">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    DISPATCHED
                  </span>
                </div>

                {/* Stage 4 */}
                <div className="p-3 bg-surface-container-high rounded-lg flex items-center justify-between border border-outline-variant/15">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-label-mono-tag text-label-mono-tag text-primary font-bold">
                      04
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                        Verification Loop
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Heuristic validation & audit checkpoint
                      </span>
                    </div>
                  </div>
                  <span className="font-label-mono-tag text-label-mono-tag text-outline font-bold">
                    VERIFIED 100%
                  </span>
                </div>
              </div>

              {/* Visual Graph Telemetry Strip */}
              <div className="p-3 bg-surface-container-lowest rounded-lg flex items-center justify-between font-label-mono-tag text-label-mono-tag border border-outline-variant/20">
                <span className="text-on-surface-variant">
                  Safety Evaluation Score: <strong className="text-primary font-bold">99.8 / 100</strong>
                </span>
                <span className="text-on-surface-variant">
                  Token Efficiency: <strong className="text-on-surface font-bold">94.2%</strong>
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
