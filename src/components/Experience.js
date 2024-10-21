import Image from "next/image";

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex text-white flex-col justify-center items-center gap-10 h-[100vh]"
    >
      <h1 className="text-5xl font-poppins font-medium">Experience</h1>
      <div className="">
        <div className="">
          <div className="flex items-center gap-4">
            <Image src="/beanbyte_logo.jpeg" alt="beanbyte_logo" width={60} height={60} className="rounded-full" />
            <h4 className="text-2xl text-yellow-300">
              BeanByte Softwares Pvt Ltd
            </h4>
          </div>
          <div className="flex ml-7">
            <div className="w-1 h-5 bg-slate-400"></div>
            <div className="flex relative -left-[0.265rem] pt-4 gap-3">
              <div className="w-14 h-7 border-b-4 rounded-t-none rounded-bl-full border-b-slate-400 border-l-4 border-l-slate-400"></div>
              <div className="flex flex-col">
                <h5 className="font-ubuntu text-2xl text-[#FFF5E1]">
                  Software Development Intern (Frontend)
                </h5>
                <div className="flex gap-2 items-center">
                  <p className="text-lg font-bold text-[#61677A]">
                    Feb 2024 - Jul 2024 (6 m)
                  </p>
                  <p className="text-3xl font-bold text-[#61677A]">&middot;</p>
                  <p className="text-lg font-semibold text-[#61677A]">
                    Remote (5 m) + Jaipur, India (1 m)
                  </p>
                  <p className="text-3xl font-bold text-[#61677A]">&middot;</p>
                  <p className="text-lg font-semibold text-[#61677A]">
                    Full-Time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
