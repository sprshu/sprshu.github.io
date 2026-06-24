import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "TAISHU TANABE | Web Developer Portfolio",
  description:
    "フロントエンドエンジニア田中大輝のポートフォリオ。HTML/CSS/JavaScript/Next.jsを用いたWeb制作の実績を掲載。",
  openGraph: {
    title: "TAISHU TANABE | Web Developer Portfolio",
    description: "フロントエンドエンジニア田中大輝のポートフォリオ",
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
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      style={{ fontFamily: "var(--font-body), sans-serif" }}
    >
      <body>{children}</body>
    </html>
  );
}
