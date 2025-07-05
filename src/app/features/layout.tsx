import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function FeaturesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background text-foreground font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
  );
}
