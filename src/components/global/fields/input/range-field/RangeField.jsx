import styles from "./style.module.css";
import { Sliders } from "./sliders/Sliders";
import { InputBox } from "./input-box/InputBox";

export const RangeField = ({label}) => {
  return (
    <div className={styles.slider_box}>
      <p className={styles.slider_box_title}>{label}</p>
      <Sliders />
      <InputBox />
    </div>
  );
};
