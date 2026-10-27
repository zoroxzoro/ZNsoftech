import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks, officeLocations, companyContact } from '../../data/navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface-variant border-t border-outline-variant/20">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 flex flex-col gap-12 sm:gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1: Brand & Ethos */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="ZNSoftech Logo" className="h-8 w-auto object-contain" />
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight uppercase">
                ZNSOFTECH
              </span>
            </Link>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-sm">
              Building Intelligent Digital Systems for a Smarter Future. We Build. We Market. We Scale.
            </p>
            <div className="flex items-center gap-3 text-on-surface pt-2">
              <a
                href="https://www.linkedin.com/company/znsoftech-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
              </a>
              <a
                href="https://x.com/znsoftech1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Corporate Channel"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
              <a
                href="https://www.facebook.com/znsoftech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Community"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">hub</span>
              </a>
              <a
                href="https://www.instagram.com/znsoftech_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Network"
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">podcasts</span>
              </a>
            </div>
          </div>

          {/* Column 2: Expertise */}
          <div className="flex flex-col gap-4">
            <span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider font-semibold">
              Expertise
            </span>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.expertise.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Information */}
          <div className="flex flex-col gap-4">
            <span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider font-semibold">
              Information
            </span>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.information.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Global Presence */}
          <div className="flex flex-col gap-4">
            <span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider font-semibold">
              Global Presence
            </span>
            <div className="flex flex-col gap-4">
              {officeLocations.map((loc, idx) => (
                <div key={idx} className="flex flex-col gap-0.5">
                  <span className="font-label-mono-tag text-label-mono-tag text-primary uppercase font-bold">
                    {loc.country}
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {loc.address}
                  </p>
                </div>
              ))}
              <div className="flex flex-col gap-1.5 pt-2 border-t border-outline-variant/20">
                <a
                  href={`mailto:${companyContact.email}`}
                  className="font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px] text-primary">mail</span>
                  {companyContact.email}
                </a>
                <a
                  href={`tel:${companyContact.phone.replace(/[^0-9+]/g, '')}`}
                  className="font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px] text-primary">call</span>
                  {companyContact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-outline-variant/20">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {companyContact.copyright}
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
