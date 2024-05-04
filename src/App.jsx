import { useState } from "react";
import "./assets/styles/index.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function App() {
  const [checked, setChecked] = useState(false);
  const [placeholderValue, setPlaceholderValue] = useState("Choose...");

  const handleDropdownMenu = () => {
    setChecked((prev) => !prev);
  };

  const handleInputClickedValue = (e) => {
    setPlaceholderValue(e.target.value)
  };

  return (
    <div className="select">
      <input type="radio" name="option" />
      {checked ? (
        <div className="toggle icon icon_up" onClick={handleDropdownMenu}>
          <MdKeyboardArrowUp size={30} />
        </div>
      ) : (
        <div className="toggle icon icon_down" onClick={handleDropdownMenu}>
          <MdKeyboardArrowDown size={30} />
        </div>
      )}
      <span className="placeholder">{placeholderValue}</span>
      {checked ? (
        <>
          <label className="option">
            <input
              type="radio"
              name="option"
              value="Mercedes"
              onChange={handleInputClickedValue}
              onClick={handleDropdownMenu}
            />
            <span className="title">Mercedes</span>
          </label>
          <label className="option">
            <input
              type="radio"
              name="option"
              value="Opel"
              onChange={handleInputClickedValue}
              onClick={handleDropdownMenu}
            />
            <span className="title">Opel</span>
          </label>
          <label className="option">
            <input
              type="radio"
              name="option"
              value="Audi"
              onChange={handleInputClickedValue}
              onClick={handleDropdownMenu}
            />
            <span className="title">Audi</span>
          </label>
        </>
      ) : null}
    </div>
  );
}

export default App;
