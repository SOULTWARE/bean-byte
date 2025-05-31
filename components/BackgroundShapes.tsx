"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function BackgroundShapes() {
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shapesRef.current) return;

    const shapes = shapesRef.current.children;

    // Animate each shape with a random floating motion
    Array.from(shapes).forEach((shape, index) => {
      const duration = 15 + Math.random() * 10; // Random duration between 15-25s
      const yOffset = 20 + Math.random() * 20; // Random y movement between 20-40px

      gsap.to(shape, {
        y: yOffset,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5,
      });
    });
  }, []);

  return (
    <div
      ref={shapesRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Blob 1 - Top Left */}
      <svg
        viewBox="0 0 200 200"
        className="absolute -top-24 -left-24 w-96 h-96 text-green-100 dark:text-green-900/20 opacity-70"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M45.7,-58.9C59.9,-47.1,72.4,-32.7,76.3,-15.9C80.1,1,75.3,20.2,65.1,34.8C54.9,49.4,39.4,59.4,22.4,64.6C5.3,69.8,-13.2,70.2,-30.1,64.5C-47,58.7,-62.2,46.9,-70.2,30.7C-78.2,14.5,-79,-6.1,-71.8,-22.7C-64.6,-39.2,-49.4,-51.7,-34.4,-63.1C-19.4,-74.5,-4.7,-84.8,8.9,-82.8C22.5,-80.8,31.5,-70.6,45.7,-58.9Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Blob 2 - Top Right */}
      <svg
        viewBox="0 0 200 200"
        className="absolute -top-12 right-0 w-72 h-72 text-blue-100 dark:text-blue-900/20 opacity-60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M42.8,-65.1C54.9,-56.3,63.8,-43.3,69.7,-28.7C75.6,-14.1,78.5,2,74.8,16.2C71.1,30.4,60.8,42.8,48.1,51.5C35.4,60.2,20.3,65.2,4.4,67.1C-11.5,69,-28.2,67.8,-41.6,60.2C-55,52.6,-65.1,38.6,-70.8,22.4C-76.5,6.2,-77.8,-12.3,-71.7,-27.3C-65.6,-42.3,-52,-53.8,-37.8,-61.8C-23.5,-69.8,-8.5,-74.3,4.1,-71.8C16.7,-69.3,30.7,-73.9,42.8,-65.1Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Blob 3 - Bottom Left */}
      <svg
        viewBox="0 0 200 200"
        className="absolute bottom-0 left-0 w-80 h-80 text-yellow-100 dark:text-yellow-900/20 opacity-50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M31.9,-45.1C43,-36.5,54.8,-28.9,61.5,-17.2C68.1,-5.5,69.5,10.2,64.4,23.9C59.3,37.5,47.7,49,34.3,56.3C20.9,63.6,5.7,66.6,-8.2,64.3C-22.1,61.9,-34.7,54.2,-45.5,44.2C-56.4,34.2,-65.5,21.9,-68.1,7.9C-70.8,-6.2,-67,-22,-58.1,-33.8C-49.2,-45.6,-35.2,-53.4,-22.4,-60.8C-9.6,-68.2,2,-75.2,11.2,-71.1C20.4,-67,32.1,-51.8,31.9,-45.1Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Blob 4 - Bottom Right */}
      <svg
        viewBox="0 0 200 200"
        className="absolute -bottom-24 -right-24 w-96 h-96 text-purple-100 dark:text-purple-900/20 opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M47.3,-67.1C60.9,-58.4,71.2,-43.8,75.7,-27.4C80.2,-11,78.9,7.2,73.1,23.8C67.3,40.4,57,55.4,43.2,64.8C29.4,74.2,12.1,78,-4.5,75.8C-21.1,73.7,-37,65.6,-50.1,54.3C-63.3,43,-73.7,28.5,-76.3,12.5C-78.9,-3.5,-73.7,-21,-64.3,-34.8C-54.9,-48.7,-41.3,-58.9,-27.2,-67.4C-13.1,-75.9,1.5,-82.7,16.8,-81.1C32.2,-79.5,48.2,-69.5,47.3,-67.1Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}
