import { RenderField } from "../../../../global/fields/RenderField";

export const Price = () => {
  return (
    <div className="add_vehicle_category">
      <RenderField
        attributes={{
          type: "input",
          inputType: "text",
          label: "Price",
          placeholder: "ex: $15,000",
          name: "price",
        }}
      />
    </div>
  );
};
