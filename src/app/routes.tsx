import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/Home'));
const AboutPage = lazy(() => import('../pages/About'));
const ServicesPage = lazy(() => import('../pages/Services'));
const PortfolioPage = lazy(() => import('../pages/Portfolio'));
const CaseStudyPage = lazy(() => import('../pages/CaseStudy'));
const ProductsPage = lazy(() => import('../pages/Products'));
const ContactPage = lazy(() => import('../pages/Contact'));

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-us" element={<Navigate to="/about" replace />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/our-work" element={<PortfolioPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
        <Route path="/case-study/:slug" element={<CaseStudyPage />} />
        <Route path="/omnia-performance" element={<Navigate to="/case-study/omnia-performance" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product" element={<Navigate to="/products" replace />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};
