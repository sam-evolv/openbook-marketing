export const metadata = { title: 'OpenBook', description: 'Your booking page, live in 15 minutes.' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#000', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
