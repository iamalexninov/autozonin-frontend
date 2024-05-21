import styles from "./style.module.css";
import { Wrapper } from "../global/wrapper/Wrapper";
import { FooterTop } from "./footer-top/FooterTop";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <FooterTop />
      </Wrapper>
    </footer>
  );
};
