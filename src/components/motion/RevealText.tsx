import React from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface RevealTextProps {
  lines: (string | React.ReactNode)[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
}

export const RevealText: React.FC<RevealTextProps> = ({
  lines,
  className = '',
  lineClassName = '',
  delay = 0.1,
  stagger = 0.12,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        {lines.map((line, idx) => (
          <div key={idx} className={lineClassName}>
            {line}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClassName}`}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + idx * stagger,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </div>
  );
};
