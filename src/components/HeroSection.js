'use client'
import TechTab from "./TechTab";
import { techStack, techs } from "@/data";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="flex text-white gap-4 items-center h-[100vh]"
    >
      <div className="text-center gap-6 flex flex-col relative">
        <h1 className="text-6xl font-poppins font-medium z-[2]">
          Welcome human! I&apos;m Sarthak, a{" "}
          <span className="text-yellow-300">Frontend Web Developer</span> from
          India
        </h1>
        <div className="flex gap-2 justify-center">
          {techs?.map((tab, index) => {
                const angle = (index / techs.length) * 2 * Math.PI; // Angle in radians
                const radius = 200;
                const duration = 16
                // const x = radius * Math.cos(angle); // X position
                // const y = radius * Math.sin(angle); // Y position

                return (
                    <TechTab
                        key={tab}
                        title={tab}
                        logo={techStack[tab]}
                        radius={radius}
                        duration={duration}
                        angleOffset={angle}
                        animationsActive={true}
                        styles={{
                          position: 'absolute',
                          left: `calc(43%)`,
                          top: `calc(50%)`,
                          // left: `calc(43% + ${x})`,
                          // top: `calc(50% + ${y})`,
                          width: 136
                        }}
                    />
                )
            })}
        </div>
        {/* <div className="flex gap-2 justify-center">
          {techs?.map((tech, index) => (
            <TechTab key={tech} title={tech} logo={techStack[tech]} index={index} animationsActive={true} />
          ))}
        </div> */}
      </div>
    </section>
  );
}
