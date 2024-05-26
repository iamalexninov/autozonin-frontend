import styles from "./style.module.css";

export const Sliders = () => {
  return (
    <div className={styles.sliders}>
      <span className={styles.sliders_track}></span>
      <input
        type="range"
        name="min_value"
        className={styles.min_value}
        min={0}
      />
      <input
        type="range"
        name="max_value"
        className={styles.max_value}
        max={200000}
      />
      <div className={[styles.tooltrip, styles.tooltrip_min]}></div>
      <div className={[styles.tooltrip, styles.tooltrip_max]}></div>
    </div>
  );
};
