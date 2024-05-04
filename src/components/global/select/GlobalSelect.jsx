import styles from "./style.module.css";

import { useState } from "react";

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
    <div className="select">
      <input type="radio" name="option" />
      {checked ? (
        <div className="toggle icon icon_up" onClick={handleDropdownMenu}>
          {/* TODO: Replace with Icon component - arrowUp */}
          <MdKeyboardArrowUp size={30} />
        </div>
      ) : (
        <div className="toggle icon icon_down" onClick={handleDropdownMenu}>
          {/* TODO: Replace with Icon component - arrowDown */}
          <MdKeyboardArrowDown size={30} />
        </div>
      )}
      <span className="placeholder">
        {placeholderValue ? placeholderValue : "Choose.."}
      </span>
      {checked ? (
        <>
          <label className="option">
            <input
              type="radio"
              name="option"
              value="Mercedes"
              onChange={handlePlaceholderValue}
              onClick={handleDropdownMenu}
            />
            <span className="title">Mercedes</span>
          </label>
          <label className="option">
            <input
              type="radio"
              name="option"
              value="Opel"
              onChange={handlePlaceholderValue}
              onClick={handleDropdownMenu}
            />
            <span className="title">Opel</span>
          </label>
          <label className="option">
            <input
              type="radio"
              name="option"
              value="Audi"
              onChange={handlePlaceholderValue}
              onClick={handleDropdownMenu}
            />
            <span className="title">Audi</span>
          </label>
        </>
      ) : null}
    </div>
  );
};
