import styles from "./style.module.css";

export const InputTextField = ({ label, placeholder, name }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name} className={styles.field_label}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        id={name}
        className={styles.field_input}
      />
    </div>
  );
};
