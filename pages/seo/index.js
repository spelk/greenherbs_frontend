import { gql, useQuery } from "@apollo/client";
import { initializeApollo } from "../../src/apollo";
import Head from 'next/head';

const GET_SEO = gql`
  query getSeo {
    pageBy(pageId: 2) {
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

function Seo({ data }) {
  return (
    <div>
      <Head>
        <title>Some title</title>
      </Head>
      <div>
        Here is the seo content for this page, <pre>{JSON.stringify(data)}</pre>
      </div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_SEO
  })

  console.log(apolloClient.cache.extract())
  // Pass data to the page via props
  return { props: { 
    data: apolloClient.cache.extract()
   } };
}

export default Seo;
