import TechTab from "./TechTab";
import { techStack } from "@/data";

const techs = ["JavaScript", "Next.js", "React.js", "Material UI", "Tailwind", "CSS", "HTML", "C++", "Figma"];

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="flex text-white gap-4 items-center h-[100vh]"
    >
      <div className="text-center gap-6 flex flex-col">
        <h1 className="text-6xl font-poppins font-medium">
          Welcome human! I&apos;m Sarthak, a{" "}
          <span className="text-yellow-300">Frontend Web Developer</span> from
          India
        </h1>
        <div className="flex gap-2 justify-center">
          {techs?.map((tech) => (
            <TechTab key={tech} title={tech} logo={techStack[tech]} />
          ))}
          
        </div>
      </div>
      {/* <div className='mt-5 rounded-full overflow-hidden'>
                <Image src="/dp.jpg" alt='Profile picture' width={700} height={750} />
            </div> */}
    </section>
  );
}
