import styles from "./style.module.css";

import { Link } from "react-router-dom";
import { NavbarLogo } from "../NavbarLogo";
import { GlobalIcon } from "../../global/GlobalIcon";

export const NavbarDesktop = () => {
  return (
    <nav className={styles.nav}>
      <NavbarLogo />
      <ul className={styles.nav_links}>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Vehicles</Link>
        </li>
        <li>
          <Link>Blog</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
        <li className={styles.nav_auth}>
          <Link className={styles.nav_auth_link}>
            <GlobalIcon type="user" size={25} />
            <p>Sign In</p>
          </Link>
        </li>
        <li className={styles.nav_submit}>
          <Link to="/profile">
            <button className={styles.nav_submit_btn}>Sell Vehicle</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
