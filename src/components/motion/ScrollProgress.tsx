import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface ScrollProgressProps {
  containerRef?: React.RefObject<HTMLElement | null>;
  className?: string;
  barClassName?: string;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  containerRef,
  className = '',
  barClassName = '',
}) => {
  const [progress, setProgress] = useState<number>(0);
  const fallbackRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setProgress(100);
      return;
    }

    const handleScroll = () => {
      const target = containerRef?.current || fallbackRef.current?.parentElement;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const total = rect.height + windowHeight;
        const current = windowHeight - rect.top;
        const calculated = Math.min(Math.max((current / total) * 100, 0), 100);
        setProgress(calculated);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [containerRef, shouldReduceMotion]);

  return (
    <div
      ref={fallbackRef}
      className={`w-full relative h-1 bg-surface-container-high rounded-full overflow-hidden ${className}`}
    >
      <div
        className={`h-full bg-gradient-to-r from-primary via-tertiary to-secondary transition-all duration-300 ease-out ${barClassName}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
