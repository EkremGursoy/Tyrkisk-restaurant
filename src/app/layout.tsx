import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

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
    default: "Memili | Authentic Turkish Restaurant in Oslo",
    template: "%s | Memili",
  },
  description:
    "Memili serves authentic Turkish cuisine in Oslo — freshly grilled kebabs, handmade meze, and warm hospitality in a modern dining atmosphere.",
  keywords: [
    "Turkish restaurant",
    "Oslo",
    "kebab",
    "meze",
    "Memili",
    "Turkish food",
    "dining",
  ],
  authors: [{ name: "Memili" }],
  openGraph: {
    title: "Memili | Authentic Turkish Restaurant in Oslo",
    description:
      "Freshly grilled kebabs, handmade meze, and traditional Turkish hospitality.",
    type: "website",
    locale: "en_NO",
    siteName: "Memili",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
