import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ThreatPulse - AI-Powered Travel Safety Intelligence',
  description: 'Real-time travel safety intelligence revealing hidden risks, scams, and surveillance threats for digital nomads and travelers.',
  keywords: 'travel safety, digital nomad, threat intelligence, AI, security, scams, surveillance',
  authors: [{ name: 'ThreatPulse Team' }],
  creator: 'ThreatPulse',
  publisher: 'ThreatPulse',
  openGraph: {
    title: 'ThreatPulse - Stay Safe. Travel Smart.',
    description: 'AI-powered travel intelligence revealing hidden risks and safety insights',
    url: 'https://threatpulse.app',
    siteName: 'ThreatPulse',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ThreatPulse - Travel Safety Intelligence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThreatPulse - AI-Powered Travel Safety',
    description: 'Real-time travel threat intelligence for digital nomads',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {children}
        </div>
      </body>
    </html>
  );
}