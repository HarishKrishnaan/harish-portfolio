import RouteLine from "@/components/RouteLine";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="relative max-w-[920px] mx-auto px-4 sm:px-6">
        <RouteLine />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}