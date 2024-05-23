import styles from "./style.module.css";

import { NavbarMobile } from "./navbar-mobile/NavbarMobile";
import { NavbarDesktop } from "./navbar-desktop/NavbarDesktop";
import { NavbarMobileMenuDropdown } from "./navbar-mobile-menu-dropdown/NavbarMobileMenuDropdown";
import { endpoints } from "../../utils/endpoints";

export const Navbar = () => {
  const pagesmockdata = [
    {
      path: endpoints.home,
      text: "Home",
    },
    {
      path: endpoints.about,
      text: "About",
    },
    {
      path: endpoints.vehicles,
      text: "Catalogue",
    },
    {
      path: endpoints.blog,
      text: "Articles",
    },
    {
      path: endpoints.contact,
      text: "Contact",
    },
  ];

  return (
    <header className={styles.header}>
      <NavbarDesktop records={pagesmockdata}/>
      <NavbarMobile icon="bars" />
      <NavbarMobileMenuDropdown records={pagesmockdata}/>
    </header>
  );
};
