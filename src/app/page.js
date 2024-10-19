import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="bg-black px-20">
      <Navbar />
      <HeroSection />
      <AboutMe />
    </div>
  );
}
