import type { Metadata } from "next";
import { Cinzel, Playfair } from "next/font/google";
import "./globals.css";

import { twMerge } from "tailwind-merge";
import FireCursor from "../components/ui/firepen"; // Fire cursor overlay
import SoundToggle from "@/components/ui/sound-toggle"; // 🔊 Import sound toggle

// Load Cinzel (default font)
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"], // Optional: Add more weights if needed
  variable: "--font-cinzel",
});

// Load Playfair (secondary font)
const playfair = Playfair({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Rudra D",
  description: "Top C-Level Content Manager Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${playfair.variable}`}>
      <body
        className={twMerge(
          cinzel.className,
          "bg-black text-white antialiased harry-potter-cursor"
        )}
      >
        <FireCursor />
        <div className="fixed z-50 right-4 bottom-4 sm:top-20 sm:bottom-auto">
          <SoundToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
