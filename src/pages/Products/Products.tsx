import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ProductsHero } from './ProductsHero';
import { ProductsOverview } from './ProductsOverview';
import { ProductSmartCollect } from './ProductSmartCollect';
import { ProductFitnessCRM } from './ProductFitnessCRM';
import { ProductSportsCRM } from './ProductSportsCRM';
import { ProductGrowthFactor } from './ProductGrowthFactor';
import { ProductCrowdrEvents } from './ProductCrowdrEvents';
import { ProductExplorer } from './ProductExplorer';
import { ProductArchitecturePrinciples } from './ProductArchitecturePrinciples';
import { ProductSmartCollectDeepDive } from './ProductSmartCollectDeepDive';
import { ProductFAQ } from './ProductFAQ';
import { ProductCTA } from './ProductCTA';

export const ProductsPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title =
      'Products Suite | Purpose-Built Software Platforms | ZNSoftech';

    // Handle hash scrolling if navigating to an anchor like #smart-collect or #product-explorer
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
      {/* 1. Hero Section */}
      <ProductsHero />

      {/* 2. Products Strategic Overview */}
      <ProductsOverview />

      {/* 3. Featured Product 01: Smart Collect */}
      <ProductSmartCollect />

      {/* 4. Featured Product 02: Fitness CRM */}
      <ProductFitnessCRM />

      {/* 5. Featured Product 03: Crowdr Sports CRM */}
      <ProductSportsCRM />

      {/* 6. Featured Product 04: GrowthFactor CRM */}
      <ProductGrowthFactor />

      {/* 7. Featured Product 05: Crowdr Event Ticketing */}
      <ProductCrowdrEvents />

      {/* 8. Interactive Product Explorer */}
      <ProductExplorer />

      {/* 9. Cross-Product Architectural Principles */}
      <ProductArchitecturePrinciples />

      {/* 10. Operational Process Blueprint (Deep Dive) */}
      <ProductSmartCollectDeepDive />

      {/* 11. Platform Architecture & Deployment Inquiries (FAQ) */}
      <ProductFAQ />

      {/* 12. Closing Call to Action */}
      <ProductCTA />
    </div>
  );
};

export default ProductsPage;
