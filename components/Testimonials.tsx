'use client';

import { useRef } from 'react';
import { useGsapAnimation } from '@/hooks/useGsapAnimation';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'David Park',
    role: 'Software Engineer',
    quote: 'The perfect blend of coffee and code! Their Git Push Latte keeps me going through long debugging sessions. The workspace is ideal for remote work.',
    rating: 5,
    initials: 'DP',
  },
  {
    name: 'Emily Chen',
    role: 'UX Designer',
    quote: 'Bean & Byte has the best atmosphere for creative work. Their React Refresher is my go-to drink, and the staff really understands tech culture.',
    rating: 5,
    initials: 'EC',
  },
  {
    name: 'Michael Ross',
    role: 'Tech Lead',
    quote: 'Found my new favorite meeting spot! The Full-Stack Frappe is amazing, and the high-speed internet never disappoints. Perfect for team catch-ups.',
    rating: 5,
    initials: 'MR',
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapAnimation(containerRef, {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out',
  });

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          What Our Community Says
        </h2>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600 dark:bg-green-700 flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="text-yellow-400"
                    role="img"
                    aria-label="star"
                  >
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
