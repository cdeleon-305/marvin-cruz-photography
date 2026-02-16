import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marvincruzphotography.com"),
  title: {
    default: "Marvin Cruz Photography | South Florida Corporate & Engagement Photographer",
    template: "%s | Marvin Cruz Photography",
  },
  description: "South Florida professional photographer Marvin Cruz specializing in corporate events, weddings, engagements, and portraits in Miami, Fort Lauderdale, and Palm Beach. View portfolio and book your session today.",
  icons: {
    icon: "/images/headshot.jpg",
    apple: "/images/headshot.jpg",
  },
  keywords: ["photography", "photographer", "South Florida photographer", "Miami photographer", "Fort Lauderdale photographer", "Palm Beach photographer", "corporate photography", "corporate event photography", "wedding photography", "engagement photography", "portrait photography", "South Florida photography", "Miami photography", "Marvin Cruz"],
  authors: [{ name: "Marvin Cruz" }],
  creator: "Marvin Cruz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marvincruzphotography.com",
    siteName: "Marvin Cruz Photography",
    title: "Marvin Cruz Photography | South Florida Professional Photographer",
    description: "Specializing in corporate events, weddings, engagements, and portraits in Miami, Fort Lauderdale, and South Florida",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marvin Cruz Photography Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marvin Cruz Photography | South Florida Photographer",
    description: "Specializing in corporate events, weddings, engagements, and portraits in South Florida",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
