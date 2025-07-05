import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Bell, Smartphone } from 'lucide-react';

const MobileFirst = () => {
  return (
    <section id="mobile-first" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Mobile First: Your Business in Your Pocket
            </h2>
            <p className="text-muted-foreground text-lg">
              Manage your entire business on the go. Our 100% mobile-optimized interface ensures you never miss a beat.
            </p>
            <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-4"><Smartphone className="h-6 w-6 text-primary" /><span>100% Mobile Optimized Interface</span></li>
                <li className="flex items-center gap-4"><Bell className="h-6 w-6 text-primary" /><span>Real-Time Push Notifications</span></li>
            </ul>
          </div>
          <div>
             <Image 
                src="https://placehold.co/400x600.png"
                alt="Mobile app interface"
                width={400}
                height={600}
                className="rounded-lg shadow-2xl mx-auto"
                data-ai-hint="mobile app screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFirst;
