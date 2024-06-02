import styles from "./style.module.css";

import { Link } from "react-router-dom";
import { NavbarLogo } from "../NavbarLogo";
import { GlobalIcon } from "../../global/GlobalIcon";
import { useMenuContext } from "../../../hooks/useContexts";

export const NavbarMobile = ({ icon }) => {
  const { navbarMenu } = useMenuContext();

  const handleOnMenuClick = () => {
    icon === "bars" ? navbarMenu.openNavbar() : navbarMenu.closeNavbar();
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
