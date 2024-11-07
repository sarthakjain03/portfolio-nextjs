"use client";
import Image from "next/image";
import Link from "next/link";
import { techStack } from "@/data";
import TechTab from "./TechTab";
import { motion } from "framer-motion";
import { useState } from "react";
import { Launch, GitHub } from "@mui/icons-material";

export default function ProjectCard({
  title,
  imgUrl,
  description,
  tech,
  liveLink,
  githubRepo,
}) {
  const techArray = tech?.split(", ");
  const [activeCard, setActiveCard] = useState(false);

  return (
    <div className="flex flex-col border border-white shadow shadow-white rounded-2xl overflow-hidden">
      <Image src={imgUrl} alt="project image" height={320} width={480} />
      <div className="flex flex-col gap-3 px-5 py-4 max-w-[480px]">
        <div className="flex justify-between items-center">
          <p
            onClick={() => setActiveCard((prev) => !prev)}
            className="font-ubuntu font-semibold text-3xl cursor-pointer"
          >
            {title}
          </p>
          <div className="flex gap-3">
            <Link target="_blank" href={liveLink}>
              <Launch />
            </Link>
            <Link target="_blank" href={githubRepo}>
              <GitHub />
            </Link>
          </div>
        </div>
        {activeCard && (
          <div className="flex flex-col gap-4">
            <p
              className="text-xl cursor-pointer"
              onClick={() => setActiveCard(false)}
            >
              {description}
            </p>
            <div className="flex gap-3">
              {techArray?.map((tech) => (
                <TechTab key={tech} title={tech} logo={techStack[tech]} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
