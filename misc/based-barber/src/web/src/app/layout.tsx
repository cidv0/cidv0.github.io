import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { site } from "@/content/site";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.baseUrl),
  title: {
    default: `${site.name} | ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        <div className="relative min-h-screen bg-background text-foreground">
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
          >
            <div className="absolute -top-24 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(197,84,44,0.35),transparent_65%)] blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(43,108,143,0.25),transparent_70%)] blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f6efe6,transparent_55%)]" />
          </div>
          <Header />
          <main className="pb-24 md:pb-0">{children}</main>
          <Footer />
          <MobileStickyBar />
        </div>
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
