import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Headset, Lock, Smile } from 'lucide-react';

const WhyLoveKylas = () => {
  const reasons = [
    {
      icon: <Smile className="h-10 w-10 text-primary" />,
      title: 'Easy to Use CRM',
      description: 'A user-friendly interface that your team can adopt in minutes, not months.',
    },
    {
      icon: <Headset className="h-10 w-10 text-primary" />,
      title: 'Expert Help',
      description: 'Get dedicated support from our experts to ensure you get the most out of Kylas.',
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: 'Secure Technology',
      description: 'Enterprise-grade security to keep your valuable customer data safe and sound.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            A Sales CRM your Team will Love
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <Card key={reason.title} className="text-center p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center">
                 <div className="bg-primary/10 p-4 rounded-full mb-4">
                    {reason.icon}
                </div>
                <CardTitle className="text-xl font-bold">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLoveKylas;
