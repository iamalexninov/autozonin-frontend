import styles from "./style.module.css";

import { NavbarMobileItem } from "../navbar-mobile-item/NavbarMobileItem";

export const NavbarMobileList = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <NavbarMobileItem
          key={item.content}
          content={item.content}
          path={item.path}
        />
      ))}
    </ul>
  );
};
