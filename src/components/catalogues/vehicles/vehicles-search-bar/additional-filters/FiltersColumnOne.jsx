import styles from "./style.module.css";

import { RenderField } from "../../../../global/fields/RenderField";

export const FiltersColumnOne = () => {
  return (
    <div className={styles.column}>
      <div className={styles.row}>
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
      </div>
      <div className={styles.row}>
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
    </div>
  );
};
