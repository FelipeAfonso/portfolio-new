import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../content/projects";
import { MdArrowBack } from "react-icons/md";
import { ImageCarousel } from "./ImageCarousel";

const bgOptions = ["#03A696", "#038C8C", "#025159", "#012E40"];

export const ProjectPage = () => {
  const { key } = useParams<{ key?: string }>();
  const selectedProject = key && projects[key];

  const randomSeeds = [
    Math.floor(Math.random() * bgOptions.length),
    Math.floor(Math.random() * bgOptions.length),
  ];

  return key && selectedProject ? (
    <div
      className={`min-h-screen min-w-full p-8`}
      style={{
        background: `linear-gradient(0deg, ${bgOptions[randomSeeds[0]]}, ${
          bgOptions[randomSeeds[1]]
        })`,
      }}
    >
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
      <div className="md:flex md:flex-row gap-2 my-2">
        <div className="md:flex-8">
          <h3 className="text-lg text-gray-50">
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
              border-orange-400
              text-orange-400
              border-2 p-2 
              my-3
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
        </div>

        {selectedProject.workedWith?.length && (
          <div className="md:flex-4 md:my-2">
            <h3 className="text-3xl text-gray-50 mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject.workedWith?.map((k) => (
                <div className="bg-gray-50 bg-opacity-10 p-1 rounded">
                  <text className="text-gray-50">{k}</text>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedProject.images?.length && (
        <div>
          <h3 className="text-3xl text-gray-50 my-2">Project Images</h3>
          <ImageCarousel images={selectedProject.images} />
        </div>
      )}
    </div>
  ) : (
    <Navigate to="/#projects" />
  );
};
