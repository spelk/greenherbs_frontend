import { gql, useQuery } from "@apollo/client";
import { initializeApollo } from "../../src/apollo";

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

function Test({ data }) {
  console.log(data);
return <div>Test, {JSON.stringify(data)}</div>;
}

// This gets called on every request
export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  // Pass data to the page via props
  return { props: { 
    data: apolloClient.cache.extract()
   } };
}

export default Test;
