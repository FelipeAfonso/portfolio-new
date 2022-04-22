import { useFetchPosts } from "../../api/useFetchPosts";
import { PostCard } from "../../components/PostCard";

export default () => {
  const { data } = useFetchPosts();
  return (
    <div
      className="flex flex-col items-start justify-center p-4 min-h-screen"
      style={{ background: "linear-gradient(180deg, #038C8C, #025159)" }}
    >
      <div className="flex flex-wrap gap-4 m-2">
        {data?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
