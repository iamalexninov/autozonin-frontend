import { RenderField } from "../../global/fields/RenderField";

export const Price = ({ setPrice }) => {
  return (
    <div className="vehicle_category">
      <h5 className="vehicle_category_title">Price</h5>
      <RenderField
        attributes={{
          type: "number",
          label: "Price",
          placeholder: "Enter Price in €.",
          name: "amount",
          setValues: setPrice,
        }}
      />
      <RenderField
        attributes={{
          type: "select",
          label: "Negotiable",
          placeholder: "Select Negotiable",
          name: "negotiable",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
          setValues: setPrice,
        }}
      />
      <RenderField
        attributes={{
          type: "select",
          label: "Lease Available",
          placeholder: "Select Lease Available",
          name: "leaseAvailable",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
          setValues: setPrice,
        }}
      />
      <RenderField
        attributes={{
          type: "number",
          label: "Lease Initial Payment",
          placeholder: "Select Initial Price",
          name: "leaseInitialPayment",
          setValues: setPrice,
        }}
      />
      <RenderField
        attributes={{
          type: "number",
          label: "Monthly Payment",
          placeholder: "Select Mothly Price",
          name: "monthlyPayment",
          setValues: setPrice,
        }}
      />
    </div>
  );
};
