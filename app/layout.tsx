import type { Metadata } from "next";
import { Anton, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

// Condensed heavy display face for headlines. Swap here if Phil licenses a face.
const anton = Anton({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Clean neutral body face, readable on black.
const hanken = Hanken_Grotesk({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://stratosphere.philstringer.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "STRATOSPHERE — A Phil Stringer Program",
  description:
    "AI training that actually moves the needle. Live coaching, certification, and a private room of operators who treat AI as leverage, not a novelty.",
  openGraph: {
    title: "STRATOSPHERE — A Phil Stringer Program",
    description:
      "AI training that actually moves the needle. Rise above the noise with a 12-month elite AI cohort.",
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "STRATOSPHERE — A Phil Stringer Program",
    description: "AI training that actually moves the needle. Rise above the noise.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
