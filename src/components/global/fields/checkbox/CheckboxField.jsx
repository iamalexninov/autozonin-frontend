import styles from "./style.module.css";

export const CheckboxField = ({ type, name, label, onChange }) => {
  return (
    <div className={styles.checkbox_wrapper_13}>
      <input id="c1-13" type={type} name={name} onChange={onChange} />
      <label htmlFor="c1-13">{label}</label>
    </div>
  );
};
