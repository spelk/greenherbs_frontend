import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

import { GET_SEO } from "../Graphql/seo";
import Menu from "../Components/Menu";
import { initializeApollo } from "../src/apollo";

function Slug() {
  const {
    query: { slug },
  } = useRouter();

  const { data } = useQuery(GET_SEO, {
    variables: {
      page: `https://apidev.greenherbs.ru/${slug}`
    },
  });

  return (
    <>
      <Menu />
      <div>
        Here is the seo content for this page <h1>{JSON.stringify(data)}</h1>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const {
    params: { slug },
  } = context;

  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_SEO,
    variables: {
      page: `https://apidev.greenherbs.ru/${slug}`
    },
  });

  // Pass data to the page via props
  return {
    props: {
      initialApolloState: { [slug]: apolloClient.cache.extract() },
    },
  };
}

export default Slug;
