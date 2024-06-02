import { RenderField } from "../../../global/fields/RenderField";

export const Price = () => {
  return (
    <div className="vehicle_category">
      <h5 className="vehicle_category_title">Price</h5>
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
