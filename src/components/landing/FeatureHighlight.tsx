import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Clock, Users } from 'lucide-react';

const FeatureHighlight = () => {
  const features = [
    { icon: <Zap className="h-6 w-6" />, text: 'Automate tasks' },
    { icon: <Clock className="h-6 w-6" />, text: 'Save time' },
    { icon: <Users className="h-6 w-6" />, text: 'Improve collaboration' },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Streamline and Grow Your Sales with Kylas
            </h2>
            <p className="text-muted-foreground text-lg">
              Kylas is an enterprise-grade sales CRM that offers unlimited features for a fixed price. It's designed to help businesses of all sizes manage their sales process effectively and efficiently.
            </p>
            <Button size="lg">Explore Features</Button>
          </div>
          <div>
            <Card className="bg-primary text-primary-foreground p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <CardContent className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-6">Unlock Your Potential</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2">
                      <div className="bg-white/20 p-4 rounded-full">
                        {feature.icon}
                      </div>
                      <span className="font-semibold">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
