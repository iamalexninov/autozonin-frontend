import styles from "./style.module.css";

import { NavbarMobile } from "../navbar-mobile/NavbarMobile";
import { NavbarLinkRecords } from "../navbar-link-records/NavbarLinkRecords";

import { useMenuContext } from "../../../hooks/useContexts";

export const NavbarMobileMenuDropdown = ({ records }) => {
  const { navbarMenu } = useMenuContext();

  return (
    <div
      className={
        navbarMenu.navbar
          ? [styles.dropdown, styles.active].join(" ")
          : styles.dropdown
      }
    >
      <NavbarMobile icon="exit" />
      <NavbarLinkRecords records={records} type="mobile" />
    </div>
  );
};
