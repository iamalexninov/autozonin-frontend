import { additionalFeatures } from "../../../../../utils/features/additionalFeatures";

import { RenderField } from "../../../../global/fields/RenderField";

export const FeatureFilters = () => {
  return (
    <div className="mt-8">
      <p className="text-base mb-5">Features</p>
      <FeatureRecords records={additionalFeatures} />
    </div>
  );
};

const FeatureRecords = ({ records }) => {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {records.map((record) => (
        <FeatureRecord key={record.name} record={record} />
      ))}
    </ul>
  );
};

const FeatureRecord = ({ record }) => {
  return (
    <li>
      <RenderField
        attributes={{
          type: "checkbox",
          name: record.name,
          label: record.label,
        }}
      />
    </li>
  );
};
