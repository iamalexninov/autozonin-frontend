import styles from "./style.module.css";

import { Link } from "react-router-dom";
import { GlobalIcon } from "../../../../global/GlobalIcon";

export const AllVehiclesCardDetails = ({ id, currency, amount }) => {
  return (
    <div className={styles.card_details}>
      <p className={styles.card_details_price}>
        {currency}
        {amount}
      </p>
      {/* TODO: put the id of the vehicle */}
      <Link to={`/catalog/${id }`} className={styles.card_details_btn}>
        <p>View</p>
        <GlobalIcon type="arrowRightInline" />
      </Link>
    </div>
  );
};
