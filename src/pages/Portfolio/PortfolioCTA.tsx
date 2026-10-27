import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Container } from '../../components/ui/Container';

export const PortfolioCTA: React.FC = () => {
  return (
    <section className="w-full bg-[#181b23] text-white py-20 lg:py-28 relative overflow-hidden border-t border-white/[0.04]">
      {/* Ambient Luminous Highlight */}
      <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-[#6789ff]/15 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="bg-[#1A2234] rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/[0.08] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Conversion Message (Cols 1-8) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
                NEXT STEP // INITIATE COLLABORATION
              </span>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight leading-tight">
                Your Project Could Be Our Next Success Story.
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#c4c5d7] max-w-2xl leading-relaxed">
                Have an ambitious vision, legacy friction, or complex enterprise roadmap? Let us explore how precision engineering and high-availability digital architecture can deliver measurable impact.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-[#6789ff] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#b6c4ff] hover:text-[#00164f] shadow-[0_0_40px_-10px_rgba(103,137,255,0.4)] transition-all font-semibold group"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-[#272a32] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#363941] transition-colors font-medium border border-white/[0.06]"
                >
                  <span>Explore Full Service Portfolio</span>
                </Link>
              </div>
            </div>

            {/* Direct Verified Contact Column (Cols 9-12) */}
            <div className="lg:col-span-4 bg-[#111827]/80 backdrop-blur-md rounded-xl p-6 sm:p-8 flex flex-col gap-5 border border-white/[0.06]">
              <h3 className="font-display text-lg font-semibold text-white">
                Direct Contact Lines
              </h3>

              <div className="flex flex-col gap-4 font-sans text-sm">
                <a
                  href="tel:+919717786450"
                  className="flex items-center gap-3 text-[#c4c5d7] hover:text-[#b6c4ff] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#272a32] flex items-center justify-center text-[#b6c4ff] group-hover:bg-[#6789ff]/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8892a6] uppercase font-mono">Global Desk</p>
                    <p className="font-semibold text-white">+91 9717 786 450</p>
                  </div>
                </a>

                <a
                  href="mailto:info@znsoftech.com"
                  className="flex items-center gap-3 text-[#c4c5d7] hover:text-[#b6c4ff] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#272a32] flex items-center justify-center text-[#b6c4ff] group-hover:bg-[#6789ff]/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8892a6] uppercase font-mono">Engineering Inquiries</p>
                    <p className="font-semibold text-white">info@znsoftech.com</p>
                  </div>
                </a>

                <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-[#8892a6] flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5 text-[#b6c4ff] font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#6789ff]" />
                    <span>GLOBAL PRESENCE</span>
                  </div>
                  <p>UK: Cheshire (Sci-Tech Daresbury)</p>
                  <p>USA: Irving, Texas 75062</p>
                  <p>India HQ: Jasola Vihar, New Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioCTA;
