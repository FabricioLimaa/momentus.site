import { useEffect } from 'react';
import Hero from '@/react-app/components/Hero';
import Features from '@/react-app/components/Features';
import Screenshots from '@/react-app/components/Screenshots';
import CallToAction from '@/react-app/components/CallToAction';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F44] via-[#0F2D5C] to-[#0A1F44]">
      <Hero />
      <Features />
      <Screenshots />
      <CallToAction />
      <Footer />
    </div>
  );
}
