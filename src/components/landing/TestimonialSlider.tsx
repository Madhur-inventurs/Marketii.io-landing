"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "Inventurs streamlined our marketing and improved our app’s UI/UX. Their landing page revamp helped increase conversions by 30%.",
    name: "Sneha Rathi",
    title: "Product Manager, Sushain App",
    avatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "Their SEO and listings brought more traffic from Tier 2 & 3 cities. We saw a clear boost in engagement and job seeker reach.",
    name: "Zainab Sheikh",
    title: "Marketing Coordinator, AlParwaaz",
    avatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "Our visibility on Google drastically improved. Inventurs fixed our content and structure — traffic and keyword rankings soared.",
    name: "Samantha Roy",
    title: "Product Manager, PinTheBaby.com",
    avatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "Their SEO and app listings helped users discover us organically. Downloads grew steadily — no extra ad spend needed.",
    name: "Ravi Mehta",
    title: "Product Lead, The PB Playground",
    avatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "They boosted our app downloads past 10,000 in 2 months with smart ads and App Store optimization — cost-effectively.",
    name: "Ankit Sharma",
    title: "Growth Manager, Visit Connect",
    avatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "Inventurs helped ARC Launcher hit 10M installs with standout visuals and effective marketing. Engagement shot up too.",
    name: "Rajeev Nair",
    title: "Founder, ARC Launcher",
    avatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
  {
    quote:
      "Their ad-free, privacy-first messaging for our launcher was spot-on. We saw a surge in downloads and glowing reviews.",
    name: "Siddharth Mehra",
    title: "Product Manager, Alpha Hybrid Launcher",
    avatar: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    hint: "portrait woman",
  },
];


const TestimonialSlider = () => {
  return (
    <section
      id="testimonials"
      className="bg-primary text-primary-foreground py-16 sm:py-24"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Client Success Stories
        </h2>
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
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          data-ai-hint={testimonial.hint}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm opacity-80">
                          {testimonial.title}
                        </p>
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
};

export default TestimonialSlider;
