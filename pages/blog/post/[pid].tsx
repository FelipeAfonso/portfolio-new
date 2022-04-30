import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MdArrowBack } from "react-icons/md";
import { fetchPostById, Post, useFetchPostById } from "api/useFetchPostById";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import { fetchPostsIds } from "api/useFetchPostsIds";

const bgOptions = ["#03A696", "#038C8C", "#025159", "#012E40"];

const Post: NextPage<{
  data?: Post;
}> = ({ data }) => {
  const {
    query: { pid },
    push,
  } = useRouter();
  useFetchPostById((Array.isArray(pid) ? pid[0] : pid) ?? "", data);
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
          <div onClick={() => push("/blog")}>
            <MdArrowBack
              className="text-gray-50 cursor-pointer rounded-full p-1 hover:bg-gray-50 hover:bg-opacity-20 hover:animate-pulse"
              size={28}
            />
          </div>
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

export const getStaticProps: GetStaticProps = async (context) => {
  const id =
    (context.params?.pid &&
      (Array.isArray(context.params.pid)
        ? context.params.pid[0]
        : context.params.pid)) ??
    "";
  const data = await fetchPostById(id);
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const bruteIds = await fetchPostsIds();
  const paths = bruteIds.map((id) => ({ params: { pid: id } }));
  return {
    paths,
    fallback: "blocking",
    revalidate: 3600,
  };
};

export default Post;
