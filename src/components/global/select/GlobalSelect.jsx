import styles from "./style.module.css";

import { useState } from "react";

import { GlobalIcon } from "../GlobalIcon";

export const GlobalSelect = () => {
  const [checked, setChecked] = useState(false);
  const [placeholderValue, setPlaceholderValue] = useState(null);

  const handleDropdownMenu = () => {
    setChecked((prev) => !prev);
  };

  const handlePlaceholderValue = (e) => {
    setPlaceholderValue(e.target.value);
  };

  return (
    <div className={styles.select}>
      <input type="radio" name="option" />
      {checked ? (
        <div
          className={[styles.toggle, styles.icon, styles.icon_up].join(" ")}
          onClick={handleDropdownMenu}
        >
          <GlobalIcon type="arrowUp" size={30} />
        </div>
      ) : (
        <div
          className={[styles.toggle, styles.icon, styles.icon_down].join(" ")}
          onClick={handleDropdownMenu}
        >
          <GlobalIcon type="arrowDown" size={30} />
        </div>
      )}
      <span className={styles.placeholder}>
        {placeholderValue ? placeholderValue : "Choose.."}
      </span>
      {checked ? (
        <>
          <label className={styles.option}>
            <input
              type="radio"
              name="option"
              value="Mercedes"
              onChange={handlePlaceholderValue}
              onClick={handleDropdownMenu}
            />
            <span className={styles.title}>Mercedes</span>
          </label>
          <label className={styles.option}>
            <input
              type="radio"
              name="option"
              value="Opel"
              onChange={handlePlaceholderValue}
              onClick={handleDropdownMenu}
            />
            <span className={styles.title}>Opel</span>
          </label>
          <label className={styles.option}>
            <input
              type="radio"
              name="option"
              value="Audi"
              onChange={handlePlaceholderValue}
              onClick={handleDropdownMenu}
            />
            <span className={styles.title}>Audi</span>
          </label>
        </>
      ) : null}
    </div>
  );
};
