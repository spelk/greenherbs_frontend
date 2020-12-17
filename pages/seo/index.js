import { gql, useQuery } from "@apollo/client";
import dynamic from 'next/dynamic'

const SeoForSeoPage = dynamic(() => import('../../Components/Seo-for-seo-page'), {loading: () => <p>Loading</p>});

import { initializeApollo } from "../../src/apollo";

const GET_SEO = gql`
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

function Seo() {
  return (
    <SeoForSeoPage />
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const getSeoQuery = await apolloClient.query({
    query: GET_SEO,
  });

  console.log(apolloClient.cache.extract());
  // Pass data to the page via props
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}


export default Seo;
