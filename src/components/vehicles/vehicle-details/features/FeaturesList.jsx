import { FeaturesListRecord } from "./FeaturesListRecord";

export const FeaturesList = ({ features }) => {
  return (
    <div className="flex flex-col gap-3">
      {features.map((feature) => (
        <FeaturesListRecord key={feature} feature={feature} />
      ))}
    </div>
  );
};
