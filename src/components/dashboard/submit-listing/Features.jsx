import { CheckBox } from "../../global/fields/CheckBox";

export const Features = () => {
  return (
    <div className="p-8 border border-gray-300 rounded mb-10">
      <h5 className="text-xl mb-7 pb-2 font-600">Features</h5>
      <CheckBox name="Air-Conditioner" label="Air-Conditioner" />
    </div>
  );
};
