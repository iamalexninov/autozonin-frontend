import styles from "./style.module.css";

import { GlobalSelect } from "../../../global/select/GlobalSelect";
import { GlobalButton } from "../../../global/button/GlobalButton";

export const HomeHeroSearch = () => {
  return (
    <div className={styles.search}>
      <h5 className={styles.search_title}>find your vehicle</h5>
      <div className={styles.search_fields}>
        <GlobalSelect />
        <GlobalSelect />
        <GlobalSelect />
      </div>
      <GlobalButton btnVariant="generic" btnType="primary" text="search" />
    </div>
  );
};
