import styles from "./style.module.css";

import { GlobalIcon } from "../../global/GlobalIcon";

export const NavbarTopInfo = () => {
  return (
    <div className={styles.nav_info}>
      <div className={styles.nav_info_item}>
        <div>
          <GlobalIcon type="phone" />
        </div>
        <p>Call Us: +359 896 35 9825</p>
      </div>
      <div className={styles.nav_info_item}>
        <div>
          <GlobalIcon type="email" />
        </div>
        <p>zoninshowroom@gmail.com</p>
      </div>
    </div>
  );
};
