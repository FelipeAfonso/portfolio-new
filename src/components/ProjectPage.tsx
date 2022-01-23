import { Link, Redirect, useRoute } from "wouter";
import { projects } from "../content/projects";

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
  const [match, params] = useRoute("/project/:key");
  const selectedProject = params && projects[params.key];

  const randomSeed = Math.floor(Math.random() * bgOptions.length);

  return match && selectedProject ? (
    <div className={`min-h-screen min-w-full p-8 ${bgOptions[randomSeed]}`}>
      <h1 className="text-4xl text-gray-50 font-bold">
        {selectedProject.title}
      </h1>
      <hr />
      <h3 className="text-lg text-gray-50 py-2">
        {selectedProject.description}
      </h3>
      {selectedProject.link && (
        <Link
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
            Acesse o projeto!
          </button>
        </Link>
      )}
      {selectedProject.images?.length && (
        <div>
          <img
            className="w-full sm:w-3/4 object-contain my-4"
            src={selectedProject.images[0]}
          />
        </div>
      )}
    </div>
  ) : (
    <Redirect to="/" />
  );
};
