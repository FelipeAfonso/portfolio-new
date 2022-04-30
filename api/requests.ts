import { request, gql } from "graphql-request";

export const getAllPosts = async () =>
  await request(
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
        }
      }
    `
  );

export const getPostById = async (id: string) =>
  await request(
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
