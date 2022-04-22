import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

export type PostSummary = {
  title: string;
};

export const useFetchPosts = () =>
  useQuery<PostSummary[]>("posts", async () => {
    const { posts } = await request(
      import.meta.env.VITE_CMS_API,
      gql`
        query {
          posts {
            id
            title
            tags
            author {
              name
              picture {
                url
              }
            }
          }
        }
      `
    );
    return posts;
  });
