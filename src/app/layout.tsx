import type { Metadata } from "next";
import { Syne, IBM_Plex_Sans_JP, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "shubert | Web Developer Portfolio",
  description:
    "Web Developer shubert のポートフォリオ。React・Next.js・TypeScript を中心としたWeb制作・個人開発の実績を掲載。お仕事のご相談を承っています。",
  openGraph: {
    title: "shubert | Web Developer Portfolio",
    description:
      "React・Next.js・TypeScript を中心としたWeb制作・個人開発のポートフォリオ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
