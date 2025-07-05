import { Card, CardContent } from '@/components/ui/card';
import { Bot, PhoneCall } from 'lucide-react';

const ComingSoon = () => {
  const features = [
    {
      icon: <PhoneCall className="h-8 w-8 text-primary" />,
      title: 'VOIP Calling Integration',
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: 'Smart AI Assistant',
      description: 'For Campaigns, Content & Follow-ups'
    },
  ];

  return (
    <section id="coming-soon" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Coming Soon</h2>
        <p className="max-w-2xl mx-auto mb-10 text-muted-foreground text-lg">
          We're constantly innovating to bring you the best tools for growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-background shadow-lg">
              <CardContent className="p-8 flex flex-col items-center justify-center space-y-4">
                {feature.icon}
                <p className="text-xl font-bold">{feature.title}</p>
                {feature.description && <p className="text-muted-foreground">{feature.description}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
