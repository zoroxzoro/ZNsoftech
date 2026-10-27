import React from 'react';

const PROCESS_STEPS = [
  {
    step: '01',
    timeline: 'WITHIN 24 HOURS',
    title: 'Share Your Vision',
    desc: 'Submit your project scope, technical requirements, or architectural bottleneck. Our directors review feasibility and evaluate initial system constraints within one business day.',
  },
  {
    step: '02',
    timeline: '30-MIN CONSULTATION',
    title: 'Technical Discovery & Alignment',
    desc: 'A focused deep-dive session with senior engineering and domain directors to evaluate target architecture, tech stack compatibility, security mandates, and sprint timelines.',
  },
  {
    step: '03',
    timeline: 'SPRINT READY',
    title: 'Deterministic Roadmap & Proposal',
    desc: 'Receive a clear, transparent engineering proposal with milestones, technical deliverables, architectural diagrams, and zero-ambiguity budget scope ready for executive sign-off.',
  },
];

export const ContactProcess: React.FC = () => {
  return (
    <section className="w-full bg-[#F8F9FC] text-slate-900 py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 border-b border-slate-200">
      <div className="max-w-[1360px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-mono text-label-mono-tag text-blue-700 uppercase tracking-widest font-bold">
            04 // DETERMINISTIC PROCESS
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl text-slate-900 tracking-tight font-bold">
            What Happens After You Reach Out?
          </h2>
          <p className="font-body-lg text-base sm:text-lg text-slate-600">
            No generic sales funnels or endless qualification calls. Our process connects your leadership with domain architects immediately.
          </p>
        </div>

        {/* 3-Step Editorial Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROCESS_STEPS.map((item) => (
            <div
              key={item.step}
              className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-white shadow-sm border border-slate-200/90 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="font-headline-xl text-3xl sm:text-4xl text-blue-700 font-bold">
                  {item.step}
                </span>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-600 font-semibold border border-slate-200">
                  {item.timeline}
                </span>
              </div>
              <h3 className="font-headline-sm text-lg sm:text-xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="font-body-md text-sm sm:text-base text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactProcess;
