import styles from "./style.module.css";

import { BrowseItem } from "./BrowseItem";

export const BrowseList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <BrowseItem item={item} key={item.unit} />
      ))}
    </ul>
  );
};
