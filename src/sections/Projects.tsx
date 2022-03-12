import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../content/projects";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-start justify-center p-4 min-h-screen"
      style={{ background: "linear-gradient(180deg, #038C8C, #025159)" }}
    >
      <h2 className="text-4xl  text-gray-50 m-2">
        Here are some recent projects I created!
      </h2>
      <div className="flex flex-wrap gap-4 m-2">
        {Object.keys(projects).map((k) => (
          <ProjectCard key={k} projectKey={k} project={projects[k]} />
        ))}
      </div>
    </div>
  );
};
