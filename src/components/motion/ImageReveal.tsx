import React from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio = 'aspect-video',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={`overflow-hidden rounded-xl ${aspectRatio} ${containerClassName}`}>
        <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-xl ${aspectRatio} ${containerClassName}`}>
      <motion.div
        initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as const }}
        className="w-full h-full"
      >
        <motion.img
          src={src}
          alt={alt}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
          className={`w-full h-full object-cover ${className}`}
        />
      </motion.div>
    </div>
  );
};
