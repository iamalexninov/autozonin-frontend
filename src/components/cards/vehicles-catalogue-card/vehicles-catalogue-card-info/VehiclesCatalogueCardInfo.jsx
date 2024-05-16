import styles from "./style.module.css";
import { Link } from "react-router-dom";

export const VehiclesCatalogueCardInfo = () => {
  return (
    <div className={styles.info}>
      <h5 className={styles.info_make_model}>bmw m5 competition</h5>
      <p className={styles.info_dealer}>
        By <Link to="/profile">Alex Ninov</Link>
      </p>
    </div>
  );
};
