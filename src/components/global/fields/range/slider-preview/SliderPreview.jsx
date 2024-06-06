import styles from "./style.module.css";

export const SliderPreview = ({ clicked, isDisabled, label, onClick }) => {
  return (
    <div className={styles.preview}>
      <div className={styles.preview_label}>
        <label>{label}:</label>
        <p onClick={onClick}>{clicked ? "Hide" : "Show"} Slider</p>
      </div>
      <div className={styles.preview_fields}>
        <input
          type="text"
          className={styles.preview_input}
          placeholder="Min.."
          disabled={isDisabled}
        />
        <p>-</p>
        <input
          type="text"
          className={styles.preview_input}
          placeholder="Max.."
          disabled={isDisabled}
        />
      </div>
    </div>
  );
};
