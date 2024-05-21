import styles from "./style.module.css";

import { Link } from "react-router-dom";
import { GlobalIcon } from "../../../global/GlobalIcon";

export const PopularMakesCardDetails = () => {
  return (
    <div className={styles.details}>
      <p>$156,000</p>
      <Link to="/catalogue" className={styles.link_btn}>
        <p>View Details</p>
        <GlobalIcon type="arrowRightInline" />
      </Link>
    </div>
  );
};
