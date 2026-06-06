import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dieGrotesk = localFont({
  src: [
    { path: "./fonts/DieGrotesk-BBold.otf", weight: "700", style: "normal" },
    { path: "./fonts/DieGrotesk-BHeavy.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const akkuratMono = localFont({
  src: [
    { path: "./fonts/AkkuratMonoLL-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/AkkuratMonoLL-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/AkkuratMonoLL-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/AkkuratMonoLL-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Advanced Spade Company",
  description: "Utility locating tools, technology, and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dieGrotesk.variable} ${akkuratMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
