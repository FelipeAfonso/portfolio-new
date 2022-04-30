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

export const fetchPostById = async (id: string) => {
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
  return post as Post;
};

export const useFetchPostById = (id: string, data?: Post) =>
  useQuery<Post>("posts", async () => fetchPostById(id), { initialData: data });
