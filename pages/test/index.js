import { gql, useQuery } from "@apollo/client";
import { initializeApollo } from "../../src/apollo";

const GET_DOGS = gql`
  query MyQuery {
    post(id: "1", idType: DATABASE_ID) {
      id
      excerpt
    }
  }
`;

function Test({ data }) {
  return <div>Test, {JSON.stringify(data)}</div>;
}

// This gets called on every request
export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_DOGS
  })

  console.log(apolloClient.cache.extract())
  // Pass data to the page via props
  return { props: { 
    data: apolloClient.cache.extract()
   } };
}

export default Test;
