'use-client'
export default function Navbar() {
    return (
        <header className="flex items-center justify-between py-5 text-white fixed top-0 left-0 w-full px-20">
          <p className="font-semibold text-xl">Sarthak Jain</p>
          <nav className="flex justify-between items-center gap-8">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Skills</p>
            <p className="cursor-pointer">Work</p>
            <p className="cursor-pointer">Contact</p>
            </nav>  
        </header>
    )
}