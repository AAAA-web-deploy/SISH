import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  title: "SI, Still Human",
  description:
    "SuperIntelligence assists. Human experience, intuition, and judgment lead.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
