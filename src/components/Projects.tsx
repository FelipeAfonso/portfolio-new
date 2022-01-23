import { projects } from "../content/projects";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className="flex flex-col items-start justify-center  bg-blue-900 p-4 min-h-screen">
      <h2 className="text-4xl  text-gray-50 m-2">
        Here are some recent projects I created!
      </h2>
      <div className="flex flex-wrap gap-4 m-2">
        {Object.values(projects).map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </div>
  );
};
