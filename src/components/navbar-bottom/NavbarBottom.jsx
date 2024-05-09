import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";
import { NavbarBottomList } from "./navbar-bottom-list/NavbarBottomList";
import { GlobalIcon } from "../global/GlobalIcon";
import { NavbarMobile } from "../navbar-mobile/NavbarMobile";

export const NavbarBottom = () => {
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
      content: "img",
      path: "/",
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
    <div className={styles.nav_bottom_container}>
      <Wrapper>
        <NavbarBottomList data={mockdata} />
        <div className={styles.open_mobile_menu}>
          <GlobalIcon type="bars" size={25}/>
        </div>
        <NavbarMobile />
      </Wrapper>
    </div>
  );
};