import type {Metadata} from 'next';
import './globals.css';
// import './icons.css'
import { Toaster } from "@/components/ui/toaster"


export const metadata: Metadata = {
  title: 'Marketti.io: All-in-One AI-Powered CRM',
  description: 'Sales, HR, Finance, Projects, Support, and Digital Marketing—All in one place.',
  icons: {
    icon: '/Public/Marketti.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      {/* <link rel="icon" href="/Marketti.png" type="image/png" /> */}
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
