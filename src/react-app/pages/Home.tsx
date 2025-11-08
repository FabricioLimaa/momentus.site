import Hero from '@/react-app/components/Hero';
import Features from '@/react-app/components/Features';
import Screenshots from '@/react-app/components/Screenshots';
import CallToAction from '@/react-app/components/CallToAction';
import Footer from '@/react-app/components/Footer';

export default function Home() {
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
