import { GET_SEO } from "../Graphql/seo";
import { GET_PAGE_DATA, GET_ALL_PAGES_SLUGS } from "../Graphql/pagesData";

import Menu from "../Components/Menu";
import ElementorCompiler from "../Components/ElementorComponents/ElementorCompiler"
import Seo from "../Components/Seo"
import { initializeApollo } from "../src/apollo";

function Slug() {
  return (
    <>
      <Seo />
      <Menu />
      <ElementorCompiler />
    </>
  );
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_ALL_PAGES_SLUGS,
  });

  const slugs = apolloClient.cache.extract().ROOT_QUERY.pages.nodes.map((el) => {
    return {params: {slug: el.slug}}
  })

  return {
    paths: slugs,
    fallback: "blocking",
  };
}

export async function getStaticProps ({params}) {
  const { slug } = params;

  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_SEO,
    variables: {
      page: `https://apidev.greenherbs.ru/${slug}`,
    },
  });

  await apolloClient.query({
    query: GET_PAGE_DATA,
    variables: {
      page: `https://apidev.greenherbs.ru/${slug}`,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 30,
  };
}

export default Slug;
