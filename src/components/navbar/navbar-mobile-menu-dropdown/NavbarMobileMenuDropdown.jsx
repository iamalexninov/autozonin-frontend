import styles from "./style.module.css";

import { NavbarMobile } from "../navbar-mobile/NavbarMobile";
import { useMobileMenuContext } from "../../../hooks/useContexts";
import { NavbarLinkRecords } from "../navbar-link-records/NavbarLinkRecords";

export const NavbarMobileMenuDropdown = ({ records }) => {
  const { menu } = useMobileMenuContext();

  return (
    <div
      className={
        menu ? [styles.dropdown, styles.active].join(" ") : styles.dropdown
      }
    >
      <NavbarMobile icon="exit" />
      <NavbarLinkRecords records={records} type="mobile" />
    </div>
  );
};
