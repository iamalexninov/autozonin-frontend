import styles from "./style.module.css";

import { RenderField } from "../../global/fields/RenderField";
import { GlobalIcon } from "../../global/GlobalIcon";

export const HomeSearch = () => {
  return (
    <div className={styles.bar}>
      <RenderField attributes={{ type: "select", placeholder: "Conditions" }} />
      <RenderField attributes={{ type: "select", placeholder: "Makers" }} />
      <RenderField attributes={{ type: "select", placeholder: "Models" }} />
      <button className={styles.bar_btn}>
        <GlobalIcon type="search" size={25} />
        <p>Search Vehicles</p>
      </button>
    </div>
  );
};
