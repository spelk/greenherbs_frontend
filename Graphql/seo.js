import { gql } from "@apollo/client";

export const GET_SEO = gql`
query getSeo {
  page(id: "2", idType: DATABASE_ID) {
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