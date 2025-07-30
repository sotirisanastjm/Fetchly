import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { InfoCard } from "@/components/InfoCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fetchly – Developer News",
  description:
    "Discover real-time tech articles by developers, for developers. Stay updated with the latest programming news, trends, and dev insights.",
  keywords: [
    "developer news",
    "tech articles",
    "programming updates",
    "dev blog",
    "software development",
    "coding news",
    "developer stories",
    "dev content",
    "real-time tech news",
  ],
  authors: [{ name: "Fetchly" }],
  creator: "Fetchly",
  publisher: "Fetchly",
  category: "technology",
  metadataBase: new URL("https://fetchlynews.netlify.app"),
  openGraph: {
    title: "Fetchly – Developer News",
    description:
      "Explore real-time developer stories and programming articles. Always fresh, always relevant.",
    url: "https://fetchlynews.netlify.app",
    siteName: "Fetchly",
    locale: "en_US",
    type: "website",

  },
  alternates: {
    canonical: "https://fetchlynews.netlify.app",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
          <main>
            {children}
            <InfoCard />
          </main>
        <Footer />
      </body>
    </html>
  );
}
