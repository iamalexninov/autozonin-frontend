import styles from "./style.module.css";
import { endpoints } from "../../utils/endpoints";

import { useLocation } from "react-router-dom";

import { NavbarLogo } from "./NavbarLogo";
import { LinksRecords } from "./links/LinksRecords";
import { MobileBtns } from "./mobile/MobileBtns";

export const Navbar = () => {
  const pagesmockdata = [
    {
      path: endpoints.home,
      text: "Home",
      icon: "home",
    },
    {
      path: endpoints.about,
      text: "About",
      icon: "about",
    },
    {
      path: endpoints.vehicles,
      text: "Catalog",
      icon: "catalog",
    },
    {
      path: endpoints.blog,
      text: "Articles",
      icon: "blog",
    },
    {
      path: endpoints.contact,
      text: "Contact",
      icon: "contact",
    },
    {
      path: endpoints.login,
      text: "Login",
      icon: "user",
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
          : { backgroundColor: "var(--cape-verde-green)" }
      }
      className={styles.header}
    >
      <nav className={styles.nav}>
        <NavbarLogo />
        <LinksRecords records={pagesmockdata} />
        <MobileBtns />
      </nav>
    </header>
  );
};
