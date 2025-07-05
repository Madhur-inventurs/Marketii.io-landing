import Image from 'next/image';

const TrustedLogos = () => {
  const logos = [
    { src: 'https://placehold.co/150x60.png', alt: 'Company A', hint: 'company logo' },
    { src: 'https://placehold.co/150x60.png', alt: 'Company B', hint: 'company logo' },
    { src: 'https://placehold.co/150x60.png', alt: 'Company C', hint: 'company logo' },
    { src: 'https://placehold.co/150x60.png', alt: 'Company D', hint: 'company logo' },
    { src: 'https://placehold.co/150x60.png', alt: 'Company E', hint: 'company logo' },
    { src: 'https://placehold.co/150x60.png', alt: 'Company F', hint: 'company logo' },
  ];

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-semibold text-muted-foreground mb-8">
          Trusted by Growing Businesses Worldwide
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12">
          {logos.map((logo, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image 
                src={logo.src} 
                alt={logo.alt}
                width={150}
                height={60}
                data-ai-hint={logo.hint}
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedLogos;
