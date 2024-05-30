import styles from "./style.module.css";

export const CheckboxField = ({ name, label }) => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" name={name} id={name} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
