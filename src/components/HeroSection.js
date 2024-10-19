import Image from 'next/image'
import TechTab from './TechTab'

export default function HeroSection() {
    return (
        <section id="hero-section" className="flex text-white gap-4 items-center min-h-full">
            <div className='text-center gap-4 flex flex-col'>
                <h1 className="text-6xl font-poppins font-medium">
                    Welcome human! I&apos;m Sarthak, a <span className="text-yellow-300">Frontend Web Developer</span> from India
                </h1>
                <div className='flex gap-2 justify-center'>
                    <TechTab title={"JavaScript"} logo={"/javascript.png"} />
                    <TechTab title={"Next.js"} logo={"/nextjs.jpg"} />
                    <TechTab title={"React.js"} logo={"/react.png"} />
                    <TechTab title={"Material UI"} logo={"/mui.svg"} />
                    <TechTab title={"Tailwind"} logo={"/tailwind.png"} />
                    <TechTab title={"CSS"} logo={"/css.png"} />
                    <TechTab title={"HTML"} logo={"/html.webp"} />
                </div>
            </div>
            {/* <div className='mt-5 rounded-full overflow-hidden'>
                <Image src="/dp.jpg" alt='Profile picture' width={700} height={750} />
            </div> */}
        </section>
    )
}