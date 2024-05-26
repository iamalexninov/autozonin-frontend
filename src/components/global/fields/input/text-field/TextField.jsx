import styles from "./style.module.css";

export const TextField = ({ label, placeholder, name }) => {
  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={name} className={styles.field_label}>
          {label}
        </label>
      )}
      {name && (
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          id={name}
          className={styles.field_item}
        />
      )}
    </div>
  );
};
