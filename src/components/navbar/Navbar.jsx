import styles from "./style.module.css";

import { NavbarMobile } from "./navbar-mobile/NavbarMobile";
import { NavbarDesktop } from "./navbar-desktop/NavbarDesktop";
import { NavbarMobileMenuDropdown } from "./navbar-mobile-menu-dropdown/NavbarMobileMenuDropdown";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <NavbarDesktop />
      <NavbarMobile icon="bars"/>
      <NavbarMobileMenuDropdown />
    </header>
  );
};
