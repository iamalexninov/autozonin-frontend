import styles from "./style.module.css";
import { RenderField } from "../../../RenderField";

export const InputBox = () => {
  return (
    <div className={styles.input_box}>
      <div className={styles.min_box}>
        <RenderInputWrap placeholder="Min.." name="min_value" />
      </div>
      <div className={styles.max_box}>
        <RenderInputWrap placeholder="Max.." name="max_value" />
      </div>
    </div>
  );
};

const RenderInputWrap = ({ placeholder, name }) => {
  return (
    <div className={styles.input_wrap}>
      <span className={styles.input_addon}>EU</span>
      <RenderField
        attributes={{
          type: "input",
          inputType: "text",
          placeholder: placeholder,
          name: name,
        }}
      />
    </div>
  );
};
