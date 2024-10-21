export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-5 text-white fixed top-0 left-0 w-full px-20 backdrop-blur-md">
      <p className="font-semibold text-xl font-playwrite">Sarthak Jain</p>
      <nav className="flex justify-between items-center gap-8 font-poppins">
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
      </nav>
    </header>
  );
}
