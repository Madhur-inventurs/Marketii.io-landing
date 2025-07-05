import { Button } from '@/components/ui/button';
import Image from 'next/image';
import DemoScheduler from './DemoScheduler';

const Hero = () => {
  return (
    <section id="home" className="relative text-white py-24 sm:py-32 md:py-40 flex items-center">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background representing business growth"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="abstract technology"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80 z-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg max-w-4xl mx-auto">
          All-in-One AI-Powered CRM with Automation, Marketing & Management
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
          Sales, HR, Finance, Projects, Support, and Digital Marketing—All in one place. Easy to use. Built for scale. Now with AI + WhatsApp + Email automation and VOIP integration (coming soon).
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">Start Free Trial</Button>
          <DemoScheduler>
            <Button size="lg" className="text-lg px-8 py-6">
                Book a Demo
            </Button>
          </DemoScheduler>
        </div>
      </div>
    </section>
  );
};

export default Hero;
