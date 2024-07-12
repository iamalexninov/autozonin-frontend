import styles from "./style.module.css";

export const CheckboxField = ({ key, name, label, checked, onChange }) => {
  return (
    <div className={styles.checkbox_wrapper_13} key={key}>
      <input
        id="c1-13"
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="c1-13">{label}</label>
    </div>
  );
};
