import styles from "./style.module.css";

import { useLocation } from "react-router-dom";

import { NavbarLogo } from "./NavbarLogo";
import { Menu } from "./menu/Menu";
import { MobileBtn } from "./menu/mobile-btn/MobileBtn";

export const Navbar = () => {
  const url = useLocation();

  return (
    <header
      style={
        url.pathname === "/"
          ? {
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "999",
              backgroundColor: "transparent",
            }
          : { backgroundColor: "var(--cape-verde-green)" }
      }
      className={styles.header}
    >
      <nav className={styles.nav}>
        <NavbarLogo />
        <Menu />
        <MobileBtn type="open" />
      </nav>
    </header>
  );
};
