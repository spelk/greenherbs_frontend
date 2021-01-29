import { gql } from "@apollo/client";

export const GET_SEO = gql`
    query getSeo ($page: String!) {
      postBy(uri: $page ) {
        seo {
          canonical
          cornerstone
          focuskw
          metaDesc
          metaKeywords
          metaRobotsNofollow
          metaRobotsNoindex
          opengraphAuthor
          opengraphDescription
          opengraphModifiedTime
          opengraphPublishedTime
          opengraphSiteName
          opengraphPublisher
          opengraphTitle
          opengraphType
          opengraphUrl
          twitterDescription
          title
          twitterTitle
          schema {
            articleType
            pageType
          }
        }
      }
    }
`;
