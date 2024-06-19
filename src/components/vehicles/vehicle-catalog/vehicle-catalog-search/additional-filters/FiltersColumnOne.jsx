import styles from "./style.module.css";

import { RenderField } from "../../../../global/fields/RenderField";

export const FiltersColumnOne = () => {
  return (
    <div className={[styles.row,styles.filters_one].join(' ')}>
      <RenderField
        attributes={{
          type: "select",
          placeholder: "Fuel Type",
          name: "fuel",
        }}
      />
      <RenderField
        attributes={{
          type: "select",
          placeholder: "Cylinder",
          name: "cylinder",
        }}
      />
      <RenderField
        attributes={{
          type: "select",
          placeholder: "Drive Type",
          name: "drivetype",
        }}
      />
      <RenderField
        attributes={{
          type: "select",
          placeholder: "Transmission",
          name: "transmission",
        }}
      />
    </div>
  );
};
