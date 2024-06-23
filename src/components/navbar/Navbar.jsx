import styles from "./style.module.css";

import { useLocation } from "react-router-dom";

import { NavbarLogo } from "./NavbarLogo";
import { Menu } from "./menu/Menu";
import { MobileBtn } from "./menu/mobile-btn/MobileBtn";

export const Navbar = () => {
  const url = useLocation();

  return (
    <header
      // style={
      //   url.pathname === "/"
      //     ? { backgroundColor: "transparent" }
      //     : { backgroundColor: "var(--cape-verde-green)" }
      // }
      className="bg-slate-600"
      // className={styles.header}
    >
      <nav className={styles.nav}>
        <NavbarLogo />
        <Menu />
        <MobileBtn type="open" />
      </nav>
    </header>
  );
};
