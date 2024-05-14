import styles from "./style.module.css";

import { FooterTopTitle } from "../footer-top-subsection/FooterTopTitle";
import { GlobalButton } from "../../../global/button/GlobalButton";

export const FooterTopNewsletter = () => {
  return (
    <div>
      <FooterTopTitle text="newsletter" />
      <div>
        <input className={styles.newsletter_field} type="text" placeholder="Enter Email..." />
        <GlobalButton
          btnVariant="generic"
          btnType="primaryOrange"
          text="subscribe"
        />
      </div>
    </div>
  );
};
