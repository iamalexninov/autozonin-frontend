import styles from "./style.module.css";

import { Link } from "react-router-dom";

export const FooterTopLinkItem = ({ path, text }) => {
  return (
    <li className={styles.item}>
      <Link className={styles.link} to={path}>
        {text}
      </Link>
    </li>
  );
};
