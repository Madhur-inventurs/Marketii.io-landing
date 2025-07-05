import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Rocket } from 'lucide-react';

const DigitalMarketing = () => {
  return (
    <section id="digital-marketing" className="py-16 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <Image 
                src="https://placehold.co/600x450.png"
                alt="Digital marketing campaign dashboard"
                width={600}
                height={450}
                className="rounded-lg shadow-2xl"
                data-ai-hint="marketing dashboard"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold">
              Digital Marketing as a Product
            </h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start"><Rocket className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" /><span>Run ads on 5-6 platforms from one place.</span></li>
                <li className="flex items-start"><Rocket className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" /><span>Collect leads across all channels into Marketti CRM.</span></li>
                <li className="flex items-start"><Rocket className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" /><span>Integrated WhatsApp, Email, Lead & Campaign Reporting.</span></li>
            </ul>
            <Button size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
