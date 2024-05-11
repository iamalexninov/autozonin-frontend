import styles from "./style.module.css";

import { NavbarBottomItem } from "../navbar-bottom-item/NavbarBottomItem";

export const NavbarBottomList = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <NavbarBottomItem
          key={item.content}
          content={item.content}
          path={item.path}
        />
      ))}
    </ul>
  );
};
