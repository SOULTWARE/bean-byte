"use client";

import Link from 'next/link';
import { useRef } from 'react';
import { useGsapAnimation } from '@/hooks/useGsapAnimation';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useGsapAnimation(titleRef, {
    y: 100,
    duration: 1,
    delay: 0.2,
  });

  useGsapAnimation(subtitleRef, {
    y: 50,
    duration: 1,
    delay: 0.4,
  });

  useGsapAnimation(buttonRef, {
    y: 30,
    scale: 0.9,
    duration: 1,
    delay: 0.6,
  });

  return (
    <div className="relative min-h-[60vh] sm:h-[70vh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-[url('/cafe-bg.svg')] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/cafe-bg.svg')`
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 py-12 sm:py-0">
        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight"
        >
          Welcome to Bean & Byte
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-2xl leading-relaxed"
        >
          Crafted Coffee, Cozy Vibes
        </p>
        <Link
          ref={buttonRef}
          href="/menu"
          className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          Explore Menu
        </Link>
      </div>
    </div>
  );
}
