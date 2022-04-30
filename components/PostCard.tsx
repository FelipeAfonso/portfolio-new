import { motion } from "framer-motion";
import { FC } from "react";
import { PostSummary } from "api/useFetchPosts";
import Link from "next/link";

export const PostCard: FC<{ post: PostSummary }> = ({ post }) => {
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
      <Link href={`/blog/post/${post.id}`} passHref>
        <motion.img
          animate={{ filter: "blur(0.5px)" }}
          whileHover={{ filter: "blur(0px)" }}
          src={post.coverImage.url}
          className="min-w-full h-48 rounded-t object-contain bg-black bg-opacity-80"
        />
        <div className="flex flex-row items-center justify-between">
          <div className="mx-2">
            <p className="text-lg text-gray-50 font-bold decoration-orange-400 underline">
              {post.title}
            </p>
            <p className="text-sm text-gray-100">{post.author.name}</p>
          </div>
          <img
            className="inline object-cover w-12 h-12 mr-2 rounded-full my-2"
            src={post.author.picture.url}
          />
        </div>
      </Link>
    </motion.div>
  );
};
