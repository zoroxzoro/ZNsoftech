import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ProjectImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export const ProjectImageReveal: React.FC<ProjectImageRevealProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio = 'aspect-[16/10]',
  priority = false
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={`overflow-hidden rounded-xl relative ${containerClassName} ${aspectRatio}`}>
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          className={`w-full h-full object-cover ${className}`}
        />
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-xl relative ${containerClassName} ${aspectRatio}`}>
      <motion.div
        initial={{ clipPath: 'inset(10% 0% 10% 0%)', opacity: 0 }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
        className="w-full h-full"
      >
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03] ${className}`}
        />
      </motion.div>
    </div>
  );
};

export default ProjectImageReveal;
