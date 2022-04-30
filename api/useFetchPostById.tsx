import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

export type Post = {
  id: string;
  title: string;
  author: {
    name: string;
    picture: {
      url: string;
    };
  };
  content: {
    html: string;
  };
  coverImage: {
    url: string;
  };
  publishedAt: string;
};

export const useFetchPostById = (id: string) =>
  useQuery<Post>("posts", async () => {
    const { post } = await request(
      process.env.NEXT_CMS_API ?? "",
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
