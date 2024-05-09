import { NavbarMobileList } from "./navbar-mobile-list/NavbarMobileList";
import styles from "./style.module.css";

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

  return (
    <div className={styles.nav_mobile}>
      <NavbarMobileList data={mockdata} />
    </div>
  );
};
