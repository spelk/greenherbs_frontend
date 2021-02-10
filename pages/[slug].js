import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import { GET_SEO } from "../Graphql/seo";
import { GET_PAGE_DATA, GET_ALL_PAGES_SLUGS } from "../Graphql/pagesData";
import Menu from "../Components/Menu";
import { initializeApollo } from "../src/apollo";

//relocate to another file
import Button from "../Components/ElementorComponents/Button";
import TextEditor from "../Components/ElementorComponents/TextEditor";

//relocate to another file
const components = {
  "Text-Editor": TextEditor,
  Button: Button,
};

//relocate to another file
function ucwords(text) {
  let str = text.toLowerCase();
  return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, function (s) {
    return s.toUpperCase();
  });
}

function Slug() {
  const {
    query: { slug },
  } = useRouter();

  const page = `https://apidev.greenherbs.ru/${slug}`;

  const { data } = useQuery(GET_SEO, {
    variables: {
      page,
    },
  });

  const { data: postObj = {} } = useQuery(GET_PAGE_DATA, {
    variables: {
      page,
    },
  });
  const { postBy = {} } = postObj;
  const { elementorData = false } = postBy;

  return (
    <>
      <Menu />
      {elementorData
        ? JSON.parse(elementorData).map((row) => {
            return (
              <div key={row.id} className="row">
                {row.elements.map((column) => {
                  return (
                    <div
                      key={column.id}
                      className={`col-${column.settings._column_size}`}
                    >
                      {column.elements.map((widget) => {
                        return React.createElement(
                          components[ucwords(widget.widgetType)],
                          {
                            ...widget.settings,
                            key: widget.id,
                          }
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })
        : null}
    </>
  );
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_ALL_PAGES_SLUGS,
  });

  const slugs = apolloClient.cache.extract().ROOT_QUERY.pages.nodes.map((el) => {
    return {params: {slug: el.slug}}
  })

  // console.log('needed-data:',JSON.stringify(slugs));

  return {
    paths: slugs,
    fallback: "blocking",
  };
}

export async function getStaticProps ({params}) {
  console.log(params)

  const { slug }= params

  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_SEO,
    variables: {
      page: `https://apidev.greenherbs.ru/${slug}`,
    },
  });

  // Pass data to the page via props
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

// export async function getServerSideProps(context) {
//   const {
//     params: { slug },
//   } = context;

//   const apolloClient = initializeApollo();

//   await apolloClient.query({
//     query: GET_SEO,
//     variables: {
//       page: `https://apidev.greenherbs.ru/${slug}`,
//     },
//   });

//   // Pass data to the page via props
//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   };
// }

export default Slug;
