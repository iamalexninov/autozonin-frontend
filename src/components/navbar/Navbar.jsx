import styles from "./style.module.css";

import { GlobalIcon } from "../global/GlobalIcon";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarMobile } from "./navbar-mobile/NavbarMobile";
import { NavbarDesktop } from "./navbar-desktop/NavbarDesktop";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      {/* Desktop Navbar */}
      {/* <NavbarDesktop /> */}
      {/* Mobile Navbar */}
      <NavbarMobile />
    </header>
  );
};
