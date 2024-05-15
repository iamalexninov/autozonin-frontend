import styles from "./style.module.css";

import { SectionTextContent } from "../../global/section-text-content/SectionTextContent";
import { GlobalButton } from "../../global/button/GlobalButton";

export const ContactForm = () => {
  return (
    <form className={styles.form}>
      <SectionTextContent
        title="Get In Touch"
        paragraph="Hey there! We're thrilled to hear from you. Whether you have a question about our products, want to provide feedback, or simply want to say hello, feel free to reach out using the form below. "
      />
      <div className={styles.fields}>
        <input className="field" type="text" placeholder="Your Name.." />
        <input className="field" type="text" placeholder="Your Email.." />
      </div>
      <textarea
        className={["field", styles.textarea].join(" ")}
        placeholder="Message.."
      ></textarea>
      <div className={styles.btn}>
        <GlobalButton btnVariant="generic" btnType="primary" text="submit" />
      </div>
    </form>
  );
};
