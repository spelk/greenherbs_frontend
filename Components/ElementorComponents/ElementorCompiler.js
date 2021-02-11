import { components, ucwords } from "../../lib/elementor/ComponentsRouter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { GET_PAGE_DATA } from "../../Graphql/pagesData";

const ElementorCompiler = () => {
  const {
    query: { slug },
  } = useRouter();

  const page = `https://apidev.greenherbs.ru/${slug}`;

  const { data: postObj = {} } = useQuery(GET_PAGE_DATA, {
    variables: {
      page,
    },
  });

  const { postBy = {} } = postObj;
  const { elementorData = false } = postBy;

  return (
    <>
      {JSON.parse(elementorData).map((row) => {
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
      })}
    </>
  );
};

export default ElementorCompiler;
