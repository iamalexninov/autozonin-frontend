import styles from "./style.module.css";

import { Link } from "react-router-dom";

import { useMobileMenuContext } from "../../../hooks/useContexts";

export const NavbarMobileItem = ({ content, path }) => {
  const { close } = useMobileMenuContext();

  const handleMobileMenu = () => {
    close();
  };

  return (
    <li onClick={handleMobileMenu}>
      <Link to={path} className={styles.link}>
        {content}
      </Link>
    </li>
  );
};
