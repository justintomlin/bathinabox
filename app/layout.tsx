import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bath-in-a-Box | Luxury Bathing, Delivered",
  description:
    "Curated bathroom packages (fixtures + wall options + accessories) with a streamlined quote-to-order flow. Built for speed, clarity, and fewer surprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#fbfaf7] text-neutral-950 antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}