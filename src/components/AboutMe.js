"use client";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function AboutMe() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <section
      id="aboutme"
      className="flex text-white flex-col justify-center items-center gap-10 min-h-[100vh]"
    >
      <h1 className="text-4xl lg:text-5xl font-poppins font-medium">About Me</h1>
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
            Here&apos;s a little about myself - Final year student at IIIT
            Dharwad pursuing B.Tech in Computer Science and Engineering
            graduating in July 2025.{" "}
            <span className="border-b border-b-yellow-300">
              More than 1 year of experience
            </span>{" "}
            with Frontend Web Development and{" "}
            <span className="border-b border-b-yellow-300">
              6-months of professional work experience
            </span>{" "}
            at an early stage startup in India. Proficient with React.js,
            Tailwind CSS, Material UI. Currently learning and building with
            Next.js. Open to FTE opportunities onsite and remote in India
            and remote internationally starting January 2025. Also interested in
            learning new and exciting technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
