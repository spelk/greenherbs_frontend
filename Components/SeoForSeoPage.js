import Head from "next/head";

function SeoForSeoPage({seo}) {
  return (
    <Head>
      <title>{seo.title}</title>
      {seo.metaDesc ? <meta name="description" content={seo.metaDesc} /> : null}
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
        <meta property="og:modified_time" content={seo.opengraphModifiedTime} />
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

export default SeoForSeoPage;
