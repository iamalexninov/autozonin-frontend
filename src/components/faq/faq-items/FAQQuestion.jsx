import styles from "./style.module.css";

import { useState } from "react";

import { GlobalIcon } from "../../global/GlobalIcon";

export const FAQQuestion = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <li className={styles.question_container}>
      <div className={styles.question}>
        <h5 className={styles.question_title}>{question}</h5>
        <div className={styles.question_icon} onClick={handleToggle}>
          <GlobalIcon type={toggle ? "minus" : "plus"} />
        </div>
      </div>
      {toggle && <p className={styles.answer}>{answer}</p>}
    </li>
  );
};
