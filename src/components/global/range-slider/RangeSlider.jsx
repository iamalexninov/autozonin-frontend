import { TextField } from "../text-field/TextField";
import styles from "./style.module.css";

export const RangeSlider = () => {
    return (
        <div className={styles.slider_box} style={{ paddingBlock: "100px" }}>
            <p className={styles.slider_box_title}>Price</p>
            <div className={styles.sliders}>
                <span className={styles.sliders_track}></span>
                <input type="range" name="min_value" className={styles.min_value} min={0} />
                <input type="range" name="max_value" className={styles.max_value} max={200000} />
                <div className={[styles.tooltrip, styles.tooltrip_min]}></div>
                <div className={[styles.tooltrip, styles.tooltrip_max]}></div>
            </div>
            <div className={styles.input_box}>
                <div className={styles.min_box}>
                    <div className={styles.input_wrap}>
                        <span className={styles.input_addon}>EU</span>
                        <TextField type="input" placeholder="Min.." name="min_value" />
                    </div>
                </div>
                <div className={styles.max_box}>
                    <div className={styles.input_wrap}>
                        <span className={styles.input_addon}>EU</span>
                        <TextField type="input" placeholder="Max.." name="max_value" />
                    </div>
                </div>
            </div>
        </div>
    );
};
