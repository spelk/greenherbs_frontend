import Link from  'next/link';
import Head from 'next/head';


function Seo() {
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
        <Link href="/test">test</Link> 
      </div>
    </div>
  );
}

export default Seo;
