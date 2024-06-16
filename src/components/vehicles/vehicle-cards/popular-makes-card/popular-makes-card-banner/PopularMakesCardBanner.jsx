import styles from "./style.module.css";
import test from "../../../../assets/images/jpg/test_bmw.jpg";

export const PopularMakesCardBanner = () => {
  return (
    <div className={styles.banner}>
      <img src={test} alt="Popular Makes Card Banner" />
    </div>
  );
};
