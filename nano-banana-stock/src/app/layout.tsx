import type { Metadata } from 'next'
import './globals.css'
import Header from "@/components/layout/Header";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Banana Stock Prompt Builder",
  description: "AI Stock Image Prompt Generator for Adobe Stock & Miricanvas",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} antialiased bg-bg text-text selection:bg-accent/30 selection:text-accent font-sans`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
