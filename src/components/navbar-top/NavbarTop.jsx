import { GlobalButton } from "../global/button/GlobalButton";
import styles from "./style.module.css";

import { Link } from "react-router-dom";

export const NavbarTop = () => {
  return (
    <div className={styles.nav}>
      <GlobalButton
        btnVariant="generic"
        btnType="primary"
        path="/about"
        text="Submit"
      />
      {/* <div className={styles.nav_info}>
        <div className={styles.nav_info_phone}></div>
        <div className={styles.nav_info_email}></div>
      </div>
      <div className={styles.nav_auth}>
        <Link to="/login">
          <p>Login</p>
        </Link>
        <p>or</p>
        <Link to="/register">
          <p>Register</p>
        </Link>
      </div> */}
    </div>
  );
};
