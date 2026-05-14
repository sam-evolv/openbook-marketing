import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Fraunces } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });

export const metadata: Metadata = {
  title: 'OpenBook — Your business, on every channel customers use.',
  description:
    'A distribution layer + website builder that works alongside your booking system. A beautiful website, an app icon, white-label WhatsApp bookings, and AI distribution through ChatGPT, Claude and Siri. €79/month. No commission, ever.',
  icons: {
    icon: [
      { url: '/icons/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/icons/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'OpenBook — Your business, on every channel customers use.',
    description:
      'Website, app icon, WhatsApp bookings and AI distribution for Irish service businesses. Works alongside whatever booking system you already use. €79/month, no commission.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
