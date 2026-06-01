import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';

// Headlines, numbers, prices. Variable font — opsz 9–144, normal + italic.
const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

// Body + UI. Variable font covers the 300–800 range used in the design.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Eyebrows, labels, tags (uppercase, letter-spaced).
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OpenBook — An app, a website, AI bookings. €79/month.',
  description:
    'OpenBook gives small Irish businesses a booking page, a customer app icon, and discoverability on ChatGPT and Claude. €79/month, all-in. Live in 15 minutes.',
  icons: {
    icon: [
      { url: '/icons/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icons/favicon-96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon-57.png', sizes: '57x57' },
      { url: '/icons/apple-touch-icon-60.png', sizes: '60x60' },
      { url: '/icons/apple-touch-icon-72.png', sizes: '72x72' },
      { url: '/icons/apple-touch-icon-76.png', sizes: '76x76' },
      { url: '/icons/apple-touch-icon-114.png', sizes: '114x114' },
      { url: '/icons/apple-touch-icon-120.png', sizes: '120x120' },
      { url: '/icons/apple-touch-icon-144.png', sizes: '144x144' },
      { url: '/icons/apple-touch-icon-152.png', sizes: '152x152' },
      { url: '/icons/apple-touch-icon-167.png', sizes: '167x167' },
      { url: '/icons/apple-touch-icon-180.png', sizes: '180x180' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'OpenBook — An app, a website, AI bookings. €79/month.',
    description:
      'OpenBook gives small Irish businesses a booking page, a customer app icon, and discoverability on ChatGPT and Claude. €79/month, all-in. Live in 15 minutes.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#080808',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
