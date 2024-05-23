import styles from "./style.module.css";

import { Link } from "react-router-dom";
import { NavbarLogo } from "../NavbarLogo";
import { GlobalIcon } from "../../global/GlobalIcon";
import { useMobileMenuContext } from "../../../hooks/useContexts";

export const NavbarMobile = ({ icon }) => {
  const { open, close } = useMobileMenuContext();

  const handleOnMenuClick = () => {
    icon === "bars" ? open() : close();
  };

  return (
    <nav className={styles.nav}>
      <NavbarLogo />
      <div className={styles.nav_links}>
        <div className={styles.nav_links_auth}>
          <Link to="/signin">
            <GlobalIcon type="user" />
          </Link>
        </div>
        <div className={styles.nav_links_menu} onClick={handleOnMenuClick}>
          <GlobalIcon type={icon} />
          <p>Menu</p>
        </div>
      </div>
    </nav>
  );
};
