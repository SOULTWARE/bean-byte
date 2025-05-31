"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.svg"
                  alt="Bean & Byte Logo"
                  width={120}
                  height={30}
                  className="dark:invert"
                />
                <span className="text-xl font-bold text-gray-900 dark:text-white hidden sm:inline-block">
                  Bean & Byte
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white px-3 py-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white px-3 py-2 text-sm font-medium"
              >
                Menu
              </Link>
              <Link
                href="/about"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white px-3 py-2 text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white px-3 py-2 text-sm font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg
                  className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-screen mx-auto">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link
                    href="/privacy"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                Social
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
            <p className="text-base text-gray-400">
              © {new Date().getFullYear()} Bean & Byte. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
