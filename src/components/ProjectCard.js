"use client";
import Image from "next/image";
import Link from "next/link";
import { techStack } from "@/data";
import TechTab from "./TechTab";
import { motion, AnimatePresence } from "framer-motion";
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
  const [activeCard, setActiveCard] = useState(0);

  const handleClick = () => {
    setActiveCard((prev) => {
      if (prev === 0) return title;
      return 0;
    });
  };

  return (
    <motion.div
      layoutId={title}
      onHoverStart={handleClick}
      onHoverEnd={handleClick}
      className="flex flex-col gap-4 border border-white shadow shadow-white rounded-2xl overflow-hidden h-fit"
    >
      <motion.div>
        <Image src={imgUrl} alt="project image" height={320} width={480} />
      </motion.div>
      <motion.div
        className={`flex justify-between items-center px-5 ${
          activeCard ? "pb-0" : "pb-4"
        }`}
      >
        <p className="font-ubuntu font-semibold text-3xl">
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
      </motion.div>
      <AnimatePresence>
        {activeCard === title && (
          <motion.div
            // layoutId={activeCard}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col gap-4 px-5 max-w-[480px]"
          >
            <p className="text-xl cursor-pointer">{description}</p>
            <div className="flex gap-3 pb-4 flex-wrap">
              {techArray?.map((tech) => (
                <TechTab key={tech} title={tech} logo={techStack[tech]} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <div className="flex flex-col gap-3 px-5 py-4"></div> */}
    </motion.div>
  );
}
