import { InputField } from "../../global/fields/InputField";

export const Media = ({ setMedia }) => {
  return (
    <div className="p-8 border border-gray-300 rounded mb-10">
      <h5 className="text-xl mb-3 pb-2 font-600">Media</h5>
      <InputField
        type="text"
        name="banner"
        placeholder="url"
        setValues={setMedia}
      />
    </div>
  );
};
