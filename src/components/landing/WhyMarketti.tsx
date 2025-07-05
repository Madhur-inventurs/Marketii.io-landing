import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AppWindow, Bot, TrendingUp, Users } from 'lucide-react';

const WhyMarketti = () => {
  const reasons = [
    {
      icon: <AppWindow className="h-10 w-10 text-primary" />,
      title: 'Centralized Platform',
      description: 'Sales, HR, Finance, Projects, Support, and Digital Marketing—All in one place.',
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: 'AI + Automation Suite',
      description: 'Automate repetitive tasks and get smart suggestions to close deals faster.',
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: 'Lead-to-Invoice Journey',
      description: 'Manage the entire customer lifecycle seamlessly from a single dashboard.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Scalable for All Teams',
      description: 'Whether you are a team of 1 or 1000, Marketti.io grows with you.',
    },
  ];

  return (
    <section id="why-marketti" className="py-16 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Marketti.io?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

export default WhyMarketti;
