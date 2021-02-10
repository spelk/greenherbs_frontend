import { gql } from "@apollo/client";

export const GET_PAGE_DATA = gql`
  query getSeo($page: String!) {
    postBy(uri: $page) {
      elementorData
    }
  }
`;

export const GET_ALL_PAGES_SLUGS = gql`
  query getAllSlugs {
    pages {
      nodes {
        slug
      }
    }
  }
`;
