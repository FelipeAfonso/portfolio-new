import { motion } from "framer-motion";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Project } from "../types";

export const ProjectCard: FC<{ project: Project; projectKey: string }> = ({
  project,
  projectKey,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.07,
        backgroundColor: "#ffffffaa",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white bg-opacity-5 min-w-full sm:min-w-min sm:w-96 p-2 rounded cursor-pointer"
    >
      <Link to={`/project/${projectKey}`} reloadDocument>
        <p className="text-2xl text-gray-50 font-bold">{project.title}</p>
        {project.images?.[0] ? (
          <motion.img
            animate={{ filter: "blur(0.5px)" }}
            whileHover={{ filter: "blur(0px)" }}
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
    </motion.div>
  );
};
