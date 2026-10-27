import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGSAPAnimation<T extends HTMLElement = HTMLDivElement>(
  animationCallback: (context: gsap.Context, target: T | null) => void,
  dependencies: unknown[] = []
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const target = elementRef.current;
    if (!target) return;

    const ctx = gsap.context(() => {
      animationCallback(ctx, target);
    }, target);

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return elementRef;
}

export { gsap, ScrollTrigger };
