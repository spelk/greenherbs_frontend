import dynamic from 'next/dynamic'

const SeoForSeoPage = dynamic(() => import('../../Components/Seo-for-seo-page'), {loading: () => <p>Loading</p>})

function Seo() {
  return (
    <SeoForSeoPage />
  );
}



export default Seo;
