import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import { GET_SEO } from "../Graphql/seo";

function Seo() {
  const {
    query: { slug },
  } = useRouter();

  const page = `https://apidev.greenherbs.ru/${slug}`;

  const { data } = useQuery(GET_SEO, {
    variables: {
      page,
    },
  });
  const { postBy } = data;
  const { seo } = postBy;

  if (seo) {
    return (
      <Head>
        <title>{seo.title}</title>
        {seo.metaDesc ? (
          <meta name="description" content={seo.metaDesc} />
        ) : null}
        {seo.opengraphTitle ? (
          <meta property="og:title" content={seo.opengraphTitle} />
        ) : null}
        {seo.opengraphType ? (
          <meta property="og:type" content={seo.opengraphType} />
        ) : null}
        {seo.opengraphPublisher ? (
          <meta property="og:publisher" content={seo.opengraphPublisher} />
        ) : null}
        {seo.opengraphSiteName ? (
          <meta property="og:site_name" content={seo.opengraphSiteName} />
        ) : null}

        {seo.opengraphAuthor ? (
          <meta property="og:author" content={seo.opengraphAuthor} />
        ) : null}
        {seo.opengraphDescription ? (
          <meta property="og:description" content={seo.opengraphDescription} />
        ) : null}
        {seo.opengraphModifiedTime ? (
          <meta
            property="og:modified_time"
            content={seo.opengraphModifiedTime}
          />
        ) : null}
        {seo.opengraphPublishedTime ? (
          <meta
            property="og:published_time"
            content={seo.opengraphPublishedTime}
          />
        ) : null}
        {seo.opengraphUrl ? (
          <meta property="og:url" content={seo.opengraphUrl} />
        ) : null}
      </Head>
    );
  }
  return (<title>no seo</title>)
}

export default Seo;
