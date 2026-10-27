import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found | ZNSoftech';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-surface-container-lowest text-on-surface px-4 sm:px-6 md:px-12 relative overflow-hidden py-20">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6 relative z-10">
        <span className="font-mono text-label-mono-tag tracking-widest text-primary uppercase font-semibold">
          SYSTEM FAULT // 404
        </span>

        <h1 className="font-headline-xl text-6xl sm:text-7xl font-bold text-on-surface tracking-tight">
          404
        </h1>

        <h2 className="font-headline-md text-2xl sm:text-3xl text-on-surface font-semibold">
          Coordinate Not Found in Operational Mesh
        </h2>

        <p className="font-body-lg text-sm sm:text-base text-text-muted leading-relaxed">
          The requested architectural route or page resource does not exist or has been relocated to another service node.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center h-12 px-7 bg-primary-container text-on-primary-container font-headline-sm text-label-lg font-semibold rounded-lg hover:bg-primary hover:text-on-primary active:scale-95 transition-all duration-300 shadow-xl shadow-primary-container/20 group"
          >
            <span>Return to Homepage</span>
            <span className="material-symbols-outlined ml-2 text-[18px] transition-transform duration-200 group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>

          <Link
            to="/products"
            className="inline-flex items-center justify-center h-12 px-6 bg-surface-container text-on-surface font-headline-sm text-label-lg font-semibold rounded-lg hover:bg-surface-container-high border border-outline-variant/30 active:scale-95 transition-all duration-300"
          >
            Explore Products
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-12 px-6 bg-surface-container text-on-surface font-headline-sm text-label-lg font-semibold rounded-lg hover:bg-surface-container-high border border-outline-variant/30 active:scale-95 transition-all duration-300"
          >
            Contact Dispatch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
