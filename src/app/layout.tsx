import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}