import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-black px-20">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Experience />
      <Contact />
    </div>
  );
}
