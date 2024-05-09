import styles from "./style.module.css";

import { useMobileMenu } from "../../hooks/useMobileMenu";

import { NavbarMobileList } from "./navbar-mobile-list/NavbarMobileList";

export const NavbarMobile = () => {
  const mockdata = [
    {
      content: "Home",
      path: "/",
    },
    {
      content: "About Us",
      path: "/about",
    },
    {
      content: "Catalogue",
      path: "/catalogue",
    },
    {
      content: "Team",
      path: "/team",
    },
    {
      content: "Blog",
      path: "/blog",
    },
    {
      content: "Contacts",
      path: "/contacts",
    },
  ];

  const { menu } = useMobileMenu();

  return (
    <div
      className={
        menu ? `${styles.nav_mobile} ${styles.active}` : styles.nav_mobile
      }
    >
      <NavbarMobileList data={mockdata} />
    </div>
  );
};
