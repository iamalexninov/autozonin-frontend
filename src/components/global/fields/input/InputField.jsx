import styles from "./style.module.css";

export const InputField = ({ type, label, placeholder, name, onChange }) => {
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
          onChange={onChange}
        />
      )}
    </div>
  );
};
