import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ContactHero } from './ContactHero';
import { ContactSection } from './ContactSection';
import { DirectChannelsSection } from './DirectChannelsSection';
import { GlobalHubsSection } from './GlobalHubsSection';
import { ContactProcess } from './ContactProcess';
import { ContactFAQ } from './ContactFAQ';
import { ContactClosingCTA } from './ContactClosingCTA';

export const ContactPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title =
      'Contact Us | Global Engineering Consultancy | ZNSoftech';

    // Smoothly scroll to anchor if present (e.g., #inquiry-form-section)
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="flex flex-col w-full bg-surface text-on-surface">
      {/* 1. Contact Hero */}
      <ContactHero />

      {/* 2. Main Contact Section (Context + High-Touch Form) */}
      <ContactSection />

      {/* 3. Fast-Track Direct Channels */}
      <DirectChannelsSection />

      {/* 4. Global Hubs & Physical Footprint */}
      <GlobalHubsSection />

      {/* 5. What Happens After You Reach Out */}
      <ContactProcess />

      {/* 6. Frequently Asked Questions */}
      <ContactFAQ />

      {/* 7. Closing Accent Banner */}
      <ContactClosingCTA />
    </div>
  );
};

export default ContactPage;
