"use client";
import { motion } from "framer-motion";
import { LinkedIn, GitHub, X, Email } from "@mui/icons-material";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex text-white flex-col justify-center items-center gap-10 min-h-[100vh]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center gap-4"
      >
        <h1 className="text-4xl lg:text-5xl font-poppins font-medium text-yellow-300">
          Get in touch!
        </h1>
        <p className="font-poppins text-xl lg:text-2xl text-center">
          I would love to connect with you and work on exciting different
          projects and ideas.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex gap-3 flex-wrap justify-center"
      >
        <a
          href="https://www.linkedin.com/in/sarthakjain-coder-developer/"
          target="_blank"
        >
          <div className="flex items-center gap-2 text-white font-ubuntu border border-cyan-400 rounded-3xl w-fit py-2 px-3">
            <LinkedIn /> LinkedIn
          </div>
        </a>
        <a href="https://x.com/jsarthak110" target="_blank">
          <div className="flex items-center gap-2 text-white font-ubuntu border border-cyan-400 rounded-3xl w-fit py-2 px-3">
            <X /> Twitter (X)
          </div>
        </a>
        <a href="https://github.com/sarthakjain03" target="_blank">
          <div className="flex items-center gap-2 text-white font-ubuntu border border-cyan-400 rounded-3xl w-fit py-2 px-3">
            <GitHub /> GitHub
          </div>
        </a>
        <a href="mailto:sarthakjain.tech@gmail.com">
          <div className="flex items-center gap-2 text-white font-ubuntu border border-cyan-400 rounded-3xl w-fit py-2 px-3">
            <Email /> Email
          </div>
        </a>
      </motion.div>
    </section>
  );
}
