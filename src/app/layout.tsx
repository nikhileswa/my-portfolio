// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Nikhileswar Reddy Chirra — Portfolio",
  description: "Data Analyst • Data Engineer • BI Developer",
  openGraph: {
    title: "Nikhileswar Reddy Chirra — Portfolio",
    description: "Data Analyst • Data Engineer • BI Developer",
    url: "https://your-portfolio-domain.vercel.app",
    siteName: "Nikhileswar Portfolio",
    images: ["/og.png"],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://your-portfolio-domain.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
