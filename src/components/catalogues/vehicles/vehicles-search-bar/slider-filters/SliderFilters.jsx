import { RenderField } from "../../../../global/fields/RenderField";
import styles from "./style.module.css";

export const SliderFilters = () => {
  return (
    <div className={styles.sliders}>
      <RenderField
        attributes={{ type: "input", inputType: "range", label: "Year" }}
      />
      <RenderField
        attributes={{ type: "input", inputType: "range", label: "Mileage" }}
      />
      <RenderField
        attributes={{ type: "input", inputType: "range", label: "Price" }}
      />
    </div>
  );
};
