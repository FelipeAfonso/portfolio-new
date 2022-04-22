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
      className="bg-white bg-opacity-20 min-w-full sm:min-w-min sm:w-96 rounded cursor-pointer"
    >
      <Link to={`/project/${projectKey}`} reloadDocument>
        {project.images?.[0] ? (
          <motion.img
            animate={{ filter: "blur(0.5px)" }}
            whileHover={{ filter: "blur(0px)" }}
            src={project.images[0]}
            className="min-w-full h-48 rounded-t object-contain bg-black bg-opacity-80"
          />
        ) : (
          <div className="p-2 h-48 rounded-t bg-black bg-opacity-20">
            <text className="text-base text-gray-50">{`${project.description.slice(
              0,
              330
            )}${project.description.length > 330 ? "..." : ""}`}</text>
          </div>
        )}
        <p className="text-2xl text-gray-50 p-2 font-bold decoration-orange-400 underline">
          {project.title}
        </p>
      </Link>
    </motion.div>
  );
};
