import styles from "./style.module.css";
import { TextField } from "../../text-field/TextField";

export const InputBox = () => {
  return (
    <div className={styles.input_box}>
      <div className={styles.min_box}>
        <RenderField placeholder="Min.." name="min_value" />
      </div>
      <div className={styles.max_box}>
        <RenderField placeholder="Max.." name="max_value" />
      </div>
    </div>
  );
};

const RenderField = ({ placeholder, name }) => {
  return (
    <div className={styles.input_wrap}>
      <span className={styles.input_addon}>EU</span>
      <TextField type="input" placeholder={placeholder} name={name} />
    </div>
  );
};
