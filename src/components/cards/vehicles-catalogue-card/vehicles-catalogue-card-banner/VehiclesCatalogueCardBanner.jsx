import styles from "./style.module.css";
import test from "../../../../assets/images/jpg/test_bmw.jpg";

export const VehiclesCatalogueCardBanner = () => {
  return (
    <div className={styles.banner}>
      <img src={test} alt="BMW M5 Competition" />
    </div>
  );
};
