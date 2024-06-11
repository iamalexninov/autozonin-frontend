import styles from "./style.module.css";
import { questions } from "./Text";

import { useState } from "react";

import { Wrapper } from "../global/wrapper/Wrapper";
import { GlobalIcon } from "../global/GlobalIcon";

export const FAQ = () => {
  return (
    <section className={styles.faq}>
      <Wrapper>
        <h2 className={styles.faq_header}>Frequently Asked Questions</h2>
        <FAQRecords records={questions} />
      </Wrapper>
    </section>
  );
};

const FAQRecords = ({ records }) => {
  return (
    <ul className={styles.records}>
      {records.map((record) => (
        <FAQRecord key={record.id} record={record} />
      ))}
    </ul>
  );
};

const FAQRecord = ({ record }) => {
  const [clicked, setClicked] = useState(false);

  const handleOnClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={styles.record} onClick={handleOnClick}>
      <div className={styles.question}>
        <h5>{record.question}</h5>
        <div className={styles.question_icon}>
          {clicked ? <GlobalIcon type="minus" /> : <GlobalIcon type="plus" />}
        </div>
      </div>
      {clicked && <p>{record.answer}</p>}
    </li>
  );
};
