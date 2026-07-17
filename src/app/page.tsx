import Preloader from "@/components/Preloader";
import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FXRoot from "@/components/FXRoot";

export default function Home() {
  return (
    <>
      <Preloader />
      <SiteNav />
      <main>
        <Hero />
        <Works />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <FXRoot />
    </>
  );
}
