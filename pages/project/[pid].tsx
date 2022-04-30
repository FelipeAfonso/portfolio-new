import { projects } from "content/projects";
import { MdArrowBack } from "react-icons/md";
import { ImageCarousel } from "components/ImageCarousel";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Link from "next/link";
import { Project } from "types";

const bgOptions = ["#03A696", "#038C8C", "#025159", "#012E40"];

const Project: NextPage = () => {
  const {
    query: { pid },
    push,
  } = useRouter();
  const selectedProject =
    pid && (projects[Array.isArray(pid) ? pid[0] : pid] as Project);

  const randomSeeds = [
    Math.floor(Math.random() * bgOptions.length),
    Math.floor(Math.random() * bgOptions.length),
  ];

  return pid && selectedProject ? (
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
          <div onClick={() => push("/#projects")}>
            <MdArrowBack
              className="text-gray-50 cursor-pointer rounded-full p-1 hover:bg-gray-50 hover:bg-opacity-20 hover:animate-pulse"
              size={28}
            />
          </div>
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
                <div key={k} className="bg-gray-50 bg-opacity-10 p-1 rounded">
                  <p className="text-gray-50">{k}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedProject.images?.length && (
        <div>
          <h3 className="text-3xl text-gray-50 my-2">Project Images</h3>
          <ImageCarousel images={selectedProject.images.map((i) => i.src)} />
        </div>
      )}
    </div>
  ) : (
    <Link href="/#projects" />
  );
};

export default Project;
