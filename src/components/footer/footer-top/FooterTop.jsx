import styles from "./style.module.css";

import { Wrapper } from "../../global/wrapper/Wrapper";
import { FooterTopCompany } from "./FooterTopCompany";
import { FooterTopContact } from "./FooterTopContact";
import { FooterTopNavigation } from "./FooterTopNavigation";
import { FooterTopNewsletter } from "./footer-top-newsletter/FooterTopNewsletter";

export const FooterTop = () => {
  return (
    <div className={styles.footer_top}>
      <Wrapper>
        <div className={styles.footer_top_wrapper}>
          <FooterTopContact />
          <FooterTopCompany />
          <FooterTopNavigation />
          <FooterTopNewsletter />
        </div>
      </Wrapper>
    </div>
  );
};
