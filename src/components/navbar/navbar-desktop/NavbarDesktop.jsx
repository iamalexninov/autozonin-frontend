import styles from "./style.module.css";

import { NavbarLogo } from "../NavbarLogo";
import { NavbarLinkRecords } from "../navbar-link-records/NavbarLinkRecords";

export const NavbarDesktop = ({ records }) => {
  return (
    <nav className={styles.nav}>
      <NavbarLogo />
      <NavbarLinkRecords records={records} type="desktop" />
    </nav>
  );
};
