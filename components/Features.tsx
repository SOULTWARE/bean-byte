"use client";

import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    title: "Locally Roasted Beans",
    description: "We partner with local roasters to bring you the freshest, most flavorful coffee beans, roasted in small batches for optimal taste.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "High-Speed Internet",
    description: "Enjoy our enterprise-grade fiber connection with dedicated bandwidth for developers who need reliable connectivity.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    title: "Tech Community Events",
    description: "Weekly meetups, coding workshops, and tech talks hosted by industry experts. Join our thriving community of developers.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Workspaces",
    description: "Ergonomic seating, plenty of power outlets, and both collaborative and quiet zones to suit your working style.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function Features() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs array
  featureRefs.current = features.map(() => null);

  // Memoized ref callback that properly returns void
  const setFeatureRef = useCallback((el: HTMLDivElement | null, index: number) => {
    featureRefs.current[index] = el;
  }, []);

  useEffect(() => {
    if (!featuresRef.current) return;

    const featureElements = featureRefs.current.filter(Boolean);

    gsap.fromTo(
      featureElements,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" ref={featuresRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Bean & Byte?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => setFeatureRef(el, index)}
              className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm
                       hover:shadow-xl transition-all duration-300 ease-in-out
                       hover:-translate-y-1 hover:bg-green-50 dark:hover:bg-gray-700"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg
                            group-hover:bg-green-200 dark:group-hover:bg-green-900/50
                            transition-colors duration-300 text-green-600 dark:text-green-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
