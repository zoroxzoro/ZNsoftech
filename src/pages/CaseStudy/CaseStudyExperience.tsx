import React from 'react';
import { Timer, Smartphone, Monitor } from 'lucide-react';
import { Container } from '../../components/ui/Container';

export const CaseStudyExperience: React.FC = () => {
  return (
    <section className="w-full bg-[#0b0e15] py-20 lg:py-28 relative border-t border-white/[0.04]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
              Interface Ergonomics
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight font-bold">
              Designed for High Intensity Execution
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#8892a6] max-w-md leading-relaxed">
            Precision UI systems built to operate seamlessly under sweat, extreme strain, and cognitive fatigue.
          </p>
        </div>

        {/* Viewport Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Desktop Periodization View (Col 7) */}
          <div className="lg:col-span-7 bg-[#181b23] p-7 sm:p-9 rounded-2xl border border-white/[0.06] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.04]">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-[#6789ff]" />
                  <span className="font-mono text-xs text-[#6789ff] uppercase font-semibold">
                    VIEW 01 // DESKTOP WEB
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#8892a6]">
                  COACH MASTER PLANNER
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl text-white font-semibold mb-2">
                Comprehensive Periodization Planner
              </h3>
              <p className="font-sans text-sm text-[#8892a6] mb-6 leading-relaxed">
                Interactive 12-week macrocycle orchestrator displaying combined fatigue modeling, running volume tapers, and peaking curves for hybrid competition days.
              </p>

              {/* Mock Desktop UI Component */}
              <div className="bg-[#111827] rounded-xl p-5 border border-white/[0.04] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-medium">MACROCYCLE: HYROX WORLD CHAMPIONSHIPS</span>
                  <span className="text-[#6789ff] font-bold">WEEK 08 / 12 (PEAK PHASE)</span>
                </div>

                <div className="grid grid-cols-6 gap-2 text-center text-xs">
                  <div className="bg-[#181b23] p-2.5 rounded-lg border border-white/[0.04]">
                    <span className="text-[#8892a6] block text-[10px] font-mono">W07</span>
                    <span className="font-bold text-white text-xs sm:text-sm">112 km</span>
                  </div>
                  <div className="bg-[#6789ff]/20 text-[#b6c4ff] p-2.5 rounded-lg border border-[#6789ff]/40">
                    <span className="block text-[10px] font-mono text-[#b6c4ff]">W08 (NOW)</span>
                    <span className="font-bold text-xs sm:text-sm">128 km</span>
                  </div>
                  <div className="bg-[#181b23] p-2.5 rounded-lg border border-white/[0.04]">
                    <span className="text-[#8892a6] block text-[10px] font-mono">W09</span>
                    <span className="font-bold text-white text-xs sm:text-sm">120 km</span>
                  </div>
                  <div className="bg-[#181b23] p-2.5 rounded-lg border border-white/[0.04]">
                    <span className="text-[#8892a6] block text-[10px] font-mono">W10</span>
                    <span className="font-bold text-white text-xs sm:text-sm">95 km</span>
                  </div>
                  <div className="bg-[#181b23] p-2.5 rounded-lg border border-white/[0.04]">
                    <span className="text-[#8892a6] block text-[10px] font-mono">W11 (TAPER)</span>
                    <span className="font-bold text-[#BAE6FD] text-xs sm:text-sm">68 km</span>
                  </div>
                  <div className="bg-[#181b23] p-2.5 rounded-lg border border-white/[0.04]">
                    <span className="text-[#8892a6] block text-[10px] font-mono">W12 (RACE)</span>
                    <span className="font-bold text-[#b6c4ff] text-xs sm:text-sm">COMPETE</span>
                  </div>
                </div>

                {/* Stress Curve Bar Visualizer */}
                <div className="pt-2">
                  <div className="flex justify-between text-[11px] font-mono text-[#8892a6] mb-2">
                    <span>SYSTEMIC LOAD STRESS INDEX</span>
                    <span className="text-[#BAE6FD] font-semibold">780 TSS / WEEK</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-20 w-full pt-2">
                    {[45, 60, 50, 75, 80, 85, 90, 100, 80, 55, 35, 95].map((val, i) => (
                      <div
                        key={i}
                        style={{ height: `${val}%` }}
                        className={`flex-1 rounded-t transition-all ${
                          i === 7
                            ? 'bg-[#6789ff] shadow-[0_0_12px_rgba(103,137,255,0.6)]'
                            : i >= 10
                            ? 'bg-[#BAE6FD]/60'
                            : 'bg-[#6789ff]/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-[#8892a6]">
              <span>Dynamic Volume Modeler v3.4</span>
              <span className="text-[#b6c4ff] font-semibold">100% Real-time Reactive</span>
            </div>
          </div>

          {/* Mobile Workout Logger View (Col 5) */}
          <div className="lg:col-span-5 bg-[#181b23] p-7 sm:p-9 rounded-2xl border border-white/[0.06] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.04]">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#BAE6FD]" />
                  <span className="font-mono text-xs text-[#BAE6FD] uppercase font-semibold">
                    VIEW 02 // ATHLETE MOBILE
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#8892a6]">
                  IN-SESSION TRACKER
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl text-white font-semibold mb-2">
                In-Session Active Logger
              </h3>
              <p className="font-sans text-sm text-[#8892a6] mb-6 leading-relaxed">
                High-contrast, tap-friendly execution interface built for gloved or sweaty hands with automatic rest timers and velocity inputs.
              </p>

              {/* Mock Mobile UI Card */}
              <div className="max-w-xs mx-auto bg-[#111827] rounded-2xl p-5 border border-white/[0.06] shadow-inner space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#6789ff] font-semibold">EXERCISE 03 OF 06</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-[#181b23] text-white">
                    SET 3 / 4
                  </span>
                </div>

                <div>
                  <h4 className="font-display text-base font-semibold text-white">
                    Safety Bar Squat
                  </h4>
                  <p className="font-mono text-xs text-[#8892a6] mt-0.5">
                    TARGET: 160 KG × 5 REPS @ RPE 8
                  </p>
                </div>

                {/* Rep & Load Quick Log */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#181b23] p-3 rounded-xl text-center border border-white/[0.04]">
                    <span className="text-[10px] font-mono text-[#8892a6] block uppercase">
                      LOAD
                    </span>
                    <span className="font-display text-2xl font-bold text-white">160</span>
                    <span className="text-[10px] font-mono text-[#8892a6] block">KG</span>
                  </div>
                  <div className="bg-[#181b23] p-3 rounded-xl text-center border border-white/[0.04]">
                    <span className="text-[10px] font-mono text-[#8892a6] block uppercase">
                      REPS
                    </span>
                    <span className="font-display text-2xl font-bold text-[#6789ff]">5</span>
                    <span className="text-[10px] font-mono text-[#8892a6] block">COMPLETED</span>
                  </div>
                </div>

                {/* Large Rest Timer Button */}
                <button
                  type="button"
                  className="w-full py-3 bg-[#6789ff] text-white font-mono text-xs uppercase tracking-wider rounded-xl font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(103,137,255,0.35)] active:scale-98 transition-all"
                >
                  <Timer className="w-4 h-4" />
                  <span>REST TIMER: 02:30</span>
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.04] text-center text-xs font-mono text-[#8892a6]">
              Zero tap latency // Rapid RPE entry
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudyExperience;
