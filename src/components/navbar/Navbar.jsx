import styles from "./style.module.css";

import { useLocation } from "react-router-dom";
import { endpoints } from "../../utils/endpoints";
import { NavbarMobile } from "./navbar-mobile/NavbarMobile";
import { NavbarDesktop } from "./navbar-desktop/NavbarDesktop";
import { NavbarMobileMenuDropdown } from "./navbar-mobile-menu-dropdown/NavbarMobileMenuDropdown";

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

  const url = useLocation();

  return (
    <header
      style={
        url.pathname === "/"
          ? {
              backgroundColor: "transparent",
              position: "absolute",
              top: "0",
              left: "0",
            }
          : { backgroundColor: "var(--hunter-green)" }
      }
      className={styles.header}
    >
      <NavbarDesktop records={pagesmockdata} />
      <NavbarMobile icon="bars" />
      <NavbarMobileMenuDropdown records={pagesmockdata} />
    </header>
  );
};
