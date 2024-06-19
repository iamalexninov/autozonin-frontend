import styles from "./style.module.css";

import { GlobalIcon } from "../../../../global/GlobalIcon";

export const AllVehiclesCardSpecs = ({ mileage, fuelType, transmission }) => {
  return (
    <div className={styles.card_specs}>
      <div className={styles.card_specs_record}>
        <GlobalIcon type="speedometer" size={15} />
        <p>{mileage}</p>
      </div>
      <div className={styles.card_specs_record}>
        <GlobalIcon type="petrol" size={15} />
        <p>{fuelType}</p>
      </div>
      <div className={styles.card_specs_record}>
        <GlobalIcon type="transmission" size={15} />
        <p>{transmission}</p>
      </div>
    </div>
  );
};
