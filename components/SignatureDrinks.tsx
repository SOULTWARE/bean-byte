"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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

  // Memoized ref callback that properly returns void
  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = cardRefs.current.filter(Boolean);

    gsap.fromTo(
      cards,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50 dark:bg-gray-800/50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Signature Drinks</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Carefully crafted beverages that blend the art of coffee with the spirit of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drinks.map((drink, index) => (
            <div
              key={drink.name}
              ref={(el) => setCardRef(el, index)}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm
                       hover:shadow-xl transition-all duration-300 ease-in-out
                       hover:-translate-y-1 group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors duration-300 z-10" />
                <Image
                  src={drink.image}
                  alt={drink.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{drink.name}</h3>
                  <span className="text-green-600 dark:text-green-400 font-medium">
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
                      className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900/30
                               text-green-700 dark:text-green-300 rounded-full"
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
