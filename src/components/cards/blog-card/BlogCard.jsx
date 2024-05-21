import styles from "./style.module.css";
import testImg from "../../../assets/images/jpg/test_blog.jpg";
import { Link } from "react-router-dom";

export const BlogCard = () => {
  return (
    <div className={styles.card}>
      <img src={testImg} alt="" className={styles.card_banner} />
      <div className={styles.card_info}>
        <p className={styles.card_info_creator}>Admin</p>
        <span className={styles.card_info_dot}></span>
        <p className={styles.card_info_date}>November 21, 2024y.</p>
      </div>
      <Link to="/blog" className={styles.card_info_header}>
        2024 Bmw Alpina XB7 with exclusive details, extraordinary...
      </Link>
    </div>
  );
};
