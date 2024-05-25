import styles from "./style.module.css";

import { GlobalIcon } from "../../../components/global/GlobalIcon";

export const AuthBtn = ({ text }) => {
  return (
    <button className={styles.auth_btn}>
      <p>{text}</p>
      <GlobalIcon type="arrowRightInline"/>
    </button>
  );
};
