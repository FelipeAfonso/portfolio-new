import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

export type PostSummary = {
  title: string;
};

export const useFetchPostById = (id: string) =>
  useQuery<PostSummary[]>("posts", async () => {
    const { post } = await request(
      import.meta.env.VITE_CMS_API,
      gql`
      query {
        post(where: {id: "${id}"}) {
          author {
            name
            picture {
              url
            }
          }
          content {
            html
          }
          coverImage {
            url
          }
          publishedAt
          title
        }
      }
      `
    );
    return post;
  });
