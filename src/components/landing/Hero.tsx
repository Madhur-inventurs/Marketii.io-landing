import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import EnquiryForm from "./EnquiryForm";
import Background from "../../assets/background.jpg";
import Usability from "../../assets/usability.png";
import Performance from "../../assets/performance.png";
import WinterPerformance from "../../assets/winter-performance.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative text-white py-10 flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={Background}
          alt="Abstract background representing business growth"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-50"
          data-ai-hint="abstract technology"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent/70 z-10 animate-fade-in"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-start">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg animate-fade-in-up">
                All-in-One AI-Powered CRM with Automation, Marketing &
                Management
              </h1>
              <p className="text-lg md:text-xl mb-8 drop-shadow-md animate-fade-in-up [animation-delay:200ms]">
                Sales, HR, Finance, Projects, Support, and Digital Marketing—All
                in one place. Easy to use. Built for scale. Now with AI +
                WhatsApp + Email automation and VOIP integration (coming soon).
              </p>
            </div>

            {/* Award Badges */}
            <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start animate-slide-up">
              {/* Mid-Market High Performer Badge */}
              <div className="p-3 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={Performance}
                    alt="asia-pacific"
                    className="w-14 sm:w-20"
                  />
                </div>
              </div>

              {/* High Performer Badge */}
              <div className="p-3 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={Usability}
                    alt="crm-usability"
                    className="w-14 sm:w-20"
                  />
                </div>
              </div>

              {/* Best Usability Badge */}
              <div className="p-3 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={WinterPerformance}
                    alt="crm-winter"
                    className="w-14 sm:w-20"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="animate-fade-in-up [animation-delay:400ms] lg:sticky lg:top-8">
            <Card className="bg-background/80 backdrop-blur-sm border-white/20 text-foreground shadow-2xl hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Get a Free Consultation
                </CardTitle>
                <CardDescription className="text-center text-muted-foreground">
                  Fill out the form and we'll be in touch.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <EnquiryForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
