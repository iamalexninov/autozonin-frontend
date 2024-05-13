import styles from "./style.module.css";

import { GlobalUnderline } from "../underline/GlobalUnderline";

export const SectionTextContent = ({ title, paragraph }) => {
  return (
    <div className={styles.content}>
      <h3 className={styles.content_title}>{title}</h3>
      <div className={styles.content_line}>
        <GlobalUnderline />
      </div>
      <p className={styles.content_paragraph}>{paragraph}</p>
    </div>
  );
};
