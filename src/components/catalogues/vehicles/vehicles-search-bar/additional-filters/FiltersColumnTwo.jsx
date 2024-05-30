import styles from "./style.module.css";

import { RenderField } from "../../../../global/fields/RenderField";

export const FiltersColumnTwo = () => {
  return (
    <div className={[styles.row,styles.filters_two].join(' ')}>
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
  );
};
