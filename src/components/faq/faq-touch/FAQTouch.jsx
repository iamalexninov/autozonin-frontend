import styles from "./style.module.css";

import { GlobalButton } from "../../global/button/GlobalButton";

export const FAQTouch = () => {
  return (
    <div className={styles.touch}>
      <h5 className={styles.touch_title}>got any more questions?</h5>
      <GlobalButton
        btnType="primaryDark"
        btnVariant="link"
        path="/contact"
        text="get in touch"
      />
    </div>
  );
};
