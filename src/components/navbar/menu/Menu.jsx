import styles from "./style.module.css";

import { LinkEntries } from "./links/LinkEntries";
import { MobileBtn } from "./mobile-btn/MobileBtn";
import { NavbarProfile } from "./profile/NavbarProfile";
import { MenuActionPanel } from "./menu-action-panel/MenuActionPanel";

import { useMenuContext } from "../../../hooks/useContexts";

export const Menu = () => {
  const { navbarMenu } = useMenuContext();

  return (
    <div
      className={
        navbarMenu.navbar ? [styles.menu, styles.active].join(" ") : styles.menu
      }
    >
      <div className={styles.menu_container}>
        <MobileBtn type="close" />
        <NavbarProfile />
        <LinkEntries />
        <MenuActionPanel />
      </div>
    </div>
  );
};
