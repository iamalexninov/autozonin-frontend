import styles from "./style.module.css";

import { RenderField } from "../../../../global/fields/RenderField";

export const FiltersColumnOne = () => {
  return (
    <div className={styles.filters_select}>
      <div>
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
      <div>
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
