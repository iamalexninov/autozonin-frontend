import styles from "./style.module.css";
import banner from '../../../assets/images/png/audi.png'

import { GlobalButton } from "../../global/button/GlobalButton";

export const AutoSeeker = () => {
  return <div className={[styles.auto_container, styles.seeker].join(" ")}>
  <img className={styles.banner} src={banner} alt="Auto Seeker - Audi Banner" />
  <h3 className={styles.title}>are you looking for a vehicle?</h3>
  <p className={styles.description}>
    Search your vehicle in our catalogue and request a quote on the vehicle
    of your choosing.
  </p>
  <GlobalButton
    btnVariant="link"
    btnType="primaryLight"
    path="/p"
    text="view more"
  />
</div>;
};
