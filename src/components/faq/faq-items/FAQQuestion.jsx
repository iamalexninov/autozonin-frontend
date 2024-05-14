import { GlobalIcon } from "../../global/GlobalIcon";
import styles from "./style.module.css";

export const FAQQuestion = ({ question, answer }) => {
  return (
    <li className={styles.question_container}>
      <div className={styles.question}>
        <h5 className={styles.question_title}>{question}</h5>
        <div className={styles.question_icon}>
          <GlobalIcon type="plus" />
        </div>
      </div>
    </li>
  );
};
