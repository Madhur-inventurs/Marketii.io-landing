import { Button } from '@/components/ui/button';
import DemoScheduler from './DemoScheduler';

const Cta = () => {
  return (
    <section id="get-started" className="py-16 sm:py-24 bg-primary/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Grow Your Business?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
          Join thousands of businesses supercharging their growth with Marketti.io.
          Get started today and see the difference.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">Try For Free</Button>
          <DemoScheduler>
            <Button size="lg" className="text-lg px-8 py-6">
                Request a Demo
            </Button>
          </DemoScheduler>
        </div>
      </div>
    </section>
  );
};

export default Cta;
