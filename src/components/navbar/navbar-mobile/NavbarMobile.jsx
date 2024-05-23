import styles from "./style.module.css";

import { NavbarLogo } from "../NavbarLogo";
import { GlobalIcon } from "../../global/GlobalIcon";
import { Link } from "react-router-dom";

export const NavbarMobile = () => {
  return (
    <nav className={styles.nav}>
      <NavbarLogo />
      <div className={styles.nav_links}>
        <div className={styles.nav_links_auth}>
          <Link to="/signin">
            <GlobalIcon type="user" />
          </Link>
        </div>
        <div className={styles.nav_links_menu}>
          <GlobalIcon type="bars" />
          <p>Menu</p>
        </div>
      </div>
    </nav>
  );
};
