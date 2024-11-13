"use client";
import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useAnimation,
  useMotionValueEvent,
} from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Experience() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("lg"));
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 1", "1.8 1"],
  });
  const mainControls = useAnimation();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    mainControls.set({ height: `${(1 - latest) * 100}%` });
  });

  return (
    <section
      id="experience"
      className="flex text-white flex-col justify-center items-center gap-10 min-h-[100vh]"
    >
      <h1 className="text-4xl lg:text-5xl font-poppins font-medium">
        Experience
      </h1>
      <motion.div ref={ref}>
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-4 ml-1 lg:ml-0">
            <Image
              src="/beanbyte_logo.jpeg"
              alt="beanbyte_logo"
              width={isSmall ? 50 : 60}
              height={isSmall ? 50 : 60}
              className="rounded-full"
            />
            <h4 className="text-xl lg:text-2xl text-yellow-300">
              BeanByte Softwares Pvt Ltd
            </h4>
          </div>
          <div className="flex ml-7">
            <div className="w-1 h-5 bg-slate-400"></div>
            <div className="flex relative -left-[0.285rem] pt-4 gap-3">
              <div className="w-14 h-8 border-b-4 rounded-t-none rounded-bl-full border-b-slate-400 border-l-4 border-l-slate-400"></div>
              <div className="flex flex-col">
                <h5 className="font-ubuntu text-xl lg:text-2xl text-[#FFF5E1]">
                  Software Development Intern (Frontend)
                </h5>
                <div className="flex flex-col lg:flex-row lg:gap-2 lg:items-center">
                  <div className="flex gap-2 items-center">
                    {isSmall && (
                      <p className="text-3xl font-bold text-[#61677A]">
                        &middot;
                      </p>
                    )}
                    <p className="text-lg font-bold text-[#61677A]">
                      Feb 2024 - Jul 2024 (6 m)
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="text-3xl font-bold text-[#61677A]">
                      &middot;
                    </p>
                    <p className="text-lg font-bold text-[#61677A]">
                      Remote (5 m) + Jaipur, India (1 m)
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="text-3xl font-bold text-[#61677A]">
                      &middot;
                    </p>
                    <p className="text-lg font-bold text-[#61677A]">
                      Full-Time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ height: "100%" }}
            animate={mainControls}
            className="absolute left-0 bottom-0 size-full bg-black"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
