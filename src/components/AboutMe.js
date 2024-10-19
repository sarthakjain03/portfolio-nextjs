import Image from "next/image"

export default function AboutMe() {
    return (
        <section id="aboutme" className="flex text-white flex-col justify-center items-center gap-10 h-[100vh]">
            <h1 className="text-5xl font-poppins font-medium">About Me</h1>
            <div className="flex items-center w-full justify-around gap-20">
                <Image src="/dp.jpg" width={300} height={300} alt="Display Picture" className="rounded-full" />
                <p className="text-lg">
                    Here&apos;s a little about myself - Final year student at IIIT Dharwad pursuing B.Tech in Computer Science and Engineering graduating in July 2025. <span className="border-b border-b-yellow-300">More than 1 year of experience</span> with Frontend Web Development and <span className="border-b border-b-yellow-300">6-months of professional work experience</span> at an early stage startup in India. Proficient with React.js, Tailwind CSS, Material UI. Currently learning and building with Next.js. Open to full-time employment opportunities onsite in India and remote internationally starting January 2025. Also interested in learning new and exciting technologies. Love to travel by the way 😉
                </p>
            </div>
        </section>
    )
}