import styles from "./style.module.css";

export const CheckboxField = ({ name, label }) => {
  return (
    <div className={styles.checkbox_wrapper_13}>
      <input id="c1-13" type="checkbox" />
      <label htmlFor="c1-13">{label}</label>
    </div>
  );
};
