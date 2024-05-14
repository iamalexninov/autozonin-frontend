import styles from "./style.module.css";

import { FAQQuestion } from "./FAQQuestion";

export const FAQQuestions = ({ questions }) => {
  return (
    <ul className={styles.questions}>
      {questions.map((question) => (
        <FAQQuestion
          key={question.question}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </ul>
  );
};
