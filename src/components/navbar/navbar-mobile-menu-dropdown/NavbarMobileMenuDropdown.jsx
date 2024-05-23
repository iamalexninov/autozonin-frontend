import styles from "./style.module.css";

import { NavbarMobile } from "../navbar-mobile/NavbarMobile";
import { RenderRecords } from "./navbar-mobile-menu-dropdown-records/NavbarMobileMenuDropdownRecords";
import { useMobileMenuContext } from "../../../hooks/useContexts";

export const NavbarMobileMenuDropdown = () => {
  const pagesmockdata = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/about",
      text: "About",
    },
    {
      path: "/vehicles",
      text: "Vehicles",
    },
    {
      path: "/blog",
      text: "Blog",
    },
    {
      path: "/contact",
      text: "Contact",
    },
    {
      path: "/profile",
      text: "sell vehicle",
    },
  ];

  const { menu } = useMobileMenuContext();

  return (
    <div className={menu ? [styles.dropdown,styles.active].join(' ') : styles.dropdown}>
      <NavbarMobile icon="exit" />
      <RenderRecords records={pagesmockdata} />
    </div>
  );
};
