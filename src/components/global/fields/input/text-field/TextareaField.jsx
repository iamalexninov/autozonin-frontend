import styles from "./style.module.css";

export const TextareaField = ({ label, name, placeholder }) => {
  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={name} className="label">
          {label}
        </label>
      )}
      {name && (
        <textarea
          placeholder={placeholder}
          name={name}
          id={name}
          className={styles.field_item}
        ></textarea>
      )}
    </div>
  );
};
