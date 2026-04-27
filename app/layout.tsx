import { GeistSans } from 'geist/font/sans';
import { Fraunces } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });

export const metadata = { title: 'OpenBook', description: 'Your booking page, live in 15 minutes.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${fraunces.variable}`}>
      <body style={{ margin: 0, background: '#000', color: '#fff', fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, Inter, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
