import styles from "./style.module.css";
import { InputBox } from "./input-box/InputBox";
import { Sliders } from "./sliders/Sliders";

export const RangeSlider = () => {
  return (
    <div className={styles.slider_box} style={{ paddingBlock: "100px" }}>
      <p className={styles.slider_box_title}>Price</p>
      <Sliders />
      <InputBox />
    </div>
  );
};
