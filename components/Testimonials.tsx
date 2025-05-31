'use client';

import { useRef } from 'react';
import { useGsapAnimation } from '@/hooks/useGsapAnimation';

const TestimonialsBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        {/* Quote marks */}
        {Array.from({ length: 3 }).map((_, i) => (
          <g key={`quote-${i}`} transform={`translate(${200 + i * 300}, 200)`}>
            <path
              d="M0,0 L20,0 L20,20 L10,40 L0,20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
            <path
              d="M30,0 L50,0 L50,20 L40,40 L30,20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          </g>
        ))}

        {/* Star ratings */}
        {Array.from({ length: 3 }).map((_, i) => (
          <g key={`stars-${i}`} transform={`translate(${150 + i * 300}, 300)`}>
            {Array.from({ length: 5 }).map((_, j) => (
              <path
                key={`star-${i}-${j}`}
                d="M0,-5 L1.5,-1.5 L5.9,-1.5 L2.2,0.6 L3.6,4.5 L0,2.1 L-3.6,4.5 L-2.2,0.6 L-5.9,-1.5 L-1.5,-1.5 Z"
                transform={`translate(${j * 15}, 0)`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.3 + j * 0.1}s` }}
              />
            ))}
          </g>
        ))}

        {/* Connection paths */}
        <path
          d="M100,400 Q500,300 900,400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-pulse"
        />
        <path
          d="M100,600 Q500,700 900,600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />

        {/* Avatar circles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <g key={`avatar-${i}`} transform={`translate(${150 + (i % 3) * 300}, ${500 + Math.floor(i / 3) * 150})`}>
            <circle
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
            <circle
              r="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          </g>
        ))}

        {/* Decorative dots */}
        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={`dot-${i}`}
            cx={50 + (i % 10) * 100}
            cy={800}
            r="2"
            fill="currentColor"
            className={i % 3 === 0 ? 'animate-ping' : ''}
            style={{ animationDuration: `${2 + (i % 3)}s` }}
          />
        ))}
      </svg>
    </div>

    {/* Gradient overlays */}
    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />
    <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-green-500/5 blur-3xl opacity-50" />
  </div>
);

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "David Chen",
    role: "Software Engineer",
    quote: "The perfect blend of great coffee and tech atmosphere. The Git Push Latte is my go-to drink for debugging sessions!",
    rating: 5,
    initials: "DC",
  },
  {
    name: "Sarah Kim",
    role: "UX Designer",
    quote: "Love the creative vibe here. The workspace is perfect for both solo work and team collaborations.",
    rating: 5,
    initials: "SK",
  },
  {
    name: "Michael Torres",
    role: "Full Stack Developer",
    quote: "Their Full-Stack Frappe keeps me going through intense coding sprints. Great coffee, fast Wi-Fi!",
    rating: 5,
    initials: "MT",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs array
  cardRefs.current = testimonials.map(() => null);

  // Memoized ref callback
  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

  useGsapAnimation(sectionRef, {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power2.out',
  });

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <TestimonialsBackground />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-700">
              What Our Community Says
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            Join our growing community of developers, designers, and tech enthusiasts
            who have made Bean & Byte their second home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              ref={(el) => setCardRef(el, index)}
              className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-700 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                    <div className="relative w-full h-full rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 font-medium text-lg">
                      {testimonial.initials}
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-600 dark:text-gray-400 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
