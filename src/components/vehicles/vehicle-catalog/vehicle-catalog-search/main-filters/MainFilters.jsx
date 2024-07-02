import { RenderField } from "../../../../global/fields/RenderField";

export const MainFilters = ({ onClick }) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="flex flex-wrap gap-3 lg:flex-nowrap">
      <div className="w-full">
        <RenderField
          attributes={{
            type: "select",
            placeholder: "Condition",
            name: "condition",
          }}
        />
      </div>
      <div className="w-full">
        <RenderField
          attributes={{
            type: "select",
            placeholder: "Category",
            name: "category",
          }}
        />
      </div>
      <div className="w-full">
        <RenderField
          attributes={{
            type: "select",
            placeholder: "Type",
            name: "type",
          }}
        />
      </div>
      <div className="w-full">
        <RenderField
          attributes={{
            type: "select",
            placeholder: "Make",
            name: "make",
          }}
        />
      </div>
      <div className="w-full">
        <RenderField
          attributes={{
            type: "select",
            placeholder: "Model",
            name: "model",
          }}
        />
      </div>
      <button
        onClick={handleButtonClick}
        className="text-white bg-cape-green w-full rounded-full"
      >
        More Filters
      </button>
    </div>
  );
};
