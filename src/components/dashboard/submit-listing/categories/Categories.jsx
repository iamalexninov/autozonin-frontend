import styles from "./style.module.css";

import { MainDetails } from "./main-details/MainDetails";
import { Price } from "./price/Price";

export const Categories = () => {
  return (
    <div className={styles.categories}>
      <MainDetails />
      <Price />
    </div>
  );
};
