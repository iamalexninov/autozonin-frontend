import styles from "./style.module.css";

import { useMenuContext } from "../../../hooks/useContexts";
import { GlobalIcon } from "../../global/GlobalIcon";

export const MobileBtns = () => {
  const { navbarMenu } = useMenuContext();

  const handleOnClick = () => {
    navbarMenu.toggleNavbar();
  };

  return (
    <div className={styles.nav_mobile} onClick={handleOnClick}>
      {navbarMenu.navbar ? (
        <GlobalIcon type="exit" />
      ) : (
        <GlobalIcon type="bars" />
      )}
      <p>Menu</p>
    </div>
  );
};
