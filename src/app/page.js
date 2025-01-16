import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="bg-black px-10 sm:px-14 lg:px-20">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Experience />
      <Work />
      <Contact />
      <p className="text-center text-gray-400 pb-2 font-medium text-sm">
        Copyright &copy; 2025 by Sarthak Jain
      </p>
    </div>
  );
}
