import styles from "./style.module.css";

import { FooterTop } from "./footer-top/FooterTop";
import { FooterSocials } from "./footer-socials/FooterSocials";
import { FooterBottom } from "./footer-bottom/FooterBottom";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterTop />
      <FooterSocials />
      <FooterBottom />
    </footer>
  );
};
