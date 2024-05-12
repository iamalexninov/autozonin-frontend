import styles from "./style.module.css";
import banner from "../../../assets/images/png/mercedes.png";

import { GlobalButton } from "../../global/button/GlobalButton";

export const AutoSeller = () => {
  return (
    <div className={[styles.auto_container, styles.seller].join(" ")}>
      <img className={styles.banner} src={banner} alt="Auto Seller - Mercedes Banner" />
      <h3 className={styles.title}>do you want to sell your vehicle?</h3>
      <p className={styles.description}>
        Search your vehicle in our catalogue and request a quote on the vehicle
        of your choosing.
      </p>
      <GlobalButton
        btnVariant="link"
        btnType="primaryLight"
        path="/profile"
        text="register"
      />
    </div>
  );
};
