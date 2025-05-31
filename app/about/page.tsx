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
    <div className="space-y-12 sm:space-y-20 px-4 sm:px-6 lg:px-8">
      {/* Story Section */}
      <section
        ref={storyRef}
        className="transition-all duration-1000 ease-out"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">Our Story</h1>
        <div className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 space-y-4 sm:space-y-6">
          <p>
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
        className="transition-all duration-1000 ease-out"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/about/cafe-interior.svg"
              alt="Cafe Interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/about/coffee-bar.svg"
              alt="Coffee Bar"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/about/workspace.svg"
              alt="Workspace Area"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        ref={teamRef}
        className="transition-all duration-1000 ease-out"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
                <p className="text-sm sm:text-base text-green-600 dark:text-green-400">{member.role}</p>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
