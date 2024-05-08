import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";
import { NavbarTopInfo } from "./navbar-top-info/NavbarTopInfo";
import { NavbarTopAuth } from "./navbar-top-auth/NavbarTopAuth";

export const NavbarTop = () => {
  return (
    <div className={styles.nav_top_container}>
      <Wrapper>
        <div className={styles.nav}>
          <NavbarTopInfo />
          <NavbarTopAuth />
        </div>
      </Wrapper>
    </div>
  );
};
