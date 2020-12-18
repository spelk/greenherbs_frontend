import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import Head from "next/head";



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

function SeoForSeoPage() {
  const { data } = useQuery(GET_SEO);

  console.log(data.page);

  const seo = data.page.seo;

  
  return (
    <div>Hello world</div>
  );
}


export default SeoForSeoPage;