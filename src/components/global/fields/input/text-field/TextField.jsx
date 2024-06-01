import styles from "./style.module.css";

export const TextField = ({ type,label, placeholder, name }) => {
  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={name} className="label">
          {label}
        </label>
      )}
      {name && (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={name}
          className={styles.field_item}
        />
      )}
    </div>
  );
};
