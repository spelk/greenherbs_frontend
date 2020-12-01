import { gql, useQuery } from "@apollo/client";
import { initializeApollo } from "../../src/apollo";
import Link from  'next/link';
import Head from 'next/head';

const GET_SEO = gql`
  query getSeo {
    page(id: "2", idType: DATABASE_ID) {
      seo {
        metaKeywords
        opengraphTitle
        title
      }
    }
  }
`;

function Seo({ data }) {
  const apolloClient = initializeApollo();

  apolloClient.writeQuery({
    query: GET_SEO,
    data
  })

  return (
    <div>
      <Head>
        <title>title</title>
      </Head>
      <div>
        Here is the seo content for this page, <pre>{JSON.stringify(data)}</pre>
        {console.log(data)}
        <Link href="/test">test</Link> 
      </div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const getSeoQuery = await apolloClient.query({
    query: GET_SEO
  })

  console.log(apolloClient.cache.extract())
  // Pass data to the page via props
  return { props: { 
    data: apolloClient.cache.extract()
   } };
}

export default Seo;
