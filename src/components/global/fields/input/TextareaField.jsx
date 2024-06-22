import styles from "./style.module.css";

export const TextareaField = ({ label, name, placeholder, setValues }) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
          className={["field", styles.field_item].join(" ")}
          onChange={handleOnChange}
        ></textarea>
      )}
    </div>
  );
};
