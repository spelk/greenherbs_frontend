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



function Test() {
  const {data} = useQuery(GET_SEO)
  console.log(data);
return <div>Test, {JSON.stringify(data)}</div>;
}

// This gets called on every request


export default Test;
