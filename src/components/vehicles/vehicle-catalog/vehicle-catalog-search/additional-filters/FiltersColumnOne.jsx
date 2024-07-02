import { RenderField } from "../../../../global/fields/RenderField";

export const FiltersColumnOne = () => {
  return (
    <div className="flex flex-wrap gap-3 lg:flex-nowrap mb-5">
      <div className="w-full">
        <RenderField
          attributes={{
            type: "select",
            placeholder: "Fuel Type",
            name: "fuel",
          }}
        />
      </div>
      <div className="w-full">
        <RenderField
          attributes={{
            type: "select",
            placeholder: "Cylinder",
            name: "cylinder",
          }}
        />
      </div>
      <div className="w-full">
        <RenderField
          attributes={{
            type: "select",
            placeholder: "Drive Type",
            name: "drivetype",
          }}
        />
      </div>
      <div className="w-full">
        <RenderField
          attributes={{
            type: "select",
            placeholder: "Transmission",
            name: "transmission",
          }}
        />
      </div>
    </div>
  );
};
