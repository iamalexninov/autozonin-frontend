import styles from "./style.module.css";
import zoninLogo from "../../../../assets/images/png/zonin-logo.png";

import { Link } from "react-router-dom";

export const NavbarBottomItem = ({ content, path }) => {
  return (
    <li>
      <Link to={path} className={styles.link}>
        {content === "img" ? <img src={zoninLogo} /> : content}
      </Link>
    </li>
  );
};
