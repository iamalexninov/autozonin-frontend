import styles from "./style.module.css";

import { MainDetails } from "./main-details/MainDetails";
import { Price } from "./Price";
import { Features } from "./features/Features";
import { Media } from "./media/Media";
import { Location } from "./location/Location";

export const Categories = () => {
  return (
    <div className={styles.categories}>
      <MainDetails />
      <Price />
      <Features />
      <Media />
      <Location />
    </div>
  );
};
