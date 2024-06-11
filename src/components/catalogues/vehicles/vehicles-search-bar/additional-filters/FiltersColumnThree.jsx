import styles from "./style.module.css";

import { RenderField } from "../../../../global/fields/RenderField";

export const FiltersColumnThree = () => {
  return (
    <div className={styles.filters_three}>
      <div className={styles.filters_container}>
        <RenderField
          attributes={{
            type: "number",
            name: "yearFrom",
            label: "Year From:",
            placeholder:'Min: 2000'
          }}
        />
        <RenderField
          attributes={{
            type: "number",
            name: "yearTo",
            label: "Year To:",
            placeholder:'Max: 2024'
          }}
        />
      </div>
      <div className={styles.filters_container}>
        <RenderField
          attributes={{
            type: "number",
            name: "priceFrom",
            label: "Price From:",
            placeholder:'Min: 0'
          }}
        />
        <RenderField
          attributes={{
            type: "number",
            name: "priceTo",
            label: "Price To:",
            placeholder:'Min: 250000'
          }}
        />
      </div>
    </div>
  );
};
