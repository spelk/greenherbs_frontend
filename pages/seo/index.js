import { gql, useQuery } from "@apollo/client";
import { initializeApollo } from "../../src/apollo";
import Link from  'next/link';
import Head from 'next/head';

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

function Seo() {
  const {data} = useQuery(GET_SEO);

  const seo = data.page.seo;

  console.log(data.page.seo);
  return (
    <div>
      <Head>
        <title>Sample Page - Greenherbs</title>
        <meta property="og:title" content="Sample Page - Greenherbs" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Greenherbs" />
        <meta property="og:description" content="This is an example page. It&amp;#8217;s different from a blog post because it will stay in one place and will show up in your site navigation (in most themes). Most people start with an About page that introduces them to potential site visitors. It might say something like this: Hi there! I&amp;#8217;m a bike messenger [&amp;hellip;]" />
        <meta property="og:url" content="https://api.dev.greenherbs.ru/sample-page/" />
      </Head>
      <div>
        Here is the seo content for this page, <pre>{JSON.stringify(data)}</pre>
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
    initialApolloState: apolloClient.cache.extract()
   } };
}

export default Seo;
