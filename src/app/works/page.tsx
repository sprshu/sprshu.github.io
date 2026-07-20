import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import FXRoot from "@/components/FXRoot";

export const metadata: Metadata = {
  title: "Works | shubert",
  description:
    "shubertの制作実績一覧。App Store公開中のPokerMemoDBをはじめ、iOSアプリとWeb制作の実績を掲載しています。",
};

export default function WorksPage() {
  return (
    <>
      <SiteNav onSubPage />
      <main className="subpage">
        <Works />
      </main>
      <Footer />
      <FXRoot />
    </>
  );
}
