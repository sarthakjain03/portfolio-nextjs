"use client"
import SlideTabsNav from "./SlideTabs";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <header className="flex items-center justify-center sm:justify-between py-2 text-white fixed top-0 left-0 w-full px-10 sm:px-14 lg:px-20 backdrop-blur-md z-10 h-max">
      {!isMobile && (
        <p className="font-semibold text-xl font-playwrite">Sarthak Jain</p>
      )}
      <SlideTabsNav />
      {/* <nav className="flex justify-between items-center gap-8 font-poppins">
        <a href="#hero-section" className="cursor-pointer hover:border-b hover:border-b-yellow-300">
          Home
        </a>
        <a href="#aboutme" className="cursor-pointer hover:border-b hover:border-b-yellow-300">
          About
        </a>
        <a href="#experience" className="cursor-pointer hover:border-b hover:border-b-yellow-300">
          Experience
        </a>
        <a href="#work" className="cursor-pointer hover:border-b hover:border-b-yellow-300">
          Work
        </a>
        <a href="#contact" className="cursor-pointer hover:border-b hover:border-b-yellow-300">
          Contact
        </a>
      </nav> */}
    </header>
  );
}
