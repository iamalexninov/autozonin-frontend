import styles from "./style.module.css";
import { additionalFeatures } from "../../../../../utils/features/additionalFeatures";

import { RenderField } from "../../../../global/fields/RenderField";

export const Features = () => {
  return (
    <div className="vehicle_category">
      <h5 className="vehicle_category_title">Features</h5>
      <FeatureRecords records={additionalFeatures}/>
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
          label: record.label,
          name: record.name,
        }}
      />
    </li>
  );
};
