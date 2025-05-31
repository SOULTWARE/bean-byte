import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface AnimationConfig {
  y?: number;
  opacity?: number;
  scale?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
}

export const useGsapAnimation = <T extends Element>(
  elementRef: React.RefObject<T | null>,
  config: AnimationConfig = {},
  trigger?: string | Element
) => {
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      y: config.y ?? 50,
      scale: config.scale ?? 0.95,
    });

    const defaults = {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: 0,
      ease: 'power3.out',
      stagger: 0.2,
    };

    const finalConfig = { ...defaults, ...config };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger || element,
        start: 'top bottom-=100',
        end: 'bottom center',
        toggleActions: 'play none none none',
        once: true,
      },
    });

    tl.to(element, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: finalConfig.duration,
      delay: finalConfig.delay,
      ease: finalConfig.ease,
      stagger: finalConfig.stagger,
      onComplete: () => {
        // Ensure the element stays visible after animation
        gsap.set(element, { clearProps: 'all' });
      },
    });

    // Cleanup function
    return () => {
      // Kill the timeline and its ScrollTrigger
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [elementRef, config, trigger]);
};
