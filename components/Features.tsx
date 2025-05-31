"use client";

import { useRef, useCallback } from 'react';
import { useGsapAnimation } from '@/hooks/useGsapAnimation';

const FeaturesBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        {/* Feature connection paths */}
        <path
          d="M100,300 Q300,200 500,300 T900,300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse"
        />
        <path
          d="M100,700 Q300,600 500,700 T900,700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />

        {/* Grid dots */}
        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={`dot-${i}`}
            cx={50 + (i % 5) * 250}
            cy={200 + Math.floor(i / 5) * 200}
            r="3"
            fill="currentColor"
            className={i % 3 === 0 ? 'animate-ping' : ''}
            style={{ animationDuration: `${2 + (i % 3)}s` }}
          />
        ))}

        {/* Feature icons */}
        {Array.from({ length: 4 }).map((_, i) => (
          <g key={`icon-${i}`} transform={`translate(${200 + i * 200}, ${500})`}>
            <rect
              x="-15"
              y="-15"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          </g>
        ))}

        {/* Connecting lines */}
        <path
          d="M0,400 L1000,400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-pulse"
        />
        <path
          d="M0,600 L1000,600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
      </svg>
    </div>

    {/* Gradient overlays */}
    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />
    <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-green-500/5 blur-3xl opacity-50" />
  </div>
);

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

  // Memoized ref callback
  const setFeatureRef = useCallback((el: HTMLDivElement | null, index: number) => {
    featureRefs.current[index] = el;
  }, []);

  useGsapAnimation(featuresRef, {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power2.out',
  });

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8" ref={featuresRef}>
      <FeaturesBackground />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-700">
              Why Choose Bean & Byte?
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            Experience the perfect blend of premium coffee and tech-friendly workspace,
            designed for the modern developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => setFeatureRef(el, index)}
              className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors duration-300 text-green-600 dark:text-green-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
