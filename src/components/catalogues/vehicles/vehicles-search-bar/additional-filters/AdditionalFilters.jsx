import styles from "./style.module.css";

import { FiltersColumnOne } from "./FiltersColumnOne";
import { FiltersColumnTwo } from "./FiltersColumnTwo";

export const AdditionalFilters = () => {
  return (
    <div className={styles.additional_filters}>
      <FiltersColumnOne />
      <FiltersColumnTwo />
    </div>
  );
};
