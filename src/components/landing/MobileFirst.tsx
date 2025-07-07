import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Bell, Smartphone } from "lucide-react";
import MobileMarketti from "../../assets/Mobile-marketti.jpg";

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
              Manage your entire business on the go. Our 100% mobile-optimized
              interface ensures you never miss a beat.
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-4">
                <Smartphone className="h-6 w-6 text-primary" />
                <span>100% Mobile Optimized Interface</span>
              </li>
              <li className="flex items-center gap-4">
                <Bell className="h-6 w-6 text-primary" />
                <span>Real-Time Push Notifications</span>
              </li>
            </ul>
          </div>
          
          {/* Mobile Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame/Outline */}
              <div className="relative w-64 h-[520px] mx-auto">
                {/* Phone Body */}
                <div className="absolute inset-0 bg-gray-900 rounded-[2.5rem] shadow-2xl">
                  {/* Screen Bezel */}
                  <div className="absolute top-0 left-4 right-4 bottom-4 bg-black rounded-[2rem] overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                    
                    {/* Mobile Screenshot */}
                    <div className="absolute inset-0 top-4">
                      <Image
                        src={MobileMarketti}
                        alt="Mobile app interface"
                        fill
                        className="object-cover object-top rounded-[1.5rem]"
                        data-ai-hint="mobile app screenshot"
                      />
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                </div>
                
                {/* Side Buttons */}
                <div className="absolute left-0 top-20 w-1 h-12 bg-gray-800 rounded-l-md"></div>
                <div className="absolute left-0 top-36 w-1 h-8 bg-gray-800 rounded-l-md"></div>
                <div className="absolute left-0 top-48 w-1 h-8 bg-gray-800 rounded-l-md"></div>
                <div className="absolute right-0 top-24 w-1 h-16 bg-gray-800 rounded-r-md"></div>
              </div>
              
              {/* Floating Elements for Visual Appeal */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFirst;