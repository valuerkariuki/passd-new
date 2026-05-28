import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';

// Using Inter font for a professional, clean look
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Passd.net | APC Coaching & Counsellors',
  description: 'Expert APC guidance, mock interviews, and structured coaching for surveyors.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* The main content area grows to push the footer to the bottom */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer appears on every page */}
        <Footer />
      </body>
    </html>
  );
}