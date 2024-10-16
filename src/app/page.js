import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#3572EF] to-[#050C9C] h-[100vh] px-20">
      <Navbar />
      <HeroSection />
    </div>
  );
}
