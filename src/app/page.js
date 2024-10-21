import Navbar from "@/sections/Navbar";
import HeroSection from "@/sections/HeroSection";
import AboutMe from "@/sections/AboutMe";
import Experience from "@/sections/Experience";

export default function Home() {
  return (
    <div className="bg-black px-20">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Experience />
    </div>
  );
}
