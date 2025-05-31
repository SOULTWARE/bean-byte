import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import SignatureDrinks from '@/components/SignatureDrinks';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <SignatureDrinks />
      <Testimonials />
    </main>
  );
}
