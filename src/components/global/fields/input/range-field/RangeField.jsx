import styles from "./style.module.css";

import { useState } from "react";

import { Sliders } from "./sliders/Sliders";
import { SliderPreview } from "./slider-preview/SliderPreview";

export const RangeField = ({ label, name }) => {
  const [clicked, setClicked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleClick = () => {
    setClicked((prev) => !prev);
    setIsDisabled((prev) => !prev);
  };

  return (
    <div className={styles.slider}>
      <SliderPreview
        clicked={clicked}
        isDisabled={isDisabled}
        onClick={handleClick}
        label={label}
      />
      <div style={clicked ? { display: "block" } : { display: "none" }}>
        <Sliders />
      </div>
    </div>
  );
};
