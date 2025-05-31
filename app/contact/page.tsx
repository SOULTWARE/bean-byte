'use client';

import { useState, useRef } from 'react';
import { useGsapAnimation } from '@/hooks/useGsapAnimation';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Main decorative elements */}
    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        {/* Message paths */}
        <path
          d="M100,200 C300,150 700,250 900,200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse"
        />
        <path
          d="M100,400 C300,350 700,450 900,400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />

        {/* Envelope icons */}
        {Array.from({ length: 3 }).map((_, i) => (
          <g key={`envelope-${i}`} transform={`translate(${200 + i * 300}, ${300 + (i % 2) * 100})`}>
            <rect
              x="-20"
              y="-15"
              width="40"
              height="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
            <path
              d="M-20,-15 L0,0 L20,-15 M-20,15 L0,0 L20,15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          </g>
        ))}

        {/* Connection dots */}
        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={`dot-${i}`}
            cx={50 + (i % 10) * 100}
            cy={600 + Math.floor(i / 10) * 100}
            r="2"
            fill="currentColor"
            className={i % 3 === 0 ? 'animate-ping' : ''}
            style={{ animationDuration: `${2 + (i % 3)}s` }}
          />
        ))}

        {/* Communication icons */}
        {Array.from({ length: 4 }).map((_, i) => (
          <g key={`icon-${i}`} transform={`translate(${150 + i * 250}, 800)`}>
            <circle
              r="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
            {/* Chat bubble indicator */}
            <path
              d="M-6,-6 L6,6 M-6,6 L6,-6"
              stroke="currentColor"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          </g>
        ))}

        {/* Curved connecting lines */}
        <path
          d="M0,700 Q500,600 1000,700"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
        <path
          d="M0,900 Q500,800 1000,900"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-pulse"
          style={{ animationDelay: '0.7s' }}
        />
      </svg>
    </div>

    {/* Gradient overlays */}
    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />
    <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-green-500/5 blur-3xl opacity-50" />
  </div>
);

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Refs for animations
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  // Apply animations
  useGsapAnimation(headerRef, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
  });

  useGsapAnimation(formRef, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power2.out',
  });

  useGsapAnimation(infoRef, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: 'power2.out',
  });

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="relative min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <ContactBackground />

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-700">
              Get in Touch
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0"></div>
          </div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            Have questions about our coffee, tech events, or just want to say hello?
            <br className="hidden sm:block" />
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div
            ref={formRef}
            className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100 dark:bg-green-900">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-2xl font-semibold mb-3 text-green-600 dark:text-green-400">
                  Message Sent!
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors duration-200"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      } bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-sm text-red-500 dark:text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      } bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-red-500 dark:text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      } bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200`}
                      placeholder="Your message..."
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm text-red-500 dark:text-red-400">{errors.message}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 text-white font-medium rounded-lg bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div
            ref={infoRef}
            className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="relative text-center mx-auto mb-8">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-700">
                Visit Our Space
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0"></div>
            </div>

            {/* Map Placeholder with better styling */}
            <div className="aspect-video mb-8 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
              <div className="h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                <span className="text-sm">Interactive Map Coming Soon</span>
              </div>
            </div>

            {/* Contact Information Cards */}
            <div className="grid gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Address</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Tech Street
                    <br />
                    Silicon Valley, CA 94025
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Hours</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Monday - Friday: 7am - 8pm
                    <br />
                    Saturday - Sunday: 8am - 6pm
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Contact</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Email: hello@beanandbyte.com
                    <br />
                    Phone: (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
