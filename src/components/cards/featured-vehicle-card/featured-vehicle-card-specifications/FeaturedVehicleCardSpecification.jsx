import styles from "./style.module.css";

import { GlobalIcon } from "../../../global/GlobalIcon";

export const FeaturedVehicleCardSpecification = ({ icon, item }) => {
  return (
    <li className={styles.specification}>
      <GlobalIcon type={icon} />
      <p>{item}</p>
    </li>
  );
};
