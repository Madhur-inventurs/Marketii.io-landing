import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import EnquiryForm from './EnquiryForm';
import Background from '../../assets/background.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative text-white py-16 sm:py-24 md:py-32 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src= {Background}
          alt="Abstract background representing business growth"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-50"
          data-ai-hint="abstract technology"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent/70 z-10 animate-fade-in"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg animate-fade-in-up">
              All-in-One AI-Powered CRM with Automation, Marketing & Management
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-8 drop-shadow-md animate-fade-in-up [animation-delay:200ms]">
              Sales, HR, Finance, Projects, Support, and Digital Marketing—All in one place. Easy to use. Built for scale. Now with AI + WhatsApp + Email automation and VOIP integration (coming soon).
            </p>
          </div>
          <div className="animate-fade-in-up [animation-delay:400ms] w-full md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
  <Card className="bg-background/80 backdrop-blur-sm border-white/20 text-foreground shadow-2xl hover:shadow-primary/20 transition-shadow duration-300 px-4 py-2">
    <CardHeader>
      <CardTitle className="text-2xl text-center">Get a Free Consultation</CardTitle>
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
