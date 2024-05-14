import styles from "./style.module.css";

import { FooterTopLinkItem } from "./FooterTopLinkItem";

export const FooterTopLinks = ({ links }) => {
  return (
    <ul className={styles.links}>
      {links.map((item) => (
        <FooterTopLinkItem key={item.text} path={item.path} text={item.text} />
      ))}
    </ul>
  );
};
