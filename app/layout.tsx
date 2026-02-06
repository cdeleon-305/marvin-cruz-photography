import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

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
  title: {
    default: "Marvin Cruz Photography | Miami Corporate & Engagement Photographer",
    template: "%s | Marvin Cruz Photography",
  },
  description: "Miami-based professional photographer Marvin Cruz specializing in corporate events, weddings, engagements, and portraits. View portfolio and book your session today.",
  icons: {
    icon: "/images/headshot.jpg",
    apple: "/images/headshot.jpg",
  },
  keywords: ["photography", "photographer", "corporate photography", "corporate event photography", "wedding photography", "engagement photography", "portrait photography", "Miami photographer", "South Florida photographer", "Marvin Cruz"],
  authors: [{ name: "Marvin Cruz" }],
  creator: "Marvin Cruz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marvin-cruz-photography.vercel.app",
    siteName: "Marvin Cruz Photography",
    title: "Marvin Cruz Photography | Miami Professional Photographer",
    description: "Specializing in corporate events, weddings, engagements, and portraits in Miami",
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
    title: "Marvin Cruz Photography | Miami Photographer",
    description: "Specializing in corporate events, weddings, engagements, and portraits",
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
      </body>
    </html>
  );
}
