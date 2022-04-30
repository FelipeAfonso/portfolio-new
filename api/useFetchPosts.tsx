import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

export type PostSummary = {
  id: string;
  title: string;
  tags: string[];
  author: {
    name: string;
    picture: {
      url: string;
    };
  };
  coverImage: {
    url: string;
  };
};

export const fetchPosts = async () => {
  const { posts } = await request(
    process.env.NEXT_CMS_API ?? "",
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
          coverImage {
            url
          }
        }
      }
    `
  );
  return posts as PostSummary[];
};

export const useFetchPosts = (data?: PostSummary[]) =>
  useQuery<PostSummary[]>("posts", fetchPosts, { initialData: data });
