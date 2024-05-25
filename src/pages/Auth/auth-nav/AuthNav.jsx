import styles from "./style.module.css";

import { Link } from "react-router-dom";

export const AuthNav = () => {
  return (
    <div className={styles.auth_nav}>
      <Link to="/login" className={styles.auth_nav_link}>
        Login
      </Link>
      <Link to="/register" className={styles.auth_nav_link}>
        Register
      </Link>
    </div>
  );
};
