import { useRouter } from 'next/router'

function Slug() {
  const { query : { slug } } = useRouter()

  console.log(slug)

  return <div>Here is the seo content for this page <h1>{slug}</h1></div>;
}

export default Slug;
