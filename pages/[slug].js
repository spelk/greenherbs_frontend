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

  // const { data } = useQuery(gql`
  // query getSeo {
  //   postBy(uri: "https://apidev.greenherbs.ru/${slug}" ) {
  //     seo {
  //       canonical
  //       cornerstone
  //       focuskw
  //       metaDesc
  //       metaKeywords
  //       metaRobotsNofollow
  //       metaRobotsNoindex
  //       opengraphAuthor
  //       opengraphDescription
  //       opengraphModifiedTime
  //       opengraphPublishedTime
  //       opengraphSiteName
  //       opengraphPublisher
  //       opengraphTitle
  //       opengraphType
  //       opengraphUrl
  //       twitterDescription
  //       title
  //       twitterTitle
  //       schema {
  //         articleType
  //         pageType
  //       }
  //     }
  //   }
  // }
  // `);

  return (
    <>
      <Menu />
      <div>
        Here is the seo content for this page <h1>{slug}</h1>
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
    query: gql`
    query getSeo {
      postBy(uri: "https://apidev.greenherbs.ru/${slug}" ) {
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
    `,
  });

  // Pass data to the page via props
  return {
    props: {
      initialApolloState: {[slug]: apolloClient.cache.extract()},
    },
  };
}

export default Slug;
