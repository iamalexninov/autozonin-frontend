import styles from "./style.module.css";
import { additionalFeatures } from "../../../../../utils/features/additionalFeatures";

import { RenderField } from "../../../../global/fields/RenderField";

export const FeatureFilters = () => {
  return (
    <div className={styles.features}>
      <p>Features</p>
      <FeatureRecords records={additionalFeatures} />
    </div>
  );
};

const FeatureRecords = ({ records }) => {
  return (
    <ul className={styles.features_records}>
      {records.map((record) => (
        <FeatureRecord key={record.name} record={record} />
      ))}
    </ul>
  );
};

const FeatureRecord = ({ record }) => {
  return (
    <li className={styles.features_record}>
      <RenderField
        attributes={{
          type: "input",
          inputType: "checkbox",
          name: record.name,
          label: record.label,
        }}
      />
    </li>
  );
};
