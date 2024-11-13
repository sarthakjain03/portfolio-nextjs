"use client";
import TechTab from "./TechTab";
import { techStack, techs } from "@/data";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function HeroSection() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section
      id="hero-section"
      className="flex text-white gap-4 items-center min-h-[100vh] pt-20 sm:pt-0"
    >
      <div className="text-center gap-6 flex flex-col relative">
        <h1 className="text-4xl lg:text-6xl font-poppins font-medium z-[2]">
          Welcome human! I&apos;m Sarthak, a{" "}
          <span className="text-yellow-300">Frontend Web Developer</span> from
          India
        </h1>
        <div className="flex gap-2 justify-center flex-wrap sm:flex-nowrap pb-16 sm:pb-0">
          {techs?.map((tab, index) => {
            const angle = (index / techs.length) * 2 * Math.PI; // Angle in radians
            const radius = isMobile ? 120 : 200;
            const duration = 16;
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
                animationsActive={!isMobile}
                styles={{
                  position: isMobile ? "static" : "absolute",
                  left: `${isMobile ? "calc(30%)" : isSmall ? "calc(39%)" : "calc(43%)"}`,
                  top: `${isMobile ? "calc(30%)" : "calc(50%)"}`,
                  // left: `calc(43% + ${x})`,
                  // top: `calc(50% + ${y})`,
                  width: 136,
                }}
              />
            );
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
