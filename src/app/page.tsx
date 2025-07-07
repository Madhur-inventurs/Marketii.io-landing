import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import TrustedLogos from '@/components/landing/TrustedLogos';
import Comparison from '@/components/landing/Comparison';
import TestimonialSlider from '@/components/landing/TestimonialSlider';
import Cta from '@/components/landing/Cta';
import Footer from '@/components/landing/Footer';
import WhyMarketti from '@/components/landing/WhyMarketti';
import CoreModules from '@/components/landing/CoreModules';
import DigitalMarketing from '@/components/landing/DigitalMarketing';
import AiAutomation from '@/components/landing/AiAutomation';
import Industries from '@/components/landing/Industries';
import MobileFirst from '@/components/landing/MobileFirst';
import ComingSoon from '@/components/landing/ComingSoon';

export default function Home() {
  return (
    <div className="bg-background text-foreground font-body">
      <Navbar />
      <main>
        <Hero />
        <TrustedLogos />
        <WhyMarketti />
        <CoreModules />
        {/* <DigitalMarketing /> */}
        <AiAutomation />
        <Industries />
        <MobileFirst />
        <Comparison />
        <ComingSoon />
        <TestimonialSlider />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
