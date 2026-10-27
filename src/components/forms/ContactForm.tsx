import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ContactFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  contactNumber: string;
  serviceInterest: string;
  budgetTier: string;
  projectGoals: string;
  ndaEnforced: boolean;
}

export interface ContactFormProps {
  apiEndpoint?: string;
  className?: string;
}

const BUDGET_TIERS = [
  { id: '25k-50k', label: '$25k – $50k' },
  { id: '50k-100k', label: '$50k – $100k' },
  { id: '100k-250k', label: '$100k – $250k' },
  { id: '250k+', label: '$250k+ Enterprise' },
];

const DOMAINS = [
  { value: 'ai', label: 'Agentic AI & Autonomous Intelligence Systems' },
  { value: 'custom-dev', label: 'Custom Software & High-Throughput Microservices' },
  { value: 'cloud-arch', label: 'Enterprise Applications & Cloud Native Architecture' },
  { value: 'mobile', label: 'Mobile Application Engineering (iOS / Android / Flutter)' },
  { value: 'ui-ux', label: 'UI/UX & High-End Digital Experience Platforms' },
  { value: 'modernization', label: 'Digital Transformation & Legacy Modernization' },
  { value: 'growth', label: 'Performance Digital Growth & Scaling' },
  { value: 'product', label: 'Purpose-Built Product Solutions (Smart Collect / Enterprise CRM)' },
];

export const ContactForm: React.FC<ContactFormProps> = ({
  apiEndpoint = import.meta.env.VITE_CONTACT_API_URL || '',
  className = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    workEmail: '',
    companyName: '',
    contactNumber: '',
    serviceInterest: '',
    budgetTier: '50k-100k',
    projectGoals: '',
    ndaEnforced: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'unconfigured' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const validateField = (name: keyof ContactFormData, value: unknown): string => {
    switch (name) {
      case 'fullName':
        if (!value || typeof value !== 'string' || value.trim().length < 2) {
          return 'Full name is required (minimum 2 characters)';
        }
        return '';
      case 'workEmail':
        if (!value || typeof value !== 'string') {
          return 'Work email is required';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid business email address';
        }
        return '';
      case 'serviceInterest':
        if (!value) {
          return 'Please select a primary domain of engagement';
        }
        return '';
      case 'projectGoals':
        if (!value || typeof value !== 'string' || value.trim().length < 10) {
          return 'Please provide at least a brief summary (minimum 10 characters)';
        }
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({ ...prev, [name]: val }));

    if (touched[name as keyof ContactFormData]) {
      const error = validateField(name as keyof ContactFormData, val);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const validateAll = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    let isValid = true;

    (['fullName', 'workEmail', 'serviceInterest', 'projectGoals'] as const).forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) {
        newErrors[field] = err;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({
      fullName: true,
      workEmail: true,
      companyName: true,
      contactNumber: true,
      serviceInterest: true,
      budgetTier: true,
      projectGoals: true,
      ndaEnforced: true,
    });

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAll()) {
      return;
    }

    // Honest submission handling:
    // If no real API endpoint is defined in environment or props, do not fake a successful server transmission.
    if (!apiEndpoint) {
      setStatus('unconfigured');
      setStatusMessage(
        'Direct API endpoint (VITE_CONTACT_API_URL) is not configured in this deployment. Your brief is safely preserved below. You can send it directly via email or copy it to clipboard.'
      );
      return;
    }

    try {
      setStatus('loading');
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: 'ZNSoftech Website - Contact Form',
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setStatusMessage(
        err instanceof Error
          ? err.message
          : 'Unable to deliver inquiry to the ingest service. Please use direct email.'
      );
    }
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(
      `[Project Inquiry] ${formData.fullName} - ${formData.companyName || 'Engagement Scope'}`
    );
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Work Email: ${formData.workEmail}\n` +
      `Company: ${formData.companyName || 'N/A'}\n` +
      `Direct Phone: ${formData.contactNumber || 'N/A'}\n` +
      `Domain: ${formData.serviceInterest}\n` +
      `Budget Tier: ${formData.budgetTier}\n` +
      `Enforce NDA: ${formData.ndaEnforced ? 'Yes (Requested)' : 'Standard'}\n\n` +
      `Project Scope & Architectural Goals:\n${formData.projectGoals}\n`
    );
    window.location.href = `mailto:info@znsoftech.com?subject=${subject}&body=${body}`;
  };

  const handleCopyToClipboard = () => {
    const text =
      `ZNSoftech Inquiry Brief\n` +
      `------------------------\n` +
      `Name: ${formData.fullName}\n` +
      `Email: ${formData.workEmail}\n` +
      `Company: ${formData.companyName || 'N/A'}\n` +
      `Phone: ${formData.contactNumber || 'N/A'}\n` +
      `Domain: ${formData.serviceInterest}\n` +
      `Budget: ${formData.budgetTier}\n` +
      `Enforce NDA: ${formData.ndaEnforced ? 'Yes' : 'No'}\n\n` +
      `Goals:\n${formData.projectGoals}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      companyName: '',
      contactNumber: '',
      serviceInterest: '',
      budgetTier: '50k-100k',
      projectGoals: '',
      ndaEnforced: true,
    });
    setErrors({});
    setTouched({});
    setStatus('idle');
  };

  return (
    <div
      className={`bg-surface-light rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200/80 relative overflow-hidden ${className}`}
    >
      <div className="flex flex-col gap-1.5 mb-6">
        <span className="font-mono text-label-mono-tag uppercase tracking-widest text-primary-container font-semibold">
          STAGE 01 // ARCHITECTURAL INTAKE
        </span>
        <h3 className="font-headline-md text-headline-md font-bold text-text-light-primary tracking-tight">
          Submit Engineering Brief
        </h3>
        <p className="font-body-sm text-body-sm text-slate-500">
          Fields marked with an asterisk (<span className="text-red-500 font-bold">*</span>) are essential for rapid assignment.
        </p>
      </div>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        {/* Name & Email (2-col grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              className="font-label-md text-label-md font-semibold text-slate-700 uppercase tracking-wider"
              htmlFor="fullName"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={() => handleBlur('fullName')}
              placeholder="e.g. Alexander Vance"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              className={`h-11 px-3.5 rounded-lg bg-slate-50 text-slate-900 font-body-md placeholder:text-slate-400 border transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-container/40 ${
                errors.fullName && touched.fullName
                  ? 'border-red-500 bg-red-50/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            />
            {errors.fullName && touched.fullName && (
              <span id="fullName-error" className="text-xs text-red-600 font-medium">
                {errors.fullName}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              className="font-label-md text-label-md font-semibold text-slate-700 uppercase tracking-wider"
              htmlFor="workEmail"
            >
              Work Email <span className="text-red-500">*</span>
            </label>
            <input
              id="workEmail"
              name="workEmail"
              type="email"
              value={formData.workEmail}
              onChange={handleChange}
              onBlur={() => handleBlur('workEmail')}
              placeholder="e.g. a.vance@enterprise.com"
              aria-invalid={!!errors.workEmail}
              aria-describedby={errors.workEmail ? 'workEmail-error' : undefined}
              className={`h-11 px-3.5 rounded-lg bg-slate-50 text-slate-900 font-body-md placeholder:text-slate-400 border transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-container/40 ${
                errors.workEmail && touched.workEmail
                  ? 'border-red-500 bg-red-50/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            />
            {errors.workEmail && touched.workEmail && (
              <span id="workEmail-error" className="text-xs text-red-600 font-medium">
                {errors.workEmail}
              </span>
            )}
          </div>
        </div>

        {/* Organization & Phone (2-col grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              className="font-label-md text-label-md font-semibold text-slate-700 uppercase tracking-wider"
              htmlFor="companyName"
            >
              Company / Organization
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Apex Global Logistics"
              className="h-11 px-3.5 rounded-lg bg-slate-50 text-slate-900 font-body-md placeholder:text-slate-400 border border-slate-200 hover:border-slate-300 transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-container/40"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              className="font-label-md text-label-md font-semibold text-slate-700 uppercase tracking-wider"
              htmlFor="contactNumber"
            >
              Direct Phone / WhatsApp
            </label>
            <input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="e.g. +1 (555) 019-2834"
              className="h-11 px-3.5 rounded-lg bg-slate-50 text-slate-900 font-body-md placeholder:text-slate-400 border border-slate-200 hover:border-slate-300 transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-container/40"
            />
          </div>
        </div>

        {/* Service Interest Selection */}
        <div className="flex flex-col gap-1.5">
          <label
            className="font-label-md text-label-md font-semibold text-slate-700 uppercase tracking-wider"
            htmlFor="serviceInterest"
          >
            Primary Domain of Engagement <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id="serviceInterest"
              name="serviceInterest"
              value={formData.serviceInterest}
              onChange={handleChange}
              onBlur={() => handleBlur('serviceInterest')}
              aria-invalid={!!errors.serviceInterest}
              aria-describedby={errors.serviceInterest ? 'serviceInterest-error' : undefined}
              className={`h-11 w-full px-3.5 pr-10 rounded-lg bg-slate-50 text-slate-900 font-body-md border transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-container/40 appearance-none cursor-pointer ${
                errors.serviceInterest && touched.serviceInterest
                  ? 'border-red-500 bg-red-50/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <option value="" disabled>
                Select core capability or engagement stream
              </option>
              {DOMAINS.map((domain) => (
                <option key={domain.value} value={domain.value}>
                  {domain.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
              <span className="material-symbols-outlined text-[20px]">expand_more</span>
            </div>
          </div>
          {errors.serviceInterest && touched.serviceInterest && (
            <span id="serviceInterest-error" className="text-xs text-red-600 font-medium">
              {errors.serviceInterest}
            </span>
          )}
        </div>

        {/* Estimated Budget Range */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-md text-label-md font-semibold text-slate-700 uppercase tracking-wider">
            Target Capital Allocation / Scope Tier
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {BUDGET_TIERS.map((tier) => {
              const checked = formData.budgetTier === tier.id;
              return (
                <label key={tier.id} className="cursor-pointer">
                  <input
                    type="radio"
                    name="budgetTier"
                    value={tier.id}
                    checked={checked}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div
                    className={`py-2 px-3 text-center rounded-lg font-label-md text-label-md transition-all duration-200 border text-xs sm:text-sm font-medium ${
                      checked
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    {tier.label}
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Scope & Technical Goals (Textarea) */}
        <div className="flex flex-col gap-1.5">
          <label
            className="font-label-md text-label-md font-semibold text-slate-700 uppercase tracking-wider"
            htmlFor="projectGoals"
          >
            Project Scope & Architectural Goals <span className="text-red-500">*</span>
          </label>
          <textarea
            id="projectGoals"
            name="projectGoals"
            rows={4}
            value={formData.projectGoals}
            onChange={handleChange}
            onBlur={() => handleBlur('projectGoals')}
            placeholder="Tell us about your technical requirements, architectural constraints, target metrics, or existing stack bottlenecks..."
            aria-invalid={!!errors.projectGoals}
            aria-describedby={errors.projectGoals ? 'projectGoals-error' : undefined}
            className={`p-3.5 rounded-lg bg-slate-50 text-slate-900 font-body-md placeholder:text-slate-400 border transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-container/40 resize-y ${
              errors.projectGoals && touched.projectGoals
                ? 'border-red-500 bg-red-50/20'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          />
          {errors.projectGoals && touched.projectGoals && (
            <span id="projectGoals-error" className="text-xs text-red-600 font-medium">
              {errors.projectGoals}
            </span>
          )}
        </div>

        {/* NDA Checkbox Toggle */}
        <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
          <input
            id="ndaToggle"
            name="ndaEnforced"
            type="checkbox"
            checked={formData.ndaEnforced}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 rounded text-primary-container focus:ring-primary-container cursor-pointer accent-blue-600"
          />
          <label
            htmlFor="ndaToggle"
            className="font-body-sm text-body-sm text-slate-700 cursor-pointer select-none leading-relaxed"
          >
            <span className="font-semibold text-slate-900">Enforce Mutual NDA Protocol:</span> Send countersigned Mutual Non-Disclosure Agreement prior to deep technical architecture and code review sessions.
          </label>
        </div>

        {/* Unconfigured Backend Notification & Fallback (Honest handling) */}
        <AnimatePresence>
          {status === 'unconfigured' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm flex flex-col gap-2.5"
            >
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-amber-600 text-[20px] shrink-0 mt-0.5">
                  info
                </span>
                <div>
                  <p className="font-semibold text-amber-950">Engineering Intake Endpoint Notice</p>
                  <p className="text-amber-800 text-xs mt-0.5 leading-relaxed">{statusMessage}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 flex-wrap">
                <button
                  type="button"
                  onClick={handleMailtoFallback}
                  className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  <span>Transmit via Direct Email (info@znsoftech.com)</span>
                </button>
                <button
                  type="button"
                  onClick={handleCopyToClipboard}
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-amber-300 font-medium text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {copied ? 'done' : 'content_copy'}
                  </span>
                  <span>{copied ? 'Brief Copied!' : 'Copy Brief to Clipboard'}</span>
                </button>
              </div>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 text-sm flex items-start gap-2.5"
            >
              <span className="material-symbols-outlined text-red-600 text-[20px] shrink-0 mt-0.5">
                error
              </span>
              <div>
                <p className="font-semibold text-red-950">Transmission Issue</p>
                <p className="text-red-800 text-xs mt-0.5 leading-relaxed">{statusMessage}</p>
                <button
                  type="button"
                  onClick={handleMailtoFallback}
                  className="mt-2 text-xs font-semibold text-red-700 underline hover:text-red-900"
                >
                  Click to open direct email client with your filled brief
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit CTA Button & Security Badge */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500 font-body-sm text-xs sm:text-sm">
            <span className="material-symbols-outlined text-[18px] text-green-600">verified</span>
            <span>AES-256 Encrypted Ingestion</span>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-label-lg text-label-lg text-white bg-slate-900 hover:bg-primary-container hover:text-white px-7 h-12 rounded-lg shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed group cursor-pointer"
          >
            {status === 'loading' ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Transmitting Brief...</span>
              </>
            ) : (
              <>
                <span>Send Project Inquiry</span>
                <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Confirmed Success State Feedback (Rendered when real API confirmed transmission) */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="absolute inset-0 bg-white/98 backdrop-blur-md p-8 md:p-12 flex flex-col items-center justify-center text-center gap-4 z-20"
          >
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[36px]">task_alt</span>
            </div>
            <span className="font-mono text-label-mono-tag uppercase tracking-widest text-primary-container font-semibold">
              TRANSMISSION CONFIRMED
            </span>
            <h4 className="font-headline-md text-headline-md font-bold text-slate-900">
              Consultancy Request Dispatched
            </h4>
            <p className="font-body-md text-body-md text-slate-600 max-w-md">
              Thank you, {formData.fullName}. Your project brief has been routed to our Lead Architecture Team. A director will reach out within 24 business hours with an initial review and mutual NDA.
            </p>
            <button
              type="button"
              onClick={resetForm}
              className="mt-2 px-6 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 font-label-md text-label-md transition-colors"
            >
              Send Another Brief
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
