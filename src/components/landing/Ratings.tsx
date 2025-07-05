import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex text-yellow-500">
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? 'fill-current' : ''}`} />
    ))}
  </div>
);

const Ratings = () => {
  const platforms = [
    { name: 'Capterra', logo: 'https://placehold.co/120x40.png', rating: 5, reviews: '100+ reviews', hint: 'capterra logo' },
    { name: 'Software Advice', logo: 'https://placehold.co/120x40.png', rating: 5, reviews: '100+ reviews', hint: 'software advice logo' },
    { name: 'TechJockey', logo: 'https://placehold.co/120x40.png', rating: 4, reviews: '80+ reviews', hint: 'techjockey logo' },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Reviews and Ratings</h2>
          <div className="flex justify-center space-x-4 mt-6">
            <Image src="https://placehold.co/120x60.png" alt="G2 Leader" width={120} height={60} data-ai-hint="g2 leader badge"/>
            <Image src="https://placehold.co/120x60.png" alt="G2 High Performer" width={120} height={60} data-ai-hint="g2 high performer badge"/>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <Card key={platform.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Image src={platform.logo} alt={platform.name} width={120} height={40} className="mx-auto" data-ai-hint={platform.hint} />
              </CardHeader>
              <CardContent>
                <RatingStars rating={platform.rating} />
                <p className="mt-2 text-muted-foreground">{platform.reviews}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ratings;
