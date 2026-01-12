import background from "@/public/background.webp";
import type { Metadata } from "next";

import { Caprasimo, Sora } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Footer, Header } from "@/components/nav-menus";
import { Providers } from "@/components/providers";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const caprasimo = Caprasimo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caprasimo",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Jeff Diers",
  description: "Software Engineer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
  modals,
}: Readonly<{
  children: React.ReactNode;
  modals: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          caprasimo.variable,
          sora.variable,
        )}
      >
        <main className="relative flex min-h-screen flex-col justify-between bg-background/75 text-foreground">
          {/* Background Image */}
          <Image src={background} alt="Background" fill className="-z-10" />
          <Providers>
            <Header />
            {children}
            {modals}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
