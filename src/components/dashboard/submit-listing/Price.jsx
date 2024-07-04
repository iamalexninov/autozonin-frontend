import { RenderField } from "../../global/fields/RenderField";

export const Price = ({ setPrice }) => {
  return (
    <div className="p-8 border border-gray-300 rounded mb-10">
      <h5 className="text-xl mb-7 pb-2 font-600">Price</h5>
      <div className="flex flex-col gap-5 mb-5 lg:flex-row">
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
      </div>
      <div className="flex flex-col gap-5 mb-5 md:flex-row">
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
    </div>
  );
};
