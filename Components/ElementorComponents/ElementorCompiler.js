import { components, ucwords } from "../../lib/elementor/ComponentsRouter";

const ElementorCompiler = ({getPageData}) => {
  const { postBy = {} } = getPageData.data;;
  const { elementorData = false } = postBy;

  return (
    <>
      {elementorData ? JSON.parse(elementorData).map((row) => {
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
      }) : null}
    </>
  );
};

export default ElementorCompiler;
