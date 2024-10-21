export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-5 text-white fixed top-0 left-0 w-full px-20 backdrop-blur-md">
      <p className="font-semibold text-xl">Sarthak Jain</p>
      <nav className="flex justify-between items-center gap-8">
        <p className="cursor-pointer hover:border-b hover:border-b-yellow-300">
          Home
        </p>
        <p className="cursor-pointer hover:border-b hover:border-b-yellow-300">
          About
        </p>
        <p className="cursor-pointer hover:border-b hover:border-b-yellow-300">
          Experience
        </p>
        <p className="cursor-pointer hover:border-b hover:border-b-yellow-300">
          Work
        </p>
        <p className="cursor-pointer hover:border-b hover:border-b-yellow-300">
          Contact
        </p>
      </nav>
    </header>
  );
}
