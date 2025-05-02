import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

import { twMerge } from "tailwind-merge";
import FireCursor from "../components/ui/firepen"; // Fire cursor overlay
import SoundToggle from "@/components/ui/sound-toggle"; // 🔊 Import sound toggle

const inter = Cinzel({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "RudraVerse",
  description: "Top C-Level Content Manager Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "bg-black text-white antialiased harry-potter-cursor"
        )}
      >
        <FireCursor />
        <div className="fixed top-4 right-4 z-50">
          <SoundToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
