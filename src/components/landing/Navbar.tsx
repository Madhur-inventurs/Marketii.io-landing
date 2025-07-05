import { ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import DemoScheduler from './DemoScheduler';
import Link from 'next/link';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
    {children}
  </a>
);

const Navbar = () => {
  const navLinksContent = (
    <>
      <NavLink href="#why-marketti">Why Marketti.io?</NavLink>
      <NavLink href="#modules">Core Modules</NavLink>
      <Link href="/features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Features
      </Link>
      <NavLink href="#compare">Compare</NavLink>
      <NavLink href="#industries">Industries</NavLink>
      <NavLink href="#testimonials">Testimonials</NavLink>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#home" className="text-xl font-bold text-primary">Marketti.io</a>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinksContent}
        </nav>
        
        <div className="flex items-center space-x-2">
           <Button variant="outline">Start Free Trial</Button>
          <div className="hidden md:block">
            <DemoScheduler>
                <Button>Book a Demo</Button>
            </DemoScheduler>
          </div>
          
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                 <a href="#home" className="text-xl font-bold text-primary">Marketti.io</a>
                <nav className="grid gap-6 text-lg font-medium mt-8">
                  {navLinksContent}
                </nav>
                <div className="mt-8 flex flex-col gap-4">
                   <Button variant="outline" className="w-full">Start Free Trial</Button>
                  <DemoScheduler>
                      <Button className="w-full">Book a Demo</Button>
                  </DemoScheduler>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
