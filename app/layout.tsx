import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OpenBook — Your booking page, live in 15 minutes',
  description:
    'OpenBook is the AI-first booking platform for Irish service businesses. Your booking page live in 15 minutes, and discoverable by ChatGPT, Claude and Gemini.',
  openGraph: {
    title: 'OpenBook — Your booking page, live in 15 minutes',
    description:
      'AI-first booking for Irish gyms, salons, barbers, physios and spas. Live in 15 minutes, discoverable by every major AI.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
