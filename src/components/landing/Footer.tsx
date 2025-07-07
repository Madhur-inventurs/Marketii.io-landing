import { Apple, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Marketti from '../../assets/Marketti.png';

const GooglePlayIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>Google Play</title><path d="M22.42 12.15L4.54 1.45A2.32 2.32 0 001 3.44v17.12a2.32 2.32 0 003.54 1.99l17.88-10.7a2.32 2.32 0 000-3.7zM4.17 4.15l13.1 7.86-5.83-5.84zm0 15.7L17.27 12l-5.83 5.84z"></path></svg>
)

const Footer = () => {
  const quickLinks = ['Why Marketti.io?', 'Core Modules', 'Features', 'Compare', 'Industries'];
  const socialIcons = [
    { icon: <Facebook className="h-5 w-5" />, href: '#' },
    { icon: <Twitter className="h-5 w-5" />, href: '#' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#' },
    { icon: <Youtube className="h-5 w-5" />, href: '#' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Image src={Marketti} width={150} height={150} alt='Footer-Logo'></Image>
            <p>
              L1 Workie Tech Park oppsite C21 Mall AB Road, Indore, Madhya Pradesh 452001, India
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="space-y-4">
             <h4 className="font-bold text-lg mb-4">Download App</h4>
             <div className="flex flex-col space-y-3">
                 <a href="#" className="flex items-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors w-fit">
                    <GooglePlayIcon />
                    <div>
                        <p className="text-xs">GET IT ON</p>
                        <p className="text-sm font-semibold">Google Play</p>
                    </div>
                 </a>
                 <a href="#" className="flex items-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors w-fit">
                    <Apple className="h-6 w-6"/>
                     <div>
                        <p className="text-xs">Download on the</p>
                        <p className="text-sm font-semibold">App Store</p>
                    </div>
                 </a>
             </div>
          </div> */}
           <div className="space-y-4">
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
            {/* <div className="mt-4">
                <Image src="https://placehold.co/100x50.png" alt="ISO Certified" width={100} height={50} data-ai-hint="iso certified badge" />
            </div> */}
          </div>
        </div>
        <div className="border-t border-border pt-8 mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Marketti.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
