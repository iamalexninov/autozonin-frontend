import { Link } from "react-router-dom";

import styles from "./style.module.css";
import { GlobalIcon } from "../GlobalIcon";

export const SectionHeaderWithLinkBtn = ({ header, linkText, linkPath }) => {
  return (
    <div className={styles.header}>
      <h3>{header}</h3>
      <Link to={linkPath} className={styles.header_link}>
        <p>{linkText}</p>
        <GlobalIcon type="arrowRightInline" />
      </Link>
    </div>
  );
};
