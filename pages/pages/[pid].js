import { useQuery } from "@apollo/client";
import Link from  'next/link';
import { useRouter } from 'next/router'

import SeoForSeoPage from "../../Components/SeoForSeoPage"
import { GET_SEO } from "../../Graphql/seo"
import { initializeApollo } from "../../src/apollo";


function Seo() {
  const { data } = useQuery(GET_SEO)
  
  const { query : { pid } } = useRouter()

  return (
    <>
      <SeoForSeoPage seo={data.page.seo} />
      <div>
        Here is the seo content for this page, {pid} <hr />
        <Link href="/test">test</Link> 
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const getSeoQuery = await apolloClient.query({
    query: GET_SEO,
  });

  // Pass data to the page via props
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Seo;