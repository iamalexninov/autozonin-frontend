import styles from "./style.module.css";

import { RenderField } from "../../../../global/fields/RenderField";
import { GlobalIcon } from "../../../../global/GlobalIcon";

export const MainFilters = ({ onClick }) => {
  return (
    <div className={styles.filters}>
      <RenderField
        attributes={{
          type: "select",
          placeholder: "Condition",
          name: "condition",
        }}
      />
      <RenderField
        attributes={{
          type: "select",
          placeholder: "Category",
          name: "category",
        }}
      />
      <RenderField
        attributes={{
          type: "select",
          placeholder: "Type",
          name: "type",
        }}
      />
      <RenderField
        attributes={{
          type: "select",
          placeholder: "Make",
          name: "make",
        }}
      />
      <RenderField
        attributes={{
          type: "select",
          placeholder: "Model",
          name: "model",
        }}
      />
      <MoreFiltersBtn onClick={onClick} />
    </div>
  );
};

const MoreFiltersBtn = ({ onClick }) => {
  return (
    <div className={styles.filters_btn} onClick={onClick}>
      <GlobalIcon type="filter" size={25} />
      <p>More Filters</p>
    </div>
  );
};
