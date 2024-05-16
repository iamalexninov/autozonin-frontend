import styles from "./style.module.css";

import { GlobalIcon } from "../../../global/GlobalIcon";

export const VehiclesCatalogueCardTools = () => {
  return (
    <div className={styles.tools}>
      <div className={styles.tools_item}>
        {/* quick view */}
        <GlobalIcon type="eye" size={22} />
      </div>
      <div className={styles.tools_item}>
        {/* save to favourite */}
        <GlobalIcon type="flag" size={22} />
      </div>
      <div className={styles.tools_item}>
        {/* promote */}
        <GlobalIcon type="promote" size={22} />
      </div>
    </div>
  );
};
