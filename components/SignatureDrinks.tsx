"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { useGsapAnimation } from '@/hooks/useGsapAnimation';

const DrinksBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        {/* Coffee steam paths */}
        {Array.from({ length: 3 }).map((_, i) => (
          <path
            key={`steam-${i}`}
            d={`M${300 + i * 200},100 C${350 + i * 200},50 ${400 + i * 200},50 ${450 + i * 200},100`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}

        {/* Coffee cup outlines */}
        {Array.from({ length: 3 }).map((_, i) => (
          <g key={`cup-${i}`} transform={`translate(${250 + i * 200}, 200)`}>
            <path
              d="M0,0 L60,0 L50,80 L10,80 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
            <path
              d="M60,20 L70,20 L70,40 L60,40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          </g>
        ))}

        {/* Decorative circles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <circle
            key={`circle-${i}`}
            cx={100 + (i % 5) * 200}
            cy={400 + Math.floor(i / 5) * 200}
            r="4"
            fill="currentColor"
            className={i % 3 === 0 ? 'animate-ping' : ''}
            style={{ animationDuration: `${2 + (i % 3)}s` }}
          />
        ))}

        {/* Connecting lines */}
        <path
          d="M0,300 L1000,300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-pulse"
        />
        <path
          d="M0,700 L1000,700"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />

        {/* Code elements */}
        {Array.from({ length: 4 }).map((_, i) => (
          <text
            key={`code-${i}`}
            x={200 + i * 200}
            y={600}
            fill="currentColor"
            fontSize="12"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {'{code}'}
          </text>
        ))}
      </svg>
    </div>

    {/* Gradient overlays */}
    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />
    <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-green-500/5 blur-3xl opacity-50" />
  </div>
);

interface Drink {
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

const drinks: Drink[] = [
  {
    name: "Developer's Debug",
    description: "A powerful triple-shot espresso with house-made vanilla syrup and a hint of caramel. Perfect for those late-night coding sessions.",
    price: 5.99,
    image: "/images/drinks/debug-drink.svg",
    tags: ["Espresso", "Hot", "Strong"],
  },
  {
    name: "Binary Brew",
    description: "Cold brew coffee infused with mint and topped with vanilla cold foam. As refreshing as a successful code deployment.",
    price: 6.49,
    image: "/images/drinks/binary-brew.svg",
    tags: ["Cold Brew", "Refreshing"],
  },
  {
    name: "Full-Stack Frappe",
    description: "Layers of coffee, chocolate, and cream, topped with cookie crumbs. A complete package, just like a full-stack developer.",
    price: 7.49,
    image: "/images/drinks/fullstack-frappe.svg",
    tags: ["Blended", "Sweet"],
  },
  {
    name: "Git Push Latte",
    description: "A smooth latte with honey and lavender, perfect for celebrating those successful pull request merges.",
    price: 5.99,
    image: "/images/drinks/git-push-latte.svg",
    tags: ["Latte", "Aromatic"],
  },
  {
    name: "React Refresher",
    description: "Iced matcha latte with a shot of espresso. State management never tasted so good.",
    price: 6.99,
    image: "/images/drinks/react-refresher.svg",
    tags: ["Matcha", "Espresso", "Iced"],
  },
  {
    name: "Code Review Cortado",
    description: "Equal parts espresso and steamed milk, served with a side of dark chocolate. Short but impactful.",
    price: 4.99,
    image: "/images/drinks/code-review.svg",
    tags: ["Cortado", "Classic"],
  },
];

export default function SignatureDrinks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs array
  cardRefs.current = drinks.map(() => null);

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
      <DrinksBackground />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-700">
              Signature Drinks
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            Carefully crafted beverages that blend the art of coffee with the spirit of technology.
            Each drink is designed to fuel your coding sessions and inspire creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drinks.map((drink, index) => (
            <div
              key={drink.name}
              ref={(el) => setCardRef(el, index)}
              className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 group-hover:opacity-0 transition-opacity duration-300 z-10" />
                <Image
                  src={drink.image}
                  alt={drink.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    {drink.name}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-medium text-sm">
                    ${drink.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {drink.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {drink.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-green-100/50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
