import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Mail, MessageSquare } from 'lucide-react';

const AiAutomation = () => {
  const features = [
    { 
      icon: <MessageSquare className="h-10 w-10 text-primary" />, 
      title: 'Auto WhatsApp Follow-ups',
      description: 'Engage leads and customers automatically on WhatsApp without lifting a finger.'
    },
    { 
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: 'Email Workflow Automation',
      description: 'Create powerful email sequences to nurture leads and automate communication.'
    },
    { 
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: 'Smart Alerts & Reminders',
      description: 'Never miss an important task or follow-up with intelligent, timely notifications.'
    },
  ];

  return (
    <section id="ai-automation" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Unlock Hyper-Growth with AI + Automation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Work smarter, not harder. Let our AI handle the repetitive tasks so you can focus on what matters most: growing your business.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-secondary/50 border-none">
              <CardHeader className="items-center">
                 <div className="bg-primary/10 p-4 rounded-full mb-4">
                    {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiAutomation;
