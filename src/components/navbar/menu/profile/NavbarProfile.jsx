import styles from "./style.module.css";
import test from "../../../../assets/images/png/test-user.png";

export const NavbarProfile = () => {
  return (
    <div className={styles.profile}>
      <img src={test} alt="" className={styles.profile_banner}/>
      <p className={styles.profile_name}>Alex Ninov</p>
      <p className={styles.profile_role}>Dealer</p>
    </div>
  );
};
