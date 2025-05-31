'use client';

import { useRef, useCallback, useEffect } from 'react';
import { MenuCategory } from '@/types/menu';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const menuData: MenuCategory[] = [
  {
    name: 'Coffee',
    items: [
      {
        name: 'Espresso',
        description: 'Rich and full-bodied single shot',
        price: 3.50,
      },
      {
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and foam',
        price: 4.50,
      },
      {
        name: 'Cold Brew',
        description: '12-hour slow steeped coffee served over ice',
        price: 4.75,
      },
      {
        name: 'Mocha',
        description: 'Espresso with chocolate and steamed milk',
        price: 5.00,
      },
    ],
  },
  {
    name: 'Tea',
    items: [
      {
        name: 'Earl Grey',
        description: 'Classic black tea with bergamot',
        price: 3.75,
      },
      {
        name: 'Green Tea',
        description: 'Japanese sencha green tea',
        price: 3.75,
      },
      {
        name: 'Chai Latte',
        description: 'Spiced black tea with steamed milk',
        price: 4.50,
      },
    ],
  },
  {
    name: 'Pastries',
    items: [
      {
        name: 'Croissant',
        description: 'Buttery, flaky French pastry',
        price: 3.50,
      },
      {
        name: 'Blueberry Muffin',
        description: 'Fresh-baked muffin with wild blueberries',
        price: 3.25,
      },
      {
        name: 'Chocolate Chip Cookie',
        description: 'Freshly baked with dark chocolate chunks',
        price: 2.75,
      },
    ],
  },
  {
    name: 'Snacks',
    items: [
      {
        name: 'Avocado Toast',
        description: 'Sourdough bread with mashed avocado and seeds',
        price: 8.50,
      },
      {
        name: 'Granola Bowl',
        description: 'House-made granola with yogurt and fresh fruit',
        price: 7.50,
      },
      {
        name: 'Cheese & Fruit Plate',
        description: 'Selection of artisanal cheeses and seasonal fruits',
        price: 12.00,
      },
    ],
  },
];

export default function MenuPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLElement | null)[]>([]);

  // Initialize refs array
  categoryRefs.current = new Array(menuData.length).fill(null);

  // Memoize the ref callback
  const setCategoryRef = useCallback((el: HTMLElement | null, index: number) => {
    categoryRefs.current[index] = el;
  }, []);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' }
      );
    }

    // Menu container animation
    if (menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.2,
          ease: 'power2.out'
        }
      );
    }

    // Category animations with stagger
    const categories = categoryRefs.current.filter(Boolean);
    if (categories.length) {
      gsap.fromTo(
        categories,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: menuRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen space-y-8 sm:space-y-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div ref={headerRef} className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Our Menu</h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover our selection of carefully crafted beverages and delicious treats,
          made with premium ingredients and lots of love.
        </p>
      </div>

      {/* Menu Categories */}
      <div ref={menuRef} className="grid gap-8 sm:gap-12">
        {menuData.map((category, index) => (
          <section
            key={category.name}
            ref={(el) => setCategoryRef(el, index)}
            className="rounded-lg p-6"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="p-4 sm:p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base sm:text-lg font-medium">{item.name}</h3>
                    <span className="text-green-600 dark:text-green-400 font-medium text-sm sm:text-base">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
