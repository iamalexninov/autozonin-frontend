import styles from "./style.module.css";

import { GlobalIcon } from "../../../global/GlobalIcon";

export const AllVehiclesCardSpecs = () => {
  return (
    <div className={styles.card_specs}>
      <div className={styles.card_specs_record}>
        <GlobalIcon type="speedometer" size={15} />
        <p>15000mi.</p>
      </div>
      <div className={styles.card_specs_record}>
        <GlobalIcon type="petrol" size={15} />
        <p>Diesel</p>
      </div>
      <div className={styles.card_specs_record}>
        <GlobalIcon type="transmission" size={15} />
        <p>Automatic</p>
      </div>
    </div>
  );
};
