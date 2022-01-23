import { FC } from "react";
import { Link } from "wouter";
import { Project } from "../types";

export const ProjectCard: FC<{ project: Project; projectKey: string }> = ({
  project,
  projectKey,
}) => {
  return (
    <Link
      href={`/project/${projectKey}`}
      className="bg-white bg-opacity-10 min-w-full sm:min-w-min sm:w-96 p-2 rounded cursor-pointer"
    >
      <p className="text-2xl text-gray-50 font-bold">{project.title}</p>
      {project.images?.[0] ? (
        <img
          src={project.images[0]}
          className="min-w-full max-h-48 object-contain bg-black mt-2"
        />
      ) : (
        <div className="mt-2">
          <text className="text-base text-gray-50">{`${project.description.slice(
            0,
            330
          )}${project.description.length > 330 ? "..." : ""}`}</text>
        </div>
      )}
    </Link>
  );
};
