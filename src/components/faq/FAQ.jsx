import styles from "./style.module.css";

import { Wrapper } from "../global/wrapper/Wrapper";
import { SectionTextContent } from "../global/section-text-content/SectionTextContent";
import { FAQQuestions } from "./faq-items/FAQQuestions";
import { GlobalButton } from "../global/button/GlobalButton";
import { FAQTouch } from "./faq-touch/FAQTouch";

export const FAQ = () => {
  const mockdata = [
    {
      question: "What is the best price that you can offer for this car?",
      answer: "",
    },
    {
      question: "Can I test drive this car before making a decision?",
      answer: "",
    },
    {
      question: "What financing options are available?",
      answer: "",
    },
    {
      question: "Does this car come with any warranties or maintenance plans?",
      answer: "",
    },
    {
      question: "Do you accept trade-ins, and how does the process work?",
      answer: "",
    },
  ];

  return (
    <section className={styles.faq}>
      <Wrapper>
        <SectionTextContent
          title="we're here to answer all your questions."
          paragraph="If you are new to Zonin Showroom or looking for key questions, this section will help you learn more about the platform and its features."
        />
        <FAQQuestions questions={mockdata} />
        <FAQTouch />
      </Wrapper>
    </section>
  );
};
