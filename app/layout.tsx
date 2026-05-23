import "./globals.css";
import "@/lib/marketing/tokens.css";
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const description =
  "The all-in-one platform for Irish salons, gyms, barbers and physios. Booking page, custom website, dedicated WhatsApp bot, and AI distribution via ChatGPT, Claude and Gemini. No commission. Built in Ireland.";

export const metadata: Metadata = {
  metadataBase: new URL("https://openbook.ie"),
  title:
    "OpenBook · Booking, website, and WhatsApp bot for Irish service businesses — €79/month",
  description,
  icons: {
    icon: [
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/favicon-96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon-180.png", sizes: "180x180" },
      { url: "/icons/apple-touch-icon-152.png", sizes: "152x152" },
      { url: "/icons/apple-touch-icon-120.png", sizes: "120x120" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "OpenBook",
    title:
      "OpenBook · Booking, website, and WhatsApp bot for Irish service businesses",
    description,
    locale: "en_IE",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenBook · Booking, website and WhatsApp bot — €79/month",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "OpenBook",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description,
  offers: [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Pro", price: "39", priceCurrency: "EUR" },
    { "@type": "Offer", name: "Complete", price: "79", priceCurrency: "EUR" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${GeistMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://app.openbook.ie" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
