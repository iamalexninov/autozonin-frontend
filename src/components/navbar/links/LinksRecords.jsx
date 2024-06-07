import styles from "./style.module.css";

import { LinkRecord } from "./LinkRecord";
import { useMenuContext } from "../../../hooks/useContexts";

export const LinksRecords = ({ records }) => {
  const { navbarMenu } = useMenuContext();

  return (
    <ul
      className={
        navbarMenu.navbar
          ? [styles.nav_links, styles.active].join(" ")
          : styles.nav_links
      }
    >
      {records.map((record) => (
        <LinkRecord record={record} key={record.text} />
      ))}
      <button className={styles.nav_btn}>Submit Listing</button>
    </ul>
  );
};
