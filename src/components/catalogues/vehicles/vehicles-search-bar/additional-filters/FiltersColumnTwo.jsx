import styles from "./style.module.css";

import { RenderField } from "../../../../global/fields/RenderField";

export const FiltersColumnTwo = () => {
  return (
    <div className={styles.column}>
      <div className={styles.row}>
        <RenderField
          attributes={{
            type: "select",
            placeholder: "Door",
            name: "door",
          }}
        />
        <RenderField
          attributes={{
            type: "select",
            placeholder: "Color",
            name: "color",
          }}
        />
      </div>
      <div className={styles.row}>
        <RenderField
          attributes={{
            type: "select",
            placeholder: "Offer Type",
            name: "Offer Type",
          }}
        />
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            placeholder: "VIN",
            name: "VIN",
          }}
        />
      </div>
    </div>
  );
};
