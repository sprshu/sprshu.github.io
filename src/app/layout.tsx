import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&family=Zen+Kaku+Gothic+New:wght@500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
