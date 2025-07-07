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
      "Inventurs helped us make sense of our scattered marketing. From running better ads to improving our content, they really got what we were trying to do. Their suggestions for the app's UI/UX, especially the landing pages, made a big difference — our conversion rate jumped by 30%. It honestly felt like they were part of our own team.",
    name: "Sneha Rathi",
    title: "Product Manager, Sushain App",
    avatar: "https://placehold.co/100x100.png",
    hint: "portrait woman",
  },
  {
    quote:
      "Working with Inventurs gave our marketing real direction. Their SEO and classified listing work helped us reach more job seekers in Tier 2 and Tier 3 cities. We started showing up in the right search results, and our engagement just kept getting better. They were quick to respond and always backed their ideas with solid data.",
    name: "Zainab Sheikh",
    title: "Marketing Coordinator, AlParwaaz",
    avatar: "https://placehold.co/100x100.png",
    hint: "portrait woman",
  },
  {
    quote:
      "We were struggling to get seen on Google, and honestly, it was affecting our sales. The team at Inventurs quickly figured out what was holding us back and fixed the site structure and content. Within just a few months, we started showing up on the first page for a lot of important keywords. It made a huge difference in our traffic and product visibility.",
    name: "Samantha Roy",
    title: "Product Manager, PinTheBaby.com",
    avatar: "https://placehold.co/100x100.png",
    hint: "portrait woman",
  },
  {
    quote:
      "Working with Inventurs really helped us figure out how to get discovered by the right users. Their team cleaned up our SEO, got us listed in all the right places, and helped more people find our app organically. We noticed a big jump in downloads without spending extra on ads. The progress was steady and measurable.",
    name: "Ravi Mehta",
    title: "Product Lead, The PB Playground",
    avatar: "https://placehold.co/100x100.png",
    hint: "portrait woman",
  },
  {
    quote:
      "Inventurs made it easy for people to find and download our app. They helped us show up better on the app stores and ran smart ads to reach the right users. In just 2 months, we got over 10,000 downloads — and without spending too much money!",
    name: "Ankit Sharma",
    title: "Growth Manager, Visit Connect",
    avatar: "https://placehold.co/100x100.png",
    hint: "portrait woman",
  },
  {
    quote:
      "Inventurs helped us make ARC Launcher stand out on the Play Store with eye-catching visuals and smart marketing strategies. Their work helped us cross 10 million installs, and we saw a big jump in how often users were engaging with the app. From the beginning, they’ve been a very important part of our success.",
    name: "Rajeev Nair",
    title: "Founder, ARC Launcher",
    avatar: "https://placehold.co/100x100.png",
    hint: "portrait woman",
  },
  {
    quote:
      "Our goal was to launch an Android launcher that focused on privacy, security, and a clean user experience. Inventurs completely understood our vision and crafted the right marketing message. Their campaigns highlighted that the app was ‘ad-free and safe,’ and the high number of downloads and positive reviews proved it worked.",
    name: "Siddharth Mehra",
    title: "Product Manager, Alpha Hybrid Launcher",
    avatar: "https://placehold.co/100x100.png",
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
