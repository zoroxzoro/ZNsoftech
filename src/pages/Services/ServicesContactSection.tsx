import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, CheckCircle2, Shield, MapPin } from 'lucide-react';
import { Container } from '../../components/ui/Container';

export default function ServicesContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Agentic AI & Autonomous Systems',
    overview: '',
    nda: true
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="w-full py-24 bg-[#0b0e15] relative overflow-hidden border-t border-white/[0.04]" id="contact-inquiry">
      {/* Ambient glow backdrop */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full bg-[#6789ff]/10 blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Action Narrative & Global Presence (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-5">
              <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6789ff]" />
                GET STARTED TODAY
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight font-semibold leading-tight">
                Your Next Big Idea Deserves the Right Technology Partner.
              </h2>
              <p className="font-sans text-[#8892a6] text-base leading-relaxed">
                Book a no-obligation architectural consultation. We'll assess your stack, scope potential solutions, and provide an actionable strategy roadmap.
              </p>

              <div className="flex flex-col gap-4 pt-2">
                <a
                  href="tel:+919717786450"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#181b23] border border-white/[0.06] hover:border-[#6789ff]/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#272a32] flex items-center justify-center text-[#b6c4ff] group-hover:bg-[#6789ff]/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-[#8d90a0] uppercase tracking-wider">
                      DIRECT CALL
                    </span>
                    <span className="font-sans text-sm font-semibold text-white group-hover:text-[#b6c4ff] transition-colors">
                      +91 9717 786 450
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:info@znsoftech.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#181b23] border border-white/[0.06] hover:border-[#6789ff]/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#272a32] flex items-center justify-center text-[#b6c4ff] group-hover:bg-[#6789ff]/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-[#8d90a0] uppercase tracking-wider">
                      EMAIL INQUIRY
                    </span>
                    <span className="font-sans text-sm font-semibold text-white group-hover:text-[#b6c4ff] transition-colors">
                      info@znsoftech.com
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Verified Presence Chips */}
            <div className="p-5 rounded-xl bg-[#181b23] border border-white/[0.06] flex flex-col gap-3">
              <span className="font-mono text-xs text-[#b6c4ff] uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#6789ff]" />
                GLOBAL ENGINEERING OFFICES
              </span>
              <div className="flex flex-wrap gap-2 text-xs text-[#c4c5d7]">
                <span className="px-2.5 py-1 rounded bg-[#272a32] border border-white/[0.04]">🇬🇧 Cheshire, UK</span>
                <span className="px-2.5 py-1 rounded bg-[#272a32] border border-white/[0.04]">🇺🇸 Texas, USA</span>
                <span className="px-2.5 py-1 rounded bg-[#272a32] border border-white/[0.04]">🇮🇳 New Delhi, India HQ</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-[#181b23] border border-white/[0.08] rounded-2xl shadow-2xl relative">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#6789ff]/20 border border-[#6789ff] flex items-center justify-center text-[#b6c4ff]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Inquiry Received
                  </h3>
                  <p className="font-sans text-[#8892a6] text-sm max-w-md">
                    Thank you, {formData.name}. A ZNSoftech engineering lead has been notified and will review your technical requirements within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-[#272a32] text-xs font-mono text-[#b6c4ff] hover:bg-[#32353d] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-white">
                      Request Project Consultation
                    </h3>
                    <p className="font-sans text-xs text-[#8892a6]">
                      Direct architectural review from senior partners.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-xs text-[#8892a6] uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Mercer"
                        className="w-full px-4 py-3 rounded-lg bg-[#272a32] border border-white/[0.06] text-white placeholder:text-[#8d90a0]/60 text-sm focus:border-[#6789ff] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-xs text-[#8892a6] uppercase tracking-wider">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#272a32] border border-white/[0.06] text-white placeholder:text-[#8d90a0]/60 text-sm focus:border-[#6789ff] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-xs text-[#8892a6] uppercase tracking-wider">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-lg bg-[#272a32] border border-white/[0.06] text-white placeholder:text-[#8d90a0]/60 text-sm focus:border-[#6789ff] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-xs text-[#8892a6] uppercase tracking-wider">
                        Service Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#272a32] border border-white/[0.06] text-white text-sm focus:border-[#6789ff] focus:outline-none transition-colors"
                      >
                        <option>Agentic AI & Autonomous Systems</option>
                        <option>Custom SaaS & Software Development</option>
                        <option>Enterprise Applications & ERP</option>
                        <option>Mobile App Engineering (iOS & Android)</option>
                        <option>UI/UX & Experience Design</option>
                        <option>Digital Modernization & Automation</option>
                        <option>Performance Digital Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs text-[#8892a6] uppercase tracking-wider">
                      Project Overview & Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.overview}
                      onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                      placeholder="Tell us about your technical requirements, goals, and desired timelines..."
                      className="w-full px-4 py-3 rounded-lg bg-[#272a32] border border-white/[0.06] text-white placeholder:text-[#8d90a0]/60 text-sm focus:border-[#6789ff] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <input
                      id="services-nda-check"
                      type="checkbox"
                      checked={formData.nda}
                      onChange={(e) => setFormData({ ...formData, nda: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded bg-[#272a32] border-white/[0.2] text-[#6789ff] focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="services-nda-check" className="font-sans text-xs text-[#8892a6] cursor-pointer">
                      Request standard mutual NDA prior to technical architecture discussion.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#6789ff] to-[#4533a3] text-white font-display text-sm font-semibold flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(103,137,255,0.35)] hover:shadow-[0_0_32px_rgba(103,137,255,0.55)] transition-all duration-300 active:scale-[0.99]"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-center text-xs text-[#8d90a0] pt-1">
                    <Shield className="w-3.5 h-3.5 text-[#6789ff]" />
                    <span>Strict confidentiality guaranteed. We respond within 1 business day.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
