import { RenderField } from "../../../../global/fields/RenderField";

export const FiltersColumnTwo = () => {
  return (
    <div className="flex flex-wrap gap-3 lg:flex-nowrap mb-5">
      <div className="w-full">
        <RenderField
          attributes={{
            type: "select",
            placeholder: "Door",
            name: "door",
          }}
        />
      </div>
      <div className="w-full">
        <RenderField
          attributes={{
            type: "select",
            placeholder: "Color",
            name: "color",
          }}
        />
      </div>
      <div className="w-full">
        <RenderField
          attributes={{
            type: "select",
            placeholder: "Offer Type",
            name: "Offer Type",
          }}
        />
      </div>
      <div className="w-full">
        <RenderField
          attributes={{
            type: "text",
            placeholder: "VIN",
            name: "VIN",
          }}
        />
      </div>
    </div>
  );
};
