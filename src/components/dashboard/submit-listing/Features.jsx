import { renderVehicleFeatures } from "../../../utils/helpers";
import { CheckboxField } from "../../global/fields/checkbox/CheckboxField";

export const Features = ({ values, setValues }) => {
  const features = renderVehicleFeatures();

  const handleOnChange = (category, name) => {
    setValues((prev) => {
      const categoryFeatures = prev[category] || [];
      const newFeatures = categoryFeatures.includes(name)
        ? categoryFeatures.filter((feature) => feature !== name)
        : [...categoryFeatures, name];

      return { ...prev, [category]: newFeatures };
    });
  };

  return (
    <div className="p-8 border border-gray-300 rounded mb-10">
      <h2 className="text-xl mb-7 pb-2 font-600">Choose Features</h2>
      <div className="flex flex-wrap gap-10 xl:flex-nowrap">
        {Object.keys(features).map((category) => (
          <div key={category}>
            <h3 className="text-base font-600 mb-5">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            {features[category].map(({ label, name }) => (
              <CheckboxField
                key={category}
                label={label}
                name={name}
                checked={values[category?.includes(name)]}
                onChange={() => handleOnChange(category, name)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
