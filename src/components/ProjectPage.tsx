import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../content/projects";
import { MdArrowBack } from "react-icons/md";
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

  const randomSeed = Math.floor(Math.random() * bgOptions.length);

  return key && selectedProject ? (
    <div className={`min-h-screen min-w-full p-8 ${bgOptions[randomSeed]}`}>
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <Link to="/#projects" reloadDocument>
            <MdArrowBack
              className="text-gray-50 cursor-pointer rounded-full p-1 hover:bg-gray-50 hover:bg-opacity-20 hover:animate-pulse"
              size={28}
            />
          </Link>
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
        <a
          href={selectedProject.link}
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
            Link to the project
          </button>
        </a>
      )}
      {selectedProject.workedWith?.length && (
        <>
          <h3 className="text-3xl text-gray-50 my-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {selectedProject.workedWith?.map((k) => (
              <div className="bg-gray-50 bg-opacity-10 p-1 rounded">
                <text className="text-gray-50">{k}</text>
              </div>
            ))}
          </div>
        </>
      )}
      {selectedProject.images?.length && (
        <div>
          <ImageCarousel images={selectedProject.images} />
        </div>
      )}
    </div>
  ) : (
    <Navigate to="/#projects" />
  );
};
