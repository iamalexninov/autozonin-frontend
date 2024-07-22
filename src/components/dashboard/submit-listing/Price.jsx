import { InputField } from "../../global/fields/InputField";

export const Price = ({ setPrice }) => {
  return (
    <div className="p-8 border border-gray-300 rounded mb-10">
      <h5 className="text-xl mb-3 pb-2 font-600">Price</h5>
      <InputField
        type="number"
        name="price"
        placeholder="Enter Price.."
        setValues={setPrice}
      />
    </div>
  );
};
