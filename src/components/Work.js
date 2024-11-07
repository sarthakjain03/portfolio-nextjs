import { projects } from "@/data";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section
      id="work"
      className="flex text-white flex-col justify-center items-center gap-10 min-h-[100vh]"
    >
      <h1 className="text-5xl font-poppins font-medium">Work</h1>
      <div className="flex gap-6">
        {projects?.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            imgUrl={project.imgUrl}
            tech={project.tech}
            description={project.description}
            liveLink={project.liveLink}
            githubRepo={project.githubRepo}
          />
        ))}
      </div>
    </section>
  );
}
