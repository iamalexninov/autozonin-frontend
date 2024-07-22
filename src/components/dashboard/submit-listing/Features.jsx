import { CheckBox } from "../../global/fields/CheckBox";
import { features } from "../../../utils/helpers";

export const Features = ({ items, setFeatures }) => {
  return (
    <div className="p-8 border border-gray-300 rounded mb-10">
      <h5 className="text-xl mb-7 pb-2 font-600">Features</h5>
      <div className="flex flex-wrap justify-between gap-8">
        {Object.entries(features).map(([key, value]) => (
          <FeatureArea
            key={key}
            list={value}
            setFeatures={setFeatures}
            category={key}
            area={key.charAt(0).toUpperCase() + key.substring(1)}
          />
        ))}
      </div>
    </div>
  );
};

const FeatureArea = ({ area, list, category, setFeatures }) => {
  return (
    <div className="flex flex-col gap-3">
      <p>{area}</p>
      <div className="flex flex-col gap-2">
        {list.map((feature) => (
          <CheckBox
            name={feature}
            label={feature}
            key={feature}
            category={category}
            setValues={setFeatures}
          />
        ))}
      </div>
    </div>
  );
};
