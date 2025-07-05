"use client";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "Marketti.io has truly been an all-in-one solution for us. We manage sales, projects, and marketing from a single dashboard. Our efficiency has skyrocketed!",
    name: "Sunita Rao",
    title: "Director, Future-Proof EdTech",
    avatar: "https://placehold.co/100x100.png",
    hint: "portrait woman"
  },
  {
    quote: "The AI automation features are incredible. The automatic WhatsApp follow-ups have increased our lead conversion rate by 30%. It's like having an extra team member.",
    name: "Vikram Singh",
    title: "Founder, FinGrowth Partners",
    avatar: "https://placehold.co/100x100.png",
    hint: "portrait man"
  },
  {
    quote: "As a digital marketing agency, the integrated ad platform management is a game-changer. We can finally track ROI from ad spend to closed deals seamlessly.",
    name: "Anjali Mehta",
    title: "CEO, DigiBoost Agency",
    avatar: "https://placehold.co/100x100.png",
    hint: "portrait woman"
  }
];

const TestimonialSlider = () => {
  return (
    <section id="testimonials" className="bg-primary text-primary-foreground py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Client Success Stories</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                    <div className="flex flex-col items-center text-center p-6">
                      <p className="text-xl md:text-2xl font-medium italic mb-6">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm opacity-80">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary-foreground bg-white/20 hover:bg-white/30 border-0 -left-4" />
          <CarouselNext className="text-primary-foreground bg-white/20 hover:bg-white/30 border-0 -right-4" />
        </Carousel>
      </div>
    </section>
  );
}

export default TestimonialSlider;
