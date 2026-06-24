import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Works />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
