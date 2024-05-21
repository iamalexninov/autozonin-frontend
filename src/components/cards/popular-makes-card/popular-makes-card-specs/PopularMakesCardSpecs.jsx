import styles from "./style.module.css";

import { GlobalIcon } from "../../../global/GlobalIcon";

export const PopularMakesCardSpecs = () => {
  return (
    <div className={styles.card_specs}>
      <div className={styles.card_specs_record}>
        <GlobalIcon type="speedometer" />
        <p>15000mi.</p>
      </div>
      <div className={styles.card_specs_record}>
        <GlobalIcon type="petrol" />
        <p>Diesel</p>
      </div>
      <div className={styles.card_specs_record}>
        <GlobalIcon type="transmission" />
        <p>Automatic</p>
      </div>
    </div>
  );
};
