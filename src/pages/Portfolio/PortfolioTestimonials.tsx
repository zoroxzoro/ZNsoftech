import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Clock } from 'lucide-react';
import { Container } from '../../components/ui/Container';

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  initialsBg: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'nafis',
    quote: '“ZNSoftech is our preferred technical partner for application development. The team has consistently demonstrated high technical competency along with strong professional ethics and clear communication throughout our project cycles.”',
    name: 'Nafis A. Farooqi',
    role: 'Managing Director • Shartya Geosciences Pipe Systems Ltd.',
    initials: 'NF',
    initialsBg: 'bg-[#6789ff]/20 text-[#b6c4ff]'
  },
  {
    id: 'vijay',
    quote: '“ZNSoftech exemplified remarkable technical prowess and ethical standards. Best wishes for their future endeavors; we are genuinely looking forward to a lasting long-term partnership.”',
    name: 'Vijay Ranjan',
    role: 'Director • Boku Directory',
    initials: 'VR',
    initialsBg: 'bg-[#c8bfff]/20 text-[#c8bfff]'
  }
];

export const PortfolioTestimonials: React.FC = () => {
  return (
    <section className="w-full bg-[#0b0e15] py-20 lg:py-28 relative border-t border-white/[0.04]">
      <Container>
        {/* Top Title & Scale Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7 flex flex-col gap-2">
            <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
              05 // CLIENT TRUST & REPUTATION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
              Endorsed by Global Enterprise Leaders.
            </h2>
          </div>

          {/* Live Verified Trust Badges */}
          <div className="lg:col-span-5 flex flex-wrap gap-4 items-center lg:justify-end">
            <div className="p-3.5 bg-[#181b23] border border-white/[0.06] rounded-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#6789ff]/10 flex items-center justify-center text-[#b6c4ff]">
                <Clock className="w-5 h-5 text-[#6789ff]" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">12+ Years Heritage</p>
                <p className="text-[10px] text-[#8892a6] font-mono">Established 2012</p>
              </div>
            </div>

            <div className="p-3.5 bg-[#181b23] border border-white/[0.06] rounded-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">100% Delivery SLA</p>
                <p className="text-[10px] text-[#8892a6] font-mono">Guaranteed Handover</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Verified Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#111827] rounded-2xl p-8 sm:p-10 border border-white/[0.06] shadow-xl flex flex-col justify-between relative group hover:border-[#6789ff]/40 transition-colors"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1 text-[#6789ff]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="font-sans text-base sm:text-lg text-[#e0e2ed] italic leading-relaxed">
                  {t.quote}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm ${t.initialsBg}`}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-white">{t.name}</h4>
                  <p className="font-sans text-xs text-[#8892a6] mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PortfolioTestimonials;
