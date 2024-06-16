import { Link } from "react-router-dom";
import styles from "./style.module.css";

export const MenuActionPanel = () => {
  return (
    <div className={styles.panel}>
      <Link to="/dashboard/submit" className={styles.panel_auth}>
        <p>Sign In</p>
      </Link>
      <Link to="/dashboard/submit" className={styles.panel_sell}>
        <p>Sell</p>
      </Link>
    </div>
  );
};
