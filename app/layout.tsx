import type { Metadata } from "next";

import { Caprasimo, Sora } from "next/font/google";

import background from "@/public/background.webp";

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
        <main className="relative flex min-h-screen flex-col justify-between bg-background/80 text-foreground">
          {/* Blurry Background (render blur only) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute size-full"
              style={{
                backgroundImage: `url(${background.blurDataURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(24px)",
                transform: "scale(1.08)", // hides blur edges
              }}
            />
          </div>
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
