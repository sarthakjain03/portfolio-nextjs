"use client";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function AboutMe() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <section
      id="aboutme"
      className="flex text-white flex-col justify-center items-center gap-10 min-h-[100vh]"
    >
      <h1 className="text-4xl lg:text-5xl font-poppins font-medium">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row items-center w-full lg:justify-around gap-10 lg:gap-20 overflow-x-hidden">
        <Image
          src="/dp.jpg"
          width={isSmall ? 250 : 300}
          height={isSmall ? 250 : 300}
          alt="Display Picture"
          className="rounded-full"
        />
        <div className="lg:w-[65%] w-full">
          <p className="lg:text-lg">
            Here&apos;s a little about myself - Graduated from IIIT Dharwad
            pursued B.Tech in Computer Science and Engineering graduating in
            July 2025.{" "}
            <span className="border-b border-b-yellow-300">
              More than 1.5 years of experience
            </span>{" "}
            with Frontend Web Development and{" "}
            <span className="border-b border-b-yellow-300">
              1 year of professional work experience
            </span>{" "}
            at 2 startups (1 established and 1 early stage) in India. Proficient
            with React.js, Tailwind CSS, Material UI. Also developed projects
            with Next.js and Shadcn. Transitioned to Full-stack by building and
            deploying FinSphere using MERN stack. Open to employment
            opportunities onsite and remote in India and remote internationally
            starting immediately. Always open to learning new and exciting
            technologies. Willing to relocate to Bengaluru, Hyderabad, Gurugram,
            Delhi, Noida and Pune in India.
          </p>
        </div>
      </div>
    </section>
  );
}
