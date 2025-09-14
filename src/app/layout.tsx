import type { Metadata } from "next";
import "../../styles/brand.css";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "UNLTD — Computational Amplification",
  description: "Reproducible amplification for enterprise.",
  openGraph: {
    title: "UNLTD — Computational Amplification",
    description: "Reproducible amplification for enterprise.",
    images: [ { url: "/opengraph-image" } ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNLTD — Computational Amplification",
    description: "Reproducible amplification for enterprise.",
    images: ["/opengraph-image"],
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-mono antialiased bg-black text-white", fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
