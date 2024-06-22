import styles from "./style.module.css";

export const InputField = ({ type, label, placeholder, name, setValues }) => {
  const handleChange = (e) => {
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
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={name}
          className={["field", styles.field_item].join(" ")}
          onChange={handleChange}
        />
      )}
    </div>
  );
};
