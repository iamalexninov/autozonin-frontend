import styles from "./style.module.css";

import { PopularMakesCardBanner } from "./popular-makes-card-banner/PopularMakesCardBanner";
import { PopularMakesCardInfo } from "./popular-makes-card-info/PopularMakesCardInfo";
import { PopularMakesCardSpecs } from "./popular-makes-card-specs/PopularMakesCardSpecs";
import { PopularMakesCardDetails } from "./popular-makes-card-details/PopularMakesCardDetails";

export const PopularMakesCard = () => {
  return (
    <div className={styles.card}>
      <PopularMakesCardBanner />
      <div className={styles.content}>
        <PopularMakesCardInfo />
        <PopularMakesCardSpecs />
        <PopularMakesCardDetails />
      </div>
    </div>
  );
};
