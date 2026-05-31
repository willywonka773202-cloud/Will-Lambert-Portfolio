import type { Project } from "@/data/types";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={(i % 3) * 90}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
