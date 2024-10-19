import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="bg-black h-[100vh] px-20">
      <Navbar />
      <HeroSection />
    </div>
  );
}
