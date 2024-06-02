import styles from "./style.module.css";

import { MainDetails } from "./main-details/MainDetails";
import { Price } from "./Price";

export const Categories = () => {
  return (
    <div className={styles.categories}>
      <MainDetails />
      <Price />
    </div>
  );
};
