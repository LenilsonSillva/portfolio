import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lenilson Silva — Full Stack & Mobile Developer",
  description:
    "Portfolio of Lenilson Silva, full stack & mobile developer based in Porto, Portugal. React, Next.js, TypeScript, React Native and Node.js — creator of PlayHome, a multiplayer social gaming platform published on Google Play.",
  keywords: [
    "Lenilson Silva",
    "Full Stack Developer",
    "Mobile Developer",
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Node.js",
    "Portugal",
    "Porto",
    "PlayHome",
  ],
};

export const viewport: Viewport = {
  themeColor: "#05060b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
