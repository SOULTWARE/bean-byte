"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

    timeline
      .fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5" // Start slightly before the previous animation ends
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      );
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
        >
          Where Coffee Meets
          <span className="text-green-600 dark:text-green-400"> Code</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          A unique space where developers can enjoy premium coffee,
          collaborate on projects, and be part of a thriving tech community.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/menu"
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg
                     font-medium transition-colors duration-200 text-lg shadow-lg
                     hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View Menu
          </Link>
          <Link
            href="/about"
            className="px-8 py-3 border-2 border-green-600 hover:border-green-700
                     text-green-600 hover:text-green-700 rounded-lg font-medium
                     transition-colors duration-200 text-lg"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 right-0 bottom-0 h-48 bg-gradient-to-t from-green-50/50 dark:from-green-900/20 to-transparent pointer-events-none" />
    </section>
  );
}
