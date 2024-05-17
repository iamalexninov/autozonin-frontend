import styles from "./style.module.css";

import { useMobileMenuContext } from "../../../hooks/useContexts";

import { Wrapper } from "../../global/wrapper/Wrapper";
import { GlobalIcon } from "../../global/GlobalIcon";
import { NavbarBottomList } from "./navbar-bottom-list/NavbarBottomList";

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

  const { menu, toggle } = useMobileMenuContext();

  const handleMobileMenu = () => {
    toggle();
    console.log(menu);
  };

  return (
    <div className={styles.nav_bottom_container}>
      <Wrapper>
        <NavbarBottomList data={mockdata} />
        <div className={styles.open_mobile_menu} onClick={handleMobileMenu}>
          <GlobalIcon type="bars" size={25} />
        </div>
      </Wrapper>
    </div>
  );
};