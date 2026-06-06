import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GenerativeBackground from "@/components/GenerativeBackground";
import CursorGlow from "@/components/CursorGlow";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Will Lambert — Portfolio",
    template: "%s · Portfolio",
  },
  description:
    "A portfolio of real apps, experiments, and deployments from Will Lambert's GitHub and Vercel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="relative flex min-h-screen flex-col bg-base-950 font-sans text-ink antialiased">
        <GenerativeBackground />
        <div className="pointer-events-none fixed inset-0 z-0 grain" aria-hidden="true" />
        <div className="pointer-events-none fixed inset-0 z-0 vignette" aria-hidden="true" />
        <CursorGlow />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
