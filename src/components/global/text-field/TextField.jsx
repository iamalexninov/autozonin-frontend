import styles from "./style.module.css";

export const TextField = ({ type, label, placeholder, name }) => {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.field_label}>
        {label}
      </label>
      {type === "input" ? (
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          id={name}
          className={styles.field_item}
        />
      ) : type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          name={name}
          id={name}
          className={styles.field_item}
        ></textarea>
      ) : null}
    </div>
  );
};
