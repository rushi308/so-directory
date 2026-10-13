import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "South Oxhey Directory",
    template: "%s · South Oxhey Directory",
  },
  description:
    "Neighbour-recommended local services for South Oxhey, Watford — trades, legal help, events, photography, and day-to-day work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-cream font-sans">
        <SiteHeader />
        <main className="relative z-10 flex-1 bg-cream">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
