'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGsapAnimation } from '@/hooks/useGsapAnimation';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alex Chen',
    role: 'Head Barista',
    bio: 'With over 8 years of experience in specialty coffee, Alex leads our coffee program with passion and precision.',
    imageUrl: '/images/about/team/alex-chen.svg',
  },
  {
    name: 'Sarah Miller',
    role: 'Pastry Chef',
    bio: 'A graduate of Le Cordon Bleu, Sarah brings creativity and expertise to our in-house bakery.',
    imageUrl: '/images/about/team/sarah-miller.svg',
  },
  {
    name: 'James Wilson',
    role: 'Tech Events Coordinator',
    bio: 'James manages our tech community events and ensures our space is perfect for developers.',
    imageUrl: '/images/about/team/james-wilson.svg',
  },
];

export default function AboutPage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useGsapAnimation(storyRef, {
    y: 50,
    duration: 1.2,
    ease: 'power2.out',
  });

  useGsapAnimation(imagesRef, {
    y: 50,
    duration: 1.2,
    delay: 0.2,
    ease: 'power2.out',
  });

  useGsapAnimation(teamRef, {
    y: 50,
    duration: 1.2,
    delay: 0.4,
    ease: 'power2.out',
  });

  return (
    <div className="relative min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-green-500/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-green-500/5 blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Story Section */}
        <section
          ref={storyRef}
          className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-700 text-center">
            Our Story
          </h1>
          <div className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 space-y-6">
            <p className="relative">
              <span className="absolute -left-4 top-0 text-4xl text-green-500/20">"</span>
              Bean & Byte was born from a simple idea: create a space where great coffee meets
              technology. Founded in 2020, we set out to build more than just a café – we wanted
              to create a hub where developers, designers, and tech enthusiasts could gather,
              collaborate, and enjoy exceptional coffee.
            </p>
            <p>
              Our space is designed to foster creativity and productivity, with fast Wi-Fi,
              plenty of power outlets, and an atmosphere that strikes the perfect balance
              between energetic and peaceful. Every detail, from our carefully sourced beans
              to our tech-friendly workspace, is crafted with our community in mind.
            </p>
          </div>
        </section>

        {/* Images Section */}
        <section
          ref={imagesRef}
          className="relative"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { src: '/images/about/cafe-interior.svg', alt: 'Cafe Interior', title: 'Modern Space' },
              { src: '/images/about/coffee-bar.svg', alt: 'Coffee Bar', title: 'Craft Coffee' },
              { src: '/images/about/workspace.svg', alt: 'Workspace Area', title: 'Tech-Ready Workspace' },
            ].map((image, index) => (
              <div
                key={image.alt}
                className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 transition-transform duration-300 hover:scale-[1.02]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section
          ref={teamRef}
          className="relative"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-700">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-700 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-green-600 dark:text-green-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
