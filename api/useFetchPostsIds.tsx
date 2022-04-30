import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

export const fetchPostsIds = async () => {
  const { posts } = await request(
    process.env.NEXT_CMS_API ?? "",
    gql`
      query {
        posts {
          id
        }
      }
    `
  );
  return posts.map((p: { id: string }) => p.id) as string[];
};

export const useFetchPosts = (data?: string[]) =>
  useQuery<string[]>("posts_ids", fetchPostsIds, { initialData: data });
