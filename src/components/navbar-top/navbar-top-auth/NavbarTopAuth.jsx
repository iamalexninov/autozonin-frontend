import styles from "./style.module.css";

import { Link } from "react-router-dom";

export const NavbarTopAuth = () => {
  return (
    <div className={styles.nav_auth}>
      <Link to="/login" className={styles.nav_auth_link}>
        <p>Login</p>
      </Link>
      <p>or</p>
      <Link to="/register" className={styles.nav_auth_link}>
        <p>Register</p>
      </Link>
    </div>
  );
};
