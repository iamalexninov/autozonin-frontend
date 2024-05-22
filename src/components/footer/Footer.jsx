import styles from "./style.module.css";
import { Wrapper } from "../global/wrapper/Wrapper";
import { FooterTop } from "./footer-top/FooterTop";
import { FooterBottom } from "./footer-bottom/FooterBottom";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <FooterTop />
        <FooterBottom />
      </Wrapper>
    </footer>
  );
};
