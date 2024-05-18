import styles from "./style.module.css";

import { Link } from "react-router-dom";
import { GlobalIcon } from "../../../global/GlobalIcon";

export const AllVehiclesCardDetails = () => {
  return (
    <div className={styles.card_details}>
      <p className={styles.card_details_price}>$150,000</p>
      <Link to="/catalogue" className={styles.card_details_btn}>
        <p>View Details</p>
        <GlobalIcon type="arrowRightInline" />
      </Link>
    </div>
  );
};
