import Head from "next/head";

function Seo({getSeo = {}}) {
  const { data = {} } = getSeo;
  const { postBy = {} } = data;
  const { seo = false } = isNaN(postBy) ? postBy : {} ;

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
        <link rel="preconnect" href="https://apidev.greenherbs.ru"></link>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G3TZ1F3LP4"
        ></script>
        {/* <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-G3TZ1F3LP4');
          `}
        </script> */}
      </Head>
    );
  }
  return (
    <Head>
      <title>no seo</title>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-G3TZ1F3LP4"
      ></script>
      {/* <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-G3TZ1F3LP4');
          `}
      </script> */}
    </Head>
  );
}

export default Seo;
