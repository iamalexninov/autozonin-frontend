import styles from "./style.module.css";

import { Link } from "react-router-dom";

export const NavbarMobileItem = ({ content, path }) => {
  return (
    <li>
      <Link to={path} className={styles.link}>
        {content}
      </Link>
    </li>
  );
};
