import styles from "./style.module.css";

import { GlobalUnderline } from "../../../global/underline/GlobalUnderline";

export const FooterTopTitle = ({ text }) => {
  return (
    <>
      <h5 className={styles.title}>{text}</h5>
      <div className={styles.line}>
        <GlobalUnderline />
      </div>
    </>
  );
};
