import { useMenuContext } from "../../../../hooks/useContexts";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

export const MenuActionPanel = () => {
  const navbarMenu = useMenuContext();

  const handleOnClick = (e) => {
    navbarMenu.closeNavbar();
  };

  return (
    <div className={styles.panel}>
      <Link to="/login" className={styles.panel_auth} onClick={handleOnClick}>
        <p>Sign In</p>
      </Link>
      <Link
        to="/dashboard/submit-listing"
        className={styles.panel_sell}
        onClick={handleOnClick}
      >
        <p>Sell</p>
      </Link>
    </div>
  );
};
