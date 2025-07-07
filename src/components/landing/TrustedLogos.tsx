import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import AwardsSection from '@/components/ui/AwardsSection';

import logoA from '../../assets/sushain.png'; 
import logoB from '../../assets/enwrape.png'; 
import logoC from '../../assets/apptech.png'; 
import logoD from '../../assets/fastNgrow.png'; 
import logoE from '../../assets/Rigzone.png'; 
import logoF from '../../assets/Alre.png'; 

const TrustedLogos = () => {
  const logos = [
    { src: logoA, alt: 'Company A', hint: 'company logo' },
    { src: logoB, alt: 'Company B', hint: 'company logo' },
    { src: logoC, alt: 'Company C', hint: 'company logo' },
    { src: logoD, alt: 'Company D', hint: 'company logo' },
    { src: logoE, alt: 'Company E', hint: 'company logo' },
    { src: logoF, alt: 'Company F', hint: 'company logo' },
  ];

  return (
    <section className="py-12 sm:py-8 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold text-muted-foreground">
          Our Top Brands 
        </h2>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <AwardsSection />
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-center text-xl font-semibold text-muted-foreground mb-8">
          Trusted by Growing Businesses Worldwide
        </h2>

        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          className="flex items-center space-x-12"
        >
          {logos.map((logo, index) => (
            <div key={index} className="mx-8 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={60}
                data-ai-hint={logo.hint}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TrustedLogos;
