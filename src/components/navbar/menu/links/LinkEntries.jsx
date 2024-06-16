import styles from "./style.module.css";
import { links } from "./Text";

import { Link } from "react-router-dom";
import { useMenuContext } from "../../../../hooks/useContexts";

import { GlobalIcon } from "../../../global/GlobalIcon";

export const LinkEntries = () => {
  const { navbarMenu } = useMenuContext();

  return (
    <ul className={styles.nav_links}>
      {links.map((record) => (
        <LinkEntry
          record={record}
          key={record.text}
          closeNavbar={navbarMenu.closeNavbar}
        />
      ))}
    </ul>
  );
};

const LinkEntry = ({ record, closeNavbar }) => {
  return (
    <li onClick={closeNavbar}>
      <Link to={record.path} className={styles.nav_link}>
        <GlobalIcon type={record.icon} size={16} />
        <p>{record.text}</p>
      </Link>
    </li>
  );
};
