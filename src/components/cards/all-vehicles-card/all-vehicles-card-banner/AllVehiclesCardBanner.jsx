import styles from "./style.module.css";
import test from "../../../../assets/images/jpg/test_bmw.jpg";

export const AllVehiclesCardBanner = () => {
  return (
    <div className={styles.card_banner}>
      <img src={test} alt="Test BMW M5 Competition" />
    </div>
  );
};
