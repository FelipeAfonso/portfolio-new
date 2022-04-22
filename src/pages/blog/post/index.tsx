import { MdArrowBack } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useFetchPostById } from "../../../api/useFetchPostById";

const bgOptions = ["#03A696", "#038C8C", "#025159", "#012E40"];

export default () => {
  const { id } = useParams();
  const { data } = useFetchPostById(id as string);
  const randomSeeds = [
    Math.floor(Math.random() * bgOptions.length),
    Math.floor(Math.random() * bgOptions.length),
  ];
  return data ? (
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
          <Link to="/blog" reloadDocument>
            <MdArrowBack
              className="text-gray-50 cursor-pointer rounded-full p-1 hover:bg-gray-50 hover:bg-opacity-20 hover:animate-pulse"
              size={28}
            />
          </Link>
          <h1 className="text-4xl text-gray-50 font-bold">{data.title}</h1>
        </div>
      </div>
      <hr />
      <div className="md:flex md:flex-row gap-2 my-2">
        <div className="md:flex-8">
          <div
            className="text-md text-gray-50"
            dangerouslySetInnerHTML={{ __html: data!.content.html }}
          />
        </div>
      </div>
    </div>
  ) : null;
};
