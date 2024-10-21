import { LinkedIn, GitHub, X, Email } from "@mui/icons-material";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex text-white flex-col justify-center items-center gap-10 h-[100vh]"
    >
      <h1 className="text-4xl font-poppins font-medium">Connect With Me</h1>
      <div className="flex gap-3">
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
        <a href="mailto:sjwork76@gmail.com">
          <div className="flex items-center gap-2 text-white font-ubuntu border border-cyan-400 rounded-3xl w-fit py-2 px-3">
            <Email /> Email
          </div>
        </a>
      </div>
    </section>
  );
}
