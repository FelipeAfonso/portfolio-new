import { Link, useNavigate, useParams } from "react-router-dom";
import { projects } from "../content/projects";
import { MdArrowBack } from "react-icons/md";
import { useState } from "react";
import { ImageCarousel } from "./ImageCarousel";

const bgOptions = [
  "bg-blue-900",
  "bg-cyan-900",
  "bg-green-900",
  "bg-teal-900",
  "bg-indigo-900",
  "bg-lime-900",
  "bg-slate-900",
];

export const ProjectPage = () => {
  const { key } = useParams<{ key?: string }>();
  const selectedProject = key && projects[key];
  const navigate = useNavigate();
  const randomSeed = Math.floor(Math.random() * bgOptions.length);
  if (!key || !selectedProject) navigate("/");
  return key && selectedProject ? (
    <div className={`min-h-screen min-w-full p-8 ${bgOptions[randomSeed]}`}>
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <MdArrowBack
            className="text-gray-50 cursor-pointer rounded-full p-1 hover:bg-gray-50 hover:bg-opacity-20 hover:animate-pulse"
            onClick={() => navigate("/")}
            size={28}
          />
          <h1 className="text-4xl text-gray-50 font-bold">
            {selectedProject.title}
          </h1>
        </div>
      </div>
      <hr />
      <h3 className="text-lg text-gray-50 py-2">
        {selectedProject.description}
      </h3>
      {selectedProject.link && (
        <Link
          to={selectedProject.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className={`
              bg-transparent 
              rounded 
              border-gray-50 
              text-gray-50 
              border-2 p-2 
              uppercase 
              font-bold 
              hover:bg-gray-50 
              hover:bg-opacity-10 
              hover:animate-pulse
            `}
          >
            Acesse o projeto!
          </button>
        </Link>
      )}
      {selectedProject.images?.length && (
        <div>
          <ImageCarousel images={selectedProject.images} />
        </div>
      )}
    </div>
  ) : null;
};
