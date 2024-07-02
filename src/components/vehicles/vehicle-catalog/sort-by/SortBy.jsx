import { RenderField } from "../../../global/fields/RenderField";

export const SortBy = () => {
  return (
    <div className="flex items-center flex-wrap justify-between mb-8 gap-3">
      <p className="text-base text-gray-500">Available Vehicles: 24</p>
      <div className="flex items-center gap-3">
        <p className="text-base text-gray-500">Sort By:</p>
        <RenderField
          attributes={{
            type: "select",
            name: "sort",
            placeholder: "Default",
          }}
        />
      </div>
    </div>
  );
};
