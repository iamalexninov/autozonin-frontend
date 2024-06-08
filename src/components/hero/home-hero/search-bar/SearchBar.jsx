import styles from "./style.module.css";

import { RenderField } from "../../../global/fields/RenderField";

export const SearchBar = () => {
  return (
    <div className={styles.bar}>
      <RenderField attributes={{ type: "select", placeholder: "Conditions" }} />
      <RenderField attributes={{ type: "select", placeholder: "Makers" }} />
      <RenderField attributes={{ type: "select", placeholder: "Models" }} />
      <button className={styles.bar_btn}>Search</button>
    </div>
  );
};
