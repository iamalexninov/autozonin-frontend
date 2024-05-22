import styles from "./style.module.css";

export const FooterBottom = () => {
  return (
    <div className={styles.footer_bottom}>
      <p>&copy; zonincars.com. All right reserved.</p>
      <div className={styles.footer_bottom_terms}>
        <p>Terms & Conditions</p>
        <span className={styles.footer_bottom_terms_dot}></span>
        <p>Privacy Notice</p>
      </div>
    </div>
  );
};
