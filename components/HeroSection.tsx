"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { useGsapAnimation } from '@/hooks/useGsapAnimation';

const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Main decorative elements */}
    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        {/* Coffee cup circuit paths */}
        <path
          d="M200,500 Q400,350 600,500 T1000,500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse"
        />
        <path
          d="M0,600 Q200,450 400,600 T800,600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />

        {/* Coffee cup icon */}
        <path
          d="M400,300 C400,280 450,280 450,300 L470,400 L380,400 L400,300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse"
        />
        <path
          d="M380,400 L470,400 Q480,400 480,410 L460,460 Q455,470 445,470 L405,470 Q395,470 390,460 L370,410 Q370,400 380,400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse"
        />

        {/* Binary code streams */}
        <g className="opacity-30">
          {Array.from({ length: 5 }).map((_, i) => (
            <text
              key={`binary-${i}`}
              x={200 + i * 150}
              y={100}
              fill="currentColor"
              fontSize="12"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              10110
            </text>
          ))}
        </g>

        {/* Connection nodes */}
        <circle cx="300" cy="500" r="8" fill="currentColor" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="500" cy="450" r="6" fill="currentColor" className="animate-ping" style={{ animationDuration: '4s' }} />
        <circle cx="700" cy="500" r="8" fill="currentColor" className="animate-ping" style={{ animationDuration: '3.5s' }} />

        {/* Code brackets */}
        <path
          d="M250,300 L200,350 L250,400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
        <path
          d="M750,300 L800,350 L750,400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
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

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useGsapAnimation(contentRef, {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power2.out',
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center py-24 sm:py-32">
      <HeroBackground />

      <div ref={contentRef} className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-700">
          Where Code Meets Coffee
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto">
          A unique space where developers can enjoy premium coffee,
          <br className="hidden sm:block" />
          collaborate on projects, and build the future.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
          {[
            { icon: '☕', text: 'Artisan Coffee' },
            { icon: '💻', text: 'Fast Wi-Fi' },
            { icon: '🔌', text: 'Power Outlets' },
            { icon: '👥', text: 'Tech Events' },
          ].map((feature) => (
            <div key={feature.text} className="text-center">
              <span className="text-2xl sm:text-3xl mb-2 block">{feature.icon}</span>
              <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/menu"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium text-lg hover:from-green-700 hover:to-emerald-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
          >
            View Our Menu
          </Link>
          <Link
            href="/about"
            className="px-8 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-gray-800 dark:text-white font-medium text-lg hover:bg-white/20 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] border border-gray-200/50 dark:border-gray-700/50"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
