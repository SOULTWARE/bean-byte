'use client';

import { useRef, useCallback, useEffect, useState } from 'react';
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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3zM12 8v8m-4-4h8" />
      </svg>
    ),
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
  const [activeCategory, setActiveCategory] = useState(-1); // -1 represents "All"
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLElement | null)[]>([]);

  // Initialize refs array
  categoryRefs.current = new Array(menuData.length).fill(null);

  // Memoize the ref callback
  const setCategoryRef = useCallback((el: HTMLElement | null, index: number) => {
    categoryRefs.current[index] = el;
  }, []);

  // Get all menu items when "All" is selected
  const displayedItems = activeCategory === -1
    ? menuData.flatMap(category => category.items.map(item => ({
        ...item,
        category: category.name,
        icon: category.icon
      })))
    : menuData[activeCategory].items.map(item => ({
        ...item,
        category: menuData[activeCategory].name,
        icon: menuData[activeCategory].icon
      }));

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
    <div className="relative min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-green-500/5 blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-700">
            Our Menu
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our selection of carefully crafted beverages and delicious treats,
            <br className="hidden sm:block" />
            made with premium ingredients and lots of love.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex justify-center space-x-4 min-w-max px-4">
            <button
              onClick={() => setActiveCategory(-1)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                activeCategory === -1
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/20'
                  : 'bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl hover:bg-green-500/10 dark:hover:bg-green-500/10'
              }`}
            >
              <span className="text-current">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </span>
              <span className="font-medium">All</span>
            </button>
            {menuData.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeCategory === index
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/20'
                    : 'bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl hover:bg-green-500/10 dark:hover:bg-green-500/10'
                }`}
              >
                <span className="text-current">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div ref={menuRef} className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedItems.map((item, index) => (
              <div
                key={`${item.category}-${item.name}`}
                className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors duration-200">
                      {item.name}
                    </h3>
                    {activeCategory === -1 && (
                      <div className="flex items-center space-x-1 mt-1 text-sm text-gray-500 dark:text-gray-400">
                        <span className="text-green-500 dark:text-green-400">{item.icon}</span>
                        <span>{item.category}</span>
                      </div>
                    )}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 font-medium text-sm">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
