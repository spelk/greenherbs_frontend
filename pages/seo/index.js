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
  <title>{seo.title}</title>
        {seo.metaDesc ? <meta name="description" content={seo.metaDesc} /> : null}
        {seo.opengraphTitle ? <meta property="og:title" content={seo.opengraphTitle} /> : null}
        {seo.opengraphType ? <meta property="og:type" content={seo.opengraphType} /> : null}
        {seo.opengraphPublisher ? <meta property="og:publisher" content={seo.opengraphPublisher} /> : null}
        {seo.opengraphSiteName ? <meta property="og:site_name" content={seo.opengraphSiteName} /> : null}

        {seo.opengraphAuthor ? <meta property="og:author" content={seo.opengraphAuthor} /> : null}
        {seo.opengraphDescription ? <meta property="og:description" content={seo.opengraphDescription} /> : null}
        {seo.opengraphModifiedTime ? <meta property="og:modified_time" content={seo.opengraphModifiedTime} /> : null}
        {seo.opengraphPublishedTime ? <meta property="og:published_time" content={seo.opengraphPublishedTime} /> : null}
        {seo.opengraphUrl ? <meta property="og:url" content={seo.opengraphUrl} /> : null}

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G3TZ1F3LP4"></script>
        <script>
        dangerouslySetInnerHTML = {{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-G3TZ1F3LP4');
          `
        }}
          
        </script>

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
