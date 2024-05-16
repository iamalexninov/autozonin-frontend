import styles from "./style.module.css";

import { GlobalButton } from "../../../global/button/GlobalButton";

export const VehiclesCatalogueCardDetails = () => {
  return (
    <div className={styles.details}>
      <p className={styles.details_price}>
        <span>Price: </span>$98,000
      </p>
      <GlobalButton
        btnType="primary"
        btnVariant="link"
        path="/"
        text="view more"
      />
    </div>
  );
};
