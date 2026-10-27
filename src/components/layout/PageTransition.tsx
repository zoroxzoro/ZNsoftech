import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Only scroll to top if not an anchor link
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  if (shouldReduceMotion) {
    return <main className="w-full pt-20 bg-surface min-h-screen">{children}</main>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="w-full pt-20 bg-surface min-h-screen"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};
