import styles from "./style.module.css";

import { Link } from "react-router-dom";

export const BrowseItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <img className={styles.item_logo} src={item.logo} alt={item.unit} />
      <Link className={styles.item_unit}>{item.unit}</Link>
      <p className={styles.item_quantity}>({item.quantity})</p>
    </li>
  );
};
